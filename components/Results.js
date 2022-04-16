import Thumbnaid from "./Thumbnaid"

function Results({ results }) {
    return (
        <div>{results.map(res => (
            <Thumbnaid key={res.id} res={res} />
        ))}</div>
    )
}

export default Results