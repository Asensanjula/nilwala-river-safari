import React from 'react';
import Head from "next/head";

function Layout({children}) {
    return (
        <div>
            <Head>
                <title>Nilwala River Safari | Best Place for Madu River Safari</title>
            </Head>
            {/*<Notify/>*/}
            {/*<NavBar/>*/}
            {children}
        </div>
    );
}

export default Layout;