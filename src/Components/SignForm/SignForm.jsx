import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/authActions";

import { GoogleLogo } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
export default function SignForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const dispatch = useDispatch();
    const authStore = useSelector((state) => state.authStore)
    const loading = authStore.loading;
    const error = authStore.error;

    const handleSubmit = (e) => {
        dispatch(login({ email, password }))
        e.preventDefault();
    }

    const signInWithGoogle = () => {
        window.location.href = ('http://localhost:8080/api/auth/signin/google');
    }





    return (
        <div className=" w-full h-screen custom-gradient">
            <section className="bg-transparent">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen md:h-screen lg:py-0">
                    <NavLink to='/'
                        className="flex items-center mb-6 p-3  rounded-2xl text-2xl font-semibold text-white bg-brand-hoverD hover:bg-brand-default"
                    >
                        <img className="w-8 h-8 mr-2" src="/src/assets/icon.svg" alt="logo" />
                        RETURN TO HOME
                    </NavLink>

                    <div className="w-full bg-transparent rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-white md:text-2xl ">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white ">Your email</label>
                                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" id="email" className="bg-gray-700 border border-brand-default text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-brand-hoverL " placeholder="example@example.com" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white ">Password</label>
                                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" minLength="8" name="password" id="password" placeholder="••••••••" className="bg-gray-700 border border-brand-default text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-brand-hoverL" required />
                                </div>
                                <button className="w-full text-white bg-brand-default hover:bg-brand-hoverD focus:ring-1 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                    {loading ? (
                                        "Loading..."
                                    ) : (
                                        "Sign in to your account"
                                    )}

                                </button>
                                {error && <p className="text-sm font-light text-red-800 text-center">{error}</p>}
                                <p className="text-sm font-light text-white text-center">
                                    Don’t have an account yet? <NavLink to="/signup" href="#" className="font-bold text-white hover:underline decoration-brand-default  decoration-2">Sign up</NavLink>
                                </p>
                            </form>
                            <div className="flex items-center my-6">
                                <div className="w-full h-px bg-brand-default"></div>
                                <span className="px-3 text-white text-sm">OR</span>
                                <div className="w-full h-px bg-brand-default"></div>
                            </div>
                            <button onClick={() => signInWithGoogle()} className=" w-full  text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center items-center me-2 mb-2">
                                <GoogleLogo className="w-5 h-5 me-2" color="#f7f7f7" weight="bold" />
                                Sign in with Google
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
