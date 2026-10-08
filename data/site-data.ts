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
  tagline: "Engineered for Autonomy. Built to Dominate.",
  description:
    "Where cutting-edge mechatronics, autonomous intelligence, and competitive robotics collide. Engineering the machines of tomorrow through elite hardware innovation, SLAM autonomy, and heavyweight combat mechatronics.",
  affiliation: {
    faculty: "Faculty of Technology & Mechatronics",
    lab: "Advanced Autonomous Systems & Robotics Prototyping Facility",
    university: "State Institute of Technology",
    coordinates: "37.7749° N, 122.4194° W // GRID-SEC-09",
  },
  status: {
    state: "SYS_ONLINE",
    season: "SEASON 2026",
    combatReady: true,
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
    { name: "About", href: "/about", sectionId: "about", description: "Origin & 4 Pillars" },
    { name: "Events", href: "/events", sectionId: "events", badge: "Live Soon", description: "Arena Tournament Schedule" },
    { name: "Projects", href: "/projects", sectionId: "projects", badge: "6 Active", description: "Flagship Bot Fleet" },
    { name: "Gallery", href: "/gallery", sectionId: "gallery", description: "Combat Media Archives" },
    { name: "Board", href: "/board", sectionId: "board", description: "Executive Squadron Leads" },
    { name: "Contact", href: "/contact", sectionId: "contact", description: "Transmission Beacon" },
  ] as NavItem[],
  metrics: [
    {
      value: "45+",
      numericTarget: 45,
      label: "Autonomous Bots Built",
      subtext: "From micro-mouse to 250lb combat weapons",
    },
    {
      value: "12",
      numericTarget: 12,
      label: "Tournament Championships",
      subtext: "Across National RoboWars & IEEE Autonomy Cups",
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
      lead: "CNC-machined titanium, aerospace carbon fiber layups, and FEA topological stress analysis.",
      details:
        "Every chassis is engineered in SolidWorks and validated through rigorous ANSYS FEA impact simulations before CNC milling from 7075-T6 billet aluminum and Hardox 500 armor steel.",
      icon: "Shield",
      stats: "7075-T6 / Hardox 500 / 0.02mm Tolerance",
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
      title: "COMBAT RESILIENCE",
      lead: "Ruggedized electronics, potted wire harnesses, and shock-mounted armor engineered for 40G impacts.",
      details:
        "Designed to absorb devastating kinetic impacts in the combat cage, our weapon systems spin up to 10,000 RPM while custom silicone-damped avionics retain uninterrupted telemetry.",
      icon: "Crosshair",
      stats: "10,000 RPM / 40G Shock Rated / 12kW Peak",
    },
  ],
  sponsors: [
    { name: "Titan Robotics Corp", tier: "Platinum Tier", perk: "Chassis & CNC Machining Partner" },
    { name: "NexSilicon Dynamics", tier: "Platinum Tier", perk: "Microcontroller & Compute Hardware" },
    { name: "Apex LiPo Systems", tier: "Gold Tier", perk: "High-Discharge Power Cells" },
    { name: "Vector Motor Inverters", tier: "Gold Tier", perk: "Brushless ESCs & Dyno Testing" },
    { name: "Quantum LiDAR Sensors", tier: "Silver Tier", perk: "Autonomous Perception Suite" },
    { name: "Hardox Armor Tech", tier: "Silver Tier", perk: "Ballistic Cage Armor & Steel" },
  ],
};
