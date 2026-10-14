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
