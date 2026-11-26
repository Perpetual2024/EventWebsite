# `index.js` — line-by-line presentation notes

This guide explains the JavaScript exactly as it is currently written. The file is shared by the home page and the ticket page: each feature first checks whether its target HTML element exists, so the unrelated feature is skipped on each page.

## Countdown timer (lines 1–30)

| Line | Explanation |
|---:|---|
| 1 | Looks in the page for the element whose ID is `countdown` and stores it in `countdown`. On the home page this is the paragraph where the timer appears. |
| 2 | Blank line separating the element lookup from the countdown logic. |
| 3 | Checks whether the countdown element exists. This prevents countdown code from running on pages that do not display a timer. |
| 4 | Creates the event date and time: 20 November 2026 at 8:00 PM. JavaScript numbers months from zero, so `10` means November. |
| 5 | Blank line separating setup from the function declaration. |
| 6 | Declares `updateCountdown`, the function that calculates and displays the time remaining. |
| 7 | Subtracts the current time from the event timestamp. Both values are milliseconds since 1 January 1970, so the result is the remaining milliseconds. |
| 8 | Blank line separating the calculation from the event-start check. |
| 9 | Checks whether the event time has arrived or passed. |
| 10 | If the event has started, replaces the timer text with “The event is underway!”. |
| 11 | Returns `false` to tell the caller that the countdown should stop. |
| 12 | Closes the `if` block for the event-start condition. |
| 13 | Blank line separating the event-start case from the time-unit calculations. |
| 14 | Calculates whole days from the remaining milliseconds. **There is a calculation error in the current code:** a day is `86,400,000` milliseconds, but this line divides by `864,000,000`, making the displayed day count ten times too small. |
| 15 | Calculates the remaining whole hours after removing complete days, using the remainder operator (`%`). |
| 16 | Calculates the remaining whole minutes after removing complete hours. |
| 17 | Calculates the remaining whole seconds after removing complete minutes. |
| 18 | Blank line separating the calculations from the display update. |
| 19 | Builds the countdown sentence with a template literal and writes it into the countdown element. |
| 20 | Returns `true` to indicate that the countdown is still active. |
| 21 | Closes the `updateCountdown` function. |
| 22 | Blank line separating the function from its initial call. |
| 23 | Calls the countdown function immediately. The interval is only started if the function reports that the event has not started yet. |
| 24 | Starts a repeating timer with `window.setInterval`; the callback will run every 1,000 milliseconds (one second). |
| 25 | Updates the countdown once per interval and checks whether the event has now started. |
| 26 | Stops the repeating timer once `updateCountdown` returns `false`. |
| 27 | Closes the `if` block inside the interval callback. |
| 28 | Completes the interval setup and sets its repeat delay to one second. |
| 29 | Closes the interval-starting `if` block. |
| 30 | Closes the check that the countdown element exists. |

## Ticket reservation form (lines 32–101)

