import React from 'react';
import Navbar from './Navbar';

const Signin = () => {
    return (
        <>
            <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative max-w-md mx-auto lg:max-w-lg">
                        <div className="absolute -inset-2">
                            <div
                                className="w-full h-full mx-auto rounded-3xl opacity-30 blur-lg filter"
                                style={{
                                    background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)'
                                }}
                            ></div>
                        </div>

                        <div className="relative overflow-hidden bg-white shadow-xl rounded-xl">
                            <div className="px-4 py-6 sm:px-8">
                                <div className="flex items-center justify-between">
                                    <h1 className="text-xl font-bold text-gray-900 font-pj">Welcome back</h1>

                                </div>

                                <form action="#" method="POST" className="mt-12">
                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="email" className="text-base font-medium text-gray-900 font-pj">
                                                Email
                                            </label>
                                            <div className="mt-2.5">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Your email address"
                                                    className="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex items-center justify-between">
                                                <label htmlFor="password" className="text-base font-medium text-gray-900 font-pj">
                                                    Password
                                                </label>

                                                <a
                                                    href="#"
                                                    title=""
                                                    className="text-base font-medium text-gray-500 rounded font-pj hover:text-gray-900 hover:underline focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                                                >
                                                    Forgot your password?
                                                </a>
                                            </div>
                                            <div className="mt-2.5">
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    placeholder="Enter Your password"
                                                    className="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                                                />
                                            </div>
                                        </div>

                                        {/* <div className="relative flex items-center mt-4">
                                        <div className="flex items-center h-5">
                                            <input
                                                type="checkbox"
                                                name="terms"
                                                id="terms"
                                                className="w-5 h-5 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                                            />
                                        </div>

                                        <div className="ml-3 text-base">
                                            <label htmlFor="terms" className="font-normal text-gray-900 font-pj">
                                                Remember me
                                            </label>
                                        </div>
                                    </div> */}
                                    </div>

                                    <button
                                        type="submit"
                                        className="flex items-center justify-center w-full px-8 py-4 mt-8 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-gray-600"
                                    >
                                        Sign in
                                    </button>

                                    <p className="text-base font-normal text-gray-900 font-pj flex justify-center mt-5">
                                        Don&apos;t have an account{' '}
                                        <a
                                            href="/signup"
                                            title=""
                                            className="font-bold rounded hover:underline focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                                        >
                                            Sign up
                                        </a>
                                    </p>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Signin;
