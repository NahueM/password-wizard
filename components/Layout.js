import Head from 'next/head';
import Header from './Header'
import Banner from './Banner'


function Layout({children, page}) {
    return (
        <div className="text-secondary">
            <Head>
            <title>Password Wizard</title>
            <link rel="icon" href="/favicon.ico" />
            </Head> 
            <Header />
            {
                page === 'home' &&  <Banner />
            }
            <main className="max-w-6xl mx-auto px-8 sm:px-16">
                {children}
            </main>
        </div>
    )
}

export default Layout
