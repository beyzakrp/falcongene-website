import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0D1B2A] text-[#E6E6E6]">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <Image src="/logo-falcongene.svg" alt="FalconGene" width={160} height={36} className="h-7 w-auto" />
          <p className="mt-3 text-sm text-[#E6E6E6]/80">
            Bilimsel doğruluk ve modern teknoloji ile genetik analizlere yeni bir standart getiriyoruz.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-white">Hızlı Linkler</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/testler" className="hover:underline">Testler</Link></li>
              <li><Link href="/nasil-calisir" className="hover:underline">Nasıl Çalışır</Link></li>
              <li><Link href="/klinikler" className="hover:underline">Fiyatlandırma</Link></li>
              <li><Link href="/sss" className="hover:underline">SSS</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Kaynaklar</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
              <li><Link href="/iletisim" className="hover:underline">İletişim</Link></li>
              <li><Link href="#" className="hover:underline">Gizlilik</Link></li>
              <li><Link href="#" className="hover:underline">KVKK</Link></li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white">Bizi Takip Edin</h4>
          <div className="mt-3 flex gap-3">
            {[
              { href: "#", label: "Twitter", path: "M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0-7.27 3.89A12.1 12.1 0 0 1 3.15 4.6a4.27 4.27 0 0 0 1.32 5.7 4.22 4.22 0 0 1-1.93-.53v.05a4.27 4.27 0 0 0 3.42 4.18 4.3 4.3 0 0 1-1.92.07 4.27 4.27 0 0 0 3.98 2.96A8.57 8.57 0 0 1 2 19.54a12.08 12.08 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.7 8.7 0 0 0 24 5.56a8.6 8.6 0 0 1-2.54.7Z" },
              { href: "#", label: "LinkedIn", path: "M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 8.98h4v12H3v-12Zm7 0h3.82v1.64h.05a4.19 4.19 0 0 1 3.76-2.07c4.03 0 4.77 2.65 4.77 6.1v6.33h-4v-5.62c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.72h-4v-12Z" },
              { href: "#", label: "Instagram", path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6.5-.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" },
            ].map((s) => (
              <Link key={s.label} aria-label={s.label} href={s.href} className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d={s.path} />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-[#E6E6E6]/70">© {new Date().getFullYear()} FalconGene. Tüm hakları saklıdır.</div>
    </footer>
  );
}


