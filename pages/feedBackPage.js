import { useEffect } from 'react';
import SuccessCard from '../components/Cards/SuccessCard'
import FailCard from '../components/Cards/FailCard'
import {UseWizardContext} from '../hooks/useWizardContext'

function FeedBackPage({response}) {
    const [state, dispatch] = UseWizardContext();

    useEffect(() => {
        let componentMounted = true;
        if(componentMounted){
            dispatch({ type: 'SET_REQUEST_STATUS', status:'ok' });
        }
       return () => {
        componentMounted = false;
       }
   }, []) 

    return (
        <div className='flex justify-center w-full'>
            {
                response === '200' 
                ? <SuccessCard/>
                : <FailCard/>
            }   
        </div>
    )
}

FeedBackPage.getInitialProps = (ctx) => {
    const {query} = ctx
    return { response: query.requestStatus }
  }

export default FeedBackPage
