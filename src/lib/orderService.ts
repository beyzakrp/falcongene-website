import { addDoc, collection, doc, updateDoc, getDoc, query, where, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import { Order } from './types';

export interface Order {
  id?: string;
  // Müşteri bilgileri
  customerInfo: {
    name: string;
    email: string;
    phone?: string;
    address?: {
      street: string;
      city: string;
      district: string;
      postalCode: string;
    };
  };
  
  // Sipariş bilgileri
  orderDetails: {
    testType: string;
    packageType: 'basic' | 'premium';
    packageName: string;
    geneCount: string;
    amount: number;
    currency: string;
  };
  
  // Ödeme bilgileri
  paymentInfo: {
    clientRefCode: string;
    paymentMethod: 'creditCard';
    paymentStatus: 'pending' | 'completed' | 'failed' | 'refunded';
    authCode?: string;
    transactionId?: string;
    paidAt?: Date;
  };
  
  // Sipariş durumu
  orderStatus: 'pending' | 'payment_completed' | 'processing' | 'kit_sent' | 'sample_received' | 'analyzing' | 'completed' | 'cancelled';
  
  // Kit bilgileri
  kitInfo?: {
    kitCode?: string;
    trackingNumber?: string;
    sentAt?: Date;
    receivedAt?: Date;
  };
  
  // Rapor bilgileri
  reportInfo?: {
    reportReady: boolean;
    reportUrl?: string;
    reportGeneratedAt?: Date;
  };
  
  // Sistem bilgileri
  createdAt: Date;
  updatedAt: Date;
  notes?: string;
}

/**
 * Yeni sipariş oluştur
 */
export async function createOrder(orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
  try {
    const order: Order = {
      ...orderData,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const docRef = await addDoc(collection(db, 'orders'), order);
    return docRef.id;
  } catch (error) {
    console.error('Error creating order:', error);
    throw new Error('Sipariş oluşturulurken hata oluştu');
  }
}

/**
 * Ödeme başarılı olduğunda sipariş güncelle
 */
export async function updateOrderPaymentSuccess(
  orderId: string, 
  paymentData: {
    authCode: string;
    transactionId?: string;
    clientRefCode: string;
  }
): Promise<void> {
  try {
    const orderRef = doc(db, 'orders', orderId);
    
    await updateDoc(orderRef, {
      'paymentInfo.paymentStatus': 'completed',
      'paymentInfo.authCode': paymentData.authCode,
      'paymentInfo.transactionId': paymentData.transactionId || paymentData.authCode,
      'paymentInfo.paidAt': new Date(),
      'orderStatus': 'payment_completed',
      'updatedAt': new Date()
    });
  } catch (error) {
    console.error('Error updating order payment:', error);
    throw new Error('Sipariş ödeme bilgisi güncellenirken hata oluştu');
  }
}

/**
 * Ödeme başarısız olduğunda sipariş güncelle
 */
export async function updateOrderPaymentFailed(
  orderId: string, 
  errorMessage?: string
): Promise<void> {
  try {
    const orderRef = doc(db, 'orders', orderId);
    
    await updateDoc(orderRef, {
      'paymentInfo.paymentStatus': 'failed',
      'orderStatus': 'cancelled',
      'updatedAt': new Date(),
      'notes': errorMessage || 'Ödeme başarısız'
    });
  } catch (error) {
    console.error('Error updating order payment failure:', error);
    throw new Error('Sipariş güncelleme hatası');
  }
}

/**
 * Sipariş durumu güncelle
 */
export async function updateOrderStatus(
  orderId: string, 
  status: Order['orderStatus'],
  additionalData?: Partial<Order>
): Promise<void> {
  try {
    const orderRef = doc(db, 'orders', orderId);
    
    const updateData: any = {
      orderStatus: status,
      updatedAt: new Date(),
      ...additionalData
    };

    await updateDoc(orderRef, updateData);
  } catch (error) {
    console.error('Error updating order status:', error);
    throw new Error('Sipariş durumu güncellenirken hata oluştu');
  }
}

/**
 * Sipariş bilgilerini al
 */
export async function getOrder(orderId: string): Promise<Order | null> {
  try {
    const orderRef = doc(db, 'orders', orderId);
    const orderSnap = await getDoc(orderRef);
    
    if (orderSnap.exists()) {
      return {
        id: orderSnap.id,
        ...orderSnap.data()
      } as Order;
    }
    
    return null;
  } catch (error) {
    console.error('Error getting order:', error);
    throw new Error('Sipariş bilgileri alınırken hata oluştu');
  }
}

/**
 * ClientRefCode ile sipariş bul
 */
export async function findOrderByClientRefCode(clientRefCode: string): Promise<Order | null> {
  try {
    const ordersRef = collection(db, 'orders');
    const q = query(ordersRef, where('paymentInfo.clientRefCode', '==', clientRefCode));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return {
        id: doc.id,
        ...doc.data()
      } as Order;
    }
    
    return null;
  } catch (error) {
    console.error('Error finding order by clientRefCode:', error);
    throw new Error('Sipariş bulunamadı');
  }
}

/**
 * Örnek sipariş oluşturma helper'ı
 */
export function createOrderFromPayment(
  customerInfo: Order['customerInfo'],
  testType: string,
  packageType: 'basic' | 'premium',
  clientRefCode: string
): Omit<Order, 'id' | 'createdAt' | 'updatedAt'> {
  
  const packages = {
    basic: { name: 'Basic Paket', genes: '6 Gen Analizi', amount: 7499 },
    premium: { name: 'Premium Paket', genes: '12 Gen Analizi', amount: 11250 }
  };
  
  const selectedPackage = packages[packageType];
  
  return {
    customerInfo,
    orderDetails: {
      testType,
      packageType,  
      packageName: selectedPackage.name,
      geneCount: selectedPackage.genes,
      amount: selectedPackage.amount,
      currency: 'TRY'
    },
    paymentInfo: {
      clientRefCode,
      paymentMethod: 'creditCard',
      paymentStatus: 'pending'
    },
    orderStatus: 'pending'
  };
}