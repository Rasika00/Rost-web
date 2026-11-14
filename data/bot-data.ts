export interface BotSpec {
  weight: string;
  dimensions: string;
  driveTrain: string;
  payloadOrActuator: string;
  operatingSpeed?: string;
  powerSource: string;
  microcontroller: string;
  computePlatform: string;
  firmware: string;
  sensors: string[];
}

export interface ProjectRecord {
  fieldTrials: number;
  successRate: string;
  titles: string[];
}

export type ProjectDivision =
  | "Autonomous Rovers"
  | "IoT & Smart Systems"
  | "Robotic Arms"
  | "Autonomous Mobile Robots"
  | "Bio-Robotics"
  | "Drones & UAVs";

export interface Bot {
  id: string;
  name: string;
  codename: string;
  tagline: string;
  division: ProjectDivision;
  weightClass: string;
  status: "Active Project" | "Completed" | "Prototyping" | "Competition Winner";
  statusColor: string;
  description: string;
  fullOverview: string;
  tags: string[];
  specs: BotSpec;
  projectRecord?: ProjectRecord;
  image: string;
  cadPreview: string;
  githubUrl: string;
  telemetry: {
    batteryVoltage: string;
    operatingCurrent: string;
    escTemp: string;
    latencyMs: number;
    sensorHealth: "100% NOMINAL" | "98% CALIBRATED" | "ACTIVE TELEMETRY";
  };
}

