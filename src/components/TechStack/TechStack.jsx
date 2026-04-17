import React from 'react';
import './techstack.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const tech_categories = [
  {
    label: "Development",
    techs: ["React", "Next.js", "Node.js", "Express.js", "TypeScript"]
  },
  {
    label: "DevOps",
    techs: ["Docker", "Docker Compose", "GitLab CI/CD", "Kaniko", "SSH + rsync"]
  },
  {
    label: "Security",
    techs: ["Trivy", "Infisical", "Keycloak"]
  },
  {
    label: "Infrastructure",
    techs: ["Nginx", "VPS", "MinIO", "Multi-env Deployments"]
  },
  {
    label: "Databases",
    techs: ["MongoDB", "PostgreSQL", "Redis"]
  },
  {
    label: "Monitoring",
    techs: ["Prometheus", "Grafana", "Node Exporter"]
  },
  {
    label: "Cloud (Learning)",
    techs: ["Kubernetes", "AWS EC2 / S3 / RDS / EKS", "Ansible", "Terraform"]
  }
];

const TechStack = () => {
  return (
    <div id="techstack" className="techstack">
      <div className="techstack-title">
        <h1>Tech Stack</h1>
        <img src={theme_pattern} alt="theme" />
      </div>
      <p className="techstack-subtitle">
        Tools and technologies I use to build, deploy, secure, and monitor systems.
      </p>
      <div className="techstack-grid">
        {tech_categories.map((cat, index) => (
          <div key={index} className="techstack-card">
            <h3 className="techstack-card-label">{cat.label}</h3>
            <div className="techstack-badges">
              {cat.techs.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
