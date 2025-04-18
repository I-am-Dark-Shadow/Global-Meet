import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const [roomId, setRoomId] = useState("");
    const navigate = useNavigate();

    const generateRoomId = () => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i = 0; i < 10; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };

    const handleCreateRoom = () => {
        const newId = generateRoomId();
        setRoomId(newId);
        navigate(`/room/${newId}`);
    };

    const handleJoinRoom = () => {
        if (roomId.trim() !== "") {
            navigate(`/room/${roomId}`);
        } else {
            alert("Please enter a room code to join.");
        }
    };

    return (
        <div className="bg-gray-50">
            <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-40">
                        <div>
                            <div className="text-center lg:text-left">
                                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl font-pj">
                                    Welcome to Global Meet
                                </h1>
                                <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">
                                    Start a free Video Conference Call with your friends, family, or team members.
                                </p>

                                <div className="mt-8 sm:mt-10">
                                    <div className="space-y-4">
                                        <input
                                            type="text"
                                            value={roomId}
                                            onChange={(e) => setRoomId(e.target.value)}
                                            placeholder="Enter or Generate Room ID"
                                            className="w-full px-4 py-4 text-gray-900 placeholder-gray-500 bg-white border border-gray-400 rounded-xl outline-none focus:ring-2 focus:ring-gray-900"
                                        />

                                        <div className="flex gap-4">
                                            <button
                                                type="button"
                                                onClick={handleCreateRoom}
                                                className="px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg hover:bg-gray-700"
                                            >
                                                Create Code
                                            </button>

                                            <button
                                                type="button"
                                                onClick={handleJoinRoom}
                                                className={`px-6 py-3 text-lg font-bold text-white transition-all duration-200 rounded-lg ${roomId.trim() !== ""
                                                        ? "bg-green-600 hover:bg-green-700"
                                                        : "bg-gray-400 cursor-not-allowed"
                                                    }`}
                                            >
                                                Join Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center'>
                            <img className="w-[95%] rounded-xl" src="/hero_logo.png" alt="Hero" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
