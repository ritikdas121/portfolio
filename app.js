const portfolioData = {
  education: [
    {
      degree: "Bachelor of Computer Application",
      institution: "SKM University, Dumka",
      year: "2020 - 2023",
      description: "CGPA 8.3"
    },
    {
      degree: "Master in Computer Application",
      institution: "SKM University, Dumka",
      year: "2023 - 2025",
      description: "CGPA 8.0"
    }
  ],
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "Java",
    "Figma"
  ],
  projects: [
    {
      title: "IPL 2025 Match Display",
      description: "A responsive web app to display IPL match details with team filtering, built using JavaScript DOM manipulation.",
      technologies: "HTML, CSS, JavaScript",
      link: "https://github.com/"
    },
    {
      title: "Portfolio Website",
      description: "A minimal dark-themed portfolio with modular data fetching for easy updates.",
      technologies: "HTML, CSS, JavaScript",
      link: "https://ritikkumardas.netlify.app"
    }
  ],
  experience: [
    {
      role: "Wordpress Developer",
      company: "MFactor Consultancy Pty Ltd",
      duration: "July 2024 - Now",
      description: "Developed responsive web designs using Elementor Pro."
    },
  ],
  contact: [
    {
      platform: "Email",
      link: "mailto:rdas816120@gmail.com"
    },
    {
      platform: "Instagram",
      link: "https://instagram.com/__ritik.das__"
    },
    {
      platform: "LinkedIn",
      link: "https://linkedin.com/in/ritikdas121"
    },
    {
    platform: "Linktree",
    link: "https://linktr.ee/ritikkumardas"
      }
  ]
};


function renderEducation() {
  const educationList = document.getElementById('education-list');
  educationList.innerHTML = portfolioData.education.map(item => `
    <div class="education-item">
      <h3>${item.degree}</h3>
      <p>${item.institution} | ${item.year}</p>
      <p>${item.description}</p>
    </div>
  `).join('');
}


function renderSkills() {
  const skillsList = document.getElementById('skills-list');
  skillsList.innerHTML = portfolioData.skills.map(skill => `
    <div class="skill-item">${skill}</div>
  `).join('');
}


function renderProjects() {
  const projectsList = document.getElementById('projects-list');
  projectsList.innerHTML = portfolioData.projects.map(item => `
    <div class="project-item">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <p>Technologies: ${item.technologies}</p>
      <p><a href="${item.link}" target="_blank">View Project</a></p>
    </div>
  `).join('');
}

function renderExperience() {
  const experienceList = document.getElementById('experience-list');
  experienceList.innerHTML = portfolioData.experience.map(item => `
    <div class="experience-item">
      <h3>${item.role}</h3>
      <p>${item.company} | ${item.duration}</p>
      <p>${item.description}</p>
    </div>
  `).join('');
}


function renderContact() {
  const contactList = document.getElementById('contact-list');
  contactList.innerHTML = portfolioData.contact.map(item => `
    <a href="${item.link}" target="_blank">${item.platform}</a>
  `).join('');
}


document.addEventListener('DOMContentLoaded', () => {
  renderEducation();
  renderSkills();
  renderProjects();
  renderExperience();
  renderContact();
});