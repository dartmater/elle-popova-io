const body = document.querySelector("body"); // defined the body element 

const footer = document.createElement("footer"); // footer element created

body.appendChild(footer); // footer added to the body

// date to footer
const today = new Date(); 

const thisYear = today.getFullYear(); 

const footerElement = document.querySelector("footer"); // footer element selected

const copyright = document.createElement("p"); // copyright created


copyright.innerHTML = `copyriight Elle Popova ${thisYear}`; 

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
};