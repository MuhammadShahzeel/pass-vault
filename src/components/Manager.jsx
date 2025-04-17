import { useState } from "react";
import { FaEye, FaPlus, FaEyeSlash, FaCopy, FaEdit, FaTrash } from "react-icons/fa";
import { MdOutlineVpnKey } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const [toggleEye, settoggleEye] = useState(true);
  const [password, setPassword] = useState([]);
  const [form, setForm] = useState({
    site: "",
    username: "",
    password: "",
  });
  
  const showPassword = () => {
    settoggleEye(!toggleEye);
  };
  
  const savePassword = () => {
    setPassword(prev => [...prev, {...form, id: uuidv4()}]
     
      
      
     
  
    );
    setForm({
      site: "",
      username: "",
      password: "",
    });
  };
  const deletePassword = (id) => {
    setPassword(prev => prev.filter(item => item.id !== id));
  };
  const editPassword = (id) => {
    const selectedItem = password.filter(item => item.id === id)[0];
    setForm(selectedItem)
    setPassword(prev =>prev.filter(item => item.id !== id))


    
    
    
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success('Copied to clipboard.', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }).catch((err) => {
      console.error("Failed to copy: ", err);
      toast.error("Failed to copy.");
    });
  };





  return (
    <div className="flex-1 flex items-center justify-center bg-slate-900 pt-10 pb-16">
      <div className="w-full max-w-4xl bg-slate-800 rounded-xl shadow-2xl overflow-hidden border border-slate-700/50">
        {/* Header */}
        <div className="px-8 py-8 text-center border-b border-slate-700">
          <div className="flex items-center justify-center gap-3 mb-2">
            <MdOutlineVpnKey className="text-4xl text-green-400" />
            <span className="text-4xl font-bold text-white">PassVault</span>
          </div>
          <p className="text-slate-400">your personal password manager</p>
        </div>

        <div className="text-white p-8 space-y-8">
          {/* Form Section */}
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
                <span
                  onClick={showPassword}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-green-400 cursor-pointer transition duration-200"
                >
                  {toggleEye ? (
                    <FaEye className="text-xl" />
                  ) : (
                    <FaEyeSlash className="text-xl" />
                  )}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={savePassword}
              disabled={!form.site || !form.username || !form.password}
              className={`flex items-center gap-2 ${
                form.site && form.username && form.password
                  ? "bg-green-400 hover:bg-green-500"
                  : "bg-green-800 cursor-not-allowed"
              } text-slate-900 font-medium py-3 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl active:bg-green-600 active:translate-y-0.5`}
            >
              <FaPlus size={16} />
              Add Password
            </button>
          </div>
          
          {/* Password List Section */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              Your Passwords
            </h2>
            
            <div className="passwords mt-6 overflow-x-auto">
                {password.length === 0 ? (
                    <div className="py-6 text-center text-slate-500 italic">No passwords saved yet</div>
                ) : (
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-700 border-b border-slate-600">
                          <th className="py-3 px-4 font-medium text-green-400">Site</th>
                          <th className="py-3 px-4 font-medium text-green-400">Username</th>
                          <th className="py-3 px-4 font-medium text-green-400">Password</th>
                          <th className="py-3 px-4 font-medium text-green-400">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {password.map((item, index) => (
                          <tr key={index} className="border-b border-slate-700 hover:bg-slate-700/50 transition-colors">
                            <td className="py-3 px-4 text-slate-300">
                              <a className="hover:text-green-400" href={item.site} target="_blank" rel="noopener noreferrer">
                                {item.site}
                              </a>
                            </td>
                            <td className="py-3 px-4 text-slate-300">
                              <div className="flex items-center">
                                <span>{item.username}</span>
                                <button 
                                  onClick={() => copyToClipboard(item.username)}
                                  className="ml-2 text-slate-400 hover:text-green-400 transition-colors"
                                  title="Copy username"
                                >
                                  <FaCopy size={16} />
                                </button>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-slate-300">
                              <div className="flex items-center">
                                <span>{item.password}</span>
                                <button 
                                  onClick={() => copyToClipboard(item.password)}
                                  className="ml-2 text-slate-400 hover:text-green-400 transition-colors"
                                  title="Copy password"
                                >
                                  <FaCopy size={16} />
                                </button>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-slate-300">
                              <div className="flex items-center space-x-3">
                                <button 
                                  onClick={() => editPassword(item.id)}
                                  className="text-slate-400 hover:text-green-400 transition-colors"
                                  title="Edit"
                                >
                                  <FaEdit size={18} />
                                </button>
                                <button 
                                  onClick={() => deletePassword(item.id)}
                                  className="text-slate-400 hover:text-green-400 transition-colors"
                                  title="Delete"
                                >
                                  <FaTrash size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  ); 
};

export default Manager;