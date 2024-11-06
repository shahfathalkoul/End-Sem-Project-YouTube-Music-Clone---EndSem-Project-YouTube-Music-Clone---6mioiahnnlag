import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from '../Components /InputField'
import {assets} from '../assets/assets'
function SignIn({ setIsLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const nav = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { email, password, appType: 'music' };
        try {
            const response = await fetch(
                'https://academics.newtonschool.co/api/v1/user/login',
                {
                    method: 'POST',
                    headers: {
                        'accept': 'application/json',
                        'projectID': 'evyu4sw99lon',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                }
            );
            const result = await response.json();
            localStorage.setItem('accessToken', result.token);
            localStorage.setItem('name', result.data.user.name);
            if (result.status === 'success') {
                setIsLogin(true);
                nav('/');
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="flex flex-col justify-center py-20 bg-black min-h-screen">
            <section className="flex justify-center items-center px-16 py-20 mt-16 w-full bg-black bg-opacity-0 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 justify-between items-start px-8 pt-8 pb-5 mt-6 mb-1.5 max-w-full rounded-3xl bg-zinc-600 w-[814px] bg-opacity-70 max-md:flex-wrap max-md:px-5">
                    <div className="flex flex-col self-start text-2xl text-white">
                        <img
                            src={assets.googleLogo}
                            alt=""
                            className="aspect-square w-[34px]"
                        />
                        <div className="mt-7">Sign in</div>
                    </div>
                    <form className="grow max-w-[365px] text-xs max-md:mt-10" onSubmit={handleSubmit}>
                        <InputField
                            label="Email"
                            type="email"
                            id="emailInput"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <InputField
                            label="Password"
                            type="password"
                            id="passwordInput"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="flex flex-col justify-center self-end px-px py-1 mt-6 bg-black bg-opacity-0 w-[70px]">
                            <button type="submit" className="justify-center items-start px-3.5 py-2.5 text-blue-100 bg-blue-700 rounded-2xl border border-blue-300 border-solid max-md:pr-5">
                                Submit
                            </button>
                        </div>
                    </form>
                    <div className="flex flex-col mt-2.5 text-xs text-neutral-400 max-md:mt-10">
                        <p>
                            Don't have an account?{' '}
                            <Link to="/signup" replace={true} className="text-blue-500">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
            {error && <div className="text-white">{error}</div>}
        </div>
    );
}

export default SignIn;
