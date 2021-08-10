import {CheckCircleIcon, ChevronRightIcon} from '@heroicons/react/solid'
import Link from 'next/link'
import {UseWizardContext} from '../../hooks/useWizardContext'
import useLocalizedMessages from '../../hooks/useLocalizedMessages'


function SuccessCard() {
    const [, dispatch] = UseWizardContext();
    const localize = useLocalizedMessages();


    const handleLogInClick = () =>{
        dispatch({ type: 'RESET_STATE' });
    }
    return (
        <div className='flex flex-col m-10 border-b-2 border-gray-300 border-solid shadow-md'>
            <div className='flex p-5 border-b border-gray-300 border-solid space-x-4 items-center'>
                <CheckCircleIcon className='h-10 text-green-500'/>
                <div className=''>
                    <h1 className='font-semibold text-base md:text-xl'>
                        {localize('successPassword')}
                    </h1>
                </div>
            </div>
            <Link href='/' passHref >
                <div className='flex m-5 justify-end items-center cursor-pointer'>
                    <a onClick={handleLogInClick} className='text-semibold text-md text-primary'>{localize('logIn')}</a>
                    <ChevronRightIcon className='h-5 text-primary'/>
                </div>
            </Link>
        </div>
    )
}

export default SuccessCard
