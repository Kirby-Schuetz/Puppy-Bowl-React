import { fetchAllPlayers } from "../API/index.js";
import { useState, useEffect } from "react"

export default function AllPlayers() {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        fetchAllPlayers()
        setPlayers(players)
    }, [])
    
    return (
        console.log('hello')
    )
}