import { useNavigate } from "react-router-dom"
import { useState, useEffect} from "react";
import { fetchSinglePlayer } from "../API";
// import AllPlayers from "./AllPlayers";


export default function SinglePlayer({selectedPuppyId, setSelectedPuppyId}) {
    const navigate = useNavigate()
    const[player, setPlayer] = useState({});
    
        async function getSinglePuppy() {
            try{
                setPlayer(await fetchSinglePlayer(selectedPuppyId));
            } catch(error) {
                console.error("ruh roh", error)
            }
        }
        useEffect(() => {
            getSinglePuppy();
        }, []);

    return(
        console.log(player)
        // <> {player ? 
		// 	(<div>
		// 		<p>Id: {player.id}</p>
		// 		<p>Name: {player.name}</p>
		// 		<p>Breed: {player.breed}</p>
        //         <p>Team: {player.team?.name}</p>
		// 		<p>Status: {player.status}</p>
        //     </div>) : <></>
        //     }
		// </>
	);
}