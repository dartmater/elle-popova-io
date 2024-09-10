const body = document.querySelector("body"); // defined the body element

const footer = document.createElement("footer"); // footer element created

body.appendChild(footer); // footer added to the body

// date to footer
const today = new Date();

const thisYear = today.getFullYear();

const footerElement = document.querySelector("footer"); // footer element selected

const copyright = document.createElement("p"); // copyright created

copyright.innerHTML = `copyright Elle Popova ${thisYear}`;

footerElement.appendChild(copyright); // appended copyright element to footer

// Add skills section
const skills = ["HTML-5", "CSS", "Javascript"]; // list of skills

const skillsSection = document.getElementById("Skills"); // select the section by id

const skillsList = skillsSection.querySelector("ul"); // select the ul element to add list

// for loop created to iterate over skills array
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li"); // create a new list item element
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill); // append the skill element to the skills list
}

const messageForm = document.forms["leave_message"];
messageForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;
  console.log(usersName, usersEmail, usersMessage);

  // Messages section
  const messageSection = document.getElementById("messages");

  const messageList = messageSection.querySelector("ul");

  const newMessage = document.createElement("li");

  newMessage.innerHTML = `<a href = "mailto:${usersEmail}">${usersName}</a>
<span>wrote:${usersMessage}</span>`;

  //Remove button creation

  const removeButton = document.createElement("button");

  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;

    entry.remove(); //remove the li from dom
    if (messageList.childElementCount === 0) {
      messageSection.style.display = "none";
    }
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  messageSection.style.display = "block"; // show the messages section
  event.target.reset();
});