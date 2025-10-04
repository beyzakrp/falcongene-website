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
  Timestamp,
  WhereFilterOp,
  DocumentData 
} from 'firebase/firestore';
import {
  FirestoreData,
  QueryOptions
} from './types';

// Generic Firestore operations
export class FirebaseService {
  
  // Add document to collection
  static async addDocument<T extends DocumentData>(collectionName: string, data: T) {
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
  static async updateDocument<T extends DocumentData>(collectionName: string, docId: string, data: Partial<T>) {
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
  static async queryDocuments<T extends DocumentData>(
    collectionName: string,
    options: QueryOptions = {}
  ): Promise<{ success: boolean; data?: FirestoreData<T>[]; error?: string }> {
    try {
      const collectionRef = collection(db, collectionName);
      let queryRef = query(collectionRef);
      
      // Apply filters
      if (options.filters) {
        options.filters.forEach(filter => {
          queryRef = query(queryRef, where(filter.field, filter.operator as WhereFilterOp, filter.value));
        });
      }
      
      // Apply ordering
      if (options.orderBy) {
        queryRef = query(queryRef, orderBy(options.orderBy.field, options.orderBy.direction));
      } else if (options.orderByField) {
        queryRef = query(queryRef, orderBy(options.orderByField, options.orderDirection || 'desc'));
      }
      
      // Apply limit
      if (options.limitCount) {
        queryRef = query(queryRef, limit(options.limitCount));
      }

      const querySnapshot = await getDocs(queryRef);
      const documents = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as FirestoreData<T>[];
      
      return { success: true, data: documents };
    } catch (error) {
      console.error('Error querying documents:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
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
    return FirebaseService.queryDocuments('contacts', {
      orderByField: 'createdAt',
      orderDirection: 'desc'
    });
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
    const users = await FirebaseService.queryDocuments('users', {
      filters: [{ field: 'userId', operator: '==', value: userId }]
    });
    
    if (users.success && users.data && users.data.length > 0) {
      const userDoc = users.data[0];
      return FirebaseService.updateDocument('users', userDoc.id, profileData);
    } else {
      return { success: false, error: 'User profile not found' };
    }
  },

  // Get user profile
  async getAnalysis(userId: string) {
    return FirebaseService.queryDocuments('analyses', {
      filters: [{ field: 'userId', operator: '==', value: userId }],
      orderBy: { field: 'createdAt', direction: 'desc' }
    });
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