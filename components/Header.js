import Image from 'next/image'
import HeaderItme from './HeaderItme';
import { HomeIcon, LightningBoltIcon, UserIcon, SearchIcon, CollectionIcon, BadgeCheckIcon } from "@heroicons/react/outline"
function Header() {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <HeaderItme Icon={HomeIcon} title={"Home"} />
                <HeaderItme Icon={LightningBoltIcon} title={"Trending"} />
                <HeaderItme Icon={BadgeCheckIcon} title={"Verified"} />
                <HeaderItme Icon={CollectionIcon} title={"Collections"} />
                <HeaderItme Icon={SearchIcon} title={"Serach"} />
                <HeaderItme Icon={UserIcon} title={"Account"} />
            </div>
            <Image className='object-contain'
                src="https://suplari.com/wp-content/uploads/2019/09/hulu-logo-white.png"
                alt="hulu"
                width={"200"}
                height={"100"} />

        </header>
    )
}

export default Header;

