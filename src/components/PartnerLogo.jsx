import React from 'react'

const PartnerLogo = () => {
    return (
        <>
            <section id="Partner" class="py-12 bg-white sm:py-16 lg:py-20">
                <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div class="">
                        <h2 class="text-3xl font-bold text-gray-900 flex justify-center lg:text-5xl mb-10">Our Partners</h2>

                        <div class="grid items-center grid-cols-1 mt-10 gap-y-6 xl:mt-0 sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-4 lg:gap-x-8">
                            <a href='https://suvrodip-chakroborty.vercel.app/'><img class="object-contain w-auto mx-auto h-20 rounded-lg shadow-md cursor-pointer hover:translate-y-[-4px]" src="/suvrodip.png" alt="" /> </a>
                            <a href='https://e-bazar-teec.vercel.app/'><img class="object-contain w-auto mx-auto h-20 rounded-lg shadow-md cursor-pointer hover:translate-y-[-4px]" src="/e-bazar.png" alt="" /> </a>
                            <a href='https://fast-chat-bn45.onrender.com/'><img class="object-contain w-auto mx-auto h-20 rounded-lg shadow-md cursor-pointer hover:translate-y-[-4px]" src="/fast-chat.png" alt="" /> </a>
                            <a href='https://global-meet-gray.vercel.app/'><img class="object-contain w-auto mx-auto h-20 rounded-lg shadow-md cursor-pointer hover:translate-y-[-4px]" src="/global-meet.png" alt="" /> </a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default PartnerLogo