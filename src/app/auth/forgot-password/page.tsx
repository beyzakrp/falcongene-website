"use client";

import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../lib/firebase";
import Link from "next/link";
import Image from "next/image";

// SVG Icons
const EmailIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const ArrowLeftIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      await sendPasswordResetEmail(auth, email);
      setEmailSent(true);
      setMessage("Şifre sıfırlama bağlantısı email adresinize gönderildi.");
    } catch (error: any) {
      setError(getErrorMessage(error.code));
    } finally {
      setLoading(false);
    }
  };

  const getErrorMessage = (errorCode: string) => {
    switch (errorCode) {
      case "auth/invalid-email":
        return "Geçersiz email adresi";
      case "auth/user-not-found":
        return "Bu email adresi ile kayıtlı kullanıcı bulunamadı";
      default:
        return "Bir hata oluştu, lütfen tekrar deneyin";
    }
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center px-4 py-8">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1651479856378-f5e70a921d5c?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-slate-900/85 to-indigo-900/80 backdrop-blur-sm" />
      
      <div className="relative z-10 w-full max-w-md">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <Image 
              src="/logo-falcongene.svg" 
              alt="FalconGene" 
              width={180} 
              height={48} 
              className="h-12 w-auto mx-auto mb-4 filter brightness-0 invert"
            />
          </Link>
        </div>

        {/* Reset Password Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/30">
          {!emailSent ? (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-slate-800 mb-2">Şifremi Unuttum</h1>
                <p className="text-slate-600 text-sm">
                  Email adresinizi girin, size şifre sıfırlama bağlantısı gönderelim
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  {error}
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleResetPassword} className="space-y-4">
                {/* Email Input */}
                <div>
                  <div className="relative">
                    <EmailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      placeholder="Email adresinizi girin"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800 placeholder-slate-400"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-slate-800 text-white py-3 rounded-xl font-medium hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {loading ? "Gönderiliyor..." : "Şifre Sıfırlama Bağlantısı Gönder"}
                </button>
              </form>
            </>
          ) : (
            <>
              {/* Success Message */}
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-slate-800 mb-2">Email Gönderildi!</h1>
                <p className="text-slate-600 text-sm mb-6">
                  <strong>{email}</strong> adresine şifre sıfırlama bağlantısı gönderildi. 
                  Email kutunuzu kontrol edin ve talimatları takip edin.
                </p>
                
                <div className="p-4 bg-blue-50 rounded-lg mb-6">
                  <p className="text-blue-700 text-sm">
                    <strong>Not:</strong> Email gelmezse spam klasörünüzü kontrol etmeyi unutmayın.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setEmailSent(false);
                    setEmail("");
                    setMessage("");
                    setError("");
                  }}
                  className="w-full bg-slate-100 text-slate-700 py-3 rounded-xl font-medium hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-colors"
                >
                  Tekrar Gönder
                </button>
              </div>
            </>
          )}

          {/* Success Message */}
          {message && !emailSent && (
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-600 text-sm">
              {message}
            </div>
          )}
        </div>

        {/* Back to Login */}
        <div className="text-center mt-6">
          <Link 
            href="/auth" 
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Giriş Sayfasına Dön
          </Link>
        </div>
      </div>
    </section>
  );
}