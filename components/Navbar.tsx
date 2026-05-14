import Link from 'next/link';
import { Search, FileText, Code2 } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-[#333333] bg-[#1A1A1A]/80 backdrop-blur-md">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center flex-shrink-0 gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" 
              alt="Instagram Logo" 
              className="w-8 h-8"
            />
            <Link href="/" className="text-xl font-bold tracking-tight text-[#F5F5DC]">
              Insta<span className="text-stone-400">Stalk</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link 
              href="/" 
              className="flex items-center gap-1.5 text-sm font-medium transition-colors text-stone-300 hover:text-white"
            >
              <Search className="w-4 h-4" />
              <span>Stalk</span>
            </Link>
            <Link 
              href="/docs" 
              className="flex items-center gap-1.5 text-sm font-medium transition-colors text-stone-300 hover:text-white"
            >
              <FileText className="w-4 h-4" />
              <span>Docs</span>
            </Link>
            <div className="hidden sm:flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full bg-[#2A2A2A] text-[#F5F5DC] border border-[#3A3A3A]">
              <Code2 className="w-4 h-4 text-stone-400" />
              <span>SANN404 FORUM</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
