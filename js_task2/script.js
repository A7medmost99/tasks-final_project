

var lk=1
function image() {
  var img = document.getElementById("img_id");
  if(lk==1){
    img.src ="photo/899ba1df6bbffd9b795b36d44fa5bf67c5efda6c.png"
    lk=2;
  }
  else{
    img.src="photo/licensed-image.jpeg"
    lk=1;
  }

}

image();


var btn= document.getElementById("btn")


var users = []; 
var form = document.getElementById("form");
var namei = document.getElementById("name");
var emaili = document.getElementById("email");



form.addEventListener("submit", (e)=>{
    e.preventDefault()


  if (namei.value === "" || emaili.value === "") {
    alert("enter  name and email");
    return;
  }


  users.push({name:namei.value,email:emaili.value });

  console.log(users);
  form.reset()
});
