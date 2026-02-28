/* Save below into script.js */


const projects = [
{
title: "Interactive AI Website",
desc: "Animated interactive website with scroll effects and dynamic UI.",
tech: ["React", "Animation", "UI"]
},
{
title: "MIT App Word App",
desc: "CloudDB powered admin + user vocabulary app.",
tech: ["MIT AI", "CloudDB"]
},
{
title: "Creative Experiments",
desc: "Cursor effects, doodles and micro‑interactions.",
tech: ["JS", "Effects"]
}
];


const grid = document.getElementById('projectGrid');


projects.forEach(p => {
const card = document.createElement('div');
card.className = 'project-card';


const tags = p.tech.map(t => `<span class="tag">${t}</span>`).join('');


card.innerHTML = `
<h4>${p.title}</h4>
<p>${p.desc}</p>
<div class="tags">${tags}</div>
<button onclick="alert('Add your live link here')">View</button>
`;


grid.appendChild(card);
});


function scrollToSection(id) {
document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}


function sayHello() {
window.location.href = "mailto:youremail@example.com";
}
