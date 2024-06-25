const logoutButton = document.getElementById('logoutButton');

logoutButton.addEventListener('click', function(){
    localStorage.clear();
    window.location.href = "https://trabajopracticopw1.netlify.app/"
}

)