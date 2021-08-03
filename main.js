function login(){
    username = document.getElementById("username").value
    localStorage.setItem("user_name", username)
    window.location = "chatterbox-online.html"
}