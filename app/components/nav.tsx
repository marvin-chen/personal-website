import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";

const navItems = {
  "/about": { name: "About" },
  "/experience": { name: "Experience" },
  "/projects": { name: "Projects" },
  "/extracurriculars": { name: "Extracurriculars" },
  "/fun": { name: "Fun" },
};

export function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center mb-6 md:mb-0">
          <Link 
            href="/" 
            className="text-2xl font-bold tracking-tight bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            {metaData.title}
          </Link>
        </div>
        
        <div className="flex flex-wrap gap-6 items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="text-gray-600 dark:text-gray-300 hover:text-accent-blue dark:hover:text-accent-blue transition-colors duration-300 font-medium"
            >
              {name}
            </Link>
          ))}
          
          <div className="ml-2">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
}