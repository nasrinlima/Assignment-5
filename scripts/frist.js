const allSeat = document.getElementsByClassName("kbd");
let count = 0;
let seatcount = 40;

for(const seat of allSeat){
    seat.addEventListener("click", function (e) {
        count = count + 1;
        seatcount = seatcount - 1; 
        
        const ticket = e.target.parentNode.childNodes[3].innerText;
        
        console.log();
        
        setInnerText("seat-select", count);
        setInnerText("seat-count", seatcount);      
    })
}


function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}