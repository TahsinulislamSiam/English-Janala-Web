
const apiuRL="https://openapi.programming-hero.com/api/levels/all";

async function loadButtons() {
    try{
        let response=await fetch(apiuRL);
        let data=await response.json();

        const buttonContainer=document.getElementById("button-container");
        buttonContainer.innerHTML="";

        data.forEach((lesson,index)=>{
                let btn=document.createElement("button");
                btn.className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white"
                btn.innerHTML=`lesson-${index+1}`;
                buttonContainer.appendChild(btn);
        });

    }
    catch(error){
        console.error("error fetching data:",error);
    }
}