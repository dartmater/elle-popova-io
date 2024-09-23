const body = document.querySelector("body"); // Define the body element

const footer = document.createElement("footer"); // Create footer element
body.appendChild(footer); // Add footer to the body

// Get the current year for the footer
const today = new Date();
const thisYear = today.getFullYear();
const footerElement = document.querySelector("footer"); // Select the footer element

const copyright = document.createElement("p"); // Create copyright paragraph
copyright.innerHTML = `copyright Elle Popova ${thisYear}`;
footerElement.appendChild(copyright); // Append copyright to the footer

// Add skills section
const skills = ["HTML-5", "CSS", "Javascript"]; // List of skills
const skillsSection = document.getElementById("Skills"); // Select the skills section by id
const skillsList = skillsSection.querySelector("ul"); // Select the ul element for skills

// Iterate over skills array to create list items
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li"); // Create a new list item element
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill); // Append skill to the skills list
}

// Message form handling
const messageForm = document.forms["leave_message"];
messageForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  const usersName = event.target.usersName.value; // Get user's name
  const usersEmail = event.target.usersEmail.value; // Get user's email
  const usersMessage = event.target.usersMessage.value; // Get user's message
  console.log(usersName, usersEmail, usersMessage); // Log user input to console

  // Messages section
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul"); // Select the ul element for messages

  const newMessage = document.createElement("li"); // Create a new message list item
  newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a>
  <span>wrote: ${usersMessage}</span>`; // Format message with user's name and message

  // Remove button creation
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove"; // Button text
  removeButton.type = "button"; // Button type
  removeButton.classList.add("remove-button"); //class added

  // Event listener for remove button
  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode; // Get the parent list item
    entry.remove(); // Remove the list item from DOM
    if (messageList.childElementCount === 0) {
      messageSection.style.display = "none"; // Hide messages section if no messages
    }
  });

  newMessage.appendChild(removeButton); // Append remove button to new message
  messageList.appendChild(newMessage); // Append new message to the message list

  messageSection.style.display = "block"; // Show the messages section
  event.target.reset(); // Reset the form
});

// Fetch GitHub repositories
const userNameGithub = "dartmater"; // GitHub username
const url = `https://api.github.com/users/${userNameGithub}/repos`; // API URL

fetch(url)
  .then((response) => response.json()) // Convert response to JSON
  .then((repositories) => {
    console.log(repositories); // Log repositories to console

    const projectSection = document.getElementById("Projects");
    const projectList = projectSection.querySelector("ul"); // Select the ul element for projects

    // Iterate over repositories to create list items
    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement("li");
      project.innerHTML = repositories[i].name; // Access the repository name
      projectList.appendChild(project); // Append project to the project list
    }
  })
  .catch((error) => {
    console.error("An error occurred:", error); // Log any errors
  });
