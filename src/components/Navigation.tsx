import { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Import the logo image
import dioceseLogo from '@/assets/diocese-logo.png';

interface NavigationProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

const Navigation = ({ currentSection, onNavigate }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'bishop', label: "Bishop's Message" },
    { id: 'parishes', label: 'Parishes' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-primary text-primary-foreground shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo + Title */}
          <div className="flex items-center space-x-3">
            <img
              src={dioceseLogo}
              alt="Diocese of Mthatha Logo"
              className="h-10 w-auto"
              loading="lazy"
            />
            <span className="text-xl font-bold select-none">
              Diocese of Mthatha
            </span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`hover:text-accent transition-colors duration-200 ${
                    currentSection === item.id
                      ? 'text-accent border-b-2 border-accent'
                      : ''
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left py-2 px-4 hover:bg-primary/80 transition-colors duration-200 ${
                      currentSection === item.id
                        ? 'bg-primary/80 text-accent'
                        : ''
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
