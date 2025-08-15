export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#0D1B2A] text-white px-6">
      <div className="text-center">
        <h1 className="font-display text-4xl font-semibold">Sayfa bulunamadı</h1>
        <p className="mt-2 text-white/70">Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
        <a href="#home" className="mt-6 inline-block rounded-full bg-[#D6F5E3] px-5 py-2 text-[#0D1B2A] font-semibold">Ana sayfaya dön</a>
      </div>
    </div>
  );
}


