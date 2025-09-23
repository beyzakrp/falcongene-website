import { db } from './firebase';
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  getDoc, 
  updateDoc, 
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  Timestamp 
} from 'firebase/firestore';

// Generic Firestore operations
export class FirebaseService {
  
  // Add document to collection
  static async addDocument(collectionName: string, data: any) {
    try {
      const docRef = await addDoc(collection(db, collectionName), {
        ...data,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      });
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error('Error adding document:', error);
      return { success: false, error };
    }
  }

  // Get all documents from collection
  static async getDocuments(collectionName: string) {
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      const documents = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      return { success: true, data: documents };
    } catch (error) {
      console.error('Error getting documents:', error);
      return { success: false, error };
    }
  }

  // Get single document by ID
  static async getDocument(collectionName: string, docId: string) {
    try {
      const docRef = doc(db, collectionName, docId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return { 
          success: true, 
          data: { id: docSnap.id, ...docSnap.data() } 
        };
      } else {
        return { success: false, error: 'Document not found' };
      }
    } catch (error) {
      console.error('Error getting document:', error);
      return { success: false, error };
    }
  }

  // Update document
  static async updateDocument(collectionName: string, docId: string, data: any) {
    try {
      const docRef = doc(db, collectionName, docId);
      await updateDoc(docRef, {
        ...data,
        updatedAt: Timestamp.now()
      });
      return { success: true };
    } catch (error) {
      console.error('Error updating document:', error);
      return { success: false, error };
    }
  }

  // Delete document
  static async deleteDocument(collectionName: string, docId: string) {
    try {
      await deleteDoc(doc(db, collectionName, docId));
      return { success: true };
    } catch (error) {
      console.error('Error deleting document:', error);
      return { success: false, error };
    }
  }

  // Query documents with filters
  static async queryDocuments(
    collectionName: string, 
    filters: { field: string; operator: any; value: any }[] = [],
    orderByField?: string,
    orderDirection: 'asc' | 'desc' = 'desc',
    limitCount?: number
  ) {
    try {
      let q = collection(db, collectionName);
      
      // Apply filters
      filters.forEach(filter => {
        q = query(q, where(filter.field, filter.operator, filter.value)) as any;
      });
      
      // Apply ordering
      if (orderByField) {
        q = query(q, orderBy(orderByField, orderDirection)) as any;
      }
      
      // Apply limit
      if (limitCount) {
        q = query(q, limit(limitCount)) as any;
      }
      
      const querySnapshot = await getDocs(q);
      const documents = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      return { success: true, data: documents };
    } catch (error) {
      console.error('Error querying documents:', error);
      return { success: false, error };
    }
  }
}

// Specific service functions for your app
export const ContactService = {
  // Save contact form submission
  async submitContactForm(formData: {
    name: string;
    email: string;
    phone?: string;
    message: string;
    source?: string;
  }) {
    return FirebaseService.addDocument('contacts', {
      ...formData,
      status: 'new',
      type: 'contact_form'
    });
  },

  // Get all contact submissions
  async getContactSubmissions() {
    return FirebaseService.queryDocuments(
      'contacts', 
      [], 
      'createdAt', 
      'desc'
    );
  }
};

export const UserService = {
  // Create user profile
  async createUserProfile(userId: string, profileData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    birthDate: string;
    gender: string;
    height: number;
    weight: number;
    chronicDiseases: string;
    geneticDiagnoses: string;
  }) {
    return FirebaseService.addDocument('users', {
      ...profileData,
      userId,
      profileCompleted: true,
      registrationStep: 'completed'
    });
  },

  // Update user profile
  async updateUserProfile(userId: string, profileData: Partial<{
    firstName: string;
    lastName: string;
    phone: string;
    birthDate: string;
    gender: string;
    height: number;
    weight: number;
    chronicDiseases: string;
    geneticDiagnoses: string;
  }>) {
    const users = await FirebaseService.queryDocuments(
      'users',
      [{ field: 'userId', operator: '==', value: userId }]
    );
    
    if (users.success && users.data && users.data.length > 0) {
      const userDoc = users.data[0];
      return FirebaseService.updateDocument('users', userDoc.id, profileData);
    } else {
      return { success: false, error: 'User profile not found' };
    }
  },

  // Get user profile
  async getUserProfile(userId: string) {
    const users = await FirebaseService.queryDocuments(
      'users',
      [{ field: 'userId', operator: '==', value: userId }]
    );
    
    if (users.success && users.data && users.data.length > 0) {
      return { success: true, data: users.data[0] };
    } else {
      return { success: false, error: 'User profile not found' };
    }
  }
};

export const AnalyticsService = {
  // Track page views
  async trackPageView(page: string, userId?: string) {
    return FirebaseService.addDocument('analytics', {
      type: 'page_view',
      page,
      userId,
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : '',
      timestamp: Timestamp.now()
    });
  },

  // Track button clicks
  async trackButtonClick(buttonName: string, page: string, userId?: string) {
    return FirebaseService.addDocument('analytics', {
      type: 'button_click',
      buttonName,
      page,
      userId,
      timestamp: Timestamp.now()
    });
  }
};