| Line | Explanation |
|---:|---|
| 31 | Blank line separating the countdown feature from the ticket form feature. |
| 32 | Looks for the form with ID `ticket-form`. It exists on the Tickets page. |
| 33 | Blank line separating the lookup from the form-specific logic. |
| 34 | Checks whether the ticket form exists, so form logic does not run on the other pages. |
| 35 | Gets the student-category dropdown. |
| 36 | Gets the section that contains the campus registration-number field. |
| 37 | Gets the registration-number input itself. |
| 38 | Gets the section containing ticket choice, quantity, and total. |
| 39 | Gets the ticket-type dropdown, whose choices are filled in according to category. |
| 40 | Gets the ticket-quantity input. |
| 41 | Gets the element where the calculated total price is displayed. |
| 42 | Gets the form message element. In the current implementation it is cleared when category changes, but no message is written into it. |
| 43 | Blank line separating the element lookups from the total-calculation function. |
| 44 | Declares `updateTotal`, which refreshes the displayed ticket price. |
| 45 | Converts the selected ticket option’s value (its price) from text to a number. |
| 46 | Converts the quantity input’s value from text to a number. |
| 47 | Blank line separating the inputs from the calculation. |
| 48 | Multiplies price by quantity, formats the result using the `en-KE` number format, and displays it as text. |
| 49 | Closes the `updateTotal` function. |
| 50 | Blank line separating the function from the event handlers. |
| 51 | Registers a `change` event handler that runs when the student selects a category. |
| 52 | Reads the newly selected category value. |
| 53 | Blank line separating the category lookup from the UI updates. |
| 54 | Shows the registration section only for a regular campus student; hides it for other selections. |
| 55 | Makes the registration-number field mandatory only for a regular campus student. |
| 56 | Shows the ticket section once a category has been selected; hides it while the placeholder is selected. |
| 57 | Clears any existing text from the form message element. |
| 58 | Blank line separating the form updates from the ticket-price choices. |
| 59 | Checks whether the selected category is a regular campus student. |
| 60 | Begins replacing the ticket dropdown options with the regular-student options. |
| 61 | Adds a free Regular ticket option, represented by the numeric value `0`. |
| 62 | Adds a VIP ticket option costing KSh 1,000. |
| 63 | Ends the template string containing the regular-student options. |
| 64 | Otherwise, checks whether the selected category is a student from another campus. |
| 65 | Begins replacing the dropdown options with the other-campus options. |
| 66 | Adds a Regular ticket option costing KSh 500. |
| 67 | Adds a VIP ticket option costing KSh 1,000. |
| 68 | Ends the template string containing the other-campus options. |
| 69 | Handles any category value that is neither of the two supported categories, such as the empty placeholder. |
| 70 | Clears the ticket dropdown when there is no valid category. |
| 71 | Closes the category fallback block. |
| 72 | Closes the category-selection conditionals. |
| 73 | Recalculates the total to reflect the currently selected price and quantity. |
| 74 | Closes the category-change handler and its event-listener registration. |
| 75 | Blank line separating the category handler from the other listeners. |
| 76 | Recalculates the total whenever the ticket type changes. |
| 77 | Recalculates the total whenever the user edits the quantity. |
| 78 | Blank line separating the input listeners from form submission. |
| 79 | Registers a handler for submitting the reservation form. |
| 80 | Prevents the browser’s normal form submission, which would otherwise reload or navigate away from the page. |
| 81 | Blank line separating submission control from reading the form values. |
| 82 | Reads the full name and removes leading and trailing whitespace with `trim()`. |
| 83 | Reads the email address and removes leading and trailing whitespace. |
| 84 | Reads the selected student category. |
| 85 | Finds the selected ticket option and reads its human-readable label for the confirmation. |
| 86 | Converts the ticket quantity to a number. |
| 87 | Calculates the total as ticket price multiplied by quantity. |
| 88 | Begins a conditional expression that includes registration details only for regular campus students. |
| 89 | For a regular campus student, creates a new line containing the trimmed registration number. |
| 90 | For any other category, uses an empty string so no registration number appears in the confirmation. |
| 91 | Blank line separating the gathered values from the confirmation dialog. |
| 92 | Opens a browser alert to show the reservation summary. |
| 93 | Starts the message with a personalized thank-you and says the reservation has been recorded. This is a demo confirmation, not a server-side reservation. |
| 94 | Adds the selected ticket label to the confirmation. |
| 95 | Adds the number of tickets. |
| 96 | Adds the total in Kenyan shillings, formatted with `en-KE` number grouping. |
| 97 | Adds the email address entered by the visitor. |
| 98 | Appends the registration-number line for regular campus students, or nothing for other students. |
| 99 | Closes the `window.alert` call. |
| 100 | Closes the submit handler and its event-listener registration. |
| 101 | Closes the check that the ticket form exists. |

## Presentation takeaway

The script has two independent browser-side features: a home-page countdown and an interactive ticket form. The countdown updates once per second; the form changes available ticket prices by student category, recalculates totals as inputs change, and displays a confirmation alert. The form does not contact a server or process payment. The countdown’s day divisor on line 14 should be `86400000` for an accurate day count.
