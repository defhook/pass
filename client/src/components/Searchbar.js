import React, { useEffect, useState } from "react";


function Searchbar( ) {

    const [data, setData] = useState()
    const [filteredData, setFilteredData] = useState([])
    const [wordEntered, setWordEntered] = useState('');

    useEffect(() => {
        fetch('https://api.themeparks.wiki/v1/destinations')
        .then((response) => response.json())
        .then((actualData) => setData(actualData.destinations))
    }, [])

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord)
        const newFilter = data.filter((ind) => {
                return ind.name.toLowerCase().includes(searchWord.toLowerCase())
            
            })
        
        if (searchWord === '') {
            setFilteredData([])
        } else {
            setFilteredData(newFilter)
        }
        
    }

    return (
        <>
            <div className="input-group w-75 p-2">
                <input type="text" onChange={handleFilter} value={wordEntered} className="searchEng" placeholder="Search by keyword" aria-label="Recipient's username" aria-describedby="button-addon2" />

            </div>
            {filteredData.length != 0 && (

                <div className="m-3 mt-auto dataResult">
                {filteredData.slice(0, 9).map((value) => {
                    return (
                        <a className="dataItem" href={`/single/${value.id}`} _target="blank">
                            <p>{value.name}</p>
                            </a>
                    )
                })}
            </div>
            )}
        </>

    )
}

export default Searchbar