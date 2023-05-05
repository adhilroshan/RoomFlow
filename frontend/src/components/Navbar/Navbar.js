import logo from "../../../public/logo/logo.svg";
import Image from 'next/image';


export default function Navbar() {
  return (
    <header className="">
      <div className="mx-auto text-lg flex h-[10vh] max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block font-bold  text-primary" href="/">
          <Image src={logo} className="w-20 pt-5" />
        </a>
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Site Nav" className="hidden md:block"></nav>
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4 pt-5">
              <a
                className="block rounded-md bg-primary px-5 py-2.5 font-medium text-white transition hover:bg-transparent hover:border border-primary hover:text-primary"
                href="./admin/signin"
              >
                Login
              </a>
              <a
                className="hidden rounded-md  px-5 py-2.5 font-medium text-primary  bg-transparent hover:bg-primary hover:text-white border border-primary transition   sm:block"
                href="./admin/signup"
              >
                Register
              </a>
            </div>
            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
