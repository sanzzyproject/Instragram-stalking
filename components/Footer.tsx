export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-8 mt-auto border-t border-[#333333] bg-[#121212]">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-stone-400">
              © {currentYear} Web App by <span className="font-bold text-[#F5F5DC]">SANN404 FORUM</span>
            </p>
            <p className="mt-1 text-xs text-stone-500">
              Not officially affiliated with Instagram.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm transition-colors text-stone-400 hover:text-[#F5F5DC]">
              Terms of Service
            </a>
            <a href="#" className="text-sm transition-colors text-stone-400 hover:text-[#F5F5DC]">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
