let key="cgleorv3rf6dyPcaDbufB1cz1CLl1Rbx"
document.addEventListener("DOMContentLoaded", () => {
    let form= document.querySelector("form");
    let input=document.querySelector("#userInput");
    let select=document.querySelector("select");
    let submit=document.querySelector("#submit");
    let content=document.querySelector(".content");
    let h1=document.createElement("h1")
    let limit=10;
    let search="bigs"
    form.addEventListener("submit",()=>{
        giphySearch(search,limit)
    })

    const giphySearch=async(userInput,userLimit)=>{
        try{
            let fetch = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${userInput}&limit=${userLimit}`)
            console.log(fetch)
        }catch(err){
            debugger
        }
    }

    const populateSelect= (limit)=>{
        for(let i =1; i<=limit; i++){
            let option=document.createElement("option")
            option.innerText=i
            option.value=i
            select.appendChild(option)
        }
    }
    populateSelect(25)


})