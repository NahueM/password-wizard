/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import Header from './Header'
import Banner from './Banner'
import Loading from './Loading'
import {UseWizardContext} from '../hooks/useWizardContext'
import useLocalizedMessages from '../hooks/useLocalizedMessages'



function Layout({children, page}) {
    const [state] = UseWizardContext();
    const {loadingPage, lang} = state

    const localize = useLocalizedMessages();



    return (
        loadingPage === 'loading'
        ? (
            <div className='w-full flex justify-center font-primary'>
                <Loading/>
            </div>
        )
        :(
            <div className="text-secondary font-primary">
                <Head>
                    <title>{localize("passwordWizard")}</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap" rel="stylesheet"/>
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
    )
}

export default Layout
