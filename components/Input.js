import {useState} from 'react'
import uniqid from 'uniqid';
import {CheckIcon} from '@heroicons/react/solid'
import useLocalizedMessages from '../hooks/useLocalizedMessages'
import {EyeIcon, EyeOffIcon} from '@heroicons/react/solid'


function Input({type, label= undefined, onChange, placeHolder, id, classname, value, errMsg={}}) {
    const [inputValue, setInputValue] = useState(value)
    const[isVisible, setIsVisible] = useState(false)   

    const localize = useLocalizedMessages();

    const toggleVisible = () =>{
        setIsVisible(prev => !prev)
    }
    
    const handleChange= (e) => {
        setInputValue(e.target.value)
        onChange({id, value:e.target.value})
    }
    return (
        <div className={`flex flex-col space-y-2 w-full ${classname} lg:w-5/12`}>
            {
                label !== undefined &&
                <label>{label}</label>
            }
            <div className='flex border-secondary items-center border '>
                <input 
                    className=' outline-none p-2 w-full'
                    id={id} 
                    type={isVisible ? 'text': type}
                    placeholder={placeHolder}    
                    value={inputValue}
                    onChange={handleChange}
                />  
                {
                    type === 'password' && isVisible 
                    && <EyeIcon onClick={toggleVisible} className='h-5 mr-4'/> 
                }
                {
                    type === 'password' && !isVisible
                    && <EyeOffIcon onClick={toggleVisible} className='h-5 mr-4'/>
                }
            </div>
            {  
                !!Object.keys(errMsg).length &&
                <div className='space-y-2 bg-gray-200 p-3' data-testid={id}>
                    {
                        Object.keys(errMsg)
                        .map(err => 
                        <div 
                            className={`text-xs flex space-x-4 ${errMsg[err]['status'] ? 'text-green-500' : 'text-red-500' }`} 
                            key={uniqid()}
                        >
                            {localize(errMsg[err]['msg'])}{errMsg[err]['status'] && <CheckIcon className='h-4'/>}
                        </div>
                        )
                    }
                </div>
            }
        </div>
    )
}

export default Input


/* ${errMsg[err]['status'] ? <XIcon className='h-5'> : <CheckIcon className='h-5'/>} */