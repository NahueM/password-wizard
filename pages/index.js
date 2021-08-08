import { useState } from 'react';
import Layout from '../components/Layout';

export default function Home() {
  const[isUnderAge, setIsUnderAge] = useState (true)

  const handleButtonClick= () => {
    
  }
  
  return (
        <Layout>
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
              <input className="mr-2 leading-tight" type="checkbox" onChange={() => setIsUnderAge(prev => !prev)}/>
            </label>
            {
              !isUnderAge &&
              <div className='flex justify-end m-5'>
                <button type="submit" disabled={isUnderAge} onClick={handleButtonClick} className="w-full py-2 px-4 border 
                border-transparent shadow-sm font-medium rounded-md text-white 
                bg-primary hover:bg-red-700 sm:w-40 md:w-48 text-lg ">
                  Next
                </button>
              </div>
            }
          </section>
        </Layout>
  )
}
