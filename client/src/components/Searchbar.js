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
                <button className="btn btn-outline-secondary" type="button" id="button-addon2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg></button>
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