const Chord = ( { newResults, timeStamp } ) => {
    if (newResults && timeStamp) {
        const resultsFiltered = Object.values(newResults).filter(result => result.start <= timeStamp && result.end >= timeStamp)
        console.log(resultsFiltered)
        return(
            <div>
                <ul>
                    {resultsFiltered.map(result => (
                        <li key={result.series_id}>{result.smoothened_chord_label}</li>
                    ))}
                </ul>
            </div>
        )
    } else {
        return(
            <div>
            </div>
        )
    }
}

export default Chord