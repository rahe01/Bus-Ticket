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

const c1 = document.getElementById("C1");

c1.addEventListener("click", function () {
  handleSeatClick("C1", "Economy", 550);
});

const c2 = document.getElementById("C2");

c2.addEventListener("click", function () {
  handleSeatClick("C2", "Economy", 550);
});

const c3 = document.getElementById("C3");

c3.addEventListener("click", function () {
  handleSeatClick("C3", "Economy", 550);
});

const c4 = document.getElementById("C4");

c4.addEventListener("click", function () {
  handleSeatClick("C4", "Economy", 550);
});

const d1 = document.getElementById("D1");

d1.addEventListener("click", function () {
  handleSeatClick("D1", "Economy", 550);
});

const d2 = document.getElementById("D2");

d2.addEventListener("click", function () {
  handleSeatClick("D2", "Economy", 550);
});

const d3 = document.getElementById("D3");

d3.addEventListener("click", function () {
  handleSeatClick("D3", "Economy", 550);
});

const d4 = document.getElementById("D4");

d4.addEventListener("click", function () {
  handleSeatClick("D4", "Economy", 550);
});

const e1 = document.getElementById("E1");

e1.addEventListener("click", function () {
  handleSeatClick("E1", "Economy", 550);
});

const e2 = document.getElementById("E2");

e2.addEventListener("click", function () {
  handleSeatClick("E2", "Economy", 550);
});

const e3 = document.getElementById("E3");

e3.addEventListener("click", function () {
  handleSeatClick("E3", "Economy", 550);
});

const e4 = document.getElementById("E4");

e4.addEventListener("click", function () {
  handleSeatClick("E4", "Economy", 550);
});

const f1 = document.getElementById("F1");

f1.addEventListener("click", function () {
  handleSeatClick("F1", "Economy", 550);
});

const f2 = document.getElementById("F2");

f2.addEventListener("click", function () {
  handleSeatClick("F2", "Economy", 550);
});

const f3 = document.getElementById("F3");

f3.addEventListener("click", function () {
  handleSeatClick("F3", "Economy", 550);
});

const f4 = document.getElementById("F4");

f4.addEventListener("click", function () {
  handleSeatClick("F4", "Economy", 550);
});

const g1 = document.getElementById("G1");

g1.addEventListener("click", function () {
  handleSeatClick("G1", "Economy", 550);
});

const g2 = document.getElementById("G2");

g2.addEventListener("click", function () {
  handleSeatClick("G2", "Economy", 550);
});

const g3 = document.getElementById("G3");

g3.addEventListener("click", function () {
  handleSeatClick("G3", "Economy", 550);
});

const g4 = document.getElementById("G4");

g4.addEventListener("click", function () {
  handleSeatClick("G4", "Economy", 550);
});

const h1 = document.getElementById("H1"); 

h1.addEventListener("click", function () {
  handleSeatClick("H1", "Economy", 550);
});

const h2 = document.getElementById("H2");

h2.addEventListener("click", function () {
  handleSeatClick("H2", "Economy", 550);
});

const h3 = document.getElementById("H3");

h3.addEventListener("click", function () {
  handleSeatClick("H3", "Economy", 550);
});

const h4 = document.getElementById("H4");

h4.addEventListener("click", function () {
  handleSeatClick("H4", "Economy", 550);
});

const i1 = document.getElementById("I1");

i1.addEventListener("click", function () {
  handleSeatClick("I1", "Economy", 550);
});

const i2 = document.getElementById("I2");

i2.addEventListener("click", function () {
  handleSeatClick("I2", "Economy", 550);
});

const i3 = document.getElementById("I3");

i3.addEventListener("click", function () {
  handleSeatClick("I3", "Economy", 550);
});

const i4 = document.getElementById("I4");

i4.addEventListener("click", function () {
  handleSeatClick("I4", "Economy", 550);
});

const j1 = document.getElementById("J1");

j1.addEventListener("click", function () {
  handleSeatClick("J1", "Economy", 550);
});

const j2 = document.getElementById("J2");

j2.addEventListener("click", function () {
  handleSeatClick("J2", "Economy", 550);
});

const j3 = document.getElementById("J3");

j3.addEventListener("click", function () {
  handleSeatClick("J3", "Economy", 550);
});

const j4 = document.getElementById("J4");

j4.addEventListener("click", function () {
  handleSeatClick("J4", "Economy", 550);
});