export const BOT_FLEET: Bot[] = [
  {
    id: "aegis-1",
    name: "AEGIS-1",
    codename: "TERRA-EXPLORER",
    tagline: "Autonomous 3D LiDAR SLAM All-Terrain Exploration & Mapping Rover.",
    division: "Autonomous Rovers",
    weightClass: "Exploration Rover (18 kg)",
    status: "Active Project",
    statusColor: "#22C55E",
    description:
      "Equipped with 360-degree LiDAR, stereo depth vision, and ROS 2 for real-time 3D mapping and autonomous obstacle avoidance in unstructured environments.",
    fullOverview:
      "AEGIS-1 is ROST's autonomous research platform built for field robotics exploration and university competitions. Powered by an onboard NVIDIA Jetson running ROS 2 Humble, AEGIS-1 processes real-time point-cloud SLAM and neural obstacle classification to map campus terrain, navigate complex trails, and execute autonomous waypoint navigation.",
    tags: ["ROS 2 Humble", "NVIDIA Jetson", "3D LiDAR", "Stereo Vision", "Rocker-Bogie"],
    specs: {
      weight: "18.4 kg",
      dimensions: "720mm × 580mm × 420mm",
      driveTrain: "6WD Independent In-Wheel Brushless Hub Motors with Rocker-Bogie Suspension",
      payloadOrActuator: "Pan-Tilt Stereo Depth Camera Mast & Environmental Sensor Array",
      operatingSpeed: "Max Cruise Speed: 2.2 m/s",
      powerSource: "24V 20Ah LiFePO4 Solid-State Managed Battery Pack",
      microcontroller: "Teensy 4.1 + STM32G4 Safety & Motor Coprocessor",
      computePlatform: "NVIDIA Jetson Orin Nano 8GB (40 TOPS)",
      firmware: "ROS 2 Humble + Micro-ROS FreeRTOS HAL",
      sensors: ["Livox Mid-360 3D LiDAR", "Intel RealSense D435i Stereo Depth Camera", "BNO085 9-DOF Rugged IMU", "Dual RTK-GNSS Differential Antennas"],
    },
    projectRecord: {
      fieldTrials: 14,
      successRate: "96.0%",
      titles: ["National University Tech Challenge - Robotics 1st Place 2025", "IEEE Student Branch Innovation Award 2024"],
    },
    image: "/images/bots/aegis-1.png",
    cadPreview: "Articulated Rocker-Bogie 6061 aluminum alloy suspension with weatherproof avionics enclosure rated IP65.",
    githubUrl: "https://github.com/rost-robotics/aegis-slam-stack",
    telemetry: {
      batteryVoltage: "25.6V",
      operatingCurrent: "6.4A Cruise",
      escTemp: "32.0°C",
      latencyMs: 2.4,
      sensorHealth: "100% NOMINAL",
    },
  },
  {
    id: "synapse",
    name: "SYNAPSE-6X",
    codename: "PRECISION-ARM",
    tagline: "6-DOF High-Precision Articulated Robotic Arm with Vision-Guided Pick-and-Place.",
    division: "Robotic Arms",
    weightClass: "Manipulator Class (12 kg)",
    status: "Active Project",
    statusColor: "#FF6B00",
    description:
      "Articulated manipulator arm featuring closed-loop stepper actuators, eye-in-hand computer vision, and ROS 2 MoveIt motion planning for component sorting.",
    fullOverview:
      "SYNAPSE-6X bridges academic robotics research and industrial automation. Designed with custom reduction gearboxes, closed-loop magnetic encoders, and an eye-in-hand RGB-D sensor, SYNAPSE executes automated component sorting, electronic PCB pick-and-place, and trajectory planning with sub-millimeter repeatability.",
    tags: ["6-DOF", "Inverse Kinematics", "MoveIt 2", "Computer Vision", "Closed-Loop Steppers"],
    specs: {
      weight: "12.2 kg (Reach: 750mm)",
      dimensions: "Base: 200mm dia, Max Reach: 750mm",
      driveTrain: "High-Torque NEMA Stepper Motors with Planetary Gearboxes",
      payloadOrActuator: "Pneumatic Suction Gripper & Adaptive Two-Finger Parallel Servo Gripper",
      operatingSpeed: "Joint Velocity: Up to 120 deg/sec",
      powerSource: "24V 15A Industrial Regulated DC Power Supply",
      microcontroller: "STM32F407 Master Controller + CAN Bus Driver Nodes",
      computePlatform: "NVIDIA Jetson Nano + Workstation MoveIt Bridge",
      firmware: "FreeRTOS Multi-Axis Kinematics Engine + ROS 2 MoveIt Driver",
      sensors: ["14-bit Absolute Magnetic Joint Encoders", "Luxonis OAK-D RGB-D Camera", "End-Effector Load Cell", "Optical Home Limit Switches"],
    },
    projectRecord: {
      fieldTrials: 10,
      successRate: "99.0%",
      titles: ["Faculty Engineering Exhibition Best Innovation 2025", "National Automation Project Merit Award 2024"],
    },
    image: "/images/bots/synapse.png",
    cadPreview: "Precision CNC machined 6061 aluminum alloy linkages with internal cable routing and ISO flange mount.",
    githubUrl: "https://github.com/rost-robotics/synapse-manipulator",
    telemetry: {
      batteryVoltage: "24.1V",
      operatingCurrent: "5.8A Active Load",
      escTemp: "31.4°C",
      latencyMs: 1.2,
      sensorHealth: "98% CALIBRATED",
    },
  },
  {
    id: "vortex-x",
    name: "VORTEX-ROVER",
    codename: "VELOX-PID",
    tagline: "High-Speed Autonomous Line-Following & Maze-Solving Mobile Robot.",
    division: "Autonomous Mobile Robots",
    weightClass: "Mobile Robot Class (1.2 kg)",
    status: "Competition Winner",
    statusColor: "#FF6B00",
    description:
      "Engineered with high-speed DC coreless motors, dual magnetic encoders, and an optical reflectance sensor array tuned with closed-loop PID control.",
    fullOverview:
      "VORTEX-ROVER is ROST's award-winning autonomous line-follower and maze navigator. Built on a custom lightweight carbon-fiber PCB chassis, it utilizes an advanced 16-sensor phototransistor array and high-frequency PID trajectory tracking algorithm running on an STM32 ARM Cortex microcontroller, achieving speeds exceeding 3.5 m/s through tight hairpin turns.",
    tags: ["STM32 ARM", "PID Control", "Infrared Sensor Array", "Coreless Motors", "Micro-Mouse"],
    specs: {
      weight: "1.25 kg",
      dimensions: "220mm × 180mm × 95mm",
      driveTrain: "Dual High-RPM Coreless DC Motors + Silicone Grip Tires",
      payloadOrActuator: "16-Channel High-Speed Optical Reflectance Array",
      operatingSpeed: "Max Velocity: 3.8 m/s (10kHz Loop Rate)",
      powerSource: "3S 11.1V 1200mAh High-Discharge LiPo",
      microcontroller: "STM32G474 Arm Cortex-M4 @ 170MHz",
      computePlatform: "Onboard High-Speed ADC & Hardware PID Math Engine",
      firmware: "ROST-Velocity-Control Real-Time FreeRTOS",
      sensors: ["16x Vishay Reflective Optical Sensors", "Dual Magnetic Wheel Encoders", "MPU-6050 6-Axis Gyro/Acc", "Battery Voltage Sensor"],
    },
    projectRecord: {
      fieldTrials: 18,
      successRate: "98.5%",
      titles: ["National University Robotics Challenge 1st Place 2025", "Inter-Faculty Autonomous Maze Solver Gold 2024"],
    },
    image: "/images/bots/vortex-x.png",
    cadPreview: "Integrated PCB chassis with carbon fiber stiffeners and 3D printed precision motor mounts.",
    githubUrl: "https://github.com/rost-robotics/vortex-line-follower",
    telemetry: {
      batteryVoltage: "12.4V (Nominal 3S)",
      operatingCurrent: "4.2A Peak Burst",
      escTemp: "34.5°C",
      latencyMs: 0.8,
      sensorHealth: "100% NOMINAL",
    },
  },
  {
    id: "kinetic-strike",
    name: "AGRI-BOT",
    codename: "PRECISION-AGRI",
    tagline: "Autonomous Agricultural Soil Analysis & Precision Environmental Monitoring Rover.",
    division: "IoT & Smart Systems",
    weightClass: "Agri-Tech Class (7.5 kg)",
    status: "Active Project",
    statusColor: "#22C55E",
    description:
      "Autonomous field rover equipped with NPK soil nutrient probes, moisture sensors, and an ESP32 LoRaWAN gateway for precision agriculture monitoring.",
    fullOverview:
      "Developed in collaboration with Faculty of Technology researchers, AGRI-BOT is an autonomous agricultural rover designed to automate crop health monitoring. Traveling along crop rows, it deploys a motorized soil penetrometer to measure soil moisture, pH, electrical conductivity, and NPK nutrient levels, transmitting real-time geospatial data to farmers via LoRaWAN.",
    tags: ["ESP32-S3", "LoRaWAN", "NPK Soil Probes", "Solar Telemetry", "GPS Field Mapping"],
    specs: {
      weight: "7.4 kg",
      dimensions: "520mm × 440mm × 360mm",
      driveTrain: "4WD High-Torque Planetary DC Geared Motors with All-Terrain Tires",
      payloadOrActuator: "Motorized Linear Actuator with Integrated Soil NPK/pH Sensor Probe",
      operatingSpeed: "Field Survey Speed: 0.8 m/s",
      powerSource: "12V 14Ah LiFePO4 Battery with 40W Solar Charging System",
      microcontroller: "Dual ESP32-S3 Microcontrollers (Edge AI + Sensor Node)",
      computePlatform: "ESP32 Edge Processing + SX1262 LoRaWAN Gateway",
      firmware: "ESP-IDF FreeRTOS + MQTT / LoRaWAN IoT Protocol Stack",
      sensors: ["NPK Optical Soil Probe", "Soil Moisture & EC Sensor", "DHT22 Ambient Temp/Humidity", "Neo-M8N High-Precision GPS"],
    },
    projectRecord: {
      fieldTrials: 16,
      successRate: "95.5%",
      titles: ["Agri-Tech Innovation Challenge Winner 2025", "Sustainable Technology Exhibition 1st Place 2024"],
    },
    image: "/images/bots/kinetic-strike.png",
    cadPreview: "UV-stabilized weather-sealed chassis with solar mounting bracket and motorized soil testing probe mount.",
    githubUrl: "https://github.com/rost-robotics/agri-bot-system",
    telemetry: {
      batteryVoltage: "13.2V (Solar Assisted)",
      operatingCurrent: "2.1A Survey Mode",
      escTemp: "28.2°C",
      latencyMs: 12.0,
      sensorHealth: "100% NOMINAL",
    },
  },
  {
    id: "nexus-hex",
    name: "NEXUS-HEX",
    codename: "BIO-WALKER",
    tagline: "Bio-Inspired 18-DOF Hexapod Robot with Dynamic Omnidirectional Terrain Navigation.",
    division: "Bio-Robotics",
    weightClass: "Bio-Robotics Class (4.8 kg)",
    status: "Active Project",
    statusColor: "#22C55E",
    description:
      "18 high-torque smart serial bus servos coordinated by a dynamic inverse kinematics gait engine for climbing uneven terrain and inspecting confined spaces.",
    fullOverview:
      "NEXUS-HEX models hexapod biomechanics to conquer terrain impossible for wheeled rovers. Each leg incorporates 3 high-torque smart actuators with position and force feedback. The dynamic wave-gait optimizer shifts the center of gravity smoothly across uneven ground, enabling navigation through debris and steep slopes.",
    tags: ["18-DOF", "Inverse Kinematics", "Smart Servos", "Dynamic Gait", "Ultrasonic Sensing"],
    specs: {
      weight: "4.8 kg",
      dimensions: "580mm diameter footprint, Standing Height: 260mm",
      driveTrain: "18x High-Torque Serial Bus Servos (25 kg·cm) with Metal Gearing",
      payloadOrActuator: "Ground Contact Tactile Switches & Front Stereo Camera Mount",
      operatingSpeed: "Walking Velocity: 0.6 m/s",
      powerSource: "2S 7.4V 6000mAh High-Current LiPo Pack",
      microcontroller: "Teensy 4.1 ARM Cortex-M7 @ 600MHz",
      computePlatform: "Raspberry Pi 4 Model B (Autonomy & Sensor Fusion)",
      firmware: "ROST-HexGait Kinematics Engine (Wave & Tripod Gaits)",
      sensors: ["6x Ground Reaction Micro-Switches", "MPU-6050 6-Axis IMU", "Ultrasonic Obstacle Ring", "Down-Facing Optical Flow"],
    },
    projectRecord: {
      fieldTrials: 8,
      successRate: "94.0%",
      titles: ["National Biomimicry Robotics Challenge 1st Place 2025"],
    },
    image: "/images/bots/nexus-hex.png",
    cadPreview: "Lightweight 3mm matte carbon fiber frame with CNC Delrin joint bearings and shock-absorbing silicone feet.",
    githubUrl: "https://github.com/rost-robotics/nexus-hexapod",
    telemetry: {
      batteryVoltage: "7.8V",
      operatingCurrent: "5.4A Gait Cycle",
      escTemp: "30.8°C",
      latencyMs: 1.8,
      sensorHealth: "100% NOMINAL",
    },
  },
  {
    id: "aero-pulse",
    name: "AERO-PULSE",
    codename: "AERO-SURVEYOR",
    tagline: "Autonomous Aerial Inspection & Mapping Quadcopter with Optical Flow.",
    division: "Drones & UAVs",
    weightClass: "Aerial UAV Class (1.4 kg)",
    status: "Active Project",
    statusColor: "#22C55E",
    description:
      "Lightweight carbon fiber quadcopter running PX4 Autopilot with optical flow and LiDAR altitude sensing for indoor and outdoor aerial survey missions.",
    fullOverview:
      "AERO-PULSE is an autonomous quadcopter designed for aerial inspection and surveying. Operating with PX4 open-source autopilot software, the UAV maintains position hold both outdoors using GPS and indoors using optical flow and downward LiDAR sensors. Equipped with a stabilized gimbal camera, it streams live video telemetry to a ground station.",
    tags: ["PX4 Autopilot", "Optical Flow", "LiDAR Rangefinder", "Carbon Fiber", "MAVLink"],
    specs: {
      weight: "1.42 kg (All-Up Weight)",
      dimensions: "280mm diagonal motor-to-motor wheelbase",
      driveTrain: "4x 2306 1800KV Brushless Motors with 5-inch Low-Noise Carbon Propellers",
      payloadOrActuator: "2-Axis Micro Gimbal with 1080p HD Video Camera",
      operatingSpeed: "Cruise Speed: 12 m/s (Max 22 m/s)",
      powerSource: "4S 14.8V 3300mAh LiPo Pack with Smart Power Module",
      microcontroller: "Pixhawk 4 Mini / STM32F765 Autopilot",
      computePlatform: "Raspberry Pi Zero 2W Companion Computer",
      firmware: "PX4 Autopilot v1.14 + MAVLink Telemetry Bridge",
      sensors: ["PMW3901 Optical Flow Sensor", "TFmini Plus LiDAR Altimeter", "ICM-20689 Redundant IMUs", "Holybro Micro M8N GPS"],
    },
    projectRecord: {
      fieldTrials: 12,
      successRate: "97.5%",
      titles: ["National Collegiate UAV Design Challenge Winner 2025", "Collegiate Aerial Robotics 1st Place 2024"],
    },
    image: "/images/bots/aero-pulse.png",
    cadPreview: "Monocoque 3K carbon fiber unibody arms with vibration-isolated flight controller mount.",
    githubUrl: "https://github.com/rost-robotics/aero-pulse-px4",
    telemetry: {
      batteryVoltage: "15.2V",
      operatingCurrent: "16.5A Hovering",
      escTemp: "33.1°C",
      latencyMs: 1.1,
      sensorHealth: "100% NOMINAL",
    },
  },
];
