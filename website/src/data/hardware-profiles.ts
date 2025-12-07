import { HardwareProfile } from '../components/MDX/HardwareComparison';

export const profiles: HardwareProfile[] = [
    {
        id: "workstation",
        name: "Training Station",
        type: "workstation",
        gpu: "NVIDIA RTX 4070 Ti (or higher)",
        cpu: "Intel Core i7/i9 (12th Gen+) or AMD Ryzen 9",
        ram: "64GB DDR5",
        storage: "2TB NVMe SSD",
        recommended_for: [
            "Running Isaac Sim",
            "Training VLA Models",
            "Unity Rendering",
            "Heavy Gazebo Simulations"
        ]
    },
    {
        id: "edge",
        name: "Edge AI Kit",
        type: "edge",
        gpu: "NVIDIA Jetson Orin AGX / Nano",
        cpu: "ARM Cortex-A78AE",
        ram: "32GB (AGX) / 8GB (Nano)",
        storage: "64GB eMMC + 512GB NVMe",
        recommended_for: [
            "Robot Brain Deployment",
            "Real-time Inference",
            "ROS 2 Navigation Stack",
            "Hardware Interfacing"
        ]
    }
];
