# Data Model: Interactive Robotics Textbook

**Feature**: Interactive Robotics Textbook
**Date**: 2025-12-07

## Content Types (MDX Frontmatter)

### 1. Course Topic (Standard Doc)
Represents a single lesson or lab within a week.

```yaml
---
title: "Topic Name"
sidebar_label: "Topic" # Optional, defaults to title
description: "Brief summary for SEO and previews"
tags: ["ros2", "lab", "simulation"]
sidebar_position: 1 # For ordering within the week
---
```

### 2. Week Overview (Category Index)
Represents the landing page for a specific Week.

```yaml
---
title: "Week 1: Introduction to ROS 2"
description: "Learning objectives and required reading for Week 1"
slug: /module-1/week-1
---
```

### 3. Hardware Spec (Data)
While not a database entity, hardware profiles will be structured as JSON/Object data for the comparison component.

```typescript
interface HardwareProfile {
  id: string;
  name: string; // e.g., "Digital Twin Workstation"
  type: "workstation" | "edge";
  gpu: string; // e.g., "RTX 4070 Ti"
  cpu: string;
  ram: string;
  storage: string;
  recommended_for: string[]; // ["Isaac Sim", "Training"]
}
```

## Directory Structure (Content Model)

The file system acts as the database for this static site.

```text
docs/
├── 01-Module-1-Robotic-Nervous-System/
│   ├── _category_.json  # Metadata for the Module (label, collapsible)
│   ├── 01-Week-1/
│   │   ├── _category_.json
│   │   ├── 01-intro.mdx
│   │   ├── 02-installation.mdx
│   │   └── 03-lab-nodes.mdx
│   └── ...
├── 02-Module-2-Digital-Twin/
│   └── ...
└── ...
```

## Integration Data

### Context7 Sync Config
Schema for mapping external content to local paths.

```json
{
  "source": "context7-mcp",
  "mappings": [
    {
      "remote_id": "ros2-basics",
      "target_path": "docs/01-Module-1/01-Week-1/01-intro.mdx"
    }
  ]
}
```
