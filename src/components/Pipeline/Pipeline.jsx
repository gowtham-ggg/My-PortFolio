import React from 'react';
import './pipeline.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const pipeline_stages = [
  {
    stage: "01",
    name: "Code",
    description: "Source managed in GitLab. Feature branches, merge requests, and code review before merge to main.",
    tools: ["GitLab", "Git"]
  },
  {
    stage: "02",
    name: "Build",
    description: "Docker images built with Kaniko inside GitLab CI — rootless, no Docker daemon required.",
    tools: ["GitLab CI", "Kaniko", "Docker"]
  },
  {
    stage: "03",
    name: "Scan",
    description: "Container images scanned for CVEs with Trivy. Secrets injected via Infisical. Pipeline fails on critical vulnerabilities.",
    tools: ["Trivy", "Infisical"]
  },
  {
    stage: "04",
    name: "Deploy — Staging",
    description: "Automated deploy to staging via SSH + rsync. Nginx config applied, Docker Compose services restarted.",
    tools: ["SSH", "rsync", "Docker Compose", "Nginx"]
  },
  {
    stage: "05",
    name: "Deploy — Production",
    description: "Manual gate before production push. Same pipeline, production secrets from Infisical, health checks post-deploy.",
    tools: ["SSH", "Docker Compose", "Infisical"]
  },
  {
    stage: "06",
    name: "Monitor",
    description: "Prometheus scrapes metrics post-deploy. Grafana dashboards track system health, latency, and error rates.",
    tools: ["Prometheus", "Grafana"]
  }
];

const Pipeline = () => {
  return (
    <div id="pipeline" className="pipeline">
      <div className="pipeline-title">
        <h1>CI/CD & DevSecOps</h1>
        <img src={theme_pattern} alt="theme" />
      </div>
      <p className="pipeline-subtitle">
        Every deployment follows a secure, automated pipeline — from code commit to production, with scanning and observability built in.
      </p>
      <div className="pipeline-stages">
        {pipeline_stages.map((stage, index) => (
          <div key={index} className="pipeline-stage">
            <div className="pipeline-stage-header">
              <span className="pipeline-stage-no">{stage.stage}</span>
              <h3>{stage.name}</h3>
            </div>
            <p>{stage.description}</p>
            <div className="pipeline-tools">
              {stage.tools.map((tool, i) => (
                <span key={i} className="pipeline-tool">{tool}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pipeline;
