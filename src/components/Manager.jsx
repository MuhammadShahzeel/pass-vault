import { useState } from "react";
import { FaEye, FaPlus,FaEyeSlash } from "react-icons/fa6";
import { MdOutlineVpnKey } from "react-icons/md";

const Manager = () => {
  const [toggleEye, settoggleEye] = useState(true);
  const [form, setForm] = useState({
    site:"",
    username:"",
    password:"",
  });
  const showPassword = () => {
    settoggleEye(!toggleEye);
   

    
  };
  const savePassword = () => {
    console.log(form);
    



    
   

    
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(
      (prev)=>({ ...prev, [name]: value })
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-10">
    <div className="w-full max-w-4xl bg-slate-800/90 rounded-2xl shadow-2xl shadow-slate-900/50 overflow-hidden border border-slate-700/30 backdrop-blur-sm">
      <div className="px-8 py-12 text-center border-b border-slate-700/20">
        <div className="flex items-center justify-center gap-3 mb-4">
          <MdOutlineVpnKey className="text-5xl text-emerald-400/90 drop-shadow-md" />
          <span className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent tracking-tight">
            PassVault
          </span>
        </div>
        <p className="text-slate-400/80 font-light tracking-wide">Your Personal Password Guardian</p>
      </div>
  
      <div className="text-white p-10 space-y-10">
        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-6">
            <input
              onChange={handleInputChange}
              value={form.site}
              name="site"
              type="text"
              placeholder="Enter website URL"
              className="w-full bg-slate-700/90 rounded-xl px-6 py-5 text-white placeholder-slate-400/70 focus:outline-none focus:ring-4 focus:ring-emerald-400/30 transition-all duration-300 border border-slate-600/30 hover:bg-slate-700/80"
            />
            <input
              onChange={handleInputChange}
              value={form.username}
              name="username"
              type="text"
              placeholder="Enter Username"
              className="w-full bg-slate-700/90 rounded-xl px-6 py-5 text-white placeholder-slate-400/70 focus:outline-none focus:ring-4 focus:ring-emerald-400/30 transition-all duration-300 border border-slate-600/30 hover:bg-slate-700/80"
            />
            <div className="relative">
              <input
                onChange={handleInputChange}
                value={form.password}
                name="password"
                type={toggleEye ? "password" : "text"}
                placeholder="Enter Password"
                className="w-full bg-slate-700/90 rounded-xl px-6 py-5 text-white placeholder-slate-400/70 focus:outline-none focus:ring-4 focus:ring-emerald-400/30 transition-all duration-300 border border-slate-600/30 hover:bg-slate-700/80 pr-16"
              />
              <span 
                onClick={showPassword} 
                className="absolute right-5 top-1/2 transform -translate-y-1/2 text-slate-400/80 hover:text-emerald-300 cursor-pointer transition-colors duration-300"
              >
                {toggleEye ? (
                  <FaEye className="text-xl transform transition-transform hover:scale-110" />
                ) : (
                  <FaEyeSlash className="text-xl transform transition-transform hover:scale-110" />
                )}
              </span>
            </div>
          </div>
        </div>
  
        <div className="flex justify-center mt-10">
          <button 
            onClick={savePassword}
            className="flex items-center gap-3 bg-gradient-to-r from-emerald-400 to-green-400 hover:from-emerald-300 hover:to-green-300 text-slate-900 font-semibold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            <FaPlus size={18} className="text-slate-900/90" />
            Add Password
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Manager;