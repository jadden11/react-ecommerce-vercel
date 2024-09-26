import { FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-indigo-200 via-sky-200 to-stone-200 text-black py-6">
      {/* Overlay for blur effect */}
      <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-md"></div>
      
      <div className="relative container mx-auto flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-6">
          {/* Shopee Icon */}
          <a href="https://shopee.co.id/jadden11" target="_blank" rel="noopener noreferrer">
            <img
              src="https://4.bp.blogspot.com/-ItRaVmM-PoU/XgrlppcnvcI/AAAAAAAABPY/Pbgwlu9Gb7UKLJFekuqk5__OPWQvqq08gCLcBGAsYHQ/s1600/shopee%2B1.png"
              alt="Shopee"
              className="w-8 h-8"
            />
          </a>

          {/* Facebook Icon */}
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={32} className="text-blue-500" />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-sm">
          © {new Date().getFullYear()} mzarstore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
