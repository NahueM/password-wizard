import Layout from '../components/Layout';
import Link from 'next/link'
import {UseWizardContext} from '../hooks/useWizardContext'
import Button from '../components/Button'


export default function Home() {
  const [state, dispatch] = UseWizardContext();
  const {isOverAgeChecked} = state
  
  return (
        <Layout page='home'>
          <section className="pt-8">
            <h3 className="text-4xl font-semibold pb-5">Just a few steps</h3>
            <p>For this process we will need</p>
            <ul className='list-disc m-5'>
              <li>Name</li>
              <li>Last name</li>
              <li>Valid e-mail account</li>
            </ul>
          </section>
          <section className="pt-8">
            <span className="text-sm">
              Confirm that you are over 18 years old
            </span>
            <label className="ml-5 text-secondary font-bold">
              <input 
              className="mr-2 leading-tight" 
              checked={isOverAgeChecked} 
              type="checkbox" 
              onChange={() =>  dispatch({ type: 'CHANGE_OVER_AGE_CHECK_STATUS', status: !isOverAgeChecked })}/>
            </label>
            <div className='flex justify-end m-5'>
              <Link href="/formPage" passHref>
                <Button type='button' isDisabled={!isOverAgeChecked} text='Next'/>
              </Link>
            </div>
          </section>
        </Layout>
  )
}
