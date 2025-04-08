
document.addEventListener("DOMContentLoaded",function(){
  const nameInput=document.getElementById("nameInput");
  const passwordInput=document.getElementById("passwordInput");
  const getStartedBtn=document.getElementById("getStartedBtn");
  const vocabSection=document.getElementById("vocabSection");

getStartedBtn.addEventListener("click",function(){

  if(!nameInput||!passwordInput){
    console.error("Input elements not found");
    return;
  }

  const name=nameInput.value.trim();
  const password=passwordInput.value.trim();

if(name!==""&&password!==""){
  vocabSection.scrollIntoView({behavior:"smooth"});
}
else{
  alert("Name and password can't be empty");
}

});

});


document.addEventListener("DOMContentLoaded",function(){
  const faqques= document.getElementById("faqQues");
  const faqsection=document.querySelector("#asked-ques");

  faqques.addEventListener("click",function(){
    faqsection.scrollIntoView({behavior:"smooth"});
  });
});




function loadLessons(){
 //fetch the data
 fetch("https://openapi.programming-hero.com/api/levels/all")
 .then(res=>res.json())
  .then((data)=>displayloadLessons(data.data))
}


function loadLessons(){
  fetch("https://openapi.programming-hero.com/api/level/5")
  .then((res)=> res.json())
  .then((data)=>displayLessons(data.data));
}


// id: 101
// lessonName: "Basic Vocabulary"
// level_no: 1

function displayloadLessons(lessons){
    const lessoncontainer = document.getElementById("lesson-container");
    for(let les of lessons){
       console.log(les); 
       const lessondiv=document.createElement("div");
        lessondiv.innerHTML=`
      <button class="btn btn-outline btn-primary justify-center">Lesson-${les.level_no}</button>
        `;
        lessoncontainer.append(lessondiv)
    }
}

const displayLessons=(lessons)=>{
   const lessoncontainer=document.getElementById("lesson-container");
   lessons.forEach(lesson=>{
    // console.log(lesson)
    
   })
};





loadLessons();
loadLessons();