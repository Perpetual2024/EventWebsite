
// ==========================================
// 1. EVENT COUNTDOWN
// ==========================================

const countdown = document.getElementById("countdown");

if (countdown) {
    // November 20, 2026, at 8:00 PM
    const eventDate = new Date(2026, 10, 20, 20, 0, 0);

    function updateCountdown() {
        const remaining = eventDate.getTime() - Date.now();

        if (remaining <= 0) {
            countdown.textContent = "The event is underway!";
            return false;
        }

        const days = Math.floor(remaining / 86400000);
        const hours = Math.floor((remaining % 86400000) / 3600000);
        const minutes = Math.floor((remaining % 3600000) / 60000);
        const seconds = Math.floor((remaining % 60000) / 1000);

        countdown.textContent =
            `${days} days · ${hours} hours · ${minutes} minutes · ${seconds} seconds`;

        return true;
    }

    if (updateCountdown()) {
        const countdownInterval = setInterval(() => {
            if (!updateCountdown()) {
                clearInterval(countdownInterval);
            }
        }, 1000);
    }
}


// ==========================================
// 2. TICKET FORM ELEMENTS
// ==========================================

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

    const submitButton = ticketForm.querySelector('[type="submit"]');


    // ==========================================
    // 3. UPDATE TICKET TOTAL
    // ==========================================

    function updateTotal() {

        const price = Number(ticketType.value) || 0;
        const numberOfTickets = Number(quantity.value) || 0;

        const total = price * numberOfTickets;

        totalPrice.textContent = total.toLocaleString("en-KE");
    }


    // ==========================================
    // 4. STUDENT CATEGORY SELECTION
    // ==========================================

    studentCategory.addEventListener("change", function () {

        const category = studentCategory.value;

        registrationSection.hidden = category !== "regular";

        registrationNumber.required = category === "regular";

        ticketSection.hidden = category === "";

        formMessage.textContent = "";

        // Clear registration number when not required
        if (category !== "regular") {
            registrationNumber.value = "";
        }

        // Ticket options for regular students
        if (category === "regular") {

            ticketType.innerHTML = `
                <option value="0">Regular — Free</option>
                <option value="1000">VIP — KSh 1,000</option>
            `;

        }

        // Ticket options for other participants
        else if (category === "other") {

            ticketType.innerHTML = `
                <option value="500">Regular — KSh 500</option>
                <option value="1000">VIP — KSh 1,000</option>
            `;

        }

        else {
            ticketType.innerHTML = "";
        }

        updateTotal();
    });


    // ==========================================
    // 5. LISTEN FOR PRICE AND QUANTITY CHANGES
    // ==========================================

    ticketType.addEventListener("change", updateTotal);

    quantity.addEventListener("input", updateTotal);


    // ==========================================
    // 6. SUBMIT TICKET TO PHP / MYSQL
    // ==========================================

    ticketForm.addEventListener("submit", async function (event) {

        // Prevent normal browser submission.
        // We will send the form through fetch instead.
        event.preventDefault();

        // Prevent duplicate submissions
        if (submitButton && submitButton.disabled) {
            return;
        }

        const fullName = document.getElementById("full-name").value.trim();

        const email = document.getElementById("email").value.trim();

        const category = studentCategory.value;

        const registration = registrationNumber.value.trim();

        const selectedTicket = ticketType.value;

        const numberOfTickets = Number(quantity.value);


        // ======================================
        // CLIENT-SIDE VALIDATION
        // ======================================

        if (!fullName || !email || !category || !selectedTicket && selectedTicket !== "0" || !quantity.value) {

            formMessage.textContent = "Please complete all required fields.";

            return;
        }

        if (category === "regular" && !registration) {

            formMessage.textContent = "Please enter your registration number.";

            return;
        }

        if (!Number.isInteger(numberOfTickets) ||
            numberOfTickets < 1 ||
            numberOfTickets > 10) {

            formMessage.textContent = "You can reserve between 1 and 10 tickets.";

            return;
        }

        if (!ticketType.value) {

            formMessage.textContent = "Please select a ticket type.";

            return;
        }


        // ======================================
        // PREPARE DATA FOR PHP
        // ======================================

        const formData = new FormData(ticketForm);

        // Explicitly match the PHP field names
        formData.set("full_name", fullName);
        formData.set("email", email);
        formData.set("student_category", category);
        formData.set("registration_number", registration);
        formData.set("ticket_type", selectedTicket);
        formData.set("quantity", numberOfTickets);


        // ======================================
        // SUBMIT TO BACKEND
        // ======================================

        try {

            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = "Submitting...";
            }

            formMessage.textContent = "Saving your reservation...";

            formMessage.style.color = "inherit";

            const response = await fetch("submit-ticket.php", {

                method: "POST",

                body: formData

            });


            // Read PHP response
            const result = await response.json();


            if (!response.ok || result.success !== true) {

                throw new Error(
                    result.message || "Unable to save your reservation."
                );

            }


            // ==================================
            // SUCCESS
            // ==================================

            formMessage.textContent = result.message;

            formMessage.style.color = "green";

            window.alert(
                "TICKET RESERVATION SUCCESSFUL!\n\n" +
                result.message +
                "\n\nYour information has been saved."
            );


            // Reset the form after successful submission
            ticketForm.reset();

            // Restore initial form visibility
            registrationSection.hidden = true;

            ticketSection.hidden = true;

            registrationNumber.required = false;

            ticketType.innerHTML = "";

            updateTotal();


        } catch (error) {


            // ==================================
            // ERROR HANDLING
            // ==================================

            console.error("Ticket submission error:", error);

            formMessage.textContent = error.message;

            formMessage.style.color = "red";

            window.alert(
                "RESERVATION FAILED!\n\n" +
                error.message +
                "\n\nPlease try again."
            );


        } finally {


            // ==================================
            // RESTORE SUBMIT BUTTON
            // ==================================

            if (submitButton) {

                submitButton.disabled = false;

                submitButton.textContent = "Book Ticket";

            }

        }

    });

}
