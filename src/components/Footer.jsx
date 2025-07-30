import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { GraduationCap, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const { theme, changeTheme } = useTheme();

  const themes = [
    { name: 'green', color: 'bg-green-500' },
    { name: 'blue', color: 'bg-blue-500' },
    { name: 'purple', color: 'bg-purple-500' },
    { name: 'red', color: 'bg-red-500' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 theme-primary" />
              <span className="text-xl font-bold">QB365 Public School</span>
            </div>
            <p className="text-gray-300">
              Nurturing young minds with quality education and values for a brighter future.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about" className="hover:theme-primary">About Us</Link></li>
              <li><Link to="/academics" className="hover:theme-primary">Academics</Link></li>
              <li><Link to="/admissions" className="hover:theme-primary">Admissions</Link></li>
              <li><Link to="/disclosure" className="hover:theme-primary">Disclosure</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Education Street, Delhi, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91-11-2345-6789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@qb365school.edu.in</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Theme Switcher</h3>
            <div className="flex space-x-2">
              {themes.map((t) => (
                <button
                  key={t.name}
                  onClick={() => changeTheme(t.name)}
                  className={`w-8 h-8 rounded-full ${t.color} ${
                    theme === t.name ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-900' : ''
                  } hover:scale-110 transition-transform`}
                  title={`Switch to ${t.name} theme`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 QB365 Public School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
