# MDX Component Contracts

**Description**: Interface definitions for custom React components available in MDX files.

## Components

### `<HardwareComparison />`

Renders the comparison table between Workstation and Edge Kit.

**Props**:
- `profiles`: `HardwareProfile[]` (See Data Model) - *Optional if defaults are hardcoded in component*
- `highlight`: `string` (ID of profile to highlight)

**Usage**:
```jsx
<HardwareComparison highlight="workstation" />
```

### `<LearningObjective />`

A callout box for specific learning goals.

**Props**:
- `objectives`: `string[]`

**Usage**:
```jsx
<LearningObjective 
  objectives={[
    "Understand ROS 2 Nodes",
    "Launch a TurtleSim simulation"
  ]} 
/>
```

### `<TerminalBlock />`

Enhanced code block for terminal commands with copy button and OS tabs (Windows/Linux/Mac).

**Props**:
- `commands`: `{ linux: string, windows: string, mac: string }`

**Usage**:
```jsx
<TerminalBlock 
  commands={{
    linux: "sudo apt install ros-humble-desktop",
    windows: "choco install ros-humble-desktop",
    mac: "brew install ros-humble-desktop"
  }}
/>
```
