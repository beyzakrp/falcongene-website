"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useFirebase } from "../../../lib/FirebaseProvider";
import { UserService } from "../../../lib/firebaseService";
import Link from "next/link";
import Image from "next/image";

// SVG Icons
const UserIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 012.25 2.25v7.5" />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const ScaleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.254 48.254 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.062 12.25a.75.75 0 01-.706.845H18.75m.344-13.095a48.35 48.35 0 00-12.25 0m12.906.52c.211 1.613.211 3.287 0 4.9M5.25 4.97c-1.01.143-2.01.317-3 .52m3-.52l-2.062 12.25a.75.75 0 00.706.845H5.25m14.25-13.095a48.35 48.35 0 00-12.25 0" />
  </svg>
);

const HeartIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

interface ProfileFormData {
  firstName: string;
  lastName: string;
  phone: string;
  birthDate: string;
  gender: string;
  height: string;
  weight: string;
  chronicDiseases: string[];
  geneticDiagnoses: string[];
}

// Yaygın kronik hastalıklar listesi
const commonChronicDiseases = [
  "Diyabet (Tip 1)", "Diyabet (Tip 2)", "Hipertansiyon", "Kalp hastalığı",
  "Astım", "KOAH", "Artrit", "Osteoporoz", "Tiroid hastalıkları",
  "Depresyon", "Anksiyete", "Migren", "Epilepsi", "Parkinson",
  "Alzheimer", "Kanser (Meme)", "Kanser (Akciğer)", "Kanser (Kolon)",
  "Böbrek hastalığı", "Karaciğer hastalığı", "Çölyak hastalığı",
  "Crohn hastalığı", "Ülseratif kolit", "Lupus", "Romatoid artrit"
];

// Yaygın genetik tanılar listesi
const commonGeneticDiagnoses = [
  "Hemofili", "Talasemi", "Orak hücreli anemi", "Kistik fibrozis",
  "Huntington hastalığı", "Duchenne Kas Distrofisi", "Spinal Kas Atrofisi",
  "Fragile X sendromu", "Turner sendromu", "Klinefelter sendromu",
  "Down sendromu", "BRCA1 mutasyonu", "BRCA2 mutasyonu",
  "Lynch sendromu", "Marfan sendromu", "Ehlers-Danlos sendromu",
  "Neurofibromatozis", "Von Hippel-Lindau", "Polipozis koli",
  "Hemokromatozis", "Wilson hastalığı", "Gaucher hastalığı",
  "Tay-Sachs hastalığı", "Fenilketonüri (PKU)", "Galaktozemi"
];

