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
    <div className="flex-1 flex items-center justify-center bg-slate-900 pt-10">
      <div className="w-full max-w-4xl bg-slate-800 rounded-xl shadow-2xl overflow-hidden border border-slate-700/50">
        <div className="px-8 py-10 text-center border-b border-slate-700">
          <div className="flex items-center justify-center gap-2 mb-3">
            <MdOutlineVpnKey className="text-4xl text-green-400" />
            <span className="text-4xl font-bold text-green-400">PassVault</span>
          </div>
          <p className="text-slate-400">your own password manager</p>
        </div>
         
        <div className="text-white p-8 space-y-8">
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <input
              onChange={handleInputChange}
              value={form.site}
                name="site"

                type="text"
                placeholder="Enter website URL"
                className="w-full bg-slate-700 rounded-lg px-5 py-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200 border border-slate-600/20"
              />
              <input
              onChange={handleInputChange}
              value={form.username}
                name="username"
                type="text"
                placeholder="Enter Username"
                className="w-full bg-slate-700 rounded-lg px-5 py-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200 border border-slate-600/20"
              />
              <div className="relative">
                <input
                onChange={handleInputChange}
                value={form.password}
                  name="password"
                  type={toggleEye ? "password" : "text"}
                  
                  placeholder="Enter Password"
                  className="w-full bg-slate-700 rounded-lg px-5 py-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200 border border-slate-600/20"
                />
                <span onClick={showPassword} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-green-400 cursor-pointer transition duration-200">
                 {toggleEye ?  <FaEye className="text-xl" /> :  <FaEyeSlash className="text-xl" />}
                 
                 
                 
                </span>
              </div>
            </div>
          </div>
                 
          <div className="flex justify-center mt-8">
            <button onClick={savePassword}  className="flex items-center gap-2 bg-green-400 hover:bg-green-500 text-slate-900 font-medium py-3 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl active:bg-green-600 active:translate-y-0.5">
              
              {}
              <FaPlus size={16} />
              Add Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manager;