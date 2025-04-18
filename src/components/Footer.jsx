import React from 'react';
import { FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <section id="Contact" className="py-10 sm:pt-16 lg:pt-24 bg-white">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        <a href="/" className="flex items-center gap-2 -mt-5 -mb-5 -ml-2">
                            <img className="w-auto h-10 lg:h-12" src="/tittle_logo.png" alt="Global-Meet Logo" />
                            <p className="text-2xl lg:text-3xl font-bold">
                                <span className="text-blue-600">G</span>
                                <span className="text-red-600">l</span>
                                <span className="text-yellow-400">o</span>
                                <span className="text-blue-600">b</span>
                                <span className="text-green-600">a</span>
                                <span className="text-red-600">l</span>
                                <span className="text-gray-500">-</span>
                                <span className="text-blue-600">M</span>
                                <span className="text-red-600">e</span>
                                <span className="text-yellow-400">e</span>
                                <span className="text-green-600">t</span>
                            </p>
                        </a>
                        <p className="text-base leading-relaxed text-gray-600 mt-7">Seamless and secure video conferencing. Connect and create wherever you are.</p>
                        <ul className="flex items-center space-x-3 mt-9">
                            <li><a href="#" className="flex items-center justify-center text-white bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600"><FaXTwitter /></a></li>
                            <li><a href="#" className="flex items-center justify-center text-white bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600"><FaInstagram /></a></li>
                            <li><a href="#" className="flex items-center justify-center text-white bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600"><FaGithub /></a></li>
                            <li><a href="https://suvrodip-chakroborty.vercel.app/" className="flex items-center justify-center text-white bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600"><FaGlobe /></a></li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Discover</p>
                        <ul className="mt-6 space-y-4">
                            <li><a href="#" className="text-base text-black hover:text-blue-600">Features</a></li>
                            <li><a href="#" className="text-base text-black hover:text-blue-600">Pricing</a></li>
                            <li><a href="#" className="text-base text-black hover:text-blue-600">Why Global-Meet</a></li>
                            <li><a href="#" className="text-base text-black hover:text-blue-600">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Support</p>
                        <ul className="mt-6 space-y-4">
                            <li><a href="#" className="text-base text-black hover:text-blue-600">Help Center</a></li>
                            <li><a href="#" className="text-base text-black hover:text-blue-600">FAQs</a></li>
                            <li><a href="#" className="text-base text-black hover:text-blue-600">Live Chat</a></li>
                            <li><a href="#" className="text-base text-black hover:text-blue-600">Report Issue</a></li>
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Send us a message</p>
                        <form action="https://formsubmit.co/suvrodipchakroborty01@gmail.com" method="POST" className="mt-6">
                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Enter your message"
                                    className="block w-full p-4 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 resize-none h-28"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="inline-flex items-center justify-center px-6 py-3 mt-3 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">Send</button>
                        </form>
                    </div>
                </div>

                <hr className="mt-16 mb-10 border-gray-200" />
                <p className="text-sm text-center text-gray-600">© 2025, All Rights Reserved by Global-Meet</p>
            </div>
        </section>
    );
};

export default Footer;
