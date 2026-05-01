import { useState, useEffect } from "react";
import { CircleX, Save, User, Wallet } from "lucide-react";
import { settingsHandler } from "../utils/SettingsHandler";
import { useUniversal } from "../context/ContextProvider";

const SettingsForm = ({ show, setshow }) => {
  const { categories, user, setuser, setcategories , usingMockData } = useUniversal();
 const [username, setUsername] = useState(user?.username || "");


  const [localCategories, setLocalCategories] = useState(categories || []);
  const handleCategoryChange = (index, field, value) => {
    const updatedCats = [...localCategories];
    const processedValue = field === "budgeted" || field === "actual" 
      ? (value === "" ? 0 : Number(value))
      : value;
    updatedCats[index][field] = processedValue;
    setLocalCategories(updatedCats);
  };

  return (
    <>
      {show ? (
        <>
          <div className='fixed inset-0 bg-black/30 backdrop-blur-xs z-20' onClick={() => setshow(false)}></div>
          <div className='bg-white shadow-lg rounded-lg p-6 fixed z-20 top-[10%] left-[50%] -translate-x-1/2 w-full max-w-md max-h-[85vh] flex flex-col'>
            <div className="flex justify-between items-center mb-6">
              <h2 className='text-2xl font-bold text-slate-800'>Settings</h2>
              <CircleX
                className="hover:bg-slate-100 rounded-full cursor-pointer text-slate-500 transition-colors"
                size={24}
                onClick={() => setshow(false)}
              />
            </div>

            <div className="overflow-y-auto pr-2 custom-scrollbar">
              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  settingsHandler({
                    username,
                    updatedCategories: localCategories,
                    setuser,
                    setcategories,
                    user,
                    usingMockData
                  });
                  setshow(false);
                }}
              >
                <div className="space-y-4 mb-6">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Profile & Bank</h3>

                  <div className="flex items-center gap-3 border border-gray-200 rounded-xl p-3 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
                    <User size={20} className="text-slate-400" />
                    <div className="flex-1">
                      <label className="text-[10px] text-slate-400 font-bold uppercase block">User Name</label>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full font-bold text-slate-700 outline-none bg-transparent"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                  
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Category Budgets</h3>

                  {localCategories.length > 0 ? (
                    localCategories.map((cat, index) => (
                      <div key={cat._id || index} className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-bold text-slate-700">{cat.title}</span>
                          <span className="text-xs px-2 py-1 bg-white rounded-md border border-slate-200 text-slate-500 font-medium">
                            Edit
                          </span>
                        </div>
                        <div className="flex gap-3">
                          <div className="flex-1">
                            <label className="text-[10px] text-slate-400 font-bold uppercase">Budget</label>
                            <input
                              placeholder="Enter the budget"
                              type="text"
                              value={cat.budgeted}
                              onChange={(e) => handleCategoryChange(index, "budgeted", e.target.value)}
                              className="w-full bg-white border border-slate-200 rounded-lg px-2 py-1 text-sm font-semibold outline-none focus:border-blue-500"
                            />
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-slate-400 italic">No categories found.</p>
                  )}
                </div>


                <button
                  type="submit"
                  className='bg-slate-900 text-white font-bold rounded-xl p-3 mt-6 w-full hover:bg-slate-800 transition-colors cursor-pointer flex items-center justify-center gap-2'
                >
                  <Save size={18} />
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default SettingsForm;