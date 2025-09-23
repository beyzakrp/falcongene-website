import { auth } from './firebase';
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  User
} from 'firebase/auth';

export class AuthService {
  
  // Sign in with email and password
  static async signIn(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return { success: true, user: userCredential.user };
    } catch (error: any) {
      return { success: false, error: error.code };
    }
  }

  // Sign up with email and password
  static async signUp(email: string, password: string, displayName?: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update profile with display name if provided
      if (displayName && userCredential.user) {
        await updateProfile(userCredential.user, { displayName });
      }
      
      return { success: true, user: userCredential.user };
    } catch (error: any) {
      return { success: false, error: error.code };
    }
  }

  // Sign out
  static async signOut() {
    try {
      await signOut(auth);
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.code };
    }
  }

  // Send password reset email
  static async resetPassword(email: string) {
    try {
      await sendPasswordResetEmail(auth, email);
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.code };
    }
  }

  // Update user profile
  static async updateUserProfile(user: User, data: { displayName?: string; photoURL?: string }) {
    try {
      await updateProfile(user, data);
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.code };
    }
  }

  // Get current user
  static getCurrentUser() {
    return auth.currentUser;
  }

  // Check if user is authenticated
  static isAuthenticated() {
    return !!auth.currentUser;
  }
}