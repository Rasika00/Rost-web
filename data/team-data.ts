export interface TeamMember {
  id: string;
  name: string;
  callsign: string;
  role: string;
  division: "Combat Mechatronics" | "Autonomous Systems" | "Embedded Firmware" | "Mechanical Design" | "Power Electronics";
  bio: string;
  specialties: string[];
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
    bio: "Senior Mechatronics Engineer with 4 years of heavyweight combat robotics experience. Designed the CNC monocoque chassis and weapon drivetrain for VORTEX-X.",
    specialties: ["Hardox Armor Machining", "FEA Kinetic Simulation", "High-Torque Drivetrains", "Tactical Combat Piloting"],
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
    bio: "Specializing in 3D LiDAR SLAM and real-time state estimation in GPS-denied environments. Architected the navigation stack for AEGIS-1.",
    specialties: ["ROS 2 Humble", "Cartographer & LIO-SAM", "Sensor Fusion (EKF)", "Autonomous Path Planning"],
    image: "/images/team/marina-vargas.png",
    socials: {
      github: "https://github.com/marinavargas-robotics",
      linkedin: "https://linkedin.com/in/dr-marina-vargas",
      email: "m.vargas@rost.tech",
    },
  },
  {
    id: "kaito-takahashi",
    name: "Kaito Takahashi",
    callsign: "CIRCUIT-03",
    role: "Chief Embedded Firmware Lead",
    division: "Embedded Firmware",
    bio: "Low-latency firmware hacker obsessed with deterministic motor control loops and ARM Cortex-M7 assembly. Creator of ROST-FOC firmware running at 50kHz.",
    specialties: ["STM32 Bare-Metal & FreeRTOS", "Field-Oriented Control (FOC)", "CAN-FD Bus Networks", "Ultra-Low Latency Telemetry"],
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
    bio: "Aerospace & mechanical engineer with expertise in topological optimization, composite carbon fiber layups, and CNC toolpath programming.",
    specialties: ["SolidWorks CAD", "ANSYS Transient Impact FEA", "Carbon Prepreg Autoclave", "Titanium 5-Axis Milling"],
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
    bio: "High-voltage and battery safety specialist. Designs custom multi-phase GaN inverters, BMS telemetry systems, and 120C continuous discharge battery sleds.",
    specialties: ["GaN FET Inverter Design", "High-Discharge LiPo Safety", "Active Battery Management", "EMI/RF Shielding"],
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
    bio: "Developing neural visual servoing for SYNAPSE's 6-DOF robotic manipulator. Researches dynamic tracking and robotic grasping of irregular objects.",
    specialties: ["PyTorch & TensorRT", "RGB-D Point Clouds", "MoveIt 2 Kinematics", "Visual Servoing"],
    image: "/images/team/zoe-lin.png",
    socials: {
      github: "https://github.com/zoelin-ai",
      linkedin: "https://linkedin.com/in/zoe-lin-robotics",
      email: "z.lin@rost.tech",
    },
  },
];
