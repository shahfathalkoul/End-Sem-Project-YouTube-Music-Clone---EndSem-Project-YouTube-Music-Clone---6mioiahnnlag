import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from '../Components /InputField'
import {assets} from '../assets/assets'

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState(null);
    const nav = useNavigate();

    const validateEmail = (email) => {
        return email.includes('@');
    };

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*()_]).{6,}$/;
        return regex.test(password);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!name || !email || !password) {
            alert('All fields are required.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Invalid email address.');
            return;
        }

        if (!validatePassword(password)) {
            alert('Password must be at least 6 characters long and include both lowercase, uppercase letters, and symbols.');
            setPassword('')
            return;
        }

        const data = { name, email, password, appType: 'music' };

        try {
            const res = await fetch('https://academics.newtonschool.co/api/v1/user/signup', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'projectID': 'evyu4sw99lon',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await res.json();

            if (result.status === 'success') {
                alert('Sign up successful!');
                nav('/signin');
            } else if (result.message === 'User already exists') {
                alert('The User already exists');
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error('Error:', error);
            setResponse({ error: 'Failed to sign up. Please try again.' });
        }
    };

    return (
        <div className="flex flex-col justify-center py-20 bg-black min-h-screen">
            <main className="flex justify-center items-center px-16 py-20 mt-16 w-full bg-black bg-opacity-0 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <section className="px-9 py-8 mt-7 rounded-2xl bg-zinc-600 w-[814px] bg-opacity-70 max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow max-md:mt-10">
                                <img
                                    src={assets.googleLogo}
                                    alt="Account creation icon"
                                    className="aspect-[0.97] w-[33px]"
                                />
                                <h1 className="mt-9 text-2xl text-white">Create an account</h1>
                                <div className="flex gap-1.5 mt-48 text-sm max-md:mt-10">
                                    <p className="grow text-neutral-400"> Already Have an account? </p>
                                    <Link to="/signin" replace={true} className="text-blue-500">
                                        Sign In
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <form className="flex flex-col grow mt-14 text-xs max-md:mt-10" onSubmit={handleSubmit}>
                                <InputField
                                    label="Enter name"
                                    type="text"
                                    id="nameInput"
                                    placeholder="Enter Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <InputField
                                    label="Enter Email"
                                    type="email"
                                    id="emailInput"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <InputField
                                    label="Enter Password"
                                    type="password"
                                    id="passwordInput"
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="flex flex-col justify-center self-end px-px py-1 mt-8 text-xs text-blue-200 whitespace-nowrap bg-black bg-opacity-0 w-[75px]">
                                    <button type="submit" className="justify-center items-start px-4 py-3 bg-blue-700 rounded-2xl border border-indigo-300 border-solid max-md:pr-5">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            {response && <div className="text-white">{response.error}</div>}
        </div>
    );
}

export default SignUp;
