/* eslint-disable react/prop-types */

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col justify-center items-center transition-all duration-300 ease-in-out
         ${
           menuOpen
             ? "h-screen opacity-100 pointer-events-auto"
             : "h-0 opacity-0 pointer-events-none"
         } 
      `} >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-4 right-5 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
       &times;
      </button>

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Home
      </a>

      <a
        href="#About"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        About
      </a>

      <a
        href="#Project"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Project
      </a>

      <a
        href="#Contact"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Contact
      </a>
    </div>
  );
};

export default MobileMenu;
