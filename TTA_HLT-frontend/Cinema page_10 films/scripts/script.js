

document.querySelector("h1").style.backgroundColor="yellow";

function bookedMovies(){
    var x, i;

    x = document.querySelectorAll(".movie");

    for(i = 0; i < 3; i++){
        x[i].style.backgroundColor = "red";
    }

}