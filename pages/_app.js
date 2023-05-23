import '@/styles/globals.css'
import React, {useEffect, useState} from "react";
import { SessionProvider } from "next-auth/react"


export default function App({Component, pageProps: { session, ...pageProps },}) {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    )
}