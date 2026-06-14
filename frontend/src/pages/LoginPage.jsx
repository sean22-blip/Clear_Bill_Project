import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';


function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            const data = await response.json();
    
            if (response.ok) {
                localStorage.setItem('token', data.token);
    
                alert('Login Successful!');
    
                navigate('/dashboard');
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error(error);
            alert('Server Error');
        }
    };
    return (
        <>
            <div className='min-h-screen flex flex-col items-center justify-center'>
                <div className='items-center flex flex-col gap-2'>
                    <div className='bg-[#40C2FD] w-12 h-12 flex flex-col rounded-lg items-center justify-center'>
                        <img src={logo} className='  object-contain' alt="" />
                    </div>
                    <h1 className='font-bold text-[#00668A]'>ClearBill Care</h1>
                </div>
                <div className=' border-1 w-[70%] gap-4 border-gray-300 rounded-lg flex flex-col p-6 mt-4 items-center'>
                    <div className='text-center'>
                        <h1 className='font-semibold text-[24px]'>Welcome to ClearBill Care</h1>
                        <h2 className='text-[#45464D] font-normal text-[16px]'>Your supportive hospital billing partner.</h2>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col'>
                            <h2 className='text-[14px]'>EMAIL ADDRESS</h2>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border-[#C6C6CD] border p-2 rounded"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='text-[14px] '>PASSWORD</h2>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="border-[#C6C6CD] border p-2 rounded"
                                placeholder="Enter your password"
                            />
                        </div>
                        <button onClick={handleLogin} className='hover:bg-[#0C92C1] cursor-pointer text-[#00668A] font-semibold text-[20px] bg-[#40C2FD] rounded-lg h-[50px]'>Sign In</button>
                    </div>
                    
                </div>
                
            </div>
        </>
    );
}
export default LoginPage;
