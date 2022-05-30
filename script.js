const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");

const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

// + to convert string to a number
let ticketPrice = +movieSelect.value;

// update total and count
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

//movie select event
movieSelect.addEventListener("change", (e) =>{
    // since for seats we use a nodeList(because of querySelectorAll),
    // we have to loop and remove selected class from
    // all of the elements in that nodeList
    seats.forEach(function(element) {
        element.classList.remove("selected");
      });
    ticketPrice = +e.target.value;
    updateSelectedCount();
})

// seat click event
container.addEventListener("click", (e) =>{
    if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied"))
    {
        e.target.classList.toggle("selected");
    }
    updateSelectedCount();
})