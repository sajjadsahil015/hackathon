<!--
Sync Impact Report:
- Version change: 1.0.0 -> 1.0.1 (Quality & Logic Fixes)
- Modified Principles:
  - Adjusted Timeline to be valid (Future date).
  - Enhanced Tech Stack with Accessibility (WCAG 2.1 AA) and CI strictness (Broken links).
  - Enhanced Assets policy to prefer code-based diagrams (Mermaid.js).
- Templates checking:
  - No template changes required for these refinements.
-->

# Physical AI & Humanoid Robotics Interactive Textbook Constitution

## Core Principles

### I. Structural Fidelity
The curriculum architecture must exactly mirror the provided syllabus (Modules 1-4). Deviations from the official course structure are forbidden to ensure alignment with teaching materials. The directory structure must reflect the 13-week progression (Quarter → Module → Week → Topic).

### II. Academic Clarity
Content must be structured as a university-level textbook suitable for students and instructors. Tone must be professional, educational, and authoritative. Navigation and layout must prioritize readability and learning flow.

### III. Frontend Focus (Static Only)
The project is a purely static documentation site using Docusaurus.
- **NO** Backend APIs.
- **NO** Database.
- **NO** Authentication.
- **NO** Chatbot/Agents features.
- **NO** Age gating.
Changes introducing these complexities will be rejected immediately.

### IV. Spec-Driven Development
All development flows through Spec-Driven Development (SDD) practices (Spec-Kit Plus). Changes must be specified (Requirements), planned (Architecture), and task-tracked (Implementation) before code is written.

### V. Hardware Accuracy
Documentation must strictly cite official course requirements:
- NVIDIA RTX 4070 Ti (Simulation Rigs)
- Jetson Orin (Edge Compute)
- Unitree Go2/G1 (Robots)
Comparisons between "Simulation Rigs" and "Edge Kits" must be explicit and accurate.

## Tech Stack & Deployment

- **Framework**: Docusaurus (React-based Static Site Generator).
- **Language**: TypeScript and MDX (Markdown with React components).
- **Styling**: Infima (Docusaurus default) with Tailwind CSS if necessary for custom layouts.
- **Compliance**: WCAG 2.1 AA standards (color contrast, alt text, keyboard navigation).
- **Build Policy**: CI must fail on broken links or missing asset references.
- **Deployment**: Must deploy successfully to GitHub Pages.
- **Assets**: Images and diagrams must be optimized for web delivery. Prefer Mermaid.js or purely CSS/React-based diagrams over static images where possible for maintainability.

## Success Criteria & Constraints

- **Timeline**: Prototype ready for deployment by Dec 31, 2025.
- **Scope**:
  1. The Robotic Nervous System (ROS 2)
  2. The Digital Twin (Gazebo & Unity)
  3. The AI-Robot Brain (NVIDIA Isaac)
  4. Vision-Language-Action (VLA)
- **Deliverable**: A functional, navigable static site containing placeholders or content for all 4 modules and a dedicated "Hardware Requirements" page.

## Governance

This Constitution supersedes all other technical preferences.
- **Amendments**: Require a formal spec update and version bump.
- **Versioning**: Follows Semantic Versioning (MAJOR.MINOR.PATCH).
- **Compliance**: All Pull Requests and Plans must verify compliance with the 5 Core Principles.
- **Runtime Guidance**: Use `.specify/memory/constitution.md` as the source of truth for all architectural decisions.

**Version**: 1.0.1 | **Ratified**: 2025-12-07 | **Last Amended**: 2025-12-07
