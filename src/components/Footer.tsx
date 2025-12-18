export default function Footer() {
  return (
    <footer className="bg-neutral-primary-soft rounded-base shadow-xs border border-white rounded-2xl m-4">
      <div className="w-full mx-auto max-w-7xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white text-body sm:text-center">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            André Bayona™
          </a>
          . Todos los derechos reservados.
        </span>
        <ul className="flex flex-wrap text-white items-center mt-3 text-sm font-medium text-body sm:mt-0">
          <li>
            <a href="https://www.linkedin.com/in/andrebayona/" className="hover:underline me-4 md:me-6" target="_blank">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ronaldobm99/" className="hover:underline me-4 md:me-6" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/andrebm99" className="hover:underline me-4 md:me-6">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          
        </ul>
      </div>
    </footer>
  );
}
