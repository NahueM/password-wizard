
import * as React from 'react'
import {render as rtlRender} from '@testing-library/react'
import {WizardContextProvider} from '../hooks/useWizardContext'


function render(ui, { ...options } = {}) {
    // eslint-disable-next-line react/prop-types
    const Wrapper = ({ children }) => (
        <WizardContextProvider>{children}</WizardContextProvider>
    );
    return rtlRender(ui, { wrapper: Wrapper, ...options });
}

export * from '@testing-library/react'

export {render}