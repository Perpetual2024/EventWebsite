const countdown = document.getElementById("countdown");

if (countdown) {
    const eventDate = new Date(2026, 10, 20, 20, 0, 0);

    function updateCountdown() {
        const remaining = eventDate.getTime() - Date.now();

        if (remaining <= 0) {
            countdown.textContent = "The event is underway!";
            return false;
        }

        const days = Math.floor(remaining / 864000000);
        const hours = Math.floor((remaining % 86400000) / 3600000);
        const minutes = Math.floor((remaining % 3600000) / 60000);
        const seconds = Math.floor((remaining % 60000) / 1000);

        countdown.textContent = `${days} days · ${hours} hours · ${minutes} minutes · ${seconds} seconds`;
        return true;
    }

    if (updateCountdown()) {
        const countdownInterval = window.setInterval(() => {
            if (!updateCountdown()) {
                window.clearInterval(countdownInterval);
            }
        }, 1000);
    }
}

const ticketForm = document.getElementById("ticket-form");

if (ticketForm) {
    const studentCategory = document.getElementById("student-category");
    const registrationSection = document.getElementById("registration-section");
    const registrationNumber = document.getElementById("registration-number");
    const ticketSection = document.getElementById("ticket-section");
    const ticketType = document.getElementById("ticket-type");
    const quantity = document.getElementById("quantity");
    const totalPrice = document.getElementById("total-price");
    const formMessage = document.getElementById("form-message");

    function updateTotal() {
        const price = Number(ticketType.value);
        const numberOfTickets = Number(quantity.value);

        totalPrice.textContent = (price * numberOfTickets).toLocaleString("en-KE");
    }

    studentCategory.addEventListener("change", function () {
        const category = studentCategory.value;

        registrationSection.hidden = category !== "regular";
        registrationNumber.required = category === "regular";
        ticketSection.hidden = category === "";
        formMessage.textContent = "";

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

    ticketType.addEventListener("change", updateTotal);
    quantity.addEventListener("input", updateTotal);

    ticketForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.getElementById("full-name").value.trim();
        const email = document.getElementById("email").value.trim();
        const category = studentCategory.value;
        const selectedTicket = ticketType.options[ticketType.selectedIndex].text;
        const numberOfTickets = Number(quantity.value);
        const total = Number(ticketType.value) * numberOfTickets;
        const registrationDetails = category === "regular"
            ? `\nRegistration Number: ${registrationNumber.value.trim()}`
            : "";

        window.alert(
            `Thank you, ${fullName}! Your reservation has been recorded.\n\n` +
            `Ticket: ${selectedTicket}\n` +
            `Quantity: ${numberOfTickets}\n` +
            `Total: KSh ${total.toLocaleString("en-KE")}\n` +
            `Confirmation email: ${email}` +
            registrationDetails
        );
    });
}
