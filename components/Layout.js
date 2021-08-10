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
            <div className='w-full flex justify-center'>
                <Loading/>
            </div>
        )
        :(
            <div className="text-secondary">
                <Head>
                <title>{localize("passwordWizard")}</title>
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
    )
}

export default Layout
