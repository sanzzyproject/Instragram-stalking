import Link from 'next/link';
import { BookOpen, ShieldCheck, Terminal, Cpu } from 'lucide-react';

export default function DocsPage() {
  return (
    <div className="flex flex-col items-center flex-grow w-full px-4 py-12 mx-auto max-w-5xl sm:px-6">
      
      <div className="w-full text-center mb-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl text-[#F5F5DC]">
          Dokumentasi
        </h1>
        <p className="text-lg text-stone-400">
          Panduan lengkap mengenai InstaStalk, fitur, dan pengembangnya.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Sidebar */}
        <div className="md:col-span-1 hidden md:block">
          <div className="sticky top-24">
            <h3 className="text-xs font-bold tracking-widest text-[#F5F5DC] uppercase mb-4">Navigasi</h3>
            <ul className="space-y-3 border-l-2 border-[#333] pl-4">
              <li><a href="#tentang" className="text-sm text-stone-400 hover:text-[#F5F5DC] transition-colors">Tentang Aplikasi</a></li>
              <li><a href="#fitur" className="text-sm text-stone-400 hover:text-[#F5F5DC] transition-colors">Fitur Utama</a></li>
              <li><a href="#panduan" className="text-sm text-stone-400 hover:text-[#F5F5DC] transition-colors">Cara Penggunaan</a></li>
              <li><a href="#developer" className="text-sm text-stone-400 hover:text-[#F5F5DC] transition-colors">Tentang SANN404</a></li>
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-3 space-y-12 text-stone-300">
          
          <section id="tentang" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#2A2A2A] rounded-lg">
                <BookOpen className="w-6 h-6 text-[#F5F5DC]" />
              </div>
              <h2 className="text-2xl font-bold text-[#F5F5DC]">Apa itu InstaStalk?</h2>
            </div>
            <p className="mb-4 leading-relaxed">
              <strong>InstaStalk</strong> adalah sebuah website gratis yang memungkinkan Anda untuk melihat detail publik dari sebuah profil Instagram tanpa harus melakukan login atau membuat akun Instagram. Alat ini didesain secara khusus bagi siapa saja yang ingin mengecek akun publik, mendapatkan foto profil, atau sekadar melihat statistik follower secara cepat.
            </p>
            <p className="leading-relaxed">
              Website ini menggunakan arsitektur modern Next.js App Router dengan antarmuka yang bersih (menggunakan Tailwind CSS color scheme Hitam Muda dan Putih Tulang), menjadikannya sangat cepat, ringan, dan responsif.
            </p>
          </section>

          <div className="h-px w-full bg-[#333333]"></div>

          <section id="fitur" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#2A2A2A] rounded-lg">
                <Cpu className="w-6 h-6 text-[#F5F5DC]" />
              </div>
              <h2 className="text-2xl font-bold text-[#F5F5DC]">Fitur Utama</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="p-5 border rounded-2xl border-[#333333] bg-[#1A1A1A]">
                <h3 className="font-bold text-[#F5F5DC] mb-2 flex items-center gap-2">🔍 Pencarian Username</h3>
                <p className="text-sm text-stone-400">Pencarian cepat profil Instagram hanya menggunakan username asli tanpa perlu URL lengkap.</p>
              </div>
              <div className="p-5 border rounded-2xl border-[#333333] bg-[#1A1A1A]">
                <h3 className="font-bold text-[#F5F5DC] mb-2 flex items-center gap-2">📊 Data Statistik</h3>
                <p className="text-sm text-stone-400">Menampilkan jumlah follower, following, dan total postingan dengan format angka yang mudah dibaca.</p>
              </div>
              <div className="p-5 border rounded-2xl border-[#333333] bg-[#1A1A1A]">
                <h3 className="font-bold text-[#F5F5DC] mb-2 flex items-center gap-2">🖼️ Foto Profil Base64</h3>
                <p className="text-sm text-stone-400">Menarik foto profil dan merendernya dalam web untuk memperlihatkan foto secara jelas.</p>
              </div>
              <div className="p-5 border rounded-2xl border-[#333333] bg-[#1A1A1A]">
                <h3 className="font-bold text-[#F5F5DC] mb-2 flex items-center gap-2">🛡️ Indikator Keamanan</h3>
                <p className="text-sm text-stone-400">Menampilkan status apakah sebuah akun di-set Private dan apakah akun tersebut Verified (Centang Biru).</p>
              </div>
            </div>
          </section>

          <div className="h-px w-full bg-[#333333]"></div>

          <section id="panduan" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#2A2A2A] rounded-lg">
                <Terminal className="w-6 h-6 text-[#F5F5DC]" />
              </div>
              <h2 className="text-2xl font-bold text-[#F5F5DC]">Cara Penggunaan</h2>
            </div>
            <ol className="list-decimal list-inside space-y-4 leading-relaxed mt-6">
              <li className="pl-2">
                <strong>Buka Halaman Utama:</strong> Pastikan Anda berada di halaman <Link href="/" className="text-stone-100 underline decoration-[#555] hover:decoration-white">Utama (Search)</Link>.
              </li>
              <li className="pl-2">
                <strong>Masukkan Username:</strong> Ketikkan username Instagram target ke dalam kolom input (Contoh: <code className="bg-[#2A2A2A] px-1.5 py-0.5 rounded text-sm mx-1">instagram</code> atau <code className="bg-[#2A2A2A] px-1.5 py-0.5 rounded text-sm mx-1">porsche</code>). Tidak perlu menyertakan @.
              </li>
              <li className="pl-2">
                <strong>Tekan Search:</strong> Klik tombol ikon pencarian berwarna Putih Tulang.
              </li>
              <li className="pl-2">
                <strong>Lihat Hasil:</strong> Tunggu beberapa detik, animasi <i>loading</i> akan muncul, dan jika profil ditemukan, kartu profile berisi data mereka akan ter-render di bawahnya.
              </li>
            </ol>
          </section>

          <div className="h-px w-full bg-[#333333]"></div>

          <section id="developer" className="scroll-mt-24 bg-[#121212] p-8 rounded-3xl border border-[#333333]">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 border rounded-lg bg-[#2A2A2A] border-[#444]">
                <ShieldCheck className="w-6 h-6 text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-[#F5F5DC]">Developer & License</h2>
            </div>
            <p className="mb-4 leading-relaxed">
              Aplikasi ini dikembangkan oleh <strong className="text-white text-lg">SANN404 FORUM</strong>. Tujuan dari website ini adalah edukasional serta mempermudah pengalaman open-source (Information Gathering).
            </p>
            <div className="p-4 rounded-xl bg-orange-950/20 border border-orange-900/40 mt-6">
              <h4 className="text-orange-200 font-bold mb-2">Peringatan:</h4>
              <p className="text-sm text-orange-200/80">
                Aplikasi ini <strong>Gratis dan Open Source</strong>. Segala bentuk komersialisasi dari source code ini oleh pihak ketiga adalah dilarang, dan developer asli (SANN404 FORUM) tidak berafiliasi maupun bertanggung jawab atas aplikasi Instagram resmi.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
