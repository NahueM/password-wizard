
import * as React from 'react'
import {render as rtlRender} from '@testing-library/react'
import {WizardContextProvider} from '../hooks/useWizardContext'
import { IntlProvider } from "react-intl"
import * as locales from "../content/locale"


function render(ui, { ...options } = {}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const localeCopy = locales['en']
    const messages = localeCopy
    const Wrapper = ({ children }) => (
        <WizardContextProvider>
         <IntlProvider
          locale={'en'}
          defaultLocale={'en'}
          messages={messages}
          >
            {children}
          </IntlProvider>
        </WizardContextProvider>
    );
    return rtlRender(ui, { wrapper: Wrapper, ...options });
}

export * from '@testing-library/react'

export {render}