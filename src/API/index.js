
// const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF"


export async function fetchAllPlayers () {

try {
// fetch data from the API
const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/players");

// transform into json for use
const allPlayers = await response.json();
return allPlayers.data.players

} catch (error) {
    console.error("Failed to fetch puppies", error)
}}