export default function CompleteProfilePage() {
  const { user, loading: authLoading } = useFirebase();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<ProfileFormData>({
    firstName: "",
    lastName: "",
    phone: "",
    birthDate: "",
    gender: "",
    height: "",
    weight: "",
    chronicDiseases: [],
    geneticDiagnoses: []
  });

  // Autocomplete states
  const [chronicDiseaseInput, setChronicDiseaseInput] = useState("");
  const [geneticDiagnosisInput, setGeneticDiagnosisInput] = useState("");
  const [showChronicSuggestions, setShowChronicSuggestions] = useState(false);
  const [showGeneticSuggestions, setShowGeneticSuggestions] = useState(false);

  // Check if user already has a profile
  useEffect(() => {
    const checkUserProfile = async () => {
      if (!authLoading && user) {
        try {
          const result = await UserService.getUserProfile(user.uid);
          if (result.success) {
            // User already has a profile, redirect to home
            router.push("/");
            return;
          }
        } catch (error) {
          console.log("No existing profile found, continue with form");
        }
      }
      setPageLoading(false);
    };

    checkUserProfile();
  }, [user, authLoading, router]);

  // Redirect if not authenticated
  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/auth");
    }
  }, [user, authLoading, router]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.autocomplete-container')) {
        setShowChronicSuggestions(false);
        setShowGeneticSuggestions(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  if (authLoading || pageLoading) {
    return (
      <section className="min-h-screen relative flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1651479856378-f5e70a921d5c?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-slate-900/85 to-indigo-900/80 backdrop-blur-sm" />
        
        <div className="relative z-10 text-center">
          <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white">Yükleniyor...</p>
        </div>
      </section>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!user) {
      setError("Kullanıcı oturumu bulunamadı");
      setLoading(false);
      return;
    }

    try {
      const profileData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: user.email || "",
        phone: formData.phone,
        birthDate: formData.birthDate,
        gender: formData.gender,
        height: parseInt(formData.height),
        weight: parseInt(formData.weight),
        chronicDiseases: formData.chronicDiseases.join(", "),
        geneticDiagnoses: formData.geneticDiagnoses.join(", ")
      };

      const result = await UserService.createUserProfile(user.uid, profileData);
      
      if (result.success) {
        router.push("/");
      } else {
        setError("Profil oluşturulurken bir hata oluştu");
      }
    } catch (error) {
      setError("Beklenmeyen bir hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Helper functions for autocomplete
  const addChronicDisease = (disease: string) => {
    if (!formData.chronicDiseases.includes(disease)) {
      setFormData({
        ...formData,
        chronicDiseases: [...formData.chronicDiseases, disease]
      });
    }
    setChronicDiseaseInput("");
    setShowChronicSuggestions(false);
  };

  const removeChronicDisease = (disease: string) => {
    setFormData({
      ...formData,
      chronicDiseases: formData.chronicDiseases.filter(d => d !== disease)
    });
  };

  const addGeneticDiagnosis = (diagnosis: string) => {
    if (!formData.geneticDiagnoses.includes(diagnosis)) {
      setFormData({
        ...formData,
        geneticDiagnoses: [...formData.geneticDiagnoses, diagnosis]
      });
    }
    setGeneticDiagnosisInput("");
    setShowGeneticSuggestions(false);
  };

  const removeGeneticDiagnosis = (diagnosis: string) => {
    setFormData({
      ...formData,
      geneticDiagnoses: formData.geneticDiagnoses.filter(d => d !== diagnosis)
    });
  };

  // Filter suggestions based on input
  const filteredChronicSuggestions = commonChronicDiseases.filter(disease =>
    disease.toLowerCase().includes(chronicDiseaseInput.toLowerCase()) &&
    !formData.chronicDiseases.includes(disease)
  );

  const filteredGeneticSuggestions = commonGeneticDiagnoses.filter(diagnosis =>
    diagnosis.toLowerCase().includes(geneticDiagnosisInput.toLowerCase()) &&
    !formData.geneticDiagnoses.includes(diagnosis)
  );

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
      
      <div className="relative z-10 w-full max-w-2xl">
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

        {/* Profile Form Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/30">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-slate-800 mb-2">Profilinizi Tamamlayın</h1>
            <p className="text-slate-600 text-sm">
              Size daha iyi hizmet verebilmek için lütfen aşağıdaki bilgileri doldurun
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Ad *</label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Adınız"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800 placeholder-slate-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Soyad *</label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Soyadınız"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800 placeholder-slate-400"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Telefon *</label>
                <div className="relative">
                  <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+90 5XX XXX XX XX"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800 placeholder-slate-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Doğum Tarihi *</label>
                <div className="relative">
                  <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Cinsiyet *</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800"
                required
              >
                <option value="">Cinsiyet seçiniz</option>
                <option value="kadın">Kadın</option>
                <option value="erkek">Erkek</option>
                <option value="diğer">Diğer</option>
              </select>
            </div>

            {/* Physical Measurements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Boy (cm) *</label>
                <div className="relative">
                  <ScaleIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    placeholder="170"
                    min="50"
                    max="250"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800 placeholder-slate-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Kilo (kg) *</label>
                <div className="relative">
                  <ScaleIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    placeholder="70"
                    min="20"
                    max="300"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800 placeholder-slate-400"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Medical History */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Kronik Hastalıklar
                <span className="text-slate-500 text-xs block">Sizde veya ailenizde bulunan kronik hastalıkları belirtiniz (isteğe bağlı)</span>
              </label>
              
              {/* Selected diseases tags */}
              {formData.chronicDiseases.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {formData.chronicDiseases.map((disease, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {disease}
                      <button
                        type="button"
                        onClick={() => removeChronicDisease(disease)}
                        className="text-blue-600 hover:text-blue-800 ml-1"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}

              <div className="relative autocomplete-container">
                <HeartIcon className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={chronicDiseaseInput}
                  onChange={(e) => {
                    setChronicDiseaseInput(e.target.value);
                    setShowChronicSuggestions(e.target.value.length > 0);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && chronicDiseaseInput.trim()) {
                      e.preventDefault();
                      addChronicDisease(chronicDiseaseInput.trim());
                    }
                  }}
                  placeholder="Hastalık adı yazın veya listeden seçin..."
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800 placeholder-slate-400"
                />
                
                {/* Suggestions dropdown */}
                {showChronicSuggestions && filteredChronicSuggestions.length > 0 && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                    {filteredChronicSuggestions.slice(0, 8).map((disease, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => addChronicDisease(disease)}
                        className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 border-b border-slate-100 last:border-b-0"
                      >
                        {disease}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Genetic Diagnoses */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Bilinen Genetik Tanılar
                <span className="text-slate-500 text-xs block">Varsa bilinen genetik tanıları belirtiniz (isteğe bağlı)</span>
              </label>
              
              {/* Selected diagnoses tags */}
              {formData.geneticDiagnoses.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {formData.geneticDiagnoses.map((diagnosis, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                    >
                      {diagnosis}
                      <button
                        type="button"
                        onClick={() => removeGeneticDiagnosis(diagnosis)}
                        className="text-green-600 hover:text-green-800 ml-1"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}

              <div className="relative autocomplete-container">
                <HeartIcon className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={geneticDiagnosisInput}
                  onChange={(e) => {
                    setGeneticDiagnosisInput(e.target.value);
                    setShowGeneticSuggestions(e.target.value.length > 0);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && geneticDiagnosisInput.trim()) {
                      e.preventDefault();
                      addGeneticDiagnosis(geneticDiagnosisInput.trim());
                    }
                  }}
                  placeholder="Genetik tanı yazın veya listeden seçin..."
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800 placeholder-slate-400"
                />
                
                {/* Suggestions dropdown */}
                {showGeneticSuggestions && filteredGeneticSuggestions.length > 0 && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                    {filteredGeneticSuggestions.slice(0, 8).map((diagnosis, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => addGeneticDiagnosis(diagnosis)}
                        className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 border-b border-slate-100 last:border-b-0"
                      >
                        {diagnosis}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-700 text-sm">
                <strong>Gizlilik:</strong> Tüm kişisel ve sağlık bilgileriniz güvenli şekilde saklanır ve sadece size hizmet vermek amacıyla kullanılır.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-slate-800 text-white py-3 rounded-xl font-medium hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "Kaydediliyor..." : "Profili Tamamla"}
            </button>
          </form>
        </div>

        {/* Skip Option */}
        <div className="text-center mt-6">
          <button
            onClick={() => router.push("/")}
            className="text-white/70 hover:text-white text-sm"
          >
            Daha sonra tamamla →
          </button>
        </div>
      </div>
    </section>
  );
}