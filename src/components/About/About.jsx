import React from 'react';
import './about.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile from '../../assets/gg1.jpg';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="theme" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile} alt="profile" className="profile-img" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a Platform Engineer and DevSecOps practitioner who builds products and the infrastructure that runs them. With an MCA background and hands-on experience across the full delivery lifecycle, I design and operate systems from application code to production deployment.
            </p>
            <p>
              My work spans full-stack development with React, Next.js, and Node.js; containerized deployments with Docker and Compose; GitLab CI/CD pipelines using Kaniko for rootless image builds; and secrets management via Infisical. I configure Nginx as a reverse proxy, manage VPS environments, and operate multi-environment deployment strategies.
            </p>
            <p>
              On the security side, I integrate Trivy for container vulnerability scanning and use Keycloak for identity and access management. I monitor systems with Prometheus and Grafana. Currently advancing into Kubernetes, AWS, Ansible, and Terraform for cloud-native platform architecture.
            </p>
          </div>
          <div className="about-skills">
            <h2>Skills</h2>
            <div className="skill-category">
              <h3>Development</h3>
              <div className="about-skill"><p>React / Next.js</p><hr style={{ width: '80%' }} /></div>
              <div className="about-skill"><p>Node.js / Express.js</p><hr style={{ width: '75%' }} /></div>
            </div>
            <div className="skill-category">
              <h3>DevOps</h3>
              <div className="about-skill"><p>Docker / Compose</p><hr style={{ width: '85%' }} /></div>
              <div className="about-skill"><p>GitLab CI/CD + Kaniko</p><hr style={{ width: '80%' }} /></div>
              <div className="about-skill"><p>SSH + rsync</p><hr style={{ width: '75%' }} /></div>
            </div>
            <div className="skill-category">
              <h3>Security</h3>
              <div className="about-skill"><p>Trivy</p><hr style={{ width: '70%' }} /></div>
              <div className="about-skill"><p>Infisical</p><hr style={{ width: '75%' }} /></div>
              <div className="about-skill"><p>Keycloak</p><hr style={{ width: '65%' }} /></div>
            </div>
            <div className="skill-category">
              <h3>Infrastructure</h3>
              <div className="about-skill"><p>Nginx / VPS</p><hr style={{ width: '80%' }} /></div>
              <div className="about-skill"><p>MongoDB / PostgreSQL / Redis</p><hr style={{ width: '70%' }} /></div>
              <div className="about-skill"><p>MinIO</p><hr style={{ width: '65%' }} /></div>
            </div>
            <div className="skill-category">
              <h3>Monitoring</h3>
              <div className="about-skill"><p>Prometheus + Grafana</p><hr style={{ width: '70%' }} /></div>
            </div>
            <div className="skill-category">
              <h3>Cloud (Learning)</h3>
              <div className="about-skill"><p>Kubernetes</p><hr style={{ width: '45%' }} /></div>
              <div className="about-skill"><p>AWS (EC2 / S3 / RDS / EKS)</p><hr style={{ width: '40%' }} /></div>
              <div className="about-skill"><p>Ansible / Terraform</p><hr style={{ width: '35%' }} /></div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEAR IN PLATFORM ENGINEERING</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>SYSTEMS BUILT & DEPLOYED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>CI/CD PIPELINES AUTOMATED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
