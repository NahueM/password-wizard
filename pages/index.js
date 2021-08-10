import Layout from '../components/Layout';
import Link from 'next/link'
import {UseWizardContext} from '../hooks/useWizardContext'
import Button from '../components/Button'
import useLocalizedMessages from '../hooks/useLocalizedMessages'


export default function Home() {
  const [state, dispatch] = UseWizardContext();
  const {isOverAgeChecked} = state

  const localize = useLocalizedMessages();

  
  return (
        <Layout page='home'>
          <section className="pt-8">
            <h3 className="text-4xl font-semibold pb-5">{localize(`justFewSteps`)}</h3>
            <p>{localize(`need`)}</p>
            <ul className='list-disc m-5'>
              <li>{localize(`writePassword`)}</li>
              <li>{localize(`verifyPassword`)}</li>
              <li>{localize(`hintPhrase`)}</li>
            </ul>
          </section>
          <section className="pt-8">
            <span className="text-sm">
              {localize('confirmAge')}
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
                <Button type='button' isDisabled={!isOverAgeChecked} text={localize('next')}/>
              </Link>
            </div>
          </section>
        </Layout>
  )
}
