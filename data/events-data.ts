export interface EventScheduleItem {
  time: string;
  activity: string;
  stage: string;
}

export interface RostEvent {
  id: string;
  title: string;
  category: "Workshops" | "Competitions" | "Hackathons" | "Exhibitions";
  date: string;
  timeframe: string;
  venue: string;
  targetAudience: string;
  weightClass?: string; // backwards compatibility alias for targetAudience
  status: "Concluded" | "Upcoming" | "Registration Open";
  statusColor: string;
  image: string;
  description: string;
  fullOverview: string;
  prizePool: string;
  arenaDimensions: string; // facility / setup capacity
  safetyRegulations: string[]; // guidelines & requirements
  schedule: EventScheduleItem[];
  rulebookUrl?: string;
  registrationUrl?: string;
  slotsRemaining?: number;
}

export type ArenaEvent = RostEvent;

export const ROST_EVENTS: RostEvent[] = [
  {
    id: "rost-career-awareness-session",
    title: "ROST Career Awareness Session — Shaping Careers, Inspiring Futures",
    category: "Workshops",
    date: "AUGUST 15, 2026",
    timeframe: "09:30 AM - 13:00 PM",
    venue: "Faculty of Technology Auditorium, Rajarata University of Sri Lanka",
    targetAudience: "All Batches, Faculty of Technology",
    weightClass: "Career Guidance & Industry Mentorship",
    status: "Concluded",
    statusColor: "#22c55e",
    image: "https://res.cloudinary.com/pasongqn/image/upload/v1794655197/800098088_2066576244020725_3001038137368904299_n.jpg",
    description:
      "Bridging the gap between academic theory and the dynamic demands of the professional tech landscape with accomplished industry seniors.",
    fullOverview:
      "The ROST Career Awareness Session was successfully held on August 15, 2026, bringing together enthusiastic undergraduates from all batches of the Faculty of Technology. Organized by the Robotic Society of Technology (ROST), the event served as a powerful platform to bridge the gap between academic theory and the dynamic demands of the professional tech landscape.\n\nKey Highlights of the Event:\n• Industry Mentorship & Peer Insights: The session featured accomplished senior and super-senior students currently thriving in the IT industry, who shared their firsthand career journeys, real-world development experiences, and invaluable guidance.\n• Practical Guidance & Sector Readiness: Attendees gained crucial industry insights, practical navigation strategies, and renewed confidence to prepare themselves for the rapidly evolving technology sector.\n\nThis impactful initiative successfully inspired the next wave of tech innovators, equipping students with the clarity and direction needed to excel in their professional journeys.",
    prizePool: "Industry Career Mentorship & Professional Guidance",
    arenaDimensions: "Faculty Main Auditorium (300+ Seating Capacity)",
    safetyRegulations: [
      "Industry Mentorship: Firsthand career journeys and development experiences shared by senior alumni thriving in IT.",
      "Practical Guidance: Crucial tech sector insights, navigation strategies, and preparation for evolving roles.",
      "Bridging the Gap: Direct exchange connecting academic theory with dynamic professional software engineering demands.",
      "Inspiring Future Innovators: Empowering students with clarity, renewed confidence, and professional career roadmaps.",
    ],
    schedule: [
      { time: "09:30 AM", activity: "Opening Remarks by ROST Executive Board", stage: "Main Auditorium" },
      { time: "10:15 AM", activity: "Industry Mentorship: Real-World Experiences & Guidance", stage: "Main Stage" },
      { time: "11:30 AM", activity: "Interactive Panel: Sector Readiness & Career Pathways", stage: "Main Stage" },
      { time: "12:30 PM", activity: "Open Q&A, Peer Networking & Closing Mentorship Circles", stage: "Auditorium Bay" },
    ],
    rulebookUrl: "/documents/career-awareness-agenda.pdf",
    registrationUrl: "/events?event=rost-career-awareness-session",
    slotsRemaining: 0,
  },
  {
    id: "robofest-autonomous-challenge",
    title: "RoboFest: Autonomous Line Follower & Maze Solver Challenge",
    category: "Competitions",
    date: "OCTOBER 18, 2025",
    timeframe: "08:30 AM - 17:30 PM",
    venue: "Faculty of Technology Main Hall, Rajarata University of Sri Lanka",
    targetAudience: "Undergraduate Engineering & Tech Teams",
    weightClass: "Autonomous Mobile Robotics",
    status: "Concluded",
    statusColor: "#22c55e",
    image: "/images/gallery/rover-trial.png",
    description:
      "Inter-faculty autonomous robotics competition featuring precision optical line following, intersection navigation, and dynamic grid maze solving.",
    fullOverview:
      "RoboFest was organized by the Robotic Society of Technology (ROST) to challenge undergraduate students in autonomous control, sensory perception, and embedded systems engineering. Competitor bots navigated an intricate track featuring 90-degree hairpins, dashed pathways, and ramp transitions using PID algorithms and custom infrared/photodiode arrays.",
    prizePool: "Merit Trophies, Certificates of Excellence & Cash Grants for Winners",
    arenaDimensions: "10m × 8m Precision Competition Track & Multi-Grid Arena",
    safetyRegulations: [
      "Robots must operate completely autonomously with no remote teleoperation.",
      "Maximum robot dimensions: 25cm × 25cm with onboard battery power.",
      "Hardware emergency cut-off switch required on all entries.",
      "Pre-run track calibration allocated to all participating teams.",
    ],
    schedule: [
      { time: "08:30 AM", activity: "Team Registration & Technical Dimensional Inspection", stage: "Registration Bay" },
      { time: "10:00 AM", activity: "Qualifying Round: High-Speed Line Following Time Trials", stage: "Main Track" },
      { time: "01:30 PM", activity: "Final Round: Autonomous Maze Solving & Obstacle Avoidance", stage: "Competition Arena" },
      { time: "04:30 PM", activity: "Award Ceremony & Faculty Address", stage: "Main Auditorium" },
    ],
    rulebookUrl: "/documents/robofest-guidelines.pdf",
    registrationUrl: "/events?event=robofest-autonomous-challenge",
    slotsRemaining: 0,
  },
  {
    id: "arduino-embedded-bootcamp",
    title: "Arduino & Microcontroller Hands-On Bootcamp",
    category: "Workshops",
    date: "NOVEMBER 15, 2025",
    timeframe: "09:00 AM - 16:30 PM",
    venue: "Mechatronics & Embedded Systems Lab, Faculty of Technology",
    targetAudience: "First & Second Year Undergraduates",
    weightClass: "Embedded Systems Fundamentals",
    status: "Concluded",
    statusColor: "#22c55e",
    image: "/images/gallery/electronics-soldering.png",
    description:
      "Comprehensive hands-on workshop guiding students through AVR/ESP microcontrollers, analog sensor calibration, motor drivers, and serial communication.",
    fullOverview:
      "Conducted by ROST senior mentors, this bootcamp gave undergraduates practical laboratory experience with circuit design and microcontroller firmware. Participants built real-time sensor monitoring circuits, calibrated ultrasonic, IR, and temperature sensors, and implemented PWM motor speed controllers using Arduino and C++.",
    prizePool: "Hardware Development Kits & Official Certificates of Completion",
    arenaDimensions: "Mechatronics Lab (40 Dedicated Hardware Workstations)",
    safetyRegulations: [
      "Personal laptops with Arduino IDE and CH340 drivers pre-installed.",
      "Compliance with electronics lab electrical safety protocols.",
      "Proper handling of soldering equipment and low-voltage power benches.",
      "All breadboard wiring verified by student mentors before powering up.",
    ],
    schedule: [
      { time: "09:00 AM", activity: "Microcontroller Architecture & Digital/Analog I/O Principles", stage: "Lecture Bay" },
      { time: "11:00 AM", activity: "Hands-on Lab 1: Sensor Interfacing & Signal Conditioning", stage: "Lab Benches 1-20" },
      { time: "01:30 PM", activity: "Hands-on Lab 2: H-Bridge Motor Drivers & PWM Control", stage: "Lab Benches 1-20" },
      { time: "03:45 PM", activity: "Mini-Project Demonstrations & Certificate Distribution", stage: "Main Lab" },
    ],
    rulebookUrl: "/documents/bootcamp-syllabus.pdf",
    registrationUrl: "/events?event=arduino-embedded-bootcamp",
    slotsRemaining: 0,
  },
  {
    id: "rost-hardware-hackathon-2026",
    title: "ROST 48-Hour Hardware Hackathon: Smart Tech Solutions",
    category: "Hackathons",
    date: "JANUARY 24-26, 2026",
    timeframe: "48 Continuous Hours (Fri 16:00 - Sun 16:00)",
    venue: "ROST Prototyping Workshop & Innovation Hub, Faculty of Technology",
    targetAudience: "Multi-Disciplinary Student Teams",
    weightClass: "Applied Mechatronics & IoT Prototypes",
    status: "Concluded",
    statusColor: "#22c55e",
    image: "/images/gallery/cnc-machining.png",
    description:
      "48-hour continuous rapid prototyping sprint where student teams engineered working hardware prototypes addressing smart agriculture, industry, and healthcare.",
    fullOverview:
      "The ROST 48-Hour Hardware Hackathon brought together creative student engineers to conceive, design, solder, and program functional prototypes in a single weekend. Equipped with microcontrollers, sensors, 3D printers, and hand tools, teams worked around the clock with guidance from academic faculty and industry mentors.",
    prizePool: "LKR 100,000+ Prize Pool, Seed Grants & Incubation Support",
    arenaDimensions: "Faculty Prototyping Hall & Machine Fabrication Bay",
    safetyRegulations: [
      "Continuous workshop safety rules and eye protection in machining areas.",
      "All high-current power connections inspected prior to system testing.",
      "Original firmware and schematic design created during the hackathon period.",
      "Working hardware prototype required for final demonstration.",
    ],
    schedule: [
      { time: "Day 1 - 04:00 PM", activity: "Problem Statements Announcement & Crate Distribution", stage: "Main Stage" },
      { time: "Day 2 - 12:00 PM", activity: "Midway Milestone Evaluation & Technical Mentoring", stage: "Fabrication Bay" },
      { time: "Day 3 - 01:00 PM", activity: "Final Hardware Pitch & Live Demonstrations to Jury", stage: "Main Auditorium" },
      { time: "Day 3 - 03:30 PM", activity: "Grand Finale, Results Announcement & Awards", stage: "Main Auditorium" },
    ],
    rulebookUrl: "/documents/hackathon-guidelines.pdf",
    registrationUrl: "/events?event=rost-hardware-hackathon-2026",
    slotsRemaining: 0,
  },
  {
    id: "ros2-computer-vision-workshop",
    title: "ROS2 & Computer Vision for Autonomous Mobile Robots",
    category: "Workshops",
    date: "FEBRUARY 21, 2026",
    timeframe: "09:30 AM - 16:30 PM",
    venue: "Computer Systems & Software Lab, Faculty of Technology",
    targetAudience: "Intermediate Robotics Students & Developers",
    weightClass: "ROS2 Humble & OpenCV Python",
    status: "Concluded",
    statusColor: "#22c55e",
    image: "/images/gallery/arm-calibration.png",
    description:
      "Technical deep dive into Linux robotics, ROS2 communication nodes, OpenCV image filtering, and vision-based mobile robot navigation.",
    fullOverview:
      "A hands-on session exploring modern robotics software architecture. Students set up ROS2 packages, configured publisher-subscriber nodes, and implemented OpenCV pipelines for color segmentation and centroid tracking. The session culminated with simulating and controlling mobile robot platforms in virtual environments.",
    prizePool: "Verified Society Certificates & Access to ROST Research Repositories",
    arenaDimensions: "Computer Systems Lab (50 High-Performance Workstations)",
    safetyRegulations: [
      "Ubuntu 22.04 LTS or Virtual Environment configured with ROS2 Humble.",
      "Basic knowledge of Python or C++ programming recommended.",
      "USB webcam or onboard laptop camera for computer vision testing.",
      "Adherence to university IT network use regulations.",
    ],
    schedule: [
      { time: "09:30 AM", activity: "Introduction to ROS2 Node Architecture & Topics", stage: "Lecture Hall" },
      { time: "11:15 AM", activity: "Hands-on: Custom Publisher & Subscriber Pipeline in Python", stage: "Software Lab" },
      { time: "01:30 PM", activity: "OpenCV Integration: Real-time Object Tracking & Steering Logic", stage: "Software Lab" },
      { time: "03:45 PM", activity: "Live Robot Telemetry Integration & Closing Q&A", stage: "Demonstration Bay" },
    ],
    rulebookUrl: "/documents/ros2-workshop.pdf",
    registrationUrl: "/events?event=ros2-computer-vision-workshop",
    slotsRemaining: 0,
  },
  {
    id: "iot-cloud-automation-workshop",
    title: "Applied IoT & Industrial Cloud Telemetry Masterclass",
    category: "Workshops",
    date: "MARCH 20, 2026",
    timeframe: "13:30 PM - 18:00 PM",
    venue: "IoT & Embedded Systems Lab, Faculty of Technology",
    targetAudience: "Undergraduates & Tech Society Members",
    weightClass: "ESP32, MQTT & Cloud Dashboards",
    status: "Concluded",
    statusColor: "#22c55e",
    image: "/images/gallery/pit-crew.png",
    description:
      "Practical workshop on building connected edge IoT systems using ESP32, lightweight MQTT protocols, and cloud monitoring dashboards.",
    fullOverview:
      "Conducted to bridge embedded hardware with cloud infrastructure, this masterclass taught students how to construct real-time telemetry pipelines. Participants deployed ESP32 nodes to collect sensor telemetry, transmitted secure MQTT packets, and visualized live streaming data on customizable web dashboards with automated threshold alerts.",
    prizePool: "IoT Development Modules & Official Certificate of Training",
    arenaDimensions: "IoT Research Lab (45 Equipped Sensor Benches)",
    safetyRegulations: [
      "Personal laptops with Wi-Fi capability and VS Code / PlatformIO.",
      "Proper static electricity handling precautions for sensitive SMD boards.",
      "All cloud broker credentials stored securely in private environment files.",
      "Safe low-voltage power supply operations.",
    ],
    schedule: [
      { time: "01:30 PM", activity: "ESP32 Wi-Fi Architecture & MQTT Protocol Fundamentals", stage: "Seminar Room" },
      { time: "02:45 PM", activity: "Hands-on: Sensor Interfacing & MQTT Data Publishing", stage: "IoT Lab" },
      { time: "04:15 PM", activity: "Building Web Dashboards & Implementing Automated Alerts", stage: "IoT Lab" },
      { time: "05:30 PM", activity: "System Verification & Practical Assessment", stage: "IoT Lab" },
    ],
    rulebookUrl: "/documents/iot-masterclass.pdf",
    registrationUrl: "/events?event=iot-cloud-automation-workshop",
    slotsRemaining: 0,
  },
  {
    id: "rost-annual-robotics-exhibition",
    title: "ROST Annual Robotics & Innovation Exhibition (TechExpo)",
    category: "Exhibitions",
    date: "APRIL 25, 2026",
    timeframe: "09:00 AM - 17:00 PM",
    venue: "Faculty of Technology Main Atrium & Exhibition Grounds",
    targetAudience: "University Community, Schools & Public Visitors",
    weightClass: "Student Project Showcase & Live Demos",
    status: "Concluded",
    statusColor: "#22c55e",
    image: "/images/gallery/team-celebration.png",
    description:
      "Annual society exhibition showcasing student robotics innovations, autonomous rovers, hexapod platforms, and IoT automation systems.",
    fullOverview:
      "The ROST TechExpo is the society's premier public showcase event. Undergraduates displayed their capstone robotics projects, functional hardware systems, autonomous rovers, and automated machinery to hundreds of visitors, including university faculty, school STEM students, and technology industry representatives.",
    prizePool: "Dean's Innovation Awards & People's Choice Project Trophies",
    arenaDimensions: "Faculty Main Atrium & Outdoor Rover Demonstration Track",
    safetyRegulations: [
      "All moving robotics demonstrations contained within designated display zones.",
      "Emergency stop buttons accessible on all powered display units.",
      "Exhibitors must provide clear technical signage and live briefings.",
      "Public visitors must follow marked spectator walkways.",
    ],
    schedule: [
      { time: "09:00 AM", activity: "Official Opening & Inaugural Address by Faculty Dean", stage: "Main Atrium" },
      { time: "10:30 AM", activity: "Live Demonstration Sessions: Autonomous Systems & Rovers", stage: "Demo Track" },
      { time: "02:00 PM", activity: "Interactive STEM Session for School Students & Enthusiasts", stage: "Exhibition Bay" },
      { time: "04:30 PM", activity: "Dean's Innovation Award Presentation & Concluding Remarks", stage: "Main Stage" },
    ],
    rulebookUrl: "/documents/techexpo-guide.pdf",
    registrationUrl: "/events?event=rost-annual-robotics-exhibition",
    slotsRemaining: 0,
  },
];

export const ARENA_EVENTS: ArenaEvent[] = ROST_EVENTS;
