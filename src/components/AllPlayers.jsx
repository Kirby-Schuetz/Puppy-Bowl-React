import { fetchAllPlayers } from "../API"
import { useState, useEffect} from "react"
import SinglePlayer from "./SinglePlayer"
// import React from "react"


export default function AllPlayers() {
    const [players, setPlayers] = useState([]);
    const [selectedPuppyId, setSelectedPuppyId] = useState(null);

    
        async function fetchAllPuppies () {
            // fetch data from the API
            try{
            setPlayers(await fetchAllPlayers())
            } catch(err) {
                console.err("uh oh trouble fetching all players", err)
            }
        }
        useEffect(() => {
            fetchAllPuppies();
        }, []);
        
        return (
            <div>
            {
                players.map((player)=>{
                    return (
                        <div key={player.id}>
                            <h2>Name: {player.name}</h2>
                            <h2>Breed: {player.breed}</h2>
                            <img src={player.imageUrl} alt={player.name} />
                            <SinglePlayer selectedPuppyId={player.id} setSelectedPuppyId={setSelectedPuppyId}/>
                        </div>
                    )
                })
            }
           </div>
        )
}