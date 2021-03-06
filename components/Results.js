import FlipMove from 'react-flip-move';
import Thumbnaid from "./Thumbnaid"

function Results({ results }) {
    return (
        <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:flex flex-wrap justify-center">
            {results.map(res => (
                <Thumbnaid key={res.id} res={res} />
            ))}</FlipMove>
    )
}

export default Results