const allSeat = document.getElementsByClassName("kbd");
let count = 0;
let seatcount = 16;
const price = 550;



for(const seat of allSeat){
    seat.addEventListener("click", function(e) {
        if(!seat.classList.contains("selected-ticket") && count < 4 ){
            count = count + 1;
            seatcount = seatcount - 1; 
            
            
            seat.classList.add("selected-ticket");

            const seatName = e.target.innerText;
            const selectedTicket = document.getElementById("selected-ticket");
            const tr = document.createElement("tr");
            const td = document.createElement("td");
                td.innerText = seatName;
            const td1 = document.createElement("td");
                td1.innerText ='Economy';
            const td2 = document.createElement("td");
                td2.innerText ='550';

            tr.appendChild(td);
            tr.appendChild(td1);
            tr.appendChild(td2);
            selectedTicket.appendChild(tr);

        
            e.target.style.backgroundColor ="#1bd100";
            e.target.style.color = "#ffffff";
            
            



            totalCost("total-cost", parseInt(price));
            grandTotal("grand-total", parseInt(price));
            
            setInnerText("seat-select", count);
            setInnerText("seat-count", seatcount);

        
        }
        else if(seat.classList.contains("selected-ticket")){
            alert('You have already selected this seat.');
        }
        else{
            alert('you can select only 4 seats');
        }          
    })
}

function totalCost(id,value){
    const totalCost = document.getElementById(id).innerText;

    const convertTotalCost = parseInt(totalCost);
    const sum = convertTotalCost + parseInt(value);
    setInnerText(id, sum);

}
function grandTotal(id, value){
    const grandTotal = document.getElementById(id).innerText;
    const convertGrandTotal = parseInt(grandTotal);
    const sum2 = convertGrandTotal + parseInt(value);
    setInnerText(id, sum2);
}



function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}



const applyButton = document.getElementById("apply-button");
 applyButton.addEventListener('click', function(){

        const totalCost = document.getElementById("total-cost").innerText;
        convertTotalCost = parseInt(totalCost);
        const sum = convertTotalCost + parseInt(price);

        // coupon code catch
    const couponElement = document.getElementById("input-element").value;
    const couponCode = couponElement;

    if(couponCode === 'NEW15'){
            const discountElement = document.getElementById("discount-cost");
            const discountPrice = sum * 0.15 ;
            discountElement.innerText = discountPrice.toFixed(2);
            
            const totalSum = convertTotalCost - discountPrice;

            
            document.getElementById("grand-total").innerText = totalSum;
            document.getElementById("hide-element").style.display = 'none';
    }

    else if(couponCode === 'Couple 20'){
            const discountElement = document.getElementById("discount-cost");
            const discountPrice = sum * 0.2 ;
            discountElement.innerText = discountPrice.toFixed(2);
            
            const totalSum = convertTotalCost - discountPrice;

            
            document.getElementById("grand-total").innerText = totalSum;
            document.getElementById("hide-element").style.display = 'none';
    }
    else{
            alert('Invalid Coupon Code');
    }
})



const inputItems = document.getElementById("input-element");
const button = document.getElementById("apply-button");

inputItems.addEventListener("keyup", (e) => {
    const value = e.currentTarget.value;
    if (value === ""){
        button.disabled =true;

    }
    else {
        button.disabled = false;
    }
})

