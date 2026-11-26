# MKU Freshers Night Website — presentation guide

## Slide 1 — Title

**MKU Freshers Night 2026**  
An event-information and ticket-reservation demo website.

**Presenter opening:** This website helps students learn about the event, find practical details, and make a sample ticket reservation through a simple, responsive site.

## Slide 2 — What the website does

- Promotes MKU Freshers Night 2026.
- Shares the event date, time, venue, and purpose.
- Provides Home, About, Tickets, and Contact pages.
- Shows a live countdown on the home page.
- Lets visitors choose a student category and ticket type, set a quantity, and see an estimated total.

**Important scope note:** The ticket page explicitly identifies the form as a demo. It does not process a real payment, save a booking to a server, or send an email.

## Slide 3 — Technology and architecture

The project is a static front-end website built with three core technologies:

- **HTML** supplies the content and structure of each page.
- **CSS** controls layout, colors, typography, responsive behavior, and form styling.
- **JavaScript** adds the countdown and dynamic ticket-form behavior.

The pages are separate HTML documents. They connect through ordinary links in each page’s navigation. Shared styling comes from `style.css`; the ticket page adds `ticket.css`; JavaScript is included on the home and ticket pages.

## Slide 4 — How a browser displays a page

1. A visitor opens an HTML page, such as the home page.
2. The browser builds the page from the HTML elements and their content.
3. The page links to CSS files; the browser applies those styles to the elements.
4. On pages that include the script, JavaScript looks for specific element IDs and attaches behavior when those elements are present.
5. Visitors follow navigation links or interact with page controls; the browser updates the page in response.

This separation makes each technology’s role clear: HTML describes *what is on the page*, CSS describes *how it looks*, and JavaScript describes *how it responds*.

## Slide 5 — Shared page structure

The main pages share a common pattern:

- A top navigation bar links to Home, About, Tickets, and Contact.
- A `<main>` region contains the page-specific content.
- A footer repeats the event name and hashtag.
- The navigation marks the current page with `aria-current="page"` for both context and styling.

The navigation is written directly in each page. `navbar.html` is a standalone navigation example, but the other pages do not dynamically load it.

## Slide 6 — Home page: event introduction

The home page (`index.html`) is the main landing page. Its hero section presents:

- The event schedule: Friday, 20 November 2026, from 8 PM until dawn.
- The title, “Freshers Night 2026.”
- A short invitation and the venue, MKCC Grounds next to the MKU Library.
- A prominent ticket link to `Ticket.html`.
- A countdown display.

Below the hero, an information section describes what to expect and distinguishes between regular MKU campus students and students visiting from other campuses.

## Slide 7 — Countdown: how it works

The countdown element is a paragraph with the ID `countdown`. The JavaScript:

1. Finds that paragraph and skips countdown logic if it is not on the current page.
2. Creates the event date as 20 November 2026 at 8:00 PM. In JavaScript’s `Date` constructor, month numbering starts at zero, making `10` November.
3. Subtracts the current timestamp from the event timestamp.
4. Converts the remaining milliseconds into days, hours, minutes, and seconds.
5. Updates the displayed text immediately and every second.
6. Displays “The event is underway!” and stops the interval when the event time arrives.

**Code note for the presenter:** The current days calculation uses `864000000` milliseconds instead of `86400000` milliseconds per day, so the displayed day count is ten times too small. The hour, minute, and second calculations use their intended millisecond units.

## Slide 8 — About page

`About.html` explains the purpose of the event: welcoming new students, helping them feel part of the university community, and creating a chance to meet people and enjoy music and performances.

The “Find your ticket” button links to the ticket page. The page shares the site’s navigation and footer and uses the shared stylesheet.

## Slide 9 — Tickets page: form structure

`Ticket.html` contains the reservation form. It asks for:

- Full name and email address.
- Student category: regular campus student or student from another campus.
- A school registration number for regular campus students.
- Ticket type and quantity.

The form begins with the registration and ticket-detail sections hidden. HTML validation attributes require the main fields, restrict quantity to 1–10, and use an email input for the email address. When a regular student is selected, the registration number also becomes required.

## Slide 10 — Ticket form: category and price behavior

When the visitor changes the student category, JavaScript updates the form:

