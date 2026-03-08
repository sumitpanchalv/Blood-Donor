
import React from 'react';

interface HomeProps {
  navigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ navigate }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-white py-20 lg:py-32 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#ef4444" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Give Blood, <span className="text-red-600">Save Lives.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Connect with hospitals and donors across the nation. A unified platform for managing blood stock and enabling emergency donations in real-time.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => navigate('emergency')}
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-lg shadow-xl shadow-red-200 transition-all hover:scale-105"
              >
                Search Blood (Emergency)
              </button>
              <button 
                onClick={() => navigate('citizen_login')}
                className="px-8 py-4 bg-white border-2 border-slate-200 hover:border-red-600 text-slate-900 rounded-xl font-bold text-lg transition-all"
              >
                Become a Donor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="text-4xl font-bold text-red-600 mb-2">5,000+</div>
              <div className="text-slate-600 font-medium">Active Donors</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="text-4xl font-bold text-red-600 mb-2">250+</div>
              <div className="text-slate-600 font-medium">Partner Hospitals</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="text-4xl font-bold text-red-600 mb-2">12,500+</div>
              <div className="text-slate-600 font-medium">Lives Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <svg className="w-48 h-48 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
               </svg>
             </div>
             
             <h2 className="text-3xl font-bold text-red-800 mb-6">Emergency Helpline Numbers</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
               <div className="flex items-center space-x-4 bg-white p-4 rounded-xl border border-red-100">
                 <div className="bg-red-600 p-2 rounded-lg">
                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                 </div>
                 <div>
                   <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">National Help Desk</p>
                   <p className="text-2xl font-bold text-slate-900">102 / 108</p>
                 </div>
               </div>
               <div className="flex items-center space-x-4 bg-white p-4 rounded-xl border border-red-100">
                 <div className="bg-red-600 p-2 rounded-lg">
                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                 </div>
                 <div>
                   <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Emergency Blood Support</p>
                   <p className="text-2xl font-bold text-slate-900">+91 11 2335 9306</p>
                 </div>
               </div>
             </div>
             <p className="mt-8 text-red-700 font-medium italic">* Dial these numbers for immediate ambulance or rare blood group assistance.</p>
          </div>
        </div>
      </section>

      {/* Role Switch Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Are you a Donor?</h3>
              <p className="text-slate-600 mb-8">Register as a citizen donor, track your donations, and download life-saving certificates.</p>
              <button 
                onClick={() => navigate('citizen_login')}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-colors"
              >
                Sign In / Register
              </button>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Hospital Partner?</h3>
              <p className="text-slate-600 mb-8">Manage your blood inventory, record donations, and request blood from nearby hospitals.</p>
              <button 
                onClick={() => navigate('hospital_login')}
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-colors"
              >
                Hospital Portal Login
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
