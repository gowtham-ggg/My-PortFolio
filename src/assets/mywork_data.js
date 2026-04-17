import project1_img from '../assets/project1.png';
import project3_img from '../assets/project3.png';
import imagify from "../assets/imagify.png";
import taxi from "../assets/taxi.png";
import realEstate from "../assets/realestate.png";
import portfolio from "../assets/portfolio.png";
import doctor from "../assets/prescripto.png";
import bmi from "../assets/project4.png";
import movieRating from "../assets/project6.png";
import simpleProfile from "../assets/project5.png";
import passGen from "../assets/passGen.png";

// Note: Platform project images are placeholders — replace with actual screenshots.
const mywork_data = [
  // Platform & Infrastructure Projects
  {
    w_no: 1,
    w_name: "VolTrax Web Platform",
    w_img: bmi,
    w_stack: ["Next.js", "Keycloak", "Docker", "GitLab CI/CD"],
    w_desc: "Multi-tenant SaaS platform with SSO via Keycloak, containerized deployment on VPS, and automated GitLab CI/CD pipeline with Kaniko and Trivy.",
    link: "https://github.com/gowtham-ggg",
    githubLink: "https://github.com/gowtham-ggg"
  },
  {
    w_no: 2,
    w_name: "Dvika API Service",
    w_img: simpleProfile,
    w_stack: ["Node.js", "PostgreSQL", "Redis", "Prometheus"],
    w_desc: "Production REST API with Prometheus metrics, Redis caching, PostgreSQL persistence, and Infisical-based secrets management on Docker Compose.",
    link: "https://github.com/gowtham-ggg",
    githubLink: "https://github.com/gowtham-ggg"
  },
  {
    w_no: 3,
    w_name: "GitLab CI/CD Pipeline",
    w_img: passGen,
    w_stack: ["GitLab CI", "Kaniko", "Trivy", "Infisical"],
    w_desc: "End-to-end pipeline: Kaniko rootless Docker builds, Trivy vulnerability scanning, Infisical secrets injection, SSH + rsync deployment to VPS.",
    link: "https://github.com/gowtham-ggg",
    githubLink: "https://github.com/gowtham-ggg"
  },
  {
    w_no: 4,
    w_name: "Infrastructure Stack",
    w_img: movieRating,
    w_stack: ["Docker Compose", "Nginx", "MinIO", "Redis"],
    w_desc: "Self-hosted stack: Nginx reverse proxy, Docker Compose service orchestration, MinIO S3-compatible storage, Redis caching, multi-env config.",
    link: "https://github.com/gowtham-ggg",
    githubLink: "https://github.com/gowtham-ggg"
  },
  {
    w_no: 5,
    w_name: "Observability Stack",
    w_img: taxi,
    w_stack: ["Prometheus", "Grafana", "Node Exporter", "Docker"],
    w_desc: "Full monitoring setup with Prometheus scraping, Grafana dashboards for system and application health, latency tracking, and alerting rules.",
    link: "https://github.com/gowtham-ggg",
    githubLink: "https://github.com/gowtham-ggg"
  },
  // Full-Stack Product Projects
  {
    w_no: 6,
    w_name: "Prescripto — Doctor Appointment",
    w_img: doctor,
    w_stack: ["React", "Node.js", "MongoDB", "Stripe"],
    w_desc: "Full-stack MERN app: patient booking, doctor dashboard, admin panel, Stripe payments, and Cloudinary image management.",
    link: "https://prescriptogg.netlify.app",
    githubLink: "https://github.com/gowtham-ggg/doctorAppointment"
  },
  {
    w_no: 7,
    w_name: "Imagify — AI Image Generator",
    w_img: imagify,
    w_stack: ["React", "Node.js", "MongoDB", "OpenAI API"],
    w_desc: "AI-powered image generation platform with a credit-based usage model, user authentication, and secure API key handling.",
    link: "https://aiimagify.netlify.app/",
    githubLink: "https://github.com/gowtham-ggg/MERN-Projects"
  },
  {
    w_no: 8,
    w_name: "Real Estate Platform",
    w_img: realEstate,
    w_stack: ["React", "Node.js", "MongoDB"],
    w_desc: "Property listing and search platform with filters, featured listings, and a fully responsive UI.",
    link: "https://elitehomesearch.netlify.app/",
    githubLink: "https://github.com/gowtham-ggg/real-estate"
  },
  {
    w_no: 9,
    w_name: "Portfolio Platform",
    w_img: portfolio,
    w_stack: ["React", "Web3Forms", "CSS"],
    w_desc: "Developer portfolio with smooth scroll navigation, contact form via Web3Forms API, and responsive layout.",
    link: "https://gowthamgportfolio.netlify.app/",
    githubLink: "https://github.com/gowtham-ggg/My-Portfolio"
  },
  {
    w_no: 10,
    w_name: "Weather App",
    w_img: project1_img,
    w_stack: ["React", "OpenWeather API"],
    w_desc: "Real-time weather dashboard with location-based forecasting and dynamic condition-based UI.",
    link: "https://weatherappgg.netlify.app/",
    githubLink: "https://github.com/gowtham-ggg/react-mini-projects"
  },
  {
    w_no: 11,
    w_name: "Currency Converter",
    w_img: project3_img,
    w_stack: ["React", "Exchange Rate API"],
    w_desc: "Live currency conversion tool with multi-currency support and real-time exchange rates.",
    link: "https://currencyconvertor2024.netlify.app/",
    githubLink: "https://github.com/gowtham-ggg/react-mini-projects"
  }
];

export default mywork_data;
