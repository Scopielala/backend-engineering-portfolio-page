// data.js
// This file holds ALL the content for the portfolio site.
// main.js reads from this object to build the page — this file
// should be the ONLY thing that changes when reusing this template
// for a future client.

const portfolioData = {

  // Single objects for sections that appear once on the page
  hero: {
    tagline: "Data. Systems. Engineered with purpose.",
    subtext: "I build backend systems with a focus on clean architecture, reliable data management, and secure application design."
  },

  about: {
    // Array of paragraphs, not one big string — this makes it easy
    // for main.js to loop through and create a separate <p> per paragraph.
    paragraphs: [
      "Before I wrote a line of code, I ran a salon. Years of working with clients taught me that getting the right result starts long before the work itself. You have to ask the right questions, understand what someone actually needs, and avoid making assumptions. I have come to recognize that the same principle applies to software engineering.",
      "That's the approach I bring to everything I build. Whether I'm designing an API, modelling a database, or implementing business logic, I start by understanding the problem, identifying the underlying requirements, and thinking carefully about how the pieces should work together. I believe good software begins with clear thinking, not just writing code.",
      "I'm a backend engineer focused on API development, database design, and building reliable application systems with JavaScript, Node.js, Python, and PostgreSQL. My experience in the barbering industry continues to influence how I approach engineering: I look beyond the immediate task to understand the people, processes, and real-world problems the software is supposed to serve."
    ]
  },

  techStack: {
    summary: "JavaScript & Node.js — backend-focused, comfortable across the full stack when a project needs it. I started in Python (Django, FastAPI) before making a deliberate move to the JavaScript ecosystem — the fundamentals run deep even though the tools changed.",
    roles: [
      "Backend Engineer (primary)",
      "Full-Stack Contributor (hybrid, frontend when needed)",
      "CV Writer & Portfolio Page Builder"
    ],
    skills: ["Node.js", "NestJS", "JavaScript", "HTML/CSS", "PostgreSQL", "REST APIs", "Git/GitHub", "Express.js", "Docker", "Jest", "TypeScript", "CSS Frameworks (Tailwind, Bootstrap)", "Postman"],
    background: ["Python", "Django", "FastAPI", "Javascript ES6+", "Node.js"]
  },

  // Array of objects for sections that REPEAT — apps, and later,
  // CV samples / portfolio samples. main.js will loop over this
  // array once and generate one card/block per item, instead of
  // hardcoding "Naija Learn" and "ExpenseApp" separately in HTML.
  apps: [
    { name: "Salon API", 
      description: "A backend API for salon operations, built with Node.js, Express, PostgreSQL, and Prisma ORM. Models core business entities including clients, staff, services, and appointments, with separate authentication flows for staff and clients.", 
      decision: "I approached the project from the perspective of someone who has managed a salon firsthand. Rather than treating appointments as isolated records, I designed the data relationships around the actual business entities involved, with an emphasis on data integrity, clear business logic, and secure access to client and staff resources.", 
      tech: ["Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "JWT Authentication"],
      github: "https://github.com/Scopielala/salon-api"

    },
    {
      name: "Naija Learn",
      description: "An AI-powered learning platform for Nigerian secondary school students, built on the WAEC curriculum. Built end-to-end — FastAPI, PostgreSQL, async SQLAlchemy, Groq's LLaMA 3.3 70B for AI content, and a vanilla JS frontend with full client-side routing.",
      decision: "When the first AI provider proved unreliable for generating curriculum-accurate content, I switched providers mid-build rather than ship something inconsistent — because shipping the wrong information defeats the whole point of a learning platform.",
      tech: ["FastAPI", "PostgreSQL", "Async SQLAlchemy", "Groq LLaMA 3.3 70B", "Vanilla JS"],
      github: "https://github.com/Scopielala/naija-learn"

    },
    {
      name: "ExpenseApp",
      description: "A team-built expense tracking app (FastAPI/PostgreSQL) developed collaboratively via GitHub.",
      decision: "My contribution: schema type fixes and documentation improvements through PRs — plus rebuilding the project independently in parallel to deepen my own understanding of the codebase.",
      tech: ["FastAPI", "PostgreSQL"],
      github: "https://github.com/7day-micro/expenseApp"

    }
  ],

  // PLACEHOLDER SECTIONS — deliberately left as empty arrays/objects.
  // main.js will check "if array is empty, show a 'Coming soon' stub"
  // instead of crashing or showing a blank gap. We fill these in later
  // without touching main.js or the HTML structure at all.
  cvSamples: [],       // will hold { title, context, link/image } objects later
  portfolioSamples: [],// same pattern as cvSamples
  contact: {
    email: "",         // fill in when ready
    note: "Coming soon"
  }

};