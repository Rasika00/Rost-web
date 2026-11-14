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
    targetAudience: "",
    weightClass: "",
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
    id: "rost-esp32-workshop-2026",
    title: "ESP32 Workshop 2026 | Robotic Society of Technology (ROST)",
    category: "Workshops",
    date: "AUGUST 14, 2026",
    timeframe: "09:00 AM - 15:00 PM",
    venue: "Faculty of Technology, Rajarata University of Sri Lanka",
    targetAudience: "",
    weightClass: "",
    status: "Concluded",
    statusColor: "#22c55e",
    image: "https://res.cloudinary.com/pasongqn/image/upload/v1794655567/778034194_1073597152298589_8234444454717473168_n.jpg",
    description:
      "From understanding the basics to bringing code to life, an exciting hands-on journey into the world of IoT and embedded technology with physical ESP32 boards.",
    fullOverview:
      "From understanding the basics to bringing code to life, the ESP32 Workshop 2026 was an exciting hands-on journey into the world of IoT and embedded technology.\n\nOrganized by the Robotic Society of Technology (ROST) and held on 14 August 2026, the workshop introduced participants to the fundamentals of the ESP32 board, its applications, and the core basics of programming.\n\nKey Highlights of the Workshop:\n• Theory to Practice: Starting with essential foundational theory, participants seamlessly moved into an engaging hands-on practical session.\n• Hardware Experience: Attendees worked directly with physical ESP32 boards, learning step-by-step how to write, debug, and upload code to turn abstract concepts into tangible, working projects.\n• Skill Enhancement: It provided a valuable, immersive opportunity for undergraduates to explore embedded systems, strengthen hardware integration skills, and experience modern ESP32 IoT technology firsthand.",
    prizePool: "Hands-on Hardware Experience & IoT Skill Enhancement",
    arenaDimensions: "IoT & Embedded Systems Lab",
    safetyRegulations: [
      "Theory to Practice: Seamless transition from foundational embedded theory to interactive practical sessions.",
      "Hardware Experience: Step-by-step coding, debugging, and flashing directly onto physical ESP32 microcontrollers.",
      "Skill Enhancement: Immersive opportunity for undergraduates to explore modern embedded systems and IoT integration.",
    ],
    schedule: [
      { time: "09:00 AM", activity: "ESP32 Architecture & Fundamentals", stage: "Main Lab" },
      { time: "11:00 AM", activity: "Hands-on Programming & Sensor Interfacing", stage: "Main Lab" },
      { time: "01:30 PM", activity: "Project Building & Practical Hardware Debugging", stage: "Main Lab" },
    ],
    rulebookUrl: "/documents/esp32-workshop-overview.pdf",
    registrationUrl: "/events?event=rost-esp32-workshop-2026",
    slotsRemaining: 0,
  },
  {
    id: "rost-arduino-workshop-2026",
    title: "ROST Arduino Workshop 2026 | Robotic Society of Technology",
    category: "Workshops",
    date: "FEBRUARY 22, 2026",
    timeframe: "09:00 AM - 16:30 PM",
    venue: "Faculty of Technology, Rajarata University of Sri Lanka",
    targetAudience: "",
    weightClass: "",
    status: "Concluded",
    statusColor: "#22c55e",
    image: "https://res.cloudinary.com/pasongqn/image/upload/v1794657132/654499668_940818692243103_7231100990043212697_n.jpg",
    description:
      "A dynamic hands-on workshop providing participants with comprehensive knowledge about Arduino microcontrollers, embedded programming, and physical hardware logic.",
    fullOverview:
      "The Arduino Workshop 2026, organized by the Robotic Society of Technology (ROST) at the Faculty of Technology, Rajarata University of Sri Lanka, was successfully held on February 22, 2026.\n\nKey Highlights of the Workshop:\n• Immersive Learning: The dynamic workshop provided participants with comprehensive, foundational knowledge about Arduino microcontrollers and embedded programming.\n• Real-Time Problem Solving: Through engaging activities and practical, real-time problem-solving challenges, students experienced firsthand how to bridge software logic with physical hardware components.\n• Fostering Technical Excellence: The workshop concluded with great success, marking another milestone in fostering creativity, innovation, and technical expertise within the Faculty of Technology.",
    prizePool: "Arduino Hardware Logic & Embedded Prototyping Skills",
    arenaDimensions: "Faculty Hardware & Electronics Laboratory",
    safetyRegulations: [
      "Immersive Learning: Comprehensive foundational knowledge about Arduino microcontrollers and C++ embedded programming.",
      "Real-Time Problem Solving: Hands-on challenges bridging software logic directly with physical electronic hardware.",
      "Fostering Technical Excellence: Inspiring creative innovation and technical mechatronics expertise within the Faculty.",
    ],
    schedule: [
      { time: "09:00 AM", activity: "Arduino Microcontroller Architecture & Pinout Principles", stage: "Main Lab" },
      { time: "11:00 AM", activity: "Hands-on Sensor Interfacing & Signal Calibration", stage: "Hardware Benches" },
      { time: "01:30 PM", activity: "Real-Time Problem Solving & Hardware Logic Implementation", stage: "Hardware Benches" },
      { time: "03:45 PM", activity: "Project Demonstrations & Certificate Awarding", stage: "Main Lab" },
    ],
    rulebookUrl: "/documents/arduino-workshop-syllabus.pdf",
    registrationUrl: "/events?event=rost-arduino-workshop-2026",
    slotsRemaining: 0,
  },
  {
    id: "rost-robotics-iot-intro-session-2026",
    title: "Exploring the World of Robotics and IoT | Robotic Society of Technology (ROST)",
    category: "Workshops",
    date: "JANUARY 25, 2026",
    timeframe: "09:30 AM - 13:30 PM",
    venue: "Faculty Premises, Faculty of Technology, Rajarata University of Sri Lanka",
    targetAudience: "",
    weightClass: "",
    status: "Concluded",
    statusColor: "#22c55e",
    image: "https://res.cloudinary.com/pasongqn/image/upload/v1794657414/624524630_899576653033974_6667067312148271890_n.jpg",
    description:
      "Introductory session for newcomers featuring interactive learning, hands-on robotics fundamentals, and expert insights from guest speaker Mr. Husni Mohomad.",
    fullOverview:
      "The Robotic Society of Technology (ROST) of the Faculty of Technology, Rajarata University of Sri Lanka, successfully hosted the \"Introduction to Robotics\" session for newcomers on January 25, 2026, at the faculty premises.\n\nKey Highlights of the Session:\n• Interactive & Engaging Learning: The session featured a vibrant mix of fun games and interactive discussions, helping new students grasp the fundamental concepts of Robotics and IoT and their real-world applications with ease.\n• Expert Guidance & Motivation: The event was graced by guest speaker Mr. Husni Mohomad, Lecturer from the Department of Information and Communication Technology, who shared invaluable industry insights and inspired students to dive into innovative technologies.\n• Sparking Curiosity: The gathering successfully fostered a spirit of curiosity, collaboration, and teamwork among the undergraduates, marking a memorable start to their tech journeys.",
    prizePool: "Robotics & IoT Fundamentals & Expert Industry Insights",
    arenaDimensions: "Faculty Premises & Demonstration Bay",
    safetyRegulations: [
      "Interactive Learning: Foundational concepts of Robotics and IoT explained through collaborative engagement and real-world examples.",
      "Expert Guidance: Invaluable industry insights shared by Mr. Husni Mohomad, Lecturer at the Dept. of ICT.",
      "Sparking Curiosity: Fostering teamwork, creative thinking, and tech innovation among new technology undergraduates.",
    ],
    schedule: [
      { time: "09:30 AM", activity: "Welcome Address & Introduction to ROST Society", stage: "Main Hall" },
      { time: "10:15 AM", activity: "Guest Keynote by Mr. Husni Mohomad (Dept. of ICT)", stage: "Main Hall" },
      { time: "11:30 AM", activity: "Interactive Games & Foundational Robotics Concepts", stage: "Workshop Floor" },
      { time: "12:45 PM", activity: "Q&A, Team Collaboration & Closing Remarks", stage: "Main Hall" },
    ],
    rulebookUrl: "/documents/robotics-iot-intro.pdf",
    registrationUrl: "/events?event=rost-robotics-iot-intro-session-2026",
    slotsRemaining: 0,
  },
];

export const ARENA_EVENTS: ArenaEvent[] = ROST_EVENTS;
