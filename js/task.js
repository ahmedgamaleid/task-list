var taskuser= document.getElementById('taskuser');
var taskname= document.getElementById('taskname');
var tasktime= document.getElementById('tasktime');
var searchinput= document.getElementById('searchinput');

var tasklist = [ ];




//Retrieving data stored in memory
if(localStorage.getItem('taskk')!=null){
    tasklist= JSON.parse(localStorage.getItem('taskk'))
    showtaskk();
  }

 
//add task
function  addtaskk(){
    var taskk = {
    user:taskuser.value,
    name:taskname.value,
    time:tasktime.value
    }
    tasklist.push(taskk);
    localStorage.setItem('taskk',JSON.stringify(tasklist))
    showtaskk();
  
    //clearform();
    }


 //display task
 function showtaskk(){
  var box = ``;
  for (var i = 0 ; i < tasklist.length ; i++){
  box += `<div class="col-4 text-center shadow-sm p-3 mb-5 bg-body rounded p-5 " id="myDiv">
<h5 class="text-left">${[i]}</h5><hr>
<h3>${tasklist[i].user}</h3><br>
<h2 class="font-weight-bold"> <span>${tasklist[i].name}</span></h2><br>
<h6>${tasklist[i].time}</h6>
<button onclick="deletetask(${i})" type="button" class="btn btn-success">complete</button>
  </div>`;
  }
   document.getElementById('bodytask').innerHTML = box;
  }

 // function myFunction() {
 //   alert("Hello! I am an alert box!");
 //       }
        
function deletetask(deleteindex)
{
  tasklist.splice(deleteindex,1);
localStorage.setItem('taskk',JSON.stringify(tasklist))
showtaskk();
}

//complete task
function changeBackgroundColor() {
  var myDiv = document.getElementById("myDiv");
  myDiv.style.backgroundColor = "#008000"; // New background color
  myDiv.style.textcoloe = "##90EE90"; // New background color
}


//search tassk 
function searchtask(){
  var term = searchinput.value;
  var box = ``;
  for (var i = 0 ; i < tasklist.length ; i++){

  if(tasklist[i].name.tolowercase().includes(term.tolowercase()) == true)
  {
    box += `<div class="col-4 text-center shadow-sm p-3 mb-5 bg-body rounded p-5 " id="myDiv">

    <h5 class="text-left">${[i]}</h5><hr>
<h3>${tasklist[i].user}</h3><br>
<h2 class="font-weight-bold"> <span>${tasklist[i].name}</span></h2><br>
<h6>${tasklist[i].time}</h6>
<button onclick="deletetask(${i})" type="button" class="btn btn-success">complete</button>
</div>`
}
}
document.getElementById('bodytask').innerHTML = box;

}

