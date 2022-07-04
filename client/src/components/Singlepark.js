import React, {useState, useEffect } from 'react'
import { useMutation } from '@apollo/client';
import { SAVE_ATTRACTION } from '../utils/mutations'

function Singlepark () {

    const [mainName, setMainName] = useState('');

    const [saveIt] = useMutation(SAVE_ATTRACTION);

    let url = window.location.pathname
    let cortado = url.split('/single/')
    
    useEffect(() => {
        fetch(`https://api.themeparks.wiki/v1/entity/${cortado[1]}/live`)
        .then(response => response.json())
        .then((data) => setMainName(data))
    })
      
    const realTime = mainName?.liveData || []

    const favData = realTime.map((ride) => ({
        attractionId: ride.id,
        name: ride.name,
        type: ride.entityType,
        status: ride.status,
        waitTime: ride.queue?.STANDBY?.waitTime
    })) 

    const handleSaveRide = async (attractionId) => {
        const favorite = favData.find((one) => one.attractionId === attractionId)
     
        try {
            await saveIt({
                variables: { input: favorite}
            });
        } catch (err) {
            console.log(err)
        }
        
         
    }
    

    return(
        <>
        <h1>{mainName.name}</h1>
       <div className='maindisp'>
        {favData.map((each) => {
            return(
                <>      
                
                <card key={each.attractionId}>
                <a href={`/single/${each.attractionId}`}><h5>{each.name}</h5></a>
                <p>{each.type}</p>
                <p>{each.status}</p>
                {each.waitTime ? <p>Estimated wait time: {each.waitTime || 0 } min</p> : <p>No wait time reported.</p> }
                <button onClick={handleSaveRide(each.attractionId)}>Save</button>
                </card>              
                <br/>
                </>
            )   
        })}
            </div>
        </>
    )
}

export default Singlepark;