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
        <h1 className='maindisp'>{mainName.name}</h1>
       <div className='maindisp container p-2 d-flex flex-wrap justify-content-center'>
        {favData.map((each) => {
            return(
                <>      
                <form className='color-box bg-gradient p-2 m-2' key={each.attractionId}>
                <a className='text-light' href={`/single/${each.attractionId}`}><h5>{each.name}</h5></a>
                <p>{each.type}</p>
                <p>Status: {each.status}</p>
                {each.waitTime ? <p>Estimated wait time: {each.waitTime || 0 } min</p> : <p>No wait time reported.</p> }
                {Auth.loggedIn() && (
                <Button className='btn btn-primary' onClick={() => handleSaveRide(each.attractionId)}
                disabled={savedParkIds?.some((savedParkId) => savedParkId === each.attractionId)}
                > {savedParkIds?.some((savedParkId) => savedParkId === each.attractionId)
                    ? `Saved` : `Save`}</Button>
                
                ) }
                </form>
                <br/>
                </>
            )   
        })}
            </div>
        </>
    )
}

export default Singlepark;