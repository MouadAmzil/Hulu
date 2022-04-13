import requests from "../utils/requests"

function Nav() {
    return (
        <>
            <div>Nav</div>
            {Object.entries(requests).map(([key, { title, url }]) =>
                (<h2 key={key}>{title}</h2>)
            )
            }
        </>
    )
}

export default Nav