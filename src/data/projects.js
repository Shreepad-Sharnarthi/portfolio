export const projects = [
  {
    id: "packaging-quality",
    category: "Professional",
    title: "Packaging Quality & Production Management System",
    summary:
      "Production Django application supporting packaging quality-management and production workflows across departmental modules.",
    problem:
      "Quality and production workflows depend on consistent records, usable forms and reports that remain dependable as data grows.",
    solution:
      "Maintained application behaviour across quality modules, corrected data retrieval and consistency issues, and improved report output for larger exports.",
    contribution:
      "Resolved application and frontend defects, improved record retrieval and data consistency, and validated an Excel report formatting fix with targeted regression checks.",
    stack: [
      "Python",
      "Django",
      "Django ORM",
      "Microsoft SQL Server",
      "HTML",
      "JavaScript",
      "jQuery",
      "GitLab",
    ],
    repoUrl: "",
  },
  {
    id: "calling-telemetry",
    category: "Professional",
    title: "Centralized Calling & Telemetry Monitoring Platform",
    summary:
      "Backend reporting and monitoring contributions for a centralised enterprise telephony platform.",
    problem:
      "Reporting and operations need trustworthy data paths and signals that help teams spot growing work queues.",
    solution:
      "Contributed reporting investigation and service monitoring improvements, including authenticated metrics access and threshold-based backlog alerting.",
    contribution:
      "Implemented and validated monitoring behaviour, investigated call-report data relationships for more accurate reporting, and worked across FastAPI, PostgreSQL and containerised services.",
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Docker",
      "Redis",
      "RabbitMQ",
      "Celery",
      "Prometheus",
    ],
    repoUrl: "",
  },
  {
    id: "hr-analytics",
    category: "Personal & academic",
    title: "HR Analytics & Employee Management System",
    summary:
      "Full-stack HR system for core employee operations and an analytics dashboard.",
    problem:
      "Employee administration involves connected workflows for attendance, leave, payroll and performance.",
    solution:
      "Built a Django MVT application with a normalised MySQL database, role-based access, JWT authentication and dashboard visualisations.",
    contribution:
      "Implemented employee, department, attendance, leave, payroll, performance and recruitment modules, plus CRUD flows and interactive Chart.js views.",
    stack: ["Python", "Django", "MySQL", "Django ORM", "Chart.js", "JWT"],
    repoUrl: "",
  },
  {
    id: "egret",
    category: "Personal & academic",
    title: "Egret — AI-Powered Precision Agriculture Platform",
    summary:
      "Flask application that uses the Gemini API to provide AI-powered crop recommendations.",
    problem:
      "Crop recommendations depend on preparing input data consistently before it is used in an analysis flow.",
    solution:
      "Created automated preprocessing and feature-engineering pipelines with Pandas and NumPy to support recommendation workflows.",
    contribution:
      "Built the Flask application and data preparation pipeline connecting structured inputs to AI-generated crop recommendations.",
    stack: ["Python", "Flask", "Pandas", "NumPy", "Gemini API"],
    repoUrl: "",
  },
  {
    id: "ai-diagnostic",
    category: "Personal & academic",
    title: "AI Diagnostic System",
    summary:
      "Machine-learning diagnostic pipeline using Random Forest and MobileNetV2.",
    problem:
      "A diagnostic model needs a repeatable pipeline and clear evaluation of its predictions.",
    solution:
      "Built an end-to-end workflow and assessed it using accuracy, precision, recall and F1-score.",
    contribution:
      "Worked across data preparation, model training and evaluation for a pipeline combining classical machine learning and image modelling.",
    stack: ["Python", "Scikit-learn", "Random Forest", "MobileNetV2"],
    repoUrl: "",
  },
];
