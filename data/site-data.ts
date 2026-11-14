export interface NavItem {
  name: string;
  href: string;
  sectionId: string;
  badge?: string;
  description?: string;
}

export interface MetricCounter {
  value: string;
  numericTarget: number;
  label: string;
  subtext: string;
}

export const SITE_CONFIG = {
  name: "ROST",
  fullName: "Robotic Society of Technology",
  logo: "https://res.cloudinary.com/dpdsdpmgg/image/upload/v1786991273/Logo_hufo64.png",
  tagline: "“CONNECTING SENSORS. CODING LOGIC. POWERING INNOVATION.”",
  heroVideo: "https://res.cloudinary.com/pasongqn/video/upload/v1791443991/gemini_generated_video_8d0b3172.mp4",
  description:
    "The central robotics and embedded systems platform of the Faculty of Technology, Rajarata University of Sri Lanka. We bridge theoretical knowledge and real-world implementation through hands-on Arduino & microcontroller sessions, applied IoT projects, hardware workshops, and competitive technology challenges.",
  affiliation: {
    faculty: "Faculty of Technology & Mechatronics",
    lab: "Advanced Autonomous Systems & Robotics Prototyping Facility",
    university: "State Institute of Technology",
    coordinates: "37.7749° N, 122.4194° W // GRID-SEC-09",
  },
  status: {
    state: "SYS_ONLINE",
    season: "SEASON 2026",
    systemStatus: "ACTIVE INNOVATION",
    focus: "IOT & ROBOTICS",
    hub: "FACULTY OF TECHNOLOGY",
    innovatorStatus: "OPEN FOR INNOVATORS",
    telemetryStatus: "NOMINAL",
    coreClock: "400 MHz CAN-FD",
    activeFirmware: "ROST-RTOS v4.2.1-humble",
  },
  socials: {
    discord: "https://discord.gg/rost-robotics",
    github: "https://github.com/rost-robotics",
    youtube: "https://youtube.com/@rost-robotics",
    linkedin: "https://linkedin.com/company/rost-robotics",
    instagram: "https://instagram.com/rost_robotics",
  },
  navItems: [
    { name: "Home", href: "/", sectionId: "home", description: "Telemetry Hero & Status" },
    { name: "About", href: "/#about", sectionId: "about", description: "Origin & 4 Pillars" },
    { name: "Events", href: "/events", sectionId: "events", description: "Society Events & Workshops" },
    { name: "Projects", href: "/projects", sectionId: "projects", description: "Engineering & Robotics Projects" },
    { name: "Gallery", href: "/gallery", sectionId: "gallery", description: "Event Albums & Memorable Moments" },
    { name: "Board", href: "/board", sectionId: "board", description: "Executive Board Members" },
    { name: "Contact", href: "/contact", sectionId: "contact", description: "Transmission Beacon" },
  ] as NavItem[],
  metrics: [
    {
      value: "45+",
      numericTarget: 45,
      label: "Autonomous Bots Built",
      subtext: "From micro-mouse and rovers to IoT systems",
    },
    {
      value: "12",
      numericTarget: 12,
      label: "Competitions & Exhibitions",
      subtext: "Across National Robotics & Technology Challenges",
    },
    {
      value: "150+",
      numericTarget: 150,
      label: "Active Roboticists",
      subtext: "Mechatronics, firmware, and AI researchers",
    },
    {
      value: "2,500+",
      numericTarget: 2500,
      label: "Hours in Autonomous Testing",
      subtext: "LiDAR SLAM & Reinforcement learning in field trials",
    },
  ] as MetricCounter[],
  pillars: [
    {
      number: "01",
      title: "MECHANICAL PRECISION",
      lead: "CNC-machined alloys, aerospace carbon fiber layups, and FEA topological stress analysis.",
      details:
        "Every chassis is engineered in CAD software and validated through finite element stress analysis before CNC milling, composite layups, and precision 3D fabrication.",
      icon: "Shield",
      stats: "6061-T6 / Carbon Fiber / 0.05mm Tolerance",
    },
    {
      number: "02",
      title: "EMBEDDED CONTROL",
      lead: "Real-time firmware, custom high-current motor inverters, and sub-millisecond CAN-FD bus networks.",
      details:
        "Microcontrollers running FreeRTOS and Zephyr OS handle deterministic motor commutation at 50kHz, sensor fusion, and multi-channel telemetry streams with redundant fail-safes.",
      icon: "Cpu",
      stats: "STM32H7 / CAN-FD / 50kHz FOC",
    },
    {
      number: "03",
      title: "AUTONOMOUS INTELLIGENCE",
      lead: "Computer vision SLAM, ROS2 Humble pipelines, and reinforcement learning motion control.",
      details:
        "Edge computing platforms like NVIDIA Jetson Orin process 3D LiDAR point clouds and stereo camera feeds for real-time obstacle avoidance, path tracking, and autonomous target acquisition.",
      icon: "Zap",
      stats: "Jetson Orin / ROS 2 / 275 TOPS",
    },
    {
      number: "04",
      title: "APPLIED IOT & EMBEDDED SYSTEMS",
      lead: "Weatherproof field enclosures, industrial sensor integration, and reliable telemetry for real-world deployments.",
      details:
        "Designed for continuous operation in real environments, our systems integrate fail-safe power management, noise-isolated sensor buses, and robust wireless protocols including LoRaWAN, Wi-Fi, and BLE.",
      icon: "Radio",
      stats: "IP65 Enclosure / Industrial Sensors / LoRaWAN & MQTT",
    },
  ],
  sponsors: [
    { name: "Titan Robotics Corp", tier: "Platinum Tier", perk: "Chassis & CNC Machining Partner" },
    { name: "NexSilicon Dynamics", tier: "Platinum Tier", perk: "Microcontroller & Compute Hardware" },
    { name: "Apex LiPo Systems", tier: "Gold Tier", perk: "High-Discharge Power Cells" },
    { name: "Vector Motor Inverters", tier: "Gold Tier", perk: "Brushless ESCs & Dyno Testing" },
    { name: "Quantum LiDAR Sensors", tier: "Silver Tier", perk: "Autonomous Perception Suite" },
    { name: "RoboTech Components", tier: "Silver Tier", perk: "Sensors & Actuator Components" },
  ],
};
