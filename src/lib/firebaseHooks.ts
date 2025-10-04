import { useState, useEffect } from 'react';
import { ContactService, AnalyticsService } from './firebaseService';

// Hook for contact form submission
export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const submitForm = async (formData: {
    name: string;
    email: string;
    phone?: string;
    message: string;
    source?: string;
  }) => {
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const result = await ContactService.submitContactForm(formData);
      
      if (result.success) {
        setSubmitResult({
          success: true,
          message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.'
        });
      } else {
        setSubmitResult({
          success: false,
          message: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'
        });
      }
    } catch (_error) {
      setSubmitResult({
        success: false,
        message: 'Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitResult(null);
  };

  return {
    isSubmitting,
    submitResult,
    submitForm,
    resetForm
  };
};

// Hook for analytics tracking
export const useAnalytics = () => {
  const trackPageView = async (page: string) => {
    try {
      await AnalyticsService.trackPageView(page);
    } catch (_error) {
      console.error('Analytics tracking error:', _error);
    }
  };

  const trackButtonClick = async (buttonName: string, page: string) => {
    try {
      await AnalyticsService.trackButtonClick(buttonName, page);
    } catch (_error) {
      console.error('Analytics tracking error:', _error);
    }
  };

  return {
    trackPageView,
    trackButtonClick
  };
};

// Hook for fetching data with loading states
export const useFirebaseData = <T>(
  fetchFunction: () => Promise<{ success: boolean; data?: T; error?: string }>
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await fetchFunction();
      
      if (result.success && result.data) {
        setData(result.data);
      } else {
        setError(result.error || 'Veri yüklenirken hata oluştu');
      }
    } catch (_err) {
      setError('Beklenmeyen bir hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchData();
  }, [fetchFunction, fetchData]);

  const refetch = () => {
    void fetchData();
  };

  return {
    data,
    loading,
    error,
    refetch
  };
};