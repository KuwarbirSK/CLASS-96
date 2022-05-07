function logIn(){

    user_name=document.getElementById("username").value;
    localStorage.setItem("user",user_name);
    window.location="page-2.html";

}