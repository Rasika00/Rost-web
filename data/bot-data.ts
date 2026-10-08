export interface BotSpec {
  weight: string;
  dimensions: string;
  driveTrain: string;
  weaponOrActuator: string;
  weaponRPM?: string;
  powerSource: string;
  microcontroller: string;
  computePlatform: string;
  firmware: string;
  sensors: string[];
}

export interface BattleRecord {
  matches: number;
  wins: number;
  losses: number;
  knockouts: number;
  titles: string[];
}

export interface Bot {
  id: string;
  name: string;
  codename: string;
  tagline: string;
  division: "Combat Bots" | "Autonomous Rovers" | "Robotic Arms" | "Bipeds & Humanoids" | "Drones & UAVs";
  weightClass: string;
  status: "Combat Ready" | "Active Fleet" | "Prototyping" | "Championship Winner";
  statusColor: string;
  description: string;
  fullOverview: string;
  tags: string[];
  specs: BotSpec;
  battleRecord?: BattleRecord;
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
    id: "vortex-x",
    name: "VORTEX-X",
    codename: "MK-IV DEVASTATOR",
    tagline: "Heavyweight 250lb Kinetic Bar Spinner. Engineered to shatter armor.",
    division: "Combat Bots",
    weightClass: "250 lb Heavyweight",
    status: "Championship Winner",
    statusColor: "#FF6B00",
    description:
      "Our premier 250lb combat machine armed with a 65lb Hardox 500 asymmetrical kinetic spinner delivering 28.5 kilojoules of impact energy per strike.",
    fullOverview:
      "VORTEX-X is the reigning National RoboWars Heavyweight champion. Designed with a single-piece monolithic CNC aluminum 7075-T6 unibody chassis, VORTEX-X features twin brushless 12kW outrunners driving a single-tooth Hardox 500 asymmetrical flywheel at 10,200 RPM. Avionics are encased in aerospace-grade silicone shock cradles rated for 45G instant deceleration.",
    tags: ["Hardox 500", "10,200 RPM", "12kW Brushless", "Dual CAN-FD", "Custom FOC Inverter"],
    specs: {
      weight: "249.4 lbs (113.1 kg)",
      dimensions: "920mm × 840mm × 280mm",
      driveTrain: "4WD Custom Titanium Hubs + Mag-Drive Urethane Wheels",
      weaponOrActuator: "Asymmetrical 65lb Hardox 500 Kinetic Bar",
      weaponRPM: "10,200 RPM (28.5 kJ Impact Energy)",
      powerSource: "12S 44.4V 10,000mAh 120C Graphene LiPo",
      microcontroller: "Dual Redundant STM32H753 Arm Cortex-M7 @ 480MHz",
      computePlatform: "Custom ROST-Inverter FPGA Telemetry Monitor",
      firmware: "ROST-FOC-RealTime v3.8.2 (50kHz commutation loop)",
      sensors: ["Weapon Hall RPM", "4x Current Shunt Telemetry", "Tri-axis 200G Shock Accelerometer", "Thermal IR Sensors on ESCs"],
    },
    battleRecord: {
      matches: 24,
      wins: 22,
      losses: 2,
      knockouts: 19,
      titles: ["National RoboWars Heavyweight Gold 2025", "Pacific Mechatronics Cup Champion 2024"],
    },
    image: "/images/bots/vortex-x.png",
    cadPreview: "Monolithic 7075-T6 Unibody with 15mm AR400 Top Deck and shock-isolated battery tray.",
    githubUrl: "https://github.com/rost-robotics/vortex-firmware",
    telemetry: {
      batteryVoltage: "49.8V (Nominal 12S)",
      operatingCurrent: "185A Peak Burst",
      escTemp: "41.2°C",
      latencyMs: 1.8,
      sensorHealth: "100% NOMINAL",
    },
  },
  {
    id: "aegis-1",
    name: "AEGIS-1",
    codename: "TERRAIN-TITAN",
    tagline: "Autonomous LiDAR SLAM All-Terrain Exploration & Hazard Navigation Rover.",
    division: "Autonomous Rovers",
    weightClass: "45 kg Exploration Class",
    status: "Active Fleet",
    statusColor: "#22C55E",
    description:
      "Equipped with 360-degree Livox 3D LiDAR, stereo computer vision, and RTK-GPS for millimeter-accurate autonomous navigation in GPS-denied tunnels and disaster zones.",
    fullOverview:
      "AEGIS-1 is ROST's autonomous research platform built for NASA Space Grant and IEEE Autonomous Rescue competitions. Powered by an onboard NVIDIA Jetson AGX Orin running real-time point-cloud SLAM and neural obstacle classification, AEGIS-1 maps unstructured subterranean cavern terrain at speeds up to 18 km/h.",
    tags: ["ROS 2 Humble", "NVIDIA Jetson AGX", "Livox 3D LiDAR", "RTK GPS", "Independent Rocker-Bogie"],
    specs: {
      weight: "44.8 kg",
      dimensions: "780mm × 650mm × 520mm",
      driveTrain: "6WD Independent In-Wheel Brushless Hub Motors with Rocker-Bogie Suspension",
      weaponOrActuator: "Autonomous 3-DOF Sensor Mast & Soil Penetrometer",
      weaponRPM: "N/A (Drive Speed: 5.2 m/s max)",
      powerSource: "48V 25Ah LiFePO4 Solid-State Managed Pack",
      microcontroller: "Teensy 4.1 + STM32G4 Safety Coprocessor",
      computePlatform: "NVIDIA Jetson AGX Orin 64GB (275 TOPS)",
      firmware: "ROS 2 Humble + Micro-ROS FreeRTOS HAL",
      sensors: ["Livox Mid-360 3D LiDAR", "Intel RealSense D455 Stereo Depth Camera", "VectorNav VN-100 Rugged IMU", "Dual RTK-GNSS Antennas"],
    },
    battleRecord: {
      matches: 14,
      wins: 13,
      losses: 1,
      knockouts: 0,
      titles: ["IEEE Autonomous Challenge 1st Place 2025", "Autonomous Navigation Derby Grand Winner 2024"],
    },
    image: "/images/bots/aegis-1.png",
    cadPreview: "Articulated Rocker-Bogie aluminum alloy suspension with carbon fiber avionics enclosure rated IP67.",
    githubUrl: "https://github.com/rost-robotics/aegis-slam-stack",
    telemetry: {
      batteryVoltage: "51.2V",
      operatingCurrent: "18.4A Cruise",
      escTemp: "32.0°C",
      latencyMs: 3.2,
      sensorHealth: "100% NOMINAL",
    },
  },
  {
    id: "synapse",
    name: "SYNAPSE",
    codename: "PRECISION-6X",
    tagline: "6-DOF High-Precision Robotic Arm with Sub-Millimeter Vision-Guided Manipulation.",
    division: "Robotic Arms",
    weightClass: "18 kg Manipulator Class",
    status: "Combat Ready",
    statusColor: "#FF6B00",
    description:
      "High-torque harmonic drive articulated arm featuring eye-in-hand RGB-D visual servoing and millisecond reactive trajectory planning.",
    fullOverview:
      "SYNAPSE bridges industrial precision and academic AI manipulation. Utilizing custom strain-wave harmonic gearboxes with 100:1 zero-backlash reduction, brushless frameless torque motors, and an eye-in-hand depth sensor, SYNAPSE performs high-speed component assembly, automated soldering, and dynamic object interception.",
    tags: ["6-DOF", "Harmonic Drive", "Computer Vision", "MoveIt 2", "Zero Backlash"],
    specs: {
      weight: "18.2 kg (Reach: 850mm)",
      dimensions: "Base: 220mm dia, Max Extension: 920mm",
      driveTrain: "Custom Frameless BLDC Motors + Harmonic Drive Reducers",
      weaponOrActuator: "Pneumatic Micro-Gripper with Multi-Touch Tactile Array",
      weaponRPM: "Angular Velocity: 180 deg/sec",
      powerSource: "24V 30A Industrial Regulated DC / LiFePO4 Portable Rail",
      microcontroller: "6x Custom STM32F405 CANopen Joint Actuator Nodes",
      computePlatform: "NVIDIA Jetson Orin Nano + Host Workstation",
      firmware: "Custom CANopen Node Protocol + MoveIt 2 Inverse Kinematics",
      sensors: ["19-bit Absolute Magnetic Optical Encoders", "Wrist 6-Axis F/T Sensor", "Eye-in-Hand Luxonis OAK-D Pro", "Tactile Pressure Array"],
    },
    battleRecord: {
      matches: 8,
      wins: 8,
      losses: 0,
      knockouts: 0,
      titles: ["National Automation Olympiad Gold 2025", "RoboTech Industrial Manipulation Award 2024"],
    },
    image: "/images/bots/synapse.png",
    cadPreview: "Aero-grade 6061-T6 machined links with internal through-joint cable harnesses and quick-change flange.",
    githubUrl: "https://github.com/rost-robotics/synapse-manipulator",
    telemetry: {
      batteryVoltage: "24.1V",
      operatingCurrent: "12.8A Active Load",
      escTemp: "36.8°C",
      latencyMs: 1.2,
      sensorHealth: "98% CALIBRATED",
    },
  },
  {
    id: "kinetic-strike",
    name: "KINETIC-STRIKE",
    codename: "STRIKE-30",
    tagline: "30lb Featherweight Drum Spinner. High-RPM kinetic executioner.",
    division: "Combat Bots",
    weightClass: "30 lb Featherweight",
    status: "Combat Ready",
    statusColor: "#EF4444",
    description:
      "A ferociously compact drum spinner spinning a S7 tool-steel drum at 14,000 RPM, capable of catapulting 30lb opponents into the arena ceiling.",
    fullOverview:
      "Engineered for the fast-paced 30lb combat circuit, KINETIC-STRIKE pairs a high-torque Scorpion brushless motor with an S7 impact tool-steel drum. The frame features a solid UHMW bumper shell combined with Grade 5 Titanium front wedgelets designed to win ground-clearance battles.",
    tags: ["S7 Tool Steel", "14,000 RPM", "Titanium Grade 5", "UHMW Bumper", "V-Belt Drive"],
    specs: {
      weight: "29.8 lbs (13.5 kg)",
      dimensions: "440mm × 380mm × 160mm",
      driveTrain: "2WD Direct Gear Drive Brushless with BaneBots Wheels",
      weaponOrActuator: "Single-Tooth S7 Impact Tool Steel Drum",
      weaponRPM: "14,000 RPM (7.8 kJ Impact Energy)",
      powerSource: "6S 22.2V 3300mAh 100C LiPo",
      microcontroller: "STM32F411 BlackPill",
      computePlatform: "Custom Integrated FOC Driver Board",
      firmware: "ROST-Combat-Drive v2.1",
      sensors: ["Optical RPM Tachometer", "Battery Cell Monitor", "ESC Overcurrent Guard"],
    },
    battleRecord: {
      matches: 18,
      wins: 16,
      losses: 2,
      knockouts: 14,
      titles: ["Featherweight Brawl Champion 2025", "RoboDestruction Open 2nd Place 2024"],
    },
    image: "/images/bots/kinetic-strike.png",
    cadPreview: "Machined billet weapon bulkheads with interlocking titanium tongue-and-groove joints.",
    githubUrl: "https://github.com/rost-robotics/kinetic-strike-chassis",
    telemetry: {
      batteryVoltage: "24.8V",
      operatingCurrent: "120A Weapon Ramp",
      escTemp: "38.5°C",
      latencyMs: 1.5,
      sensorHealth: "100% NOMINAL",
    },
  },
  {
    id: "nexus-hex",
    name: "NEXUS-HEX",
    codename: "HEX-WALKER",
    tagline: "Bio-Inspired 18-DOF Hexapod with Dynamic Omnidirectional Terrain Adaptation.",
    division: "Bipeds & Humanoids",
    weightClass: "8.5 kg Bio-Robotic Class",
    status: "Active Fleet",
    statusColor: "#22C55E",
    description:
      "18 titanium-geared smart servos coordinated by an inverse kinematics engine for climbing steep rock slopes and collapsed obstacles.",
    fullOverview:
      "NEXUS-HEX models hexapod biomechanics to conquer terrain impossible for wheeled rovers. Each leg incorporates 3 high-torque brushless smart actuators with force feedback. The dynamic wave-gait optimizer dynamically shifts center of gravity on 45-degree uneven inclines.",
    tags: ["18-DOF", "Inverse Kinematics", "Smart Actuators", "Terrain Adaptation", "Force Sensing"],
    specs: {
      weight: "8.5 kg",
      dimensions: "620mm dia footprint, standing height 310mm",
      driveTrain: "18x High-Torque Brushless Serial Bus Actuators (45 kg·cm)",
      weaponOrActuator: "Ground Reaction Sensor Footpads with Nitrile Grips",
      weaponRPM: "Walking Speed: 1.2 m/s",
      powerSource: "4S 14.8V 8000mAh LiPo Pack",
      microcontroller: "Dual Teensy 4.1 for Kinematic Math & Bus Management",
      computePlatform: "Raspberry Pi 5 8GB / Coral Edge TPU",
      firmware: "ROST-HexGait Engine v1.9",
      sensors: ["6x 3-Axis Force Foot Sensors", "BMI088 IMU", "Ultrasonic Proximity Ring", "Downward Optical Flow Sensor"],
    },
    battleRecord: {
      matches: 6,
      wins: 6,
      losses: 0,
      knockouts: 0,
      titles: ["RoboClimb Biomimicry Invitational 1st Place 2025"],
    },
    image: "/images/bots/nexus-hex.png",
    cadPreview: "3mm 3K twill matte carbon fiber chassis plates with CNC Delrin joint bearings.",
    githubUrl: "https://github.com/rost-robotics/nexus-hexapod",
    telemetry: {
      batteryVoltage: "16.1V",
      operatingCurrent: "14.2A Gait Cycle",
      escTemp: "31.5°C",
      latencyMs: 2.1,
      sensorHealth: "100% NOMINAL",
    },
  },
  {
    id: "aero-pulse",
    name: "AERO-PULSE",
    codename: "STRIKER-UAV",
    tagline: "Autonomous Optical-Flow Swarm Drone with Millisecond Collision Avoidance.",
    division: "Drones & UAVs",
    weightClass: "1.8 kg Quad-Rotor",
    status: "Combat Ready",
    statusColor: "#FF6B00",
    description:
      "Carbon fiber unibody racing-scale drone capable of 140 km/h sprint velocity and autonomous indoor flight without GPS lock.",
    fullOverview:
      "AERO-PULSE is designed for high-speed autonomous air-racing and target tracking. Powered by custom Betaflight-adapted PX4 autonomy software and an onboard stereo vision system, it executes 8G high-speed turns through complex industrial pipe mazes.",
    tags: ["PX4 Autonomy", "Optical Flow", "140 km/h", "Carbon Fiber Unibody", "Target Tracking"],
    specs: {
      weight: "1.78 kg (All-Up Weight)",
      dimensions: "280mm diagonal wheelbase",
      driveTrain: "4x 2808 1500KV Brushless Motors with 7-inch Carbon Blades",
      weaponOrActuator: "Down-Firing Laser Rangefinder & Precision Drop Payload",
      weaponRPM: "Max Velocity: 142 km/h (88 mph)",
      powerSource: "6S 22.2V 2200mAh 150C Graphene LiPo",
      microcontroller: "Holybro Kakute H7 V2 Flight Controller",
      computePlatform: "Radxa Zero 3W Companion Computer",
      firmware: "PX4 Autonomy v1.14 + Custom VIO Bridge",
      sensors: ["PMW3901 Optical Flow", "TFMini Plus LiDAR Altimeter", "ICM-42688-P Dual IMUs", "Stereo FPV Autonomy Cams"],
    },
    battleRecord: {
      matches: 12,
      wins: 11,
      losses: 1,
      knockouts: 0,
      titles: ["Autonomous Drone Racing Cup Champion 2025", "Collegiate Aerial Robotics Derby 1st Place 2024"],
    },
    image: "/images/bots/aero-pulse.png",
    cadPreview: "Monocoque continuous carbon fiber arm architecture with quick-release battery pod.",
    githubUrl: "https://github.com/rost-robotics/aero-pulse-px4",
    telemetry: {
      batteryVoltage: "24.9V",
      operatingCurrent: "48.0A Hovering",
      escTemp: "35.2°C",
      latencyMs: 0.9,
      sensorHealth: "100% NOMINAL",
    },
  },
];
