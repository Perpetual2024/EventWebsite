
# MKUEvents
# Introduction
This Website advertises an upcomming event in a given institution.
## Features

 1. Hero Section
 2. About Section
 3. Event Schedule
 4. Speakers/Guests
 5. Registration Form
 6. Venue
 7. FAQ Section
 8. Countdown Timer/event time option
 9. Gallery
 10. Responsive Navigation
 11. Contact

## Technologies
* Html
* Css
* JavaScript

## Authors
1. perpetual akinyi
2. Asukulu shabani
3. Abdiaziz Adan sirat
4. Lorene chemutai
5. Zipporah chege
6. David Kimani
7. Sarah Kimani
8. Verahmoraa
9. Lynn
10. up up and away


# PROJECT DEVELOPMENT AND TEAM COLLABORATION

## 1. Project Overview

MKUEvents is a web development project designed to advertise an upcoming event within an institution. The website provides visitors with event information, ticket reservation options, venue details and contact information.

The project was developed as a group assignment to apply practical web development concepts and gain experience working collaboratively on a shared software project.

Our objective was not only to develop a website but also to understand how developers collaborate, manage source code and track changes throughout a project’s development.

## 2. Technologies Used

Our project uses three fundamental frontend web technologies.

### HTML – HyperText Markup Language

HTML provides the structure of our website.

We used HTML to create:
- Navigation menus.
- Headings and paragraphs.
- Website sections.
- Forms and input fields.
- Buttons and hyperlinks.
- Content containers.

HTML determines the structure and organisation of the information displayed to visitors.

### CSS – Cascading Style Sheets

CSS controls the visual presentation of our website.

We used CSS to manage:
- Colours and backgrounds.
- Fonts and typography.
- Margins and padding.
- Page layouts.
- Navigation appearance.
- Buttons and form styling.
- Responsive design.

CSS makes the website visually organised, attractive and easier to navigate.

### JavaScript

JavaScript introduces functionality and interactivity to our website.

Unlike HTML, which provides structure, and CSS, which controls presentation, JavaScript allows the website to respond dynamically to user actions.

We implemented JavaScript in two major areas:

1. Event countdown timer.
2. Dynamic ticket reservation form.

## 3. JavaScript Functionality

### A. Event Countdown Timer

Our website includes a countdown timer that calculates the time remaining until the scheduled event.

The event is scheduled for 20 November 2026 at 8:00 PM.

We used JavaScript’s Date object to define the event date and time.

The Date.now() method obtains the current time in milliseconds.

By subtracting the current time from the event time, JavaScript calculates the remaining time.

We then convert the remaining milliseconds into:
- Days.
- Hours.
- Minutes.
- Seconds.

The timer uses the following JavaScript methods and concepts:

**Date():** Defines the event date and time.

**Date.now():** Retrieves the current timestamp.

**Math.floor():** Rounds a numerical result down to the nearest whole number.

**setInterval():** Repeatedly executes a function after a specified time interval. We use 1,000 milliseconds, meaning the countdown updates every second.

**clearInterval():** Stops the repeated execution of the countdown when the event time is reached.

This functionality helped us understand JavaScript date calculations, functions, conditional statements and timed execution.

### B. Dynamic Ticket Reservation Form

Our ticket page contains an interactive reservation form.

JavaScript makes the form respond to the visitor’s selections.

The main functionalities include:

1. Student category selection.
2. Conditional display of the registration number field.
3. Dynamic ticket type selection.
4. Automatic ticket price calculation.
5. Quantity selection.
6. Form validation and submission feedback.

For example, when a regular campus student is selected, the registration number field becomes visible and required.

When another campus category is selected, that field is hidden.

The available ticket options also change depending on the selected category.

**Ticket pricing:**

| Student Category | Ticket Type | Price |
		
| Regular Student | Regular | Free |
| Regular Student | VIP | KSh 1,000 |
| Other Campus | Regular | KSh 500 |
| Other Campus | VIP | KSh 1,000 |

When a visitor changes the ticket type or quantity, JavaScript automatically recalculates the total amount.

We used event listeners to detect user interactions and execute the appropriate functions.

This demonstrates how JavaScript can manipulate webpage elements and make forms interactive.

## 4. GIT AND GITHUB – OUR COLLABORATION EXPERIENCE

One of the most important aspects of our project was collaboration.

We did not approach the assignment simply as individuals writing code independently. We used a shared GitHub repository to manage our project files and understand how multiple developers can contribute to the same software project.

### What is Git?

Git is a distributed version control system used to track changes in source code.

It allows developers to maintain a history of modifications, work with different versions of a project and integrate contributions from different team members.

### What is GitHub?

GitHub is an online platform that hosts Git repositories.

It provides developers with tools for storing code, collaborating, reviewing changes and managing software projects.

### Difference Between Git and GitHub

| Git | GitHub |
	
| Version control system | Online code hosting and collaboration platform |
| Installed and used locally | Accessed through the internet |
| Tracks changes in files | Hosts Git repositories |
| Manages commits and branches | Provides repository collaboration features |

## 5. HOW WE COLLABORATED AS A GROUP

We used a shared repository as the central location for our project.

The collaboration workflow involved several important stages:

### Step 1: Repository Creation

We established a GitHub repository for the project.

This repository became the central location for our website’s source code.

### Step 2: Accessing the Shared Project

Team members could obtain a local copy of the repository and work on the project files.

The Git clone command is used to download an existing repository.

### Step 3: Developing and Modifying Files

We worked on the website’s source files, including HTML, CSS and JavaScript.

Changes made locally could be reviewed before being added to the shared repository.

### Step 4: Staging Changes

Git provides the git add command to select modified files for the next commit.

### Step 5: Committing Changes

We used the concept of commits to understand how changes are recorded in Git.

A commit is a snapshot of staged changes accompanied by a descriptive message.

Commit messages help developers understand what was changed and why.

### Step 6: Pushing Changes

The git push command uploads local commits to the remote GitHub repository.

This makes the committed changes available to other collaborators.

### Step 7: Pulling Updates

The git pull command retrieves and integrates changes from the remote repository.

This helps team members keep their local project versions updated.

## 6. IMPORTANT GIT COMMANDS

The following commands demonstrate the basic Git workflow.

```bash
# Download the project repository
Git clone <repository-url>

# Check the current project status
Git status

# View the commit history
Git log –oneline

# Stage modified files
Git add .

# Commit the changes
Git commit -m “Describe the changes made”

# Upload commits to GitHub
Git push

# Retrieve and integrate remote changes
Git pull

# View the connected remote repository
Git remote -v
```

## 7. HOW WE CAN DEMONSTRATE OUR DEVELOPMENT JOURNEY ON GITHUB

One of the most interesting things we learned is that GitHub allows us to examine the development history of a project rather than simply viewing its final version.

During our presentation, we can demonstrate the following:

### A. Repository Overview

We will open our GitHub repository and show:

- Project name.
- Repository description.
- Source code files.
- Project structure.
- Available branches, if any.

This demonstrates how our source code is organised and stored.

### B. Commit History

We will open the commit history to demonstrate the recorded changes made throughout development.

We can show:

- Commit messages.
- Commit dates.
- Associated authors.
- Changes recorded in individual commits.

This allows us to explain how Git maintains a history of development activities.

### C. Contributors

We will demonstrate GitHub’s contributor information, where available.

This helps us examine the contribution activity associated with the repository.

GitHub associates commits with author identities configured in Git.

### D. Inspecting Individual Commits

We can open an individual commit and examine the changes made to the project.

GitHub displays additions and deletions in the source code.

- Green lines indicate added code.
- Red lines indicate removed code.

This allows us to see precisely how particular files changed.

### E. Comparing Different Versions

GitHub allows us to inspect previous versions of files and compare them with later versions.

This demonstrates how our project evolved through successive modifications.

It also helps explain why version control is important when developing software as a team.

## 8. WHAT WE LEARNED FROM WORKING AS A TEAM

This project provided us with practical exposure to collaborative software development.

Some of the important lessons include:

**Version Control:** We learned how Git tracks changes and maintains the history of source code.

**Team Collaboration:** We understood how multiple developers can contribute to a shared project.

**Repository Management:** We learned how to maintain a central repository for project files.

**Commit Management:** We understood the importance of recording changes with meaningful commit messages.

**Synchronization:** We learned why developers need to retrieve the latest changes before continuing their work.

**Code Management:** We gained an understanding of how changes can be reviewed and integrated.

**Merge Conflicts:** We learned that conflicting modifications may require developers to manually reconcile changes.

**Communication:** We understood that successful software development requires coordination and communication among team members.

## 9. CHALLENGES AND LIMITATIONS

During development, we had to understand how different technologies work together.

Some of the concepts we explored included:

- Structuring multiple pages using HTML.
- Applying consistent styling using CSS.
- Implementing dynamic functionality using JavaScript.
- Managing source code through Git.
- Collaborating through GitHub.
- Understanding how to retrieve and integrate changes.

### Current Project Limitations

The ticket reservation form currently demonstrates frontend interaction and price calculation.

It does not yet save reservations to a database, issue actual tickets or process real payments.

These functionalities could be introduced in a future version by integrating a backend and database.

## 10. FUTURE IMPROVEMENTS

Possible improvements to MKUEvents include:

1. Integrating a backend system.
2. Connecting the ticket reservation form to a database.
3. Implementing actual ticket registration and storage.
4. Integrating secure online payments.
5. Sending automated confirmation emails.
6. Developing an event administration dashboard.
7. Improving accessibility and testing.
8. Adding more event information and interactive features.

## 11. LIVE PRESENTATION DEMONSTRATION

During our presentation, we will demonstrate the following:

### Website Demonstration

1. Open the homepage.
2. Explain the event information.
3. Demonstrate the navigation links.
4. Open the About page.
5. Demonstrate the countdown timer.
6. Open the ticket reservation page.
7. Select different student categories.
8. Demonstrate the registration number field.
9. Change ticket types and quantities.
10. Show the automatic price calculation.
11. Open the Contact page.

### Source Code Demonstration

We will open selected project files and explain:

- HTML page structure.
- CSS styling and layout.
- JavaScript countdown functionality.
- JavaScript ticket form functionality.

### GitHub Demonstration

We will then open the shared GitHub repository and demonstrate:

1. Repository structure.
2. Commit history.
3. Individual commit details.
4. Contributors information.
5. Source code changes.
6. How Git and GitHub support collaboration.

## 12. OUR BIGGEST TAKEAWAY

This project helped us understand that web development is not only about writing code.

It also involves planning, collaboration, version control, communication, testing and continuous improvement.

We learned how HTML, CSS and JavaScript work together to create an interactive website.

More importantly, we gained an understanding of how Git and GitHub support collaborative software development.

By maintaining a shared repository and examining the development history, we can understand how a project evolves from its initial development stages into a more complete product.

We are proud of the experience we gained working together and applying the concepts learned in class to a practical project.


**MKUEvents – Developed as a Group Web Design and Development Project.**

