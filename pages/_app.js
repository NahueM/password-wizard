import 'tailwindcss/tailwind.css'
import {WizardContextProvider} from '../hooks/useWizardContext.js'

function MyApp({ Component, pageProps }) {
  return (
      <WizardContextProvider>
        <Component {...pageProps} />
      </WizardContextProvider>
    )
  } 
  
  export default MyApp
