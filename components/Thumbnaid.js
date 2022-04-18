import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ res }, ref) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    return (
        <div ref={ref} className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
            <Image
                layout="responsive"
                height={1080}
                width={1920}
                className='bg-slate-700'
                src={
                    `${BASE_URL}${res.backdrop_path || res.poster_path}` ||
                    `${BASE_URL}${res.poster_path}`
                }
                alt={res.title || res.original_name}
                title={res.title || res.original_name}
            />
            <div className="p-2">
                <p className="truncate max-w-md group-hover:text-white">{res.overview}</p>
                <h2 className="mt-1 text-2xl truncate max-w-md text-white transition-all duration-100 ease-in group-hover:font-bold"
                >
                    {res.title || res.original_name}
                </h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    {res.media_type && `${res.media_type} •`}{" "}
                    {res.release_date || res.first_air_date} •{" "}
                    <ThumbUpIcon className="h-5 mx-2" />
                    {res.vote_count}
                </p>
            </div>
        </div>
    );
})

Thumbnail.displayName = "Thumbnail";

export default Thumbnail;