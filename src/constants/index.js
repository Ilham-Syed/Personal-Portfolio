import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = ` I'm passionate about technology and software development, and this portfolio showcases some of my projects and experiences. Throughout my academic journey, I've gained valuable skills in programming, problem-solving, and teamwork. I'm always eager to learn and explore new technologies to stay updated in this ever-evolving field. Feel free to browse through my projects and get in touch if you have any questions or opportunities for collaboration :)`;

export const ABOUT_TEXT = `As a fourth-year student eager to dive into the world of technology, I have a unique blend of enthusiasm, adaptability, and a strong foundation in programming fundamentals. I am a dedicated and versatile student with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Node.js, MySQL, PostgreSQL, and MongoDB. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "February'23 - January'24",
    role: "Creativity Lead",
    company: "VESIT Enterprenuership Cell",
    description: `Worked on various projects and events to promote entrepreneurship and innovation among students. Was part of a team of designers and developers to create digital content and marketing materials.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "June'23 - December'24",
    role: "Technical Officer",
    company: "Indian Society for Technical Education,VESIT",
    description: `Organized and Managed workshops, seminars, and technical events for students. Was part of the technical team and coordinated with external speakers and industry professionals for knowledge sharing sessions.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "November'23 - Januraury'24",
    role: "Project Intern",
    company: "Oil And Natural Gas Coorporation",
    description: `Developed a Network Attached Storage(NAS) from scratch. Worked on the design, development, and testing of the NAS. Learned about networking protocols, file systems, data storage solutions and ERP software . Had exposure to how large scale projects are managed and executed.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
];

export const PROJECTS = [
  {
    title: "Wellness Hub",
    image: project1,
    description:
      "A platform for managing mental and physical health, with features such as meditation sessions, workout plans, and progress tracking.",
    technologies: ["HTML", "Tailwind CSS", "React", "Node.js", "MongoDB"],
    repo:"https://devfolio.co/projects/wellness-hub-fec2"
  },
  {
    title: "Alumni Tracking System",
    image: project2,
    description:
      "A Mobile application which enabled the students to connect with the alumni of the college. The app had features like job postings, mentorship programs, and event management.",
    technologies: ["Flutter","Firebase"],
    repo:"https://github.com/Ilham-Syed/Flutter-alumni-portal"
  },
  {
    title: "Yelp Camp - A website for Booking Campgrounds",
    image: project3,
    description:
      "A platform for booking campgrounds, with features like user authentication, campground reviews, and campground creation.",
    technologies: ["HTML", "CSS", "NodeJs", "ExpressJs","Bootstrap"],
    repo:"https://github.com/Ilham-Syed/Yelp-Camp"
  },
  {
    title: "Cognitive Care-A comprehensive website for early detection of Alzheimer's Disease",
    image: project4,
    description:
      "The Website uses Deep learning models like CNN and transfer learning methods for early detection and classification of Alzheimer's Disease. The website had features like user authentication, patient data management, cognitive games and a Comminty Forum.",
    technologies: ["ReactJs", "NodeJs", "ExpressJs", "MongoDB", "Tensorflow", "Keras", "Python"],
    repo:"https://github.com/Rishi-Kokil/Cognitive-Care"
  },
];

export const CONTACT = {
  address: "Kharghar, Mumbai, Maharashtra, India",
  phoneNo: "9137509538",
  email: "ilhamsyed1310@gmail.com",
};
