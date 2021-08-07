import Image from 'next/image';

function Header() {
    return (
        <header className="sticky top-0 z-50  bg-white 
        shadow-md p-5  md:px-10">
            <div className='max-w-6xl mx-auto px-8 grid grid-cols-2'>
                <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                    <Image 
                        src="https://www.openbank.es/assets/logo_topbar/Logo_Web_11.svg"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="left"
                        alt="logo"
                    />
                </div>
                <div className="flex items-center font-quicksand justify-end">
                    <h1 className="font-quicksand text-secondary text-2xl md:text-3xl">Password Wizard</h1>
                </div>
            </div>
        </header>
    )
}

export default Header
