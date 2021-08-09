
import { useState } from 'react';
import Link from 'next/link'
import Input from './Input'
import Button from './Button'
import {UseWizardContext} from '../hooks/useWizardContext'
import {checkPassword, checkAreSamePassword} from '../utils/formHelper'
import {passwordErr, confirmPasswordErr} from '../constants/errMsg'

function NewPasswordForm() {
    const [state, dispatch] = UseWizardContext();
    const {form} = state
    const [formValues, setFormValues] = useState({...form, confirmPassword:''})
    const [errMsg, setErrMsg] = useState(passwordErr)
    const [confirmErrMsg, setConfirmErrMsg] = useState(confirmPasswordErr)
    const [isValidPassword, setIsValidPassword] = useState(false)
    const [areSamePassword, setAreSamePassword] = useState(false)

    
    const handleChange = ({id, value}) => {
        setFormValues(prev => ({...prev, [id] : value}))
        if(id === 'password'){
            setErrMsg(checkPassword(errMsg, value, setIsValidPassword))
        }
        setConfirmErrMsg(checkAreSamePassword(confirmErrMsg, formValues.password, value, setAreSamePassword))
    }
    
    const handleSubmit = (e) =>{
        console.log("🚀 ~ file: formPage.js ~ line 12 ~ formPage ~ formValues", formValues)

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
                                placeHolder='Min 8 - Max 24 - at least 1 number & 1 upperCase'
                                value={form?.password}
                                onChange={handleChange}
                                errMsg={errMsg}
                            />
                            <Input 
                                type='password' 
                                label='Confirm your password' 
                                id='confirmPassword'  
                                placeHolder='Confirm'
                                value={form?.confirmPassword}
                                onChange={handleChange}
                                errMsg={confirmErrMsg}
                            />
                        </div>       
                        <Input 
                            type='text' 
                            label='Phrase hint' 
                            id='phrase' 
                            placeHolder='Will help you remember password'
                            value={form?.phrase}
                            onChange={handleChange}
                        />
                        <div className='flex flex-row pt-5 space-x-4 md:justify-around'>
                            <Link href="/" passHref>
                                <Button 
                                    type='button' 
                                    isDisabled={false} 
                                    text='Back'
                                />
                            </Link>
                            <Link href="/feedBackPage" passHref>
                                <Button 
                                    type='button' 
                                    isDisabled={!isValidPassword || !areSamePassword} 
                                    text='Next'
                                />
                            </Link>
                        </div>
                    </form>
                </section>
    )
}

export default NewPasswordForm
