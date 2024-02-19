const buyTicket = document.getElementById("buy-tickets");
buyTicket.addEventListener("click", function (event) {
  const mainSection = document.getElementById("main-section");
  mainSection.classList.remove("hidden");

  window.scrollTo({
    top: 1100,
    behavior: "smooth",
  });
});

let selectedSeats = [];

function handleSeatClick(seatId, seatClass, seatPrice) {
  const seatElement = document.getElementById(seatId);

  if (!seatElement.dataset.clicked) {
    if (selectedSeats.length < 4) {
      seatElement.style.backgroundColor = "#1DD100";
      seatElement.dataset.clicked = true;

      const sitLeftElement = document.getElementById("sit-left");
      const sitCountElement = document.getElementById("seat-count");
      const sitLeftValue = parseInt(sitLeftElement.innerText);
      sitLeftElement.innerText = sitLeftValue - 1;

      const sitCountValue = parseInt(sitCountElement.innerText);
      sitCountElement.innerText = sitCountValue + 1;

      const priceDiv = document.getElementById("price-div");
      priceDiv.innerHTML += `
                <p>${seatId}</p>
                <p>${seatClass}</p>
                <p>${seatPrice}</p>
            `;

      const totalPrice = document.getElementById("tot-price");
      totalPrice.innerText = (
        parseInt(totalPrice.innerText) + parseInt(seatPrice)
      ).toString();


      const grandTotalPrice = document.getElementById('grand-total');
      grandTotalPrice.innerText = (
        parseInt(grandTotalPrice.innerText) + parseInt(seatPrice)
      ).toString();

      selectedSeats.push(seatId);
      

    } else {
      alert("You can only select a maximum of 4 seats.");
    }
  }
}

function apply() {
    const applyButton = document.getElementById("apply-btn");
    const applyInput = document.getElementById("apply-input");
    const grandTotal = document.getElementById("grand-total");
    const totalPrice = document.getElementById("tot-price");

    applyButton.addEventListener("click", function (event) {
        const inputValue = applyInput.value;

        if (inputValue === 'NEW15') {
            const discountPercentage = 15;
            const discountAmount = (parseInt(totalPrice.innerText) * discountPercentage) / 100;
            const discountedTotal = parseInt(totalPrice.innerText) - discountAmount;

            grandTotal.innerText = discountedTotal.toString();

            alert('Coupon applied successfully. 15% discount has been applied.');
            applyInput.style.display = 'none';
            applyButton.style.display = 'none';
        } 
        
        else if (inputValue === 'Couple 20'){
            const discountPercentage = 20;
            const discountAmount = (parseInt(totalPrice.innerText) * discountPercentage) / 100;
            const discountedTotal = parseInt(totalPrice.innerText) - discountAmount;

            grandTotal.innerText = discountedTotal.toString();

            alert('Coupon applied successfully. 20% discount has been applied.');

            applyInput.style.display = 'none';
            applyButton.style.display = 'none';

        }
        
        
        
        else {
            alert('Invalid coupon code. Please enter a valid code.');
        }
    });
}

apply();




const a1 = document.getElementById("A1");
a1.addEventListener("click", function () {
  handleSeatClick("A1", "Economy", 550);
});

const a2 = document.getElementById("A2");
a2.addEventListener("click", function () {
  handleSeatClick("A2", "Economy", 550);
});

const a3 = document.getElementById("A3");
a3.addEventListener("click", function () {
  handleSeatClick("A3", "Economy", 550);
});

const a4 = document.getElementById("A4");
a4.addEventListener("click", function () {
  handleSeatClick("A4", "Economy", 550);
});

const b1 = document.getElementById("B1");
b1.addEventListener("click", function () {
  handleSeatClick("B1", "Economy", 550);
});

const b2 = document.getElementById("B2");

b2.addEventListener("click", function () {
  handleSeatClick("B2", "Economy", 550);
});

const b3 = document.getElementById("B3");

b3.addEventListener("click", function () {
  handleSeatClick("B3", "Economy", 550);
});

const b4 = document.getElementById("B4");

b4.addEventListener("click", function () {
  handleSeatClick("B4", "Economy", 550);
});






