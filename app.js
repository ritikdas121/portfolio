const portfolioData = {
  education: [
    {
      degree: "Master of Computer Applications",
      institution: "SKM University, Dumka",
      year: "2023 - 2025",
      description: "CGPA 8.6",
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "SKM University, Dumka",
      year: "2020 - 2023",
      description: "CGPA 8.71",
    },
  ],
  skills: ["HTML", "CSS", "JavaScript", "Java"],
  projects: [
    {
      title: "Sunil Das Sweets – Website Project",
      description:
        "A responsive website for a local sweet shop featuring Light/Dark mode with CSS variables, LocalStorage for saving preferences, and a structured menu page with item descriptions and prices.",
      technologies: "HTML, CSS, JavaScript",
      link: "https://shreesunildassweets.netlify.app/",
    },
  ],
  experience: [
    {
      role: "Wordpress Developer",
      company: "MFactor Consultancy Pty Ltd",
      duration: "July 2024 - Now",
      description:
        "Developed responsive WordPress websites using Elementor Pro, worked with designers to build pages, improved SEO, and fixed bugs for a better user experience.",
    },
  ],
  contact: [
    {
      platform: "Email",
      link: "mailto:rdas816120@gmail.com",
    },
    {
      platform: "Instagram",
      link: "https://instagram.com/__ritik.das__",
    },
    {
      platform: "LinkedIn",
      link: "https://linkedin.com/in/ritikdas121",
    },
    {
      platform: "Linktree",
      link: "https://linktr.ee/ritikkumardas",
    },
  ],
};

function renderEducation() {
  const educationList = document.getElementById("education-list");
  educationList.innerHTML = portfolioData.education
    .map(
      (item) => `
    <div class="education-item">
      <h3>${item.degree}</h3>
      <p>${item.institution} | ${item.year}</p>
      <p>${item.description}</p>
    </div>
  `
    )
    .join("");
}

function renderSkills() {
  const skillsList = document.getElementById("skills-list");
  skillsList.innerHTML = portfolioData.skills
    .map(
      (skill) => `
    <div class="skill-item">${skill}</div>
  `
    )
    .join("");
}

function renderProjects() {
  const projectsList = document.getElementById("projects-list");
  projectsList.innerHTML = portfolioData.projects
    .map(
      (item) => `
    <div class="project-item">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <p>Technologies: ${item.technologies}</p>
      <p><a href="${item.link}" target="_blank">View Project</a></p>
    </div>
  `
    )
    .join("");
}

function renderExperience() {
  const experienceList = document.getElementById("experience-list");
  experienceList.innerHTML = portfolioData.experience
    .map(
      (item) => `
    <div class="experience-item">
      <h3>${item.role}</h3>
      <p>${item.company} | ${item.duration}</p>
      <p>${item.description}</p>
    </div>
  `
    )
    .join("");
}

function renderContact() {
  const contactList = document.getElementById("contact-list");
  contactList.innerHTML = portfolioData.contact
    .map(
      (item) => `
    <a href="${item.link}" target="_blank">${item.platform}</a>
  `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderEducation();
  renderSkills();
  renderProjects();
  renderExperience();
  renderContact();
});
