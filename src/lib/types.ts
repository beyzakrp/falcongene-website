import { FirebaseError } from 'firebase/app';
import { DocumentData, QueryFieldFilterConstraint, OrderByDirection } from 'firebase/firestore';

export interface AuthResponse {
  success: boolean;
  user?: import('firebase/auth').User;
  error?: string;
}

export interface FirestoreDocument extends DocumentData {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  birthDate?: string;
  gender?: string;
  height?: number;
  weight?: number;
  chronicDiseases?: string;
  geneticDiagnoses?: string;
  profileCompleted?: boolean;
  registrationStep?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  source?: string;
}

export interface QueryFilter {
  field: string;
  operator: string; // Changed from QueryFieldFilterConstraint['op'] to string
  value: unknown;
}

export interface QueryOptions {
  filters?: QueryFilter[];
  orderByField?: string;
  orderDirection?: OrderByDirection;
  limitCount?: number;
  orderBy?: {
    field: string;
    direction: OrderByDirection;
  };
}

export type FirebaseErrorType = FirebaseError;

export type FirestoreData<T> = T & {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
};