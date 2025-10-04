import { auth } from './firebase';
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  User
} from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

export class AuthService {
  
  // Sign in with email and password
  static async signIn(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return { success: true, user: userCredential.user };
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        return { success: false, error: error.code };
      }
      return { success: false, error: 'unknown_error' };
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
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        return { success: false, error: error.code };
      }
      return { success: false, error: 'unknown_error' };
    }
  }

  // Sign out
  static async signOut() {
    try {
      await signOut(auth);
      return { success: true };
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        return { success: false, error: error.code };
      }
      return { success: false, error: 'unknown_error' };
    }
  }

  // Send password reset email
  static async resetPassword(email: string) {
    try {
      await sendPasswordResetEmail(auth, email);
      return { success: true };
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        return { success: false, error: error.code };
      }
      return { success: false, error: 'unknown_error' };
    }
  }

  // Update user profile
  static async updateUserProfile(user: User, data: { displayName?: string; photoURL?: string }) {
    try {
      await updateProfile(user, data);
      return { success: true };
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        return { success: false, error: error.code };
      }
      return { success: false, error: 'unknown_error' };
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