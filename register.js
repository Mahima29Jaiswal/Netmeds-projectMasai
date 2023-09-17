document.querySelector("form").addEventListener("submit",formsubmit);

var datavalue = JSON.parse(localStorage.getItem("contact-list")) || [];
function formsubmit(event){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var pass = document.getElementById("pass").value;

    var data = {
        name : name,phone : phone, password : pass
      }

    datavalue.push(data);
    localStorage.setItem("register-data",JSON.stringify(datavalue));
    
    var h2 = document.getElementById("append").textContent = "You have registered succesfully, Click on sign in to continue"
}