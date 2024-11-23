import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/actions/authActions";
export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const authStore = useSelector((state) => state.authStore)
    console.log("AuthStore signIn :  ", authStore);


    const handleSubmit = (e) => {
        dispatch(login({ email, password }))
        e.preventDefault();
    }

    const loading = authStore.loading;
    const error = authStore.error;


    return (
        <div className=" w-full h-screen custom-gradient">
            <section className="bg-transparent">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-white">
                        <img className="w-8 h-8 mr-2" src="/src/assets/icon.svg" alt="logo" />
                        MyTinerary
                    </a>
                    <div className="w-full bg-transparent rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-white md:text-2xl ">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white ">Your email</label>
                                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" id="email" className="bg-gray-700 border border-brand-default text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-brand-hoverL " placeholder="example@example.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white ">Password</label>
                                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" minLength="8" name="password" id="password" placeholder="••••••••" className="bg-gray-700 border border-brand-default text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-brand-hoverL" required="" />
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
                                    Don’t have an account yet? <a href="#" className="font-bold text-white hover:underline decoration-brand-default  decoration-2">Sign up</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
