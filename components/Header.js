import Image from 'next/image'
import HeaderItme from './HeaderItme';
import { HomeIcon } from "@heroicons/react/outline"
function Header() {
    return (
        <header>
            <HeaderItme Icon={HomeIcon} title={"Home"} />
            <Image className='object-contain'
                src="https://suplari.com/wp-content/uploads/2019/09/hulu-logo-white.png"
                alt="hulu"
                width={"200"}
                height={"100"} />
        </header>
    )
}

export default Header;