- **Regular campus student:** shows and requires the registration-number field; ticket choices are Regular for free or VIP for KSh 1,000.
- **Other-campus student:** hides the registration-number field; ticket choices are Regular for KSh 500 or VIP for KSh 1,000.
- **No category selected:** hides ticket details and clears the ticket choices.

Once a category is selected, the ticket section appears. The script also clears the form’s status/message area when the category changes.

## Slide 11 — Ticket form: total and confirmation

- Changing the ticket type or quantity runs the total-price calculation.
- The script converts the option value and quantity to numbers, multiplies them, and formats the result with the `en-KE` locale.
- On submit, the browser’s normal page navigation is prevented.
- The script gathers the name, email, category, ticket label, quantity, total, and (for regular students) registration number.
- A browser alert presents a confirmation summary.

This is a front-end demonstration only: there is no server request, database, actual booking record, payment gateway, or email confirmation.

## Slide 12 — Contact page

`contact.html` provides venue information for Mount Kenya University’s Thika Campus, including MKCC Grounds next to the library. It also displays an organiser email link and a phone link.

The `mailto:` and `tel:` links ask the visitor’s device to open a compatible email or calling application; the website itself does not send the message or place the call.

## Slide 13 — Visual design and responsive behavior

`style.css` provides the site-wide visual design:

- A dark blue-gray text palette, light page background, and warm accent color.
- A sticky white navigation bar with a highlighted current page.
- A full-width hero image with a dark overlay for readable text.
- Reusable buttons, content sections, cards, and footer styles.
- Flexible grids that adapt to the available width.
- A media query at widths of 620 pixels and below that stacks the navigation and adjusts spacing.

`ticket.css` adds ticket-form-specific layout and styling, including consistent input sizes, focus outlines, hidden sections, and submit-button states.

## Slide 14 — Accessibility and usability details

- Semantic elements such as `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` organize the page.
- Form labels use `for` attributes that match input IDs.
- `aria-current="page"` identifies the active navigation item.
- The countdown uses `role="timer"` and `aria-live="polite"` so assistive technology can identify the changing time.
- The form’s status paragraph uses `role="status"`.
- Native required fields and input types support basic browser validation.
- Responsive layouts support narrower screens.

The status paragraph is currently only cleared by JavaScript; the script does not use it to display a success or error message.

## Slide 15 — How the parts work together

**A visitor’s path through the website:**

1. The Home page introduces the event and provides the date, venue, countdown, and ticket link.
2. The visitor can open About for more context or Contact for venue and organiser details.
3. The Tickets link opens the reservation form.
4. The visitor enters contact details, selects a category, and sees the matching ticket choices.
5. JavaScript updates the estimated total as the ticket type or quantity changes.
6. Submitting the form displays a summary in a browser alert.

HTML provides both the links and the form elements. CSS gives all pages a consistent visual identity. JavaScript uses element IDs in the HTML to find the countdown and form controls and make them interactive.

## Slide 16 — Project boundaries and next steps

The current project is a static site: it can present information and perform calculations in the visitor’s browser, but its reservation is not persistent.

Possible future enhancements, if the project is extended:

- Correct the countdown day divisor.
- Connect reservations to a secure backend and database.
- Add real payment processing through a suitable provider.
- Send confirmation email through a server-side service.
- Display a clear success or error status in the page rather than only an alert.
- Add automated tests for date calculations, prices, and form interactions.

These are suggestions for future development, not features currently implemented.

## Slide 17 — Closing summary

MKU Freshers Night is a responsive, multi-page event website built with HTML, CSS, and JavaScript. It brings event information, venue/contact details, a countdown, and an interactive sample ticket calculator together through shared navigation and styling. Its reservation flow demonstrates front-end interaction, while real booking and payment functionality remain outside the current implementation.

## Source files to reference during the presentation

- Home page: [`index.html`](./index.html)
- Ticket page: [`Ticket.html`](./Ticket.html)
- About page: [`About.html`](./About.html)
- Contact page: [`contact.html`](./contact.html)
- Shared styling: [`style.css`](./style.css)
- Ticket form styling: [`ticket.css`](./ticket.css)
- Countdown and form behavior: [`index.js`](./index.js)
