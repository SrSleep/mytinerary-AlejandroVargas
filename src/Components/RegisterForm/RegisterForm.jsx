import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { signUp } from "../../store/actions/authActions";

import { GoogleLogo } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
export default function RegisterForm() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [country, setCountry] = useState('');
    const [fileName, setFileName] = useState('')

    const [listCountries, setListCountries] = useState([]);




    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };
    const dispatch = useDispatch();
    const authStore = useSelector((state) => state.authStore)
    const loading = authStore.loading;
    const error = authStore.error;

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(signUp({ email, password, name, lastName, country, fileName }))
    }

    const signInWithGoogle = () => {
        window.location.href = ('http://localhost:8080/api/auth/signin/google');
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };


    const countries = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/city/country`);
            setListCountries(response.data.countries);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        countries();
    }, []);



    return (
        <div className=" w-full h-screen custom-gradient">
            <section className="bg-transparent">
                <div className="flex flex-col items-center justify-center overflow-auto px-3 py-3 mx-auto min-h-screen md:h-screen lg:py-0">
                    <button onClick={() => navigate(-1)}
                        className="flex items-center mb-6 p-3 rounded-2xl text-xl md:text-2xl font-semibold text-white bg-brand-hoverD hover:bg-brand-default"
                    >
                        <img className="w-6 h-6 md:w-8 md:h-8 mr-2" src="/src/assets/icon.svg" alt="logo" />
                        Already you have an account?
                    </button>

                    <div className="w-full bg-transparent rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-white md:text-2xl ">
                                Register for an account
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

                                <div className="grid gap-2 md:grid-cols-2 md:gap-6">
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-white ">Your First Name</label>
                                        <input onChange={(e) => setName(e.target.value)} value={name} type="text" name="name" id="name" placeholder="Type your first name" className="bg-gray-700 border border-brand-default text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-brand-hoverL" pattern="[A-Za-z]+" title="Only letters are allowed (no numbers or special characters)" required />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-white ">Your Last Name</label>
                                        <input onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" name="lastName" id="lastName" placeholder="Type your last name" className="bg-gray-700 border border-brand-default text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-brand-hoverL" pattern="[A-Za-z]+" title="Only letters are allowed (no numbers or special characters)" required />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your country</label>
                                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={country} onChange={handleCountryChange} required >
                                        <option value="">Select a country</option>
                                        {listCountries.map((country) => (
                                            <option key={country._id} value={country._id}>{country.country}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-white" htmlFor="user_avatar">Upload file</label>
                                    <input className="block w-full text-sm text-gray-900 border border-brand-default rounded-lg cursor-pointer bg-gray-50 dark:text-white focus:outline-none dark:bg-gray-700 dark:border-brand-default dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" accept=".jpg, .png" onChange={handleFileChange} required />
                                    <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>
                                </div>

                                <button className="w-full text-white bg-brand-default hover:bg-brand-hoverD focus:ring-1 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                    {loading ? (
                                        "Loading..."
                                    ) : (
                                        "Sign up for your account"
                                    )}
                                </button>
                                {error && Array.isArray(error) && (
                                    <div className="text-sm font-light text-red-800 text-center">
                                        {error.map((err, index) => (
                                            <div key={index}>
                                                <p >{err}</p>
                                                {index < error.length - 1 && (
                                                    <div className="flex items-center my-6">
                                                        <div className="w-full h-px bg-white"></div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}

                            </form>
                            <div className="flex items-center my-6">
                                <div className="w-full h-px bg-brand-default"></div>
                                <span className="px-3 text-white text-sm">OR</span>
                                <div className="w-full h-px bg-brand-default"></div>
                            </div>
                            <button onClick={() => signInWithGoogle()} className=" w-full  text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center items-center me-2 mb-2">
                                <GoogleLogo className="w-5 h-5 me-2" color="#f7f7f7" weight="bold" />
                                Sign up with Google
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
