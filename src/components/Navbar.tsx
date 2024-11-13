import React from 'react';
import { Link } from 'react-router-dom';
import HubtelLogo from '../assets/hubtel-logo.png';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white py-4 border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to='/'>
            <img src={HubtelLogo} alt="Hubtel Logo" className="h-8" />
          </Link>
          
          <ul className="flex space-x-12">
            <li>
              <Link to="/" className="text-black font-medium hover:text-teal-500 border-b-2 border-teal-500 pb-4">
                Make Orders
              </Link>
            </li>
            <li>
              <Link to="/take-payments" className="text-gray-600 hover:text-teal-500">
                Take Payments
              </Link>
            </li>
            <li>
              <Link to="/grow-revenues" className="text-gray-600 hover:text-teal-500">
                Grow Revenues
              </Link>
            </li>
            <li>
              <Link to="/send-sms" className="text-gray-600 hover:text-teal-500">
                Send SMS
              </Link>
            </li>
            <li>
              <Link to="/serve-with-us" className="text-gray-600 hover:text-teal-500">
                Serve With Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;