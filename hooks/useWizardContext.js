import { createContext, useReducer, useContext } from 'react';

const WizardContext = createContext();

const initState = {
    form:{
        password: '',
        phrase: '',
    },
    lang:'en',
    isOverAgeChecked:false,
    loadingPage:'ok'
};

function wizardReducer(state, action) {
    switch (action.type) {
        case 'SET_FORM_INFO': {
            return {
                ...state,
                form: {...action.form},
            };
        }
        case 'CHANGE_OVER_AGE_CHECK_STATUS':{
            return{
                ...state,
                isOverAgeChecked: action.status
            }
        }
        case 'CHANGE_LANGUAGE':{
            return {
                ...state,
                lang: action.lang,
            };
        }
        case 'SET_REQUEST_STATUS':{
            return{
                ...state,
                loadingPage: action.status
            }
        }
        case 'RESET_STATE': {
            return{
                state : initState
            }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

function WizardContextProvider( props) {
    const [state, dispatch] = useReducer(wizardReducer, initState);
    return(
        <WizardContext.Provider value={[state, dispatch]} {...props}/>
    )
}

function UseWizardContext() {
    const context = useContext(WizardContext);
    if (!context) {
        throw new Error('useWizardContext must be used within the WizardContextProvider');
    }
    return context;
}

export {WizardContextProvider, UseWizardContext}
