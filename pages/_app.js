import { IntlProvider } from "react-intl"
import { useRouter } from "next/router"
import * as locales from "../content/locale"
import 'tailwindcss/tailwind.css'
import {WizardContextProvider} from '../hooks/useWizardContext.js'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const { locale, defaultLocale } = router
  const localeCopy = locales[locale]
  const messages = localeCopy

  return (
      <WizardContextProvider>
        <IntlProvider
          locale={locale}
          defaultLocale={defaultLocale}
          messages={messages}
          >
          <Component {...pageProps} />
        </IntlProvider>
      </WizardContextProvider>
    )
  } 
  
  export default MyApp
