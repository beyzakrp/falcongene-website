"use client";

import { useState, useEffect } from "react";
import { useFirebase } from "../../../lib/FirebaseProvider";
import { UserService } from "../../../lib/firebaseService";
import DashboardLayout from "../DashboardLayout";

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  gender: string;
  height: number;
  weight: number;
  chronicDiseases: string[];
  geneticDiagnoses: string[];
}

export default function ProfilePage() {
  const { user } = useFirebase();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      if (user) {
        try {
          const result = await UserService.getUserProfile(user.uid);
          if (result.success && result.data) {
            const userData = result.data as any; // Type assertion for now
            setProfile({
              firstName: userData.firstName || "",
              lastName: userData.lastName || "",
              email: userData.email || user.email || "",
              phone: userData.phone || "",
              birthDate: userData.birthDate || "",
              gender: userData.gender || "",
              height: userData.height || 0,
              weight: userData.weight || 0,
              chronicDiseases: userData.chronicDiseases ? userData.chronicDiseases.split(", ").filter(Boolean) : [],
              geneticDiagnoses: userData.geneticDiagnoses ? userData.geneticDiagnoses.split(", ").filter(Boolean) : []
            });
          } else {
            // Default profile if not found
            setProfile({
              firstName: "",
              lastName: "",
              email: user.email || "",
              phone: "",
              birthDate: "",
              gender: "",
              height: 0,
              weight: 0,
              chronicDiseases: [],
              geneticDiagnoses: []
            });
          }
        } catch (error) {
          console.error("Error loading profile:", error);
        }
      }
      setLoading(false);
    };

    loadProfile();
  }, [user]);

  const handleSave = async () => {
    if (!profile || !user) return;

    setSaving(true);
    try {
      const updateData = {
        firstName: profile.firstName,
        lastName: profile.lastName,
        phone: profile.phone,
        birthDate: profile.birthDate,
        gender: profile.gender,
        height: profile.height,
        weight: profile.weight,
        chronicDiseases: profile.chronicDiseases.join(", "),
        geneticDiagnoses: profile.geneticDiagnoses.join(", ")
      };

      const result = await UserService.updateUserProfile(user.uid, updateData);
      if (result.success) {
        setEditing(false);
      }
    } catch (error) {
      console.error("Error saving profile:", error);
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setEditing(false);
    // Reload profile to reset changes
    window.location.reload();
  };

  const calculateAge = (birthDate: string) => {
    if (!birthDate) return null;
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const calculateBMI = (height: number, weight: number) => {
    if (!height || !weight) return null;
    const heightInM = height / 100;
    return (weight / (heightInM * heightInM)).toFixed(1);
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="p-6 flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-blue-300 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Profil yükleniyor...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Profil</h1>
              <p className="text-gray-600 mt-1">Kişisel bilgilerinizi görüntüleyin ve düzenleyin</p>
            </div>
            <div className="flex gap-3">
              {editing ? (
                <>
                  <button
                    onClick={handleCancel}
                    className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    İptal
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                  >
                    {saving ? "Kaydediliyor..." : "Kaydet"}
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setEditing(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Düzenle
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Summary Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">
                    {profile?.firstName ? profile.firstName.charAt(0).toUpperCase() : user?.email?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  {profile?.firstName && profile?.lastName 
                    ? `${profile.firstName} ${profile.lastName}`
                    : user?.displayName || "Kullanıcı"
                  }
                </h2>
                <p className="text-gray-600">{profile?.email}</p>
              </div>

              {/* Quick Stats */}
              <div className="space-y-4">
                {profile?.birthDate && (
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Yaş</span>
                    <span className="font-medium">{calculateAge(profile.birthDate)} yaşında</span>
                  </div>
                )}
                {profile?.gender && (
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Cinsiyet</span>
                    <span className="font-medium capitalize">{profile.gender}</span>
                  </div>
                )}
                {profile?.height && profile?.weight && (
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">BMI</span>
                    <span className="font-medium">{calculateBMI(profile.height, profile.weight)}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Kişisel Bilgiler</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ad</label>
                  {editing ? (
                    <input
                      type="text"
                      value={profile?.firstName || ""}
                      onChange={(e) => setProfile(prev => prev ? {...prev, firstName: e.target.value} : null)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="py-2 text-gray-900">{profile?.firstName || "-"}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Soyad</label>
                  {editing ? (
                    <input
                      type="text"
                      value={profile?.lastName || ""}
                      onChange={(e) => setProfile(prev => prev ? {...prev, lastName: e.target.value} : null)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="py-2 text-gray-900">{profile?.lastName || "-"}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                  {editing ? (
                    <input
                      type="tel"
                      value={profile?.phone || ""}
                      onChange={(e) => setProfile(prev => prev ? {...prev, phone: e.target.value} : null)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="py-2 text-gray-900">{profile?.phone || "-"}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Doğum Tarihi</label>
                  {editing ? (
                    <input
                      type="date"
                      value={profile?.birthDate || ""}
                      onChange={(e) => setProfile(prev => prev ? {...prev, birthDate: e.target.value} : null)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="py-2 text-gray-900">
                      {profile?.birthDate ? new Date(profile.birthDate).toLocaleDateString('tr-TR') : "-"}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cinsiyet</label>
                  {editing ? (
                    <select
                      value={profile?.gender || ""}
                      onChange={(e) => setProfile(prev => prev ? {...prev, gender: e.target.value} : null)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Seçiniz</option>
                      <option value="kadın">Kadın</option>
                      <option value="erkek">Erkek</option>
                      <option value="diğer">Diğer</option>
                    </select>
                  ) : (
                    <p className="py-2 text-gray-900 capitalize">{profile?.gender || "-"}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
                  <p className="py-2 text-gray-500">{profile?.email}</p>
                  <p className="text-xs text-gray-400">E-posta adresi değiştirilemez</p>
                </div>
              </div>
            </div>

            {/* Physical Measurements */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Fiziksel Ölçümler</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Boy (cm)</label>
                  {editing ? (
                    <input
                      type="number"
                      value={profile?.height || ""}
                      onChange={(e) => setProfile(prev => prev ? {...prev, height: parseInt(e.target.value) || 0} : null)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="py-2 text-gray-900">{profile?.height ? `${profile.height} cm` : "-"}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Kilo (kg)</label>
                  {editing ? (
                    <input
                      type="number"
                      value={profile?.weight || ""}
                      onChange={(e) => setProfile(prev => prev ? {...prev, weight: parseInt(e.target.value) || 0} : null)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="py-2 text-gray-900">{profile?.weight ? `${profile.weight} kg` : "-"}</p>
                  )}
                </div>
              </div>
              {profile?.height && profile?.weight && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Vücut Kitle İndeksi (BMI):</span> {calculateBMI(profile.height, profile.weight)}
                  </p>
                </div>
              )}
            </div>

            {/* Medical History */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tıbbi Geçmiş</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Kronik Hastalıklar</label>
                  {profile?.chronicDiseases && profile.chronicDiseases.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {profile.chronicDiseases.map((disease, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          {disease}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">Kayıtlı kronik hastalık bulunmuyor</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Genetik Tanılar</label>
                  {profile?.geneticDiagnoses && profile.geneticDiagnoses.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {profile.geneticDiagnoses.map((diagnosis, index) => (
                        <span key={index} className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                          {diagnosis}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">Kayıtlı genetik tanı bulunmuyor</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}