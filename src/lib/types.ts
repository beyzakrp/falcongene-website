import { FirebaseError } from 'firebase/app';
import { Timestamp } from 'firebase/firestore';

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

// PaynKolay Payment Types
export interface PaynKolayPaymentData {
  sx: string;
  clientRefCode: string;
  successUrl: string;
  failUrl: string;
  amount: string;
  installmentNo: string;
  cardHolderName: string;
  month: string;
  year: string;
  cvv: string;
  cardNumber: string;
  use3D: string;
  transactionType: string;
  rnd: string;
  hashData: string;
  environment: string;
  currencyNumber: string;
}

export interface PaynKolayResponse {
  RESPONSE_CODE?: string;
  AUTH_CODE?: string;
  clientRefCode?: string;
  amount?: string;
  hashData?: string;
  rnd?: string;
  ERROR_MESSAGE?: string;
  errorMessage?: string;
  TRANSACTION_ID?: string;
}

export interface PaymentVerificationResult {
  success: boolean;
  message: string;
  responseCode?: string;
  authCode?: string;
  hashVerification?: boolean;
  externalVerification?: {
    success: boolean;
    message: string;
    rawResponse?: string;
  };
}

export interface PaymentFormData {
  amount: string;
  installmentNo: string;
  cardHolderName: string;
  cardNumber: string;
  month: string;
  year: string;
  cvv: string;
  use3D: boolean;
}