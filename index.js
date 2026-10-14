const ticketForm = document.getElementById("ticket-form");
const studentCategory = document.getElementById("student-category");
const registrationSection = document.getElementById("registration-section");
const registrationNumber = document.getElementById("registration-number");
const ticketSection = document.getElementById("ticket-section");
const ticketType = document.getElementById("ticket-type");
const quantity = document.getElementById("quantity");
const totalPrice = document.getElementById("total-price");
const formMessage = document.getElementById("form-message");

studentCategory.addEventListener("change", function (){
    const category = studentCategory.value;

    registrationSection.hidden = category !== "regular";
    registrationNumber.required = category === "regular";

    // Show ticket options after a category is selected
    ticketSection.hidden = category === "";

    formMessage.textContent = "";

    // Set ticket options for each category
    if (category === "regular") {

        ticketType.innerHTML = `
            <option value="0">Regular — Free</option>
            <option value="1000">VIP — KSh 1,000</option>
        `;

    } else if (category === "other") {

        ticketType.innerHTML = `
            <option value="500">Regular — KSh 500</option>
            <option value="1000">VIP — KSh 1,000</option>
        `;

    } else {

        ticketType.innerHTML = "";

    }

    updateTotal();

});
// calculating total price

function updateTotal(){

    const price = Number(ticketType.value);
    const numberOfTickets = Number(quantity.value);

    totalPrice.textContent = price * numberOfTickets;
}

ticketType.addEventListener("change", updateTotal);

quantity.addEventListener("input", updateTotal);

ticketForm.addEventListener('submit', function(event){
    event.preventDefault();

    const fullName = document.getElementById("full-name").value.trim();

    const email = document.getElementById("email").value.trim();

    const category = studentCategory.value;
    const selectedTicket = ticketType.options[ticketType.selectedIndex].text;

    const numberOfTickets = Number(quantity.value);
    const total = Number(ticketType.value) * numberOfTickets;

    let registrationDetails = "";
    if (category === "regular"){
         registrationDetails =  `Registration Number : ${registrationNumber.value.trim()}`;
    }

    alert(
        `Thank you, ${fullName}! Your reservation has been recorded.\n\n` +
        `Ticket: ${selectedTicket}\n` +
        `Quantity: ${numberOfTickets}\n` +
        `Total: KSh ${total.toLocaleString("en-KE")}\n` +
        `Confirmation email: ${email}` +
    registrationDetails
    );

});


