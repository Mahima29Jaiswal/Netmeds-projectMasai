document.querySelector("form").addEventListener("submit",submitt);

  function submitt(){
    event.preventDefault();
    var no=document.getElementById("phone").value;
    var password=document.getElementById("pass").value;
    
    var user=JSON.parse(localStorage.getItem("register-data")) || [];
    var count = 0;
    user.filter(function(elem){
      if(no===null || password===null){
        //return;
      }
      else if(no===elem.phone && password===elem.password){
        count++;
        return;
      }
      else if(no != elem.phone || password!= password){
        //return;
      }
      else{
        return
      }
    })

    if(count > 0){
      window.location.href = "https://web.whatsapp.com/";
    }
    else{
      alert("wrong details")
    }
  }