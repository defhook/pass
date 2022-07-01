import React, {useState, useEffect } from 'react'
import { useMutation } from '@apollo/client'

function Singlepark () {

    const [mainName, setMainName] = useState('')

    let url = window.location.pathname
    let cortado = url.split('/single/')
    
    useEffect(() => {
        fetch(`https://api.themeparks.wiki/v1/entity/${cortado[1]}/live`)
        .then(response => response.json())
        .then((data) => setMainName(data))
    })
    
    const realTime = mainName?.liveData || []
    

    return(
        <>
        <h1>{mainName.name}</h1>
       <div>
        {realTime.map((each) => {
            return(
                <>
                <h5>{each.name}</h5>
                <p>{each.entityType}</p>
                <p>{each.status}</p>
                {each.queue ? <p>Estimated wait time: {each.queue.STANDBY?.waitTime || 0 } min</p> : <p>No wait time reported.</p> }
                <br/>
                </>
            )   
        })}
            </div>
        </>
    )
}

export default Singlepark;