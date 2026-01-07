import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, ArrowRight, ShieldCheck } from 'lucide-react';

const LoginPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleDemoLogin = () => {
        setLoading(true);
        // Simulate a small delay for realism
        setTimeout(() => {
            navigate('/Dashboard');
        }, 800);
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
                        <div className="relative flex items-center">
                            <User className="absolute left-4 text-slate-400" size={18} />
                            <input 
                                type="text" 
                                disabled
                                placeholder="admin_demo" 
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none cursor-not-allowed opacity-60"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Password</label>
                        <div className="relative flex items-center">
                            <Lock className="absolute left-4 text-slate-400" size={18} />
                            <input 
                                type="password" 
                                disabled
                                placeholder="••••••••" 
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none cursor-not-allowed opacity-60"
                            />
                        </div>
                    </div>

                 
                    <button 
                        onClick={handleDemoLogin}
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
                </div>

              
                <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                    <p className="text-xs text-slate-400 font-medium leading-relaxed px-4">
                        <span className="text-blue-600 font-bold">Recruiter Note:</span> This is a demo version. No credentials are required to explore the dashboard.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;