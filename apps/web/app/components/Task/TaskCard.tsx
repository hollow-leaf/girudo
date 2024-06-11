import Image from 'next/image'

export function TaskCard() {
    return (
        <div className="my-4 glass cursor-pointer max-w-xl border-1 border-cBlue justify-between space-x-5 text-black p-4 flex rounded-md">
            <div>
                <div className="text-sm md:text-lg">下午6:00</div>
                <div className="md:text-2xl font-medium">ADPList Taipei 🇹🇼 Community Night</div>
                <div className="flex items-center">
                    <Image
                    className='p-1 mr-1'
                    src="/party.svg"
                    width={24}
                    height={24}
                    alt="Picture of the author"
                    />
                    <div className="text-sm md:text-lg">XueDAO</div>
                </div>
                <div className="flex items-center">
                    <Image
                    className='p-1 mr-1'
                    src="/medal.svg"
                    width={24}
                    height={24}
                    alt="Picture of the author"
                    />
                    <div className="text-sm md:text-lg">100 points</div>
                </div>
                <div className="flex">
                    <div className="text-xs bg-cBlue p-1 rounded-md text-white md:text-sm">參加</div>
                </div>
            </div>
            <div>
                <Image
                src="/task0.png"
                width={180}
                height={180}
                alt="Picture of the author"
                />
            </div>
        </div>
    )
}