import { useRouter } from "next/router"
import requests from "../utils/requests"

function Nav() {
    const router = useRouter();
    return (
        <nav className="relative">
            <div className="flex px-10 sm:px-20 whitespace-nowrap text-2xl space-x-12 overflow-x-scroll scrollbar-hide">
                {Object.entries(requests).map(([key, { title, url }]) =>
                (<h2 key={key}
                    onClick={() => router.push(`/?gener=${key}`)}
                    className="last:pr-10 cursor-pointer transition duration-100 transform hover:scale-125 
                hover:text-white active:text-red-500">{title}</h2>)
                )
                }
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12 "></div>
            <div className="absolute top-0 left-0 bg-gradient-to-r from-[#06202A] h-10 w-1/12 "></div>
        </nav>
    )
}

export default Nav

