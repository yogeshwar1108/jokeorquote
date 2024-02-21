const url= "https://v2.jokeapi.dev/joke/Any?safe-mode&type=single"

async function getjokes(){
    try{
        let result = await axios.get(url);
        console.log(result.data.joke)
        return result.data.joke
    }
    catch(e){"error ",e}
    
}

let button=document.querySelector("#button")
button.addEventListener("click",async()=>{
   let joke=  await getjokes()
   let output= document.querySelector("p")
   output.innerText=joke
   const heading = document.getElementById("heading");
   heading.innerText = "Here is the Joke";
   heading.style.color="#0C356A"
//    heading.style.fontWeight="bold";
   heading.style.fontSize="4rem"
   heading.style.fontFamily=" Georgia, serif"
   output.style.backgroundColor="#FFD9B7"
   output.style.color="#241468"
   output.style.fontSize="50px"


   let body= document.querySelector("body")
   body.style.backgroundColor="#F94C10"
})