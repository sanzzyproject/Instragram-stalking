'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, X } from 'lucide-react';

export default function FreePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Tampilkan popup jika belum pernah ditutup di session ini
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('sann404_popup_seen');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('sann404_popup_seen', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-full max-w-md overflow-hidden shadow-2xl bg-[#2A2A2A] text-[#F5F5DC] rounded-2xl border border-[#3A3A3A]"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500/20 text-yellow-500">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <button
                  onClick={handleClose}
                  className="p-2 transition-colors rounded-full text-stone-400 hover:text-stone-100 hover:bg-[#3A3A3A]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <h3 className="mb-2 text-xl font-bold">Peringatan Penting!</h3>
              <div className="space-y-3 text-sm text-stone-300">
                <p>
                  Selamat datang di <strong>InstaStalk</strong>. Website ini adalah alat gratis (Open Source) yang dikembangkan secara independen.
                </p>
                <div className="p-3 border rounded-lg bg-red-950/30 border-red-900/50 text-red-200">
                  <strong>⚠️ PERHATIAN:</strong> Web ini disediakan secara <strong>GRATIS</strong> dan <strong>TIDAK PERNAH DIPERJUALBELIKAN</strong> oleh pihak manapun. Jika Anda membeli script/akses web ini, Anda telah tertipu!
                </div>
                <p className="pt-2 font-medium">
                  Developed with ❤️ by <span className="text-white">SANN404 FORUM</span>
                </p>
                <a 
                  href="https://whatsapp.com/channel/0029Vb6ukqnHQbS4mKP0j80L"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-2.5 mt-4 font-semibold text-white transition-colors bg-green-600 rounded-xl hover:bg-green-700"
                >
                  Join Saluran Admin
                </a>
              </div>
              
              <button
                onClick={handleClose}
                className="w-full py-3 mt-4 font-medium text-black transition-colors rounded-xl bg-[#F5F5DC] hover:bg-white"
              >
                Saya Mengerti
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
