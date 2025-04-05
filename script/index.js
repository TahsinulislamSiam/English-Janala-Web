
function loadLessons(){
 //fetch the data
 fetch("https://openapi.programming-hero.com/api/levels/all")
 .then(res=>res.json())
  .then((data)=>displayloadLessons(data.data))
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


loadLessons();