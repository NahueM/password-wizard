import {useState} from 'react'
import uniqid from 'uniqid';

function Input({type, label= undefined, onChange, placeHolder, id, classname, value, errMsg={}}) {

    const [inputValue, setInputValue] = useState(value)   
    
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
            <input 
                className='border border-secondary p-2 w-full'
                id={id} 
                type={type}
                placeholder={placeHolder}    
                value={inputValue}
                onChange={handleChange}
            />  
            {  
                !!Object.keys(errMsg).length &&
                <div className='space-y-2 bg-gray-200 p-3' data-testid={id}>
                    {
                        Object.keys(errMsg)
                        .map(err => 
                        <div 
                            className={`text-xs ${errMsg[err]['status'] ? 'text-green-500' : 'text-red-500' }`} 
                            key={uniqid()}>{errMsg[err]['msg']}
                        </div>)
                    }
                </div>
            }
        </div>
    )
}

export default Input
