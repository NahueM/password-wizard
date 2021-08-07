import Image from "next/image"

function Banner() {
    return (
        <div className='relative h-[200px] sm:h-[300px] lg:h-[400px] 
        xl:[500px] 2xl:[600px]'>
            <Image 
                src="/assets/img/banner.jpeg"
                layout="fill"
                objectFit="cover"
                alt='banner'
            />
            <div className='absolute bg-secondary bg-opacity-50 text-white p-3 top-0 m-5 h-20 md:m-10 '>
                <h2 className='text-lg font-bold md:text-2xl'>
                Welcome to <span className='text-primary ml-2'>Current account OpenClose</span>
                </h2>
                <p className='text-sm md:text-lg'> We will guide you, through the process of setting your password</p>
            </div>
        </div>
    )
}

export default Banner
