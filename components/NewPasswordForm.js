
import { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Input from './Input'
import Button from './Button'
import {UseWizardContext} from '../hooks/useWizardContext'
import {checkPassword, checkAreSamePassword} from '../utils/formHelper'
import {passwordErr, confirmPasswordErr} from '../constants/errMsg'
import {submitForm} from '../pages/api/psswAPI'
import useLocalizedMessages from '../hooks/useLocalizedMessages'


function NewPasswordForm() {
    const [state, dispatch] = UseWizardContext();
    const {form} = state
    const [formValues, setFormValues] = useState({...form, confirmPassword:''})
    const [errMsg, setErrMsg] = useState(passwordErr)
    const [confirmErrMsg, setConfirmErrMsg] = useState(confirmPasswordErr)
    const [isValidPassword, setIsValidPassword] = useState(false)
    const [areSamePassword, setAreSamePassword] = useState(false)

    const Router = useRouter()
    const localize = useLocalizedMessages();

    
    const handleInputChange = ({id, value}) => {
        const actualFormValues = {...formValues, [id] : value}
        setFormValues(actualFormValues)
        if(id === 'password'){
            setErrMsg(checkPassword(errMsg, value, setIsValidPassword))
        }
        if(actualFormValues.confirmPassword !== ''){
            setConfirmErrMsg(checkAreSamePassword(confirmErrMsg, actualFormValues, setAreSamePassword))
        }
    }
    
    const handleNextButtonClick = async (e) =>{
        dispatch({ type: 'SET_REQUEST_STATUS', status:'loading' });
        const res = await submitForm(formValues.password)
            .then(response => response)
            .catch(e => e)
        Router.push({ pathname: '/FeedBackPage', query:{requestStatus: res.status }})
    }
    
    return (
        <section className='pt-8'>
                    <h1 className='text-primary text-2xl font-semibold mb-8'>{localize(`createNewPassword`)}</h1>
                    <form className='flex flex-col p-5 border border-secondaryGrey'>
                        <div className='flex flex-col lg:flex-row justify-between content-center pb-4'>
                            <Input 
                                type='password' 
                                classname='mb-4' 
                                label={localize(`newPassword`)}
                                id='password'  
                                placeHolder={localize(`newPassword`)}
                                value={form?.password}
                                onChange={handleInputChange}
                                errMsg={errMsg}
                            />
                            <Input 
                                type='password' 
                                label={localize(`confirmYourPassword`)} 
                                id='confirmPassword'  
                                placeHolder={localize(`confirm`)}
                                value={form?.confirmPassword}
                                onChange={handleInputChange}
                                errMsg={confirmErrMsg}
                            />
                        </div>       
                        <Input 
                            type='text' 
                            label={localize(`phraseClue`)}
                            id='phrase' 
                            placeHolder={localize(`willHelpYou`)}
                            value={form?.phrase}
                            onChange={handleInputChange}
                        />
                        <div className='flex flex-row w-full pt-5 space-x-4 sm:justify-between'>
                                <Link href="/" passHref>
                                    <Button 
                                        type='button' 
                                        isDisabled={false} 
                                        text={localize(`back`)}
                                    />
                                </Link>
                                <Button 
                                    type='button' 
                                    isDisabled={!isValidPassword || !areSamePassword} 
                                    text={localize(`next`)}
                                    onClick={handleNextButtonClick}
                                />
                        </div>
                    </form>
                </section>
    )
}

export default NewPasswordForm
