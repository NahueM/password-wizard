import SuccessCard from '../components/Cards/SuccessCard'
import FailCard from '../components/Cards/FailCard'

function feedBackPage({response}) {
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

feedBackPage.getInitialProps = (ctx) => {
    const {query} = ctx
    return { response: query.requestStatus }
  }

export default feedBackPage
