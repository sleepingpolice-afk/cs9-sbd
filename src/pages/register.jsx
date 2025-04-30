import { RectangleEllipsis } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { useState } from 'react';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleregister = () => {
        // Handle login logic here
        console.log('Login attempted with:', username, password);
    };

    return (
        <section className="flex justify-center items-center w-screen h-screen">
        <div className="w-[90vw] sm:w-[80vw] md:w-[500px] h-auto min-h-[60vh] bg-[#E9DFC3] flex rounded-[86px]">
            <div className="text-center w-full pt-9 flex-col">
            <div className="text-2xl sm:text-3xl font-bold">Join Us</div>
            
            <form>
            <div className="mt-8">
                <div className="flex-row flex ml-4 sm:ml-8 items-center">
                <UserRound className="w-8 h-8 sm:size-10" />
                <div className="flex text-xl sm:text-2xl ml-2">
                    Username
                </div>
                </div>
                <input 
                className="bg-[#FED2E2] border-2 rounded-2xl w-[80%] pl-3 h-[45px] mx-auto mt-4 flex justify-center text-[20px] items-center focus:bg-white" 
                placeholder="Username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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

                <div className="flex-row flex ml-4 sm:ml-8 items-center mt-8">
                <RectangleEllipsis className="w-8 h-8 sm:size-10" />
                <div className="flex text-xl sm:text-2xl ml-2">
                    Confirm Password
                </div>
                </div>
                <input 
                type="password" 
                className="bg-[#FED2E2] border-2 rounded-2xl w-[80%] pl-3 h-[45px] mx-auto mt-4 flex justify-center text-[20px] items-center focus:bg-white" 
                placeholder="Confirm Password" 
                required 
                />

                <p className="justify-end text-end pr-8">Register Here</p>
                
                <div className="flex justify-center">
                <button type="submit"
                    onClick={handleregister}
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