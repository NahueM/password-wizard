
import { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Input from './Input'
import Button from './Button'
import {UseWizardContext} from '../hooks/useWizardContext'
import {checkPassword, checkAreSamePassword} from '../utils/formHelper'
import {passwordErr, confirmPasswordErr} from '../constants/errMsg'
import {submitForm} from '../pages/api/psswAPI'

function NewPasswordForm() {
    const [state, dispatch] = UseWizardContext();
    const {form} = state
    const [formValues, setFormValues] = useState({...form, confirmPassword:''})
    const [errMsg, setErrMsg] = useState(passwordErr)
    const [confirmErrMsg, setConfirmErrMsg] = useState(confirmPasswordErr)
    const [isValidPassword, setIsValidPassword] = useState(false)
    const [areSamePassword, setAreSamePassword] = useState(false)

    const Router = useRouter()

    
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
        dispatch({ type: 'SET_REQUEST_STATUS', status:'ok' });
        Router.push(`/feedBackPage/?requestStatus=${res.status}`)
    }
    return (
        <section className='pt-8'>
                    <h1 className='text-primary text-2xl font-semibold mb-8'>Create New Password</h1>
                    <form className='flex flex-col p-5 border border-secondaryGrey'>
                        <div className='flex flex-col lg:flex-row justify-between content-center pb-4'>
                            <Input 
                                type='password' 
                                classname='mb-4' 
                                label='New password' 
                                id='password'  
                                placeHolder='New Password'
                                value={form?.password}
                                onChange={handleInputChange}
                                errMsg={errMsg}
                            />
                            <Input 
                                type='password' 
                                label='Confirm your password' 
                                id='confirmPassword'  
                                placeHolder='Confirm'
                                value={form?.confirmPassword}
                                onChange={handleInputChange}
                                errMsg={confirmErrMsg}
                            />
                        </div>       
                        <Input 
                            type='text' 
                            label='Phrase hint' 
                            id='phrase' 
                            placeHolder='Will help you remember password'
                            value={form?.phrase}
                            onChange={handleInputChange}
                        />
                        <div className='flex flex-row w-full pt-5 space-x-4 md:justify-between'>
                                <Link href="/" passHref>
                                    <Button 
                                        type='button' 
                                        isDisabled={false} 
                                        text='Back'
                                    />
                                </Link>
                                <Button 
                                    type='button' 
                                    isDisabled={!isValidPassword || !areSamePassword} 
                                    text='Next'
                                    onClick={handleNextButtonClick}
                                />
                        </div>
                    </form>
                </section>
    )
}

export default NewPasswordForm
