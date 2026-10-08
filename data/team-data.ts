export interface TeamMember {
  id: string;
  name: string;
  callsign: string;
  role: string;
  division:
    | "Combat Mechatronics"
    | "Autonomous Systems"
    | "Embedded Firmware"
    | "Mechanical Design"
    | "Power Electronics"
    | "Operations & Finance"
    | "Faculty Advisory";
  tier: "Executive Directorate" | "Technical Directorate" | "Operations & Logistics" | "Faculty Advisory";
  term: string;
  bio: string;
  specialties: string[];
  responsibilities: string[];
  officeHours: string;
  image: string;
  socials: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "alex-chen",
    name: "Alex 'Overclock' Chen",
    callsign: "TITAN-01",
    role: "President & Lead Combat Architect",
    division: "Combat Mechatronics",
    tier: "Executive Directorate",
    term: "2024–2026",
    bio: "Senior Mechatronics Engineer with 4 years of heavyweight combat robotics experience. Designed the CNC monocoque chassis and weapon drivetrain for VORTEX-X.",
    specialties: ["Hardox Armor Machining", "FEA Kinetic Simulation", "High-Torque Drivetrains", "Tactical Combat Piloting"],
    responsibilities: [
      "Strategic leadership and society representation to university faculty",
      "Lead architect for 250lb heavyweight combat robotics program",
      "Oversees 5-axis CNC machining schedules and structural validation",
      "Cage safety coordinator and primary tournament pilot",
    ],
    officeHours: "Tuesdays & Thursdays 16:00 - 18:30 (Bay 3)",
    image: "/images/team/alex-chen.png",
    socials: {
      github: "https://github.com/alexchen-rost",
      linkedin: "https://linkedin.com/in/alexchen-mechatronics",
      email: "a.chen@rost.tech",
    },
  },
  {
    id: "marina-vargas",
    name: "Dr. Marina Vargas",
    callsign: "CYBER-02",
    role: "VP & Head of Autonomous Systems",
    division: "Autonomous Systems",
    tier: "Executive Directorate",
    term: "2024–2026",
    bio: "Specializing in 3D LiDAR SLAM and real-time state estimation in GPS-denied environments. Architected the navigation stack for AEGIS-1.",
    specialties: ["ROS 2 Humble", "Cartographer & LIO-SAM", "Sensor Fusion (EKF)", "Autonomous Path Planning"],
    responsibilities: [
      "Directs autonomous exploration robotics and DARPA SubT challenge entries",
      "Manages ROS 2 codebase architecture, simulation pipelines, and CI/CD",
      "Coordinates student research fellowships and academic paper submissions",
      "Leads autonomy track recruitment and onboarding bootcamps",
    ],
    officeHours: "Mondays & Wednesdays 14:00 - 16:30 (Chamber 9)",
    image: "/images/team/marina-vargas.png",
    socials: {
      github: "https://github.com/marinavargas-robotics",
      linkedin: "https://linkedin.com/in/dr-marina-vargas",
      email: "m.vargas@rost.tech",
    },
  },
  {
    id: "marcus-sterling",
    name: "Marcus Sterling",
    callsign: "LOGIC-07",
    role: "Director of Operations & Industry Sponsorship",
    division: "Operations & Finance",
    tier: "Operations & Logistics",
    term: "2025–2026",
    bio: "Mechatronics management specialist with a passion for corporate partnerships, tournament logistics, and securing state-of-the-art CNC and electronics sponsorships.",
    specialties: ["Hardware Sponsorships", "CapEx Budgeting", "Supply Chain Logistics", "Tournament Sanctioning"],
    responsibilities: [
      "Manages an annual six-figure hardware prototyping and travel budget",
      "Primary liaison with corporate sponsors including Titan Robotics and Hardox",
      "Oversees arena logistics, freight shipments, and competition travel",
      "Coordinates public outreach, workshops, and community recruitment",
    ],
    officeHours: "Wednesdays 11:00 - 13:30 (Command Suite 102)",
    image: "/images/team/marcus-sterling.png",
    socials: {
      linkedin: "https://linkedin.com/in/marcus-sterling-rost",
      email: "m.sterling@rost.tech",
    },
  },
  {
    id: "kaito-takahashi",
    name: "Kaito Takahashi",
    callsign: "CIRCUIT-03",
    role: "Chief Embedded Firmware Lead",
    division: "Embedded Firmware",
    tier: "Technical Directorate",
    term: "2024–2026",
    bio: "Low-latency firmware hacker obsessed with deterministic motor control loops and ARM Cortex-M7 assembly. Creator of ROST-FOC firmware running at 50kHz.",
    specialties: ["STM32 Bare-Metal & FreeRTOS", "Field-Oriented Control (FOC)", "CAN-FD Bus Networks", "Ultra-Low Latency Telemetry"],
    responsibilities: [
      "Architects deterministic embedded firmware across all combat and rover platforms",
      "Maintains the proprietary 50kHz FOC brushless motor driver libraries",
      "Designs custom CAN-FD telemetry telemetry bus protocols",
      "Directs ESD safety compliance and electronics bench verification",
    ],
    officeHours: "Fridays 13:00 - 17:00 (Cleanroom 4)",
    image: "/images/team/kaito-takahashi.png",
    socials: {
      github: "https://github.com/kaito-embedded",
      linkedin: "https://linkedin.com/in/kaito-takahashi",
      email: "k.takahashi@rost.tech",
    },
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    callsign: "VORTEX-04",
    role: "Lead Mechanical Design & FEA Specialist",
    division: "Mechanical Design",
    tier: "Technical Directorate",
    term: "2024–2026",
    bio: "Aerospace & mechanical engineer with expertise in topological optimization, composite carbon fiber layups, and CNC toolpath programming.",
    specialties: ["SolidWorks CAD", "ANSYS Transient Impact FEA", "Carbon Prepreg Autoclave", "Titanium 5-Axis Milling"],
    responsibilities: [
      "Directs CAD modeling, weight distribution, and mass properties analysis",
      "Runs non-linear dynamic impact simulations for kinetic weapon collisions",
      "Maintains CAM tooling libraries for 7075-T6 aluminum and Hardox 500",
      "Leads mechanical safety inspections prior to combat cage lock-in",
    ],
    officeHours: "Tuesdays 10:00 - 13:00 (Design Lab A)",
    image: "/images/team/elena-rostova.png",
    socials: {
      github: "https://github.com/elena-rostova-cad",
      linkedin: "https://linkedin.com/in/elena-rostova",
      email: "e.rostova@rost.tech",
    },
  },
  {
    id: "tariq-al-mansoor",
    name: "Tariq Al-Mansoor",
    callsign: "SPARK-05",
    role: "Power Electronics & Battery Systems Lead",
    division: "Power Electronics",
    tier: "Technical Directorate",
    term: "2024–2026",
    bio: "High-voltage and battery safety specialist. Designs custom multi-phase GaN inverters, BMS telemetry systems, and 120C continuous discharge battery sleds.",
    specialties: ["GaN FET Inverter Design", "High-Discharge LiPo Safety", "Active Battery Management", "EMI/RF Shielding"],
    responsibilities: [
      "Designs custom high-current GaN motor inverters rated up to 15kW peak",
      "Responsible for LiPo battery bunker storage, charging protocols, and fire suppression",
      "Performs dynamometer motor thermal testing and power bus EMI filtration",
      "Ensures tournament electrical safety and kill-switch circuit integrity",
    ],
    officeHours: "Thursdays 14:00 - 17:00 (Power Cell 2)",
    image: "/images/team/tariq-al-mansoor.png",
    socials: {
      github: "https://github.com/tariq-power",
      linkedin: "https://linkedin.com/in/tariq-al-mansoor",
      email: "t.mansoor@rost.tech",
    },
  },
  {
    id: "zoe-lin",
    name: "Zoe 'Matrix' Lin",
    callsign: "VISION-06",
    role: "Computer Vision & Manipulation Lead",
    division: "Autonomous Systems",
    tier: "Technical Directorate",
    term: "2024–2026",
    bio: "Developing neural visual servoing for SYNAPSE's 6-DOF robotic manipulator. Researches dynamic tracking and robotic grasping of irregular objects.",
    specialties: ["PyTorch & TensorRT", "RGB-D Point Clouds", "MoveIt 2 Kinematics", "Visual Servoing"],
    responsibilities: [
      "Leads vision model optimization using TensorRT on Jetson Orin edge modules",
      "Calibrates multi-camera stereo rigs and eye-in-hand kinematic pipelines",
      "Oversees manipulation benchmark datasets and real-time obstacle evasion",
      "Organizes computer vision workshops and student code sprints",
    ],
    officeHours: "Mondays 16:00 - 18:30 (Vision Lab B)",
    image: "/images/team/zoe-lin.png",
    socials: {
      github: "https://github.com/zoelin-ai",
      linkedin: "https://linkedin.com/in/zoe-lin-robotics",
      email: "z.lin@rost.tech",
    },
  },
  {
    id: "henrik-vonberg",
    name: "Prof. Dr. Henrik Von Berg",
    callsign: "MENTOR-00",
    role: "Faculty Advisor & Mechatronics Chair",
    division: "Faculty Advisory",
    tier: "Faculty Advisory",
    term: "Tenured / 2021–Present",
    bio: "Professor of Mechatronics & Autonomous Robotics. 25+ years pioneering field robotics, industrial manipulators, and high-energy kinematic safety systems.",
    specialties: ["Robotic Kinematics", "Autonomous Systems Policy", "Industrial Automation", "Academic Grant Stewardship"],
    responsibilities: [
      "Official faculty sponsor and university administration liaison",
      "Oversees lab safety compliance, OSHA standards, and high-energy test certifications",
      "Advises on national grant applications and research publications",
      "Champions interdisciplinary student involvement across engineering schools",
    ],
    officeHours: "Wednesdays 15:00 - 17:00 (Faculty Tower 408)",
    image: "/images/team/henrik-vonberg.png",
    socials: {
      linkedin: "https://linkedin.com/in/prof-henrik-vonberg",
      email: "h.vonberg@faculty.edu",
    },
  },
];
