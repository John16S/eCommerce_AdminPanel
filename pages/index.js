import React from "react";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
    const { data: session } = useSession()
    if (!session) {
        return (
            <div className={"bg-gradient-to-r from-[#4F6096] to-[#8085B8] min-h-screen bg-bottom bg-no-repeat bg-fixed"}>
                {/* **********************************Body********************************* */}

                {/*******************************!Top section*******************************/}
                {/*****************************Title "Security"***************************************/}
                <div className="flex items-center justify-between p-6">
                    <a href="#" className="flex items-center gap-2">
                        <svg className="h-10 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
                        </svg>
                        <span className="text-xl font-black">Security</span>
                    </a>
                    {/* **********************************Sign In********************************* */}
                    <div>
                        <a href="#"
                           className="rounded-md bg-green-600 py-2 px-4 text-white font-semibold shadow-lg hover:shadow-xl focus:shadow-xl hover:bg-green-400 transition duration-200 ease-in-out">
                            Login
                        </a>
                    </div>
                </div>

                {/*******************************!Main section*******************************/}
                {/*****************************<<Create your account>>***************************************/}
                <div className="flex flex-col justify-center">
                    <div className="mx-auto max-w-md">
                        <svg className="h-12 mx-auto text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <h2 className="text-3xl font-bold text-gray-800">Create your account</h2>
                    </div>
                    {/*******************************BLock forms*******************************/}
                    <div
                        className="bg-white/40 backdrop-blur-lg mt-3 mx-auto rounded-xl shadow-xl p-10 max-w-sm w-full flex-col justify-center">
                        <form action="#" className="space-y-3">
                            {/*******************************<<Name>>*******************************/}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <div className="relative rounded-md shadow-sm mt-1">
                                    <div
                                        className="absolute left-0 inset-y-0 flex items-center pl-3"> {/*Абсолютное позиционирование относительно родителя*/}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                    </div>
                                    <input type="text" id="name" name="name" required
                                           className="border-gray-300 py-2 rounded-md focus:border-green-500 focus:ring-green-500 text-sm pl-10 w-full"
                                           placeholder="John Cena"
                                    />
                                </div>
                            </div>
                            {/*******************************<<Email>>*******************************/}
                            <div>
                                <label className={"block text-sm font-medium text-gray-700"}>Email</label>
                                <div className="relative rounded-md shadow-sm mt-1">
                                    <div
                                        className="absolute left-0 inset-y-0 flex items-center pl-3">{/*Абсолютное позиционирование относительно родителя*/}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <input type="email" id="email" name="email"
                                           className="border-gray-300 py-2 rounded-md focus:border-green-500 focus:ring-green-500 text-sm pl-10 w-full"
                                           placeholder="johncena@example.com"
                                    />
                                </div>
                            </div>
                            {/*******************************<<Password>>*******************************/}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <div className="relative rounded-md shadow-sm mt-1">
                                    <div
                                        className="absolute left-0 inset-y-0 flex items-center pl-3">{/*Абсолютное позиционирование относительно родителя*/}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                        </svg>
                                    </div>
                                    <input type="password" id="password" name="password" minLength="8"
                                           className="border-gray-300 py-2 rounded-md focus:border-green-500 focus:ring-green-500 text-sm pl-10 w-full"
                                           placeholder="Minimum 8 characters"
                                    />
                                </div>
                            </div>
                            {/*******************************<<Password_confirm>>*******************************/}
                            <div>
                                <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">
                                    Confirm password</label>
                                <div className="relative rounded-md shadow-sm mt-1">
                                    <div
                                        className="absolute left-0 inset-y-0 flex items-center pl-3">{/*Абсолютное позиционирование относительно родителя*/}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                        </svg>
                                    </div>
                                    <input type="password" id="password_confirmation" name="password_confirmation"
                                           minLength="8"
                                           className="border-gray-300 py-2 rounded-md focus:border-green-500 focus:ring-green-500 text-sm pl-10 w-full"
                                           placeholder="Minimum 8 characters"
                                    />
                                </div>
                            </div>
                            <div className={'flex items-center justify-between'}>
                                <button className="rounded-md bg-green-600 py-2 px-4 mt-3 text-white font-semibold shadow-lg hover:shadow-xl focus:shadow-xl hover:bg-green-400 transition duration-200 ease-in-out">
                                    Sign in
                                </button>
                                <button onClick={() => signIn('')} className="rounded-md bg-blue-700 py-2 px-4 mt-3 text-white font-semibold shadow-lg hover:shadow-xl focus:shadow-xl hover:bg-blue-900 transition duration-200 ease-in-out">
                                    Login with Google
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
    return (
        <>
            Signed in as {session.user.name} <br />
            <button onClick={() => signOut()}>Sign out</button>
        </>
    )
}
