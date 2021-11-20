
const btn = document.getElementById("btn");

function getFact(){
    const animeFact = document.getElementById("anime-fact");
    const animeFactAPIurl = "https://anime-facts-rest-api.herokuapp.com/api/v1/fma_brotherhood";
    
    fetch(animeFactAPIurl).then((response)=>{
    console.log(response);
    return response.json();
    
    }).then((animeJSON)=>{
        console.log(animeJSON);
        let animeFactURL = animeJSON.data;
        console.log(animeFactURL);
        animeFact.src = animeFactURL;
    }).catch((err)=>{
        console.log(err);
    
    })}

    btn.addEventListener("click", getFact);