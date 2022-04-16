import Thumbnaid from "./Thumbnaid"

function Results({ results }) {
    return (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results.map(res => (
                <Thumbnaid key={res.id} res={res} />
            ))}</div>
    )
}

export default Results