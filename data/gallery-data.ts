export interface GalleryItem {
  id: string;
  title: string;
  category: "Tournament Matches" | "Lab Fabrication" | "Pit Crew & Arena" | "Autonomous Trials";
  caption: string;
  telemetry: string;
  date: string;
  aspectRatio: "landscape" | "portrait" | "square";
  image: string;
  tags: string[];
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-01",
    title: "VORTEX-X Final Championship Clash",
    category: "Tournament Matches",
    caption: "Kinetic weapon impact creating showers of titanium sparks inside the National RoboWars arena cage.",
    telemetry: "IMPACT_ENERGY: 28.5 kJ // PEAK_G: 42.4G // STATUS: KO_WIN",
    date: "OCTOBER 2025",
    aspectRatio: "landscape",
    image: "/images/gallery/combat-impact.png",
    tags: ["VORTEX-X", "RoboWars", "High-Speed Impact", "250lb Arena"],
  },
  {
    id: "gal-02",
    title: "5-Axis CNC Machining of Titanium Armor",
    category: "Lab Fabrication",
    caption: "Milling the monolithic weapon bulkheads from aerospace 7075-T6 aluminum on the Haas VF-4.",
    telemetry: "SPINDLE: 12,000 RPM // FEED: 1800 mm/min // TOLERANCE: ±0.012mm",
    date: "DECEMBER 2025",
    aspectRatio: "portrait",
    image: "/images/gallery/cnc-machining.png",
    tags: ["CNC Milling", "Haas VF-4", "7075 Aluminum", "Precision Manufacturing"],
  },
  {
    id: "gal-03",
    title: "AEGIS-1 Subterranean Cavern Trial",
    category: "Autonomous Trials",
    caption: "3D LiDAR mapping test through smoke-filled obstacle tunnel during IEEE autonomous trial runs.",
    telemetry: "LIVOX_360: ACTIVE // POINT_CLOUD: 240,000 pts/s // DRIFT: <0.04m",
    date: "SEPTEMBER 2025",
    aspectRatio: "landscape",
    image: "/images/gallery/rover-trial.png",
    tags: ["AEGIS-1", "LiDAR SLAM", "Autonomous Navigation", "Tunnel Testing"],
  },
  {
    id: "gal-04",
    title: "3-Minute Pit Stop Rapid Repair",
    category: "Pit Crew & Arena",
    caption: "Pit crew replacing damaged drive belts and swapping battery sleds between tournament semi-final matches.",
    telemetry: "PIT_CLOCK: 02:44 // BATT_TEMP: 38°C // CREW: 4 ENGINEERS",
    date: "OCTOBER 2025",
    aspectRatio: "square",
    image: "/images/gallery/pit-crew.png",
    tags: ["Pit Crew", "Rapid Swap", "RoboWars", "Combat Mechatronics"],
  },
  {
    id: "gal-05",
    title: "Custom 4-Layer Power Inverter SMD Assembly",
    category: "Lab Fabrication",
    caption: "Precision microscopic hand soldering and thermal camera inspection of GaN power MOSFET stages.",
    telemetry: "MICROSCOPE_ZOOM: 40X // SOLDER_TEMP: 350°C // REF_DES: Q1-Q12",
    date: "JANUARY 2026",
    aspectRatio: "landscape",
    image: "/images/gallery/electronics-soldering.png",
    tags: ["SMD Soldering", "GaN Inverter", "PCB Assembly", "Power Electronics"],
  },
  {
    id: "gal-06",
    title: "SYNAPSE Arm Visual Servoing Testing",
    category: "Autonomous Trials",
    caption: "Eye-in-hand RGB-D vision calibration intercepting high-velocity dropped targets on the test bench.",
    telemetry: "FRAME_RATE: 120 FPS // LATENCY: 2.1ms // REPEATABILITY: 0.05mm",
    date: "FEBRUARY 2026",
    aspectRatio: "portrait",
    image: "/images/gallery/arm-calibration.png",
    tags: ["SYNAPSE", "Robotic Arm", "Visual Servoing", "MoveIt 2"],
  },
  {
    id: "gal-07",
    title: "AERO-PULSE Neon Air Gate Sprint",
    category: "Tournament Matches",
    caption: "Autonomous multirotor blitzing an illuminated hairpin turn in the SkyLab flight arena.",
    telemetry: "AIRSPEED: 136 km/h // LATERAL_G: 7.8G // ALTIMETER: 3.4m",
    date: "NOVEMBER 2025",
    aspectRatio: "landscape",
    image: "/images/gallery/drone-gate.png",
    tags: ["AERO-PULSE", "Drone Racing", "Optical Flow", "PX4"],
  },
  {
    id: "gal-08",
    title: "Championship Trophy Celebration",
    category: "Pit Crew & Arena",
    caption: "The ROST team lifting the 2025 National RoboWars Heavyweight Championship Trophy in San Francisco.",
    telemetry: "EVENT: ROBOWARS_2025 // RECORD: 24-2 // STANDING: #1 NATIONAL",
    date: "OCTOBER 2025",
    aspectRatio: "landscape",
    image: "/images/gallery/team-celebration.png",
    tags: ["Victory", "Championship", "Team ROST", "RoboWars 2025"],
  },
];
