function Loading() {
    let circleCommonClasses = 'h-4 w-4 bg-primary rounded-full';

    return (
        <div className='flex flex-col items-center pt-20 space-y-4'>
            <div className='flex'>
                <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
                <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
                <div className={`${circleCommonClasses} animate-bounce400`}></div>
            </div>
            <p>Checking data</p>
        </div>
    );
}

export default Loading
