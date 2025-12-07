---
id: 0001
title: Initial Constitution Setup
stage: constitution
date: 2025-12-07
surface: agent
model: gemini-2.0-flash-exp
feature: none
branch: master
user: User
command: /sp.constitution
labels: ["governance", "setup", "constitution"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
 - none
---

## Prompt

/sp.constitution

Project: Physical AI & Humanoid Robotics Interactive Textbook

Core Principles:
- [cite_start]Structural Fidelity: The curriculum architecture must exactly mirror the provided syllabus (Modules 1-4)[cite: 56, 61, 67, 74].
- [cite_start]Academic Clarity: Content must be structured as a university-level textbook suitable for students and instructors[cite: 49].
- Frontend Focus: Purely static documentation site; no backend or database complexity.
- [cite_start]Spec-Driven: All development flows through Spec-Kit Plus and Claude Code[cite: 16].

Key Standards:
- [cite_start]Tech Stack: Docusaurus (React-based Static Site Generator)[cite: 15].
- Language: MDX (Markdown with React components) and TypeScript.
- [cite_start]Deployment: Must deploy successfully to GitHub Pages[cite: 15].
- [cite_start]Hardware References: Must strictly cite official course requirements (NVIDIA RTX 4070 Ti, Jetson Orin, Unitree Go2/G1)[cite: 119, 135, 149, 160].
- [cite_start]Navigation: Deep hierarchical sidebar (Quarter → Module → Week → Topic)[cite: 91].

Constraints:
- Scope: Frontend/Static content only.
- Exclusions: NO Backend APIs, NO Database, NO Authentication, NO Chatbot/Agents.
- Styling: Clean, accessible, documentation-focused theme (Infima/Tailwind).
- [cite_start]Timeline: Prototype ready for deployment by Nov 30, 2025[cite: 27].

Success Criteria:
- Functional Docusaurus site deployed on GitHub Pages.
- Sidebar contains all 4 distinct modules:
  1. [cite_start]The Robotic Nervous System (ROS 2) [cite: 56]
  2. [cite_start]The Digital Twin (Gazebo & Unity) [cite: 61]
  3. [cite_start]The AI-Robot Brain (NVIDIA Isaac) [cite: 67]
  4. [cite_start]Vision-Language-Action (VLA) [cite: 74]
- [cite_start]Includes a dedicated "Hardware Requirements" page comparing Simulation Rigs vs. Edge Kits[cite: 112].
- [cite_start]Clean directory structure for all 13 weeks of content[cite: 91].

## Response snapshot

Constitution updated to v1.0.0 with 5 core principles reflecting the Physical AI & Humanoid Robotics Interactive Textbook requirements.

## Outcome

- ✅ Impact: Established project governance and constraints.
- 🧪 Tests: N/A
- 📁 Files: Updated constitution.md
- 🔁 Next prompts: /sp.plan
- 🧠 Reflection: Successfully mapped user requirements to constitution template.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): default
- Next experiment (smallest change to try): none