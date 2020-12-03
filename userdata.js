let form_name="";
let endscore=sessionStorage.getItem("score");
document.querySelector("span.score").innerHTML = endscore;

function submitName(evnt){
    evnt.preventDefault();
    form_name= document.forms["nameform"]["name"].value;
 console.log(form_name,endscore);

 storevalues();
}

function storevalues(){
  var existing = localStorage.getItem("Username");
  existing = existing ? existing.split(',') : [];
  existing.push(form_name);
  localStorage.setItem("Username", existing.toString());

  var existing = localStorage.getItem("Score");
  existing = existing ? existing.split(',') : [];
  existing.push(endscore);
  localStorage.setItem("Score", existing.toString());

  done();
}

function done(){
  var calldone = document.getElementById("done");
  calldone.innerHTML = 'DONE!'; 
}
