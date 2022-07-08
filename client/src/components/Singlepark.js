import React, {useState, useEffect } from 'react'
import { useMutation } from '@apollo/client';
import { SAVE_ATTRACTION } from '../utils/mutations'
import { Button } from 'react-bootstrap'
import Auth from '../utils/auth'
import { saveParkIds, getSavedParkIds } from '../utils/localStorage';


function Singlepark () {

    const [mainName, setMainName] = useState('');

    const [savedParkIds, setSavedParkIds] = useState(getSavedParkIds());
    const [saveIt] = useMutation(SAVE_ATTRACTION);


    useEffect(() => {
        return () => saveParkIds(savedParkIds)
    })


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
     
        const token = Auth.loggedIn() ? Auth.getToken(): null;

        if (!token) {
            return false;
        }

        try {
            await saveIt({
                variables: { input: favorite}
            });

            setSavedParkIds([...savedParkIds, favorite.attractionId])
        } catch (err) {
            console.log(err)
        }
        
         
    }
    

    return(
        <>
        
        <h1 className='neonText fs-1 mt-3 mb-3'>{mainName.name}</h1>
       <div className='maindisp p-2 d-flex flex-wrap justify-content-center'>
        {favData.map((each) => {
            return(
                <>      
                <div className='bg-gradient tarjeta mb-3 m-3' key={each.attractionId}>
                {each.status === "OPERATING" ? <div className='card-header open'>{each.status}</div> : <div className='card-header closed'>{each.status}</div>} 
                {favData.length > 1 ? <a className='text-light' href={`/single/${each.attractionId}`}><h5>{each.name}</h5></a> : null }
                <p className='text-light'>{each.type}</p>
                {each.waitTime ? <p className='text-light p-2'>Estimated wait time: {each.waitTime || 0 } min</p> : <p className='p-2 text-light'>No wait time reported.</p> }
                {Auth.loggedIn() && (
                <Button className='btn mb-3 navigation' onClick={() => handleSaveRide(each.attractionId)}
                disabled={savedParkIds?.some((savedParkId) => savedParkId === each.attractionId)}
                > {savedParkIds?.some((savedParkId) => savedParkId === each.attractionId)
                    ? `Saved` : `Save`}</Button>
                
                ) }
                </div>
                
                </>
            )   
        })}
            </div>
        </>
    )
}

export default Singlepark;