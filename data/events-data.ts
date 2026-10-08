export interface EventScheduleItem {
  time: string;
  activity: string;
  stage: string;
}

export interface ArenaEvent {
  id: string;
  title: string;
  category: "RoboWars" | "Autonomous Challenges" | "Hardware Hackathons" | "Workshops";
  date: string;
  timeframe: string;
  venue: string;
  weightClass: string;
  status: "Registration Open" | "Live Streaming" | "Concluded" | "Coming Soon";
  statusColor: string;
  description: string;
  fullOverview: string;
  prizePool: string;
  arenaDimensions: string;
  safetyRegulations: string[];
  schedule: EventScheduleItem[];
  rulebookUrl: string;
  registrationUrl: string;
  slotsRemaining: number;
}

export const ARENA_EVENTS: ArenaEvent[] = [
  {
    id: "national-robowars-2026",
    title: "National RoboWars: Heavyweight & Featherweight Clash",
    category: "RoboWars",
    date: "NOVEMBER 14-16, 2026",
    timeframe: "09:00 AM - 20:00 PM PST",
    venue: "Titan Arena Main Steel Cage, San Francisco Expo Center",
    weightClass: "30lb Featherweight & 250lb Heavyweight",
    status: "Registration Open",
    statusColor: "#FF6B00",
    description:
      "The premier kinetic combat robotics showdown. 32 teams battle in double-elimination brackets inside a certified 30mm Polycarbonate safety arena.",
    fullOverview:
      "National RoboWars 2026 brings together the elite combat robotics teams from across the continent. Features high-velocity weapon spinning pits, pyrotechnic hazards, hydraulic floor flippers, and high-speed telemetry streaming to live arena screens. Full remote telemetry and fail-safe link cutoff verification mandatory.",
    prizePool: "$35,000 USD + Titan Precision Machining Grants",
    arenaDimensions: "40ft × 40ft Bulletproof Lexan Enclosure with 1/2-inch Steel Deck Floor",
    safetyRegulations: [
      "All active weapons must spin down to 0 RPM within 60 seconds of radio loss.",
      "Dual mechanical master power switches and visible weapon lock pins required.",
      "Batteries must be encased in fire-retardant silicone or metal containment.",
      "Fail-safe RF test required before entering the arena prep tunnel.",
    ],
    schedule: [
      { time: "Day 1 - 09:00 AM", activity: "Safety Inspection & Weapon Spin-Up Tests in Cage", stage: "Pit Inspection Bay A" },
      { time: "Day 1 - 01:30 PM", activity: "30lb Featherweight Qualifying Brackets", stage: "Arena Main Cage" },
      { time: "Day 2 - 10:00 AM", activity: "250lb Heavyweight Round of 16 Knockouts", stage: "Arena Main Cage" },
      { time: "Day 3 - 04:00 PM", activity: "Championship Semi-Finals & Grand Finals", stage: "Main Arena + Global Stream" },
    ],
    rulebookUrl: "/documents/rules-robowars-2026.pdf",
    registrationUrl: "/events?register=national-robowars-2026",
    slotsRemaining: 6,
  },
  {
    id: "autonomous-maze-slam",
    title: "Autonomous SLAM & Subterranean Rescue Derby",
    category: "Autonomous Challenges",
    date: "DECEMBER 05, 2026",
    timeframe: "10:00 AM - 18:00 PM PST",
    venue: "Robotics Prototyping Tunnel Lab, Faculty Complex Building B",
    weightClass: "Under 50kg Autonomous Ground Vehicles",
    status: "Registration Open",
    statusColor: "#22C55E",
    description:
      "GPS-denied navigation through simulated disaster corridors with smoke, rubble, dynamic hazards, and thermal survivor markers.",
    fullOverview:
      "Rovers must completely navigate a multi-level subterranean maze without human teleoperation. Teams are scored on 3D map accuracy, hazard identification, survivor beacon localization, and mission completion time.",
    prizePool: "$15,000 USD + NVIDIA Jetson AGX Orin Hardware Suites",
    arenaDimensions: "2,400 sq. ft. Reconfigurable Tunnel Complex with 3D Elevation Ramps",
    safetyRegulations: [
      "Software E-Stop via 915MHz heartbeat radio required at all times.",
      "Drive speeds capped at 6.0 m/s inside tunnel chicanes.",
      "Class 1 eye-safe LiDAR sensors only.",
    ],
    schedule: [
      { time: "09:00 AM", activity: "LiDAR and Sensor Fusion Calibration Check", stage: "Test Track Alpha" },
      { time: "11:00 AM", activity: "Trial Run 1: Smoke & Debris Obstacle Navigation", stage: "Tunnel Sector 1-3" },
      { time: "02:30 PM", activity: "Trial Run 2: Dynamic Hazard & Victim Localization", stage: "Complete Maze" },
      { time: "05:30 PM", activity: "Point Cloud Accuracy Evaluation & Awards", stage: "Main Auditorium" },
    ],
    rulebookUrl: "/documents/rules-slam-derby-2026.pdf",
    registrationUrl: "/events?register=autonomous-maze-slam",
    slotsRemaining: 4,
  },
  {
    id: "aero-sprint-derby",
    title: "Aero-Sprint Autonomous Drone Racing Championship",
    category: "Autonomous Challenges",
    date: "OCTOBER 28, 2026",
    timeframe: "13:00 PM - 21:00 PM PST",
    venue: "SkyLab Aerodrome & High-Speed Drone Cage, Sector 4",
    weightClass: "Sub-2kg FPV & Autonomous Multirotors",
    status: "Live Streaming",
    statusColor: "#FF6B00",
    description:
      "High-speed autonomous drones navigate glowing illuminated neon gates at up to 120 km/h using pure computer vision and optical flow.",
    fullOverview:
      "Witness millimeter-precision maneuvers at extreme velocity. Competing drones fly autonomously through an illuminated 3D aerial obstacle track. Human pilots also compete in an exhibition night race with high-intensity LED tracers.",
    prizePool: "$12,000 USD + T-Motor & Carbon Aero Gear",
    arenaDimensions: "60ft × 40ft × 25ft High-Tension Mesh Air Cage",
    safetyRegulations: [
      "Dual optical track barrier netting surrounding all spectator perimeters.",
      "Automatic disarm on loss of gate tracking or orientation divergence.",
    ],
    schedule: [
      { time: "01:00 PM", activity: "Track Mapping & Gate Optical Calibration", stage: "Air Cage North" },
      { time: "03:30 PM", activity: "Time Attack Qualifying Rounds", stage: "Air Cage North" },
      { time: "07:00 PM", activity: "Neon Night Finals & Live Broadcast", stage: "Main Arena Sky" },
    ],
    rulebookUrl: "/documents/rules-drone-sprint.pdf",
    registrationUrl: "/events?register=aero-sprint-derby",
    slotsRemaining: 2,
  },
  {
    id: "micro-mouse-sprint",
    title: "Micro-Mouse Precision Maze Velocity Sprint",
    category: "Autonomous Challenges",
    date: "JANUARY 16, 2027",
    timeframe: "10:00 AM - 16:30 PM PST",
    venue: "Mechatronics Lab Central Hall, Campus Tech Center",
    weightClass: "Sub-500g Micro-Robots",
    status: "Coming Soon",
    statusColor: "#A3A3A3",
    description:
      "Tiny, lightning-fast robotic mice navigating a 16x16 maze using custom flood-fill algorithms and extreme wheel acceleration up to 3G.",
    fullOverview:
      "Micro-Mouse is the ultimate test of deterministic embedded algorithms and traction engineering. Tiny custom PCB robots explore an unknown maze, calculate optimal paths, and execute blistering speed runs with sub-millisecond precision.",
    prizePool: "$8,000 USD + Custom PCB Fabrication Vouchers",
    arenaDimensions: "16 × 16 Cell Classical Wooden Maze Platform (2.88m × 2.88m)",
    safetyRegulations: [
      "Maximum vehicle width 25cm, max weight 500g.",
      "No internal combustion or corrosive suction fans allowed.",
    ],
    schedule: [
      { time: "10:00 AM", activity: "Maze Inspection & Infrared Sensor Baseline", stage: "Center Floor" },
      { time: "11:30 AM", activity: "Exploration Search Runs", stage: "Maze Table 1 & 2" },
      { time: "02:00 PM", activity: "High-Speed Final Sprints", stage: "Main Arena Board" },
    ],
    rulebookUrl: "/documents/rules-micromouse.pdf",
    registrationUrl: "/events?register=micro-mouse-sprint",
    slotsRemaining: 12,
  },
  {
    id: "hardware-hackathon-2026",
    title: "ROST 48-Hour Hardware Hackathon: Mechatronics Unleashed",
    category: "Hardware Hackathons",
    date: "FEBRUARY 20-22, 2027",
    timeframe: "48 Consecutive Hours (Fri 18:00 - Sun 18:00)",
    venue: "ROST Rapid Prototyping Innovation Lab & Machine Shop",
    weightClass: "Open Innovation / Multi-Disciplinary Hardware",
    status: "Coming Soon",
    statusColor: "#22C55E",
    description:
      "48 hours of rapid prototyping, 3D printing, SMD circuit soldering, and ROS2 programming to build functional autonomous hardware.",
    fullOverview:
      "Teams receive a mystery hardware mystery crate containing microcontrollers, LiDAR sensors, brushless motors, and raw aluminum stock. Free access to waterjet cutters, 3D printers, laser cutters, and mentorship from veteran robotics engineers.",
    prizePool: "$20,000 USD Venture Grants + Angel Lab Incubation",
    arenaDimensions: "Full 10,000 sq. ft. Prototyping Facility + Machine Shop",
    safetyRegulations: [
      "Eye protection required inside machine shop zones at all times.",
      "Machine operation (waterjet, CNC mill) supervised by certified lab staff.",
    ],
    schedule: [
      { time: "Friday 06:00 PM", activity: "Theme Announcement & Hardware Crate Distribution", stage: "Main Atrium" },
      { time: "Saturday 12:00 PM", activity: "Midway Check-in & Circuit Smoke Tests", stage: "Prototyping Bay" },
      { time: "Sunday 04:00 PM", activity: "Live Demonstrations & Hardware Pitches", stage: "Main Stage" },
    ],
    rulebookUrl: "/documents/rules-hackathon.pdf",
    registrationUrl: "/events?register=hardware-hackathon-2026",
    slotsRemaining: 18,
  },
  {
    id: "high-rpm-esc-workshop",
    title: "Advanced Workshop: Field-Oriented Control & Custom Brushless ESCs",
    category: "Workshops",
    date: "NOVEMBER 28, 2026",
    timeframe: "14:00 PM - 18:00 PM PST",
    venue: "Electronics Cleanroom & Dyno Test Cell, Room 204",
    weightClass: "All Skill Levels (Intermediate Embedded Recommended)",
    status: "Registration Open",
    statusColor: "#FF6B00",
    description:
      "Hands-on masterclass on designing 4-layer power PCBs, tuning Space-Vector FOC algorithms on STM32H7, and active regenerative braking.",
    fullOverview:
      "Learn how to drive high-power outrunner motors cleanly without desyncing. We cover MOSFET gate drive timing, shunt current measurement, thermal dissipation strategies, and writing embedded C algorithms for 50kHz PWM loops.",
    prizePool: "Free Development Kit (Custom ROST-ESC V2 Dev Board) for all participants",
    arenaDimensions: "Dyno Test Cell with Transparent Kevlar Blast Shield",
    safetyRegulations: [
      "High-current power supplies restricted to current-limited benchtop units.",
      "Protective eyewear during dyno spin tests.",
    ],
    schedule: [
      { time: "02:00 PM", activity: "Theoretical Principles of FOC and Clarke/Park Transforms", stage: "Lecture Bay" },
      { time: "03:30 PM", activity: "Firmware Flashing & PID Tuning on Dyno Rig", stage: "Dyno Bench" },
      { time: "05:00 PM", activity: "High-Current Stress Testing & Thermal Imaging", stage: "Test Cell" },
    ],
    rulebookUrl: "/documents/syllabus-foc-workshop.pdf",
    registrationUrl: "/events?register=high-rpm-esc-workshop",
    slotsRemaining: 5,
  },
];
