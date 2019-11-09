var searchBtn= document.getElementById("btn");

searchBtn.onclick = function(){
    fetch ("superheroes.php").then(response => response.text()).then(data => {
        alert(data)
    })
    .catch(error => {
        alert(error);
    });
}



