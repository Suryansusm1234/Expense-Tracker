import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, ArrowRight, ShieldCheck } from 'lucide-react';
import { useUniversal } from '../context/ContextProvider.jsx';
import { api } from '../utils/apiClient.js';
const DEMO_USERNAME = import.meta.env.VITE_DEMO_USERNAME;
const DEMO_PASSWORD = import.meta.env.VITE_DEMO_PASSWORD;

const LoginPage = () => {
    const navigate = useNavigate();
    const { loginAndFetch } = useUniversal();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [username, setusername] = useState()
    const [password, setpassword] = useState()
    const isRecruiterChecked = username === DEMO_USERNAME && password === DEMO_PASSWORD

    const handleLogin = async() => {
        setLoading(true)
        setErrorMessage("")
        try {
            const res = await api.post(`/login`, { username, password })
            if(res.data.success){
                await loginAndFetch(); // Fetch initial data after successful login
                navigate('/dashboard');
            }else{
                setErrorMessage("Login failed. Please check your credentials and try again.")
            }
        } catch (error) {
            const serverMessage = error?.response?.data?.message
            setErrorMessage(serverMessage ? `Login failed: ${serverMessage}` : "Login failed. Please try again.")
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
           
            <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-xl shadow-slate-200/60 p-8 md:p-12 border border-slate-100">
             
                <div className="flex flex-col items-center mb-10">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200 mb-4">
                        <ShieldCheck size={32} className="text-white" />
                    </div>
                    <h1 className="text-2xl font-black text-slate-800 tracking-tight">Welcome Back</h1>
                    <p className="text-slate-400 font-medium text-sm mt-1">Manage your finances effortlessly</p>
                </div>

              
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Username</label>
                        <div className="relative flex items-center focus-within:ring-2 focus-within:ring-blue-600 rounded-2xl">
                            <User className="absolute left-4 text-slate-400" size={18} />
                            <input 
                                type="text" 
                                placeholder="Username" 
                                value = {username}
                                onChange={(e) => setusername(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Password</label>
                        <div className="relative flex items-center focus-within:ring-2 focus-within:ring-blue-600 rounded-2xl">
                            <Lock className="absolute left-4 text-slate-400" size={18} />
                            <input 
                                type="password" 
                                placeholder="Password" 
                                value = {password}
                                onChange={(e) => setpassword(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none cursor-pointer opacity-60"
                            />
                        </div>
                    </div>

                 
                    <button 
                        onClick={handleLogin}
                        className="w-full bg-slate-900 hover:bg-black text-white font-bold py-4 rounded-2xl mt-4 transition-all flex items-center justify-center gap-2 group active:scale-95"
                    >
                        {loading ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            <>
                                Enter Dashboard
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>

                    {errorMessage ? (
                        <p className="text-sm text-red-600 font-medium">{errorMessage}</p>
                    ) : null}
                </div>

              
                <div className="mt-8 pt-8 border-t border-slate-100 text-center flex items-center justify-center gap-2">
                   <input
                        id="recruiter-checkbox"
                        type="checkbox"
                        name="Recruiter"
                        checked={isRecruiterChecked}
                        onChange={(e) => {
                            if (e.target.checked) {
                                setusername(DEMO_USERNAME)
                                setpassword(DEMO_PASSWORD)
                            } else {
                                setusername("")
                                setpassword("")
                            }
                        }}
                    />
                   <label htmlFor="recruiter-checkbox" className="cursor-pointer">
                        Recruiter Login
                   </label>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;