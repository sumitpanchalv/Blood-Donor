
import React, { useState } from 'react';
import { User, UserRole } from '../types';

interface NavbarProps {
  user: User;
  onLogout: () => void;
  currentPage: string;
  navigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout, currentPage, navigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={() => navigate('home')} 
              className="flex-shrink-0 flex items-center group"
            >
              <div className="bg-red-600 rounded-full p-1.5 mr-2 group-hover:bg-red-700 transition-colors">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {/* Blood Drop */}
                  <path d="M12 2c0 0-5 5.5-5 9a5 5 0 0 0 10 0c0-3.5-5-9-5-9z" fill="currentColor" stroke="none" />
                  {/* Cupping Hand */}
                  <path d="M18 11c-1.5-1.5-3.5-2.5-5-2.5s-3.5 1-5 2.5l-2 2" stroke="white" />
                  <path d="M4 14c0 0 0 5 4 7s9-1 10-3" stroke="white" />
                </svg>
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">Vision<span className="text-red-600">Seekers</span></span>
            </button>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
              <button 
                onClick={() => navigate('home')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${currentPage === 'home' ? 'border-red-500 text-slate-900' : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'}`}
              >
                Home
              </button>
              <button 
                onClick={() => navigate('emergency')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${currentPage === 'emergency' ? 'border-red-500 text-slate-900' : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'}`}
              >
                Emergency Search
              </button>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            {!user ? (
              <>
                <button 
                  onClick={() => navigate('citizen_login')}
                  className="text-slate-600 hover:text-slate-900 font-medium text-sm"
                >
                  Citizen Login
                </button>
                <button 
                  onClick={() => navigate('hospital_login')}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors shadow-sm"
                >
                  Hospital Login
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => navigate(user.role === UserRole.CITIZEN ? 'citizen_dashboard' : 'hospital_dashboard')}
                  className="flex items-center space-x-2 px-3 py-1 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">
                    {user.name.charAt(0)}
                  </div>
                  <span className="text-sm font-medium text-slate-700">{user.name}</span>
                </button>
                <button 
                  onClick={onLogout}
                  className="text-slate-500 hover:text-red-600 font-medium text-sm"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
            >
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden bg-white shadow-lg`}>
        <div className="pt-2 pb-3 space-y-1">
          <button 
            onClick={() => { navigate('home'); setIsOpen(false); }}
            className="block w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-slate-600 hover:bg-slate-50 hover:border-red-500 hover:text-red-600 font-medium"
          >
            Home
          </button>
          <button 
            onClick={() => { navigate('emergency'); setIsOpen(false); }}
            className="block w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-slate-600 hover:bg-slate-50 hover:border-red-500 hover:text-red-600 font-medium"
          >
            Emergency Search
          </button>
        </div>
        {!user ? (
          <div className="pt-4 pb-3 border-t border-slate-200">
            <div className="space-y-1">
              <button 
                onClick={() => { navigate('citizen_login'); setIsOpen(false); }}
                className="block w-full text-left pl-3 pr-4 py-2 text-slate-600 hover:bg-slate-50 font-medium"
              >
                Citizen Login
              </button>
              <button 
                onClick={() => { navigate('hospital_login'); setIsOpen(false); }}
                className="block w-full text-left pl-3 pr-4 py-2 text-red-600 hover:bg-slate-50 font-medium"
              >
                Hospital Login
              </button>
            </div>
          </div>
        ) : (
          <div className="pt-4 pb-3 border-t border-slate-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
                  {user.name.charAt(0)}
                </div>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-slate-800">{user.name}</div>
                <div className="text-sm font-medium text-slate-500">{user.email}</div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <button 
                onClick={() => { navigate(user.role === UserRole.CITIZEN ? 'citizen_dashboard' : 'hospital_dashboard'); setIsOpen(false); }}
                className="block w-full text-left px-4 py-2 text-slate-600 hover:bg-slate-50 font-medium"
              >
                Dashboard
              </button>
              <button 
                onClick={() => { onLogout(); setIsOpen(false); }}
                className="block w-full text-left px-4 py-2 text-red-600 hover:bg-slate-50 font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
