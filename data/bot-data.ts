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

/**
 * ROST PROJECTS REGISTRY
 * 
 * Empty for now. Fill in your real university robotics and technology projects below.
 * When this array is empty, the website automatically displays clean empty project boxes ready to be filled.
 * 
 * Example template:
 * {
 *   id: "project-1",
 *   name: "Project Name",
 *   codename: "ROST-01",
 *   tagline: "Short summary of the project.",
 *   division: "Autonomous Mobile Robots",
 *   weightClass: "Scale / Class",
 *   status: "Active Project",
 *   statusColor: "#22C55E",
 *   description: "Brief summary of the project hardware and objectives.",
 *   fullOverview: "Detailed breakdown of the project architecture, features, and research outcomes.",
 *   tags: ["Arduino", "Sensors", "IoT"],
 *   specs: {
 *     weight: "N/A",
 *     dimensions: "N/A",
 *     driveTrain: "N/A",
 *     payloadOrActuator: "N/A",
 *     powerSource: "N/A",
 *     microcontroller: "ESP32 / Arduino / STM32",
 *     computePlatform: "Embedded MCU",
 *     firmware: "C++ / MicroPython",
 *     sensors: ["Sensor 1", "Sensor 2"],
 *   },
 *   image: "/images/placeholder.png",
 *   cadPreview: "3D CAD / Schematic details",
 *   githubUrl: "https://github.com/rost-robotics",
 *   telemetry: {
 *     batteryVoltage: "N/A",
 *     operatingCurrent: "N/A",
 *     escTemp: "N/A",
 *     latencyMs: 0,
 *     sensorHealth: "ACTIVE TELEMETRY",
 *   },
 * }
 */
export const BOT_FLEET: Bot[] = [];
