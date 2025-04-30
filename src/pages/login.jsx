import { RectangleEllipsis } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

export default function Login() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert('Masukkan email dan password dong, untuk abang" yg mau periksa bisa pakai email: netlab1234@mail.com, password: netlab2024! (dengan tanda serunya)');
            return;
        }

        try {
            const res = await axios.post(
                `https://sbd-express-wesleyfrederickoh.q7szht.easypanel.host/user/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
            );
        
            if (res.data.success) {
                navigate('/shop');
            } else {
                alert('Login failed: ' + (res.data.message || 'Unknown error'));
            }
            
            if (res.data.success) {
                localStorage.setItem('isLoggedIn', 'true');
                navigate('/shop');
            }

            
        } catch (error) {
            console.error('Login failed:', error.response?.data || error.message);
        }
    };

    return (
        <section className="flex justify-center items-center h-screen w-screen">
        <div className="w-[90vw] sm:w-[80vw] md:w-[500px] h-auto min-h-[60vh] bg-[#E9DFC3] flex rounded-[86px]">
            <div className="text-center w-full pt-9 flex-col">
            <div className="text-2xl sm:text-3xl">Welcome Back!</div>
            
            <form>
            <div className="mt-8">
                <div className="flex-row flex ml-4 sm:ml-8 items-center">
                <UserRound className="w-8 h-8 sm:size-10" />
                <div className="flex text-xl sm:text-2xl ml-2">
                    Email
                </div>
                </div>
                <input 
                className="bg-[#FED2E2] border-2 rounded-2xl w-[80%] pl-3 h-[45px] mx-auto mt-4 flex justify-center text-[20px] items-center focus:bg-white" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                
                <div className="flex-row flex ml-4 sm:ml-8 items-center mt-8">
                <RectangleEllipsis className="w-8 h-8 sm:size-10" />
                <div className="flex text-xl sm:text-2xl ml-2">
                    Password
                </div>
                </div>
                <input 
                type="password" 
                className="bg-[#FED2E2] border-2 rounded-2xl w-[80%] pl-3 h-[45px] mx-auto mt-4 flex justify-center text-[20px] items-center focus:bg-white" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                />
                
                <p className="justify-end text-end pr-15 hover:cursor-pointer hover:text-blue-300 hover:transition-colors hover:duration-300" onClick={() => navigate('/register')} >Register Here</p>
                
                <div className="flex justify-center">
                <button type="submit"
                    onClick={handleLogin}
                    className="w-[150px] mt-8 text-2xl bg-[#ABA5F0] mb-5 border-2 border-black rounded-xl py-2"
                >
                    Login
                </button>
                </div>
            </div>
            </form>
            </div>
        </div>
        </section>
    );
}