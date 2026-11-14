export interface ArticleCodeSnippet {
  language: string;
  filename: string;
  code: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: "Firmware & Embedded" | "Autonomous Robotics" | "Hardware & PCB Design" | "Mechatronics Systems";
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  snippets?: ArticleCodeSnippet[];
  content: string[];
}

export const ARTICLES_DATA: Article[] = [
  {
    id: "tuning-pid-high-rpm-brushless",
    title: "Tuning Field-Oriented Control & PID Loops on High-RPM Brushless Motors",
    slug: "tuning-pid-high-rpm-brushless",
    summary:
      "A deep dive into Clarke/Park transformations, dead-time compensation, and high-frequency current regulation under dynamic loads.",
    category: "Firmware & Embedded",
    readTime: "8 min read",
    publishedAt: "JANUARY 18, 2026",
    author: {
      name: "Dulara Abishek",
      role: "Technical Team Lead",
      avatar: "/images/team/kaito-takahashi.png",
    },
    tags: ["FOC", "STM32H7", "CAN-FD", "Brushless Motors", "C++ Embedded"],
    snippets: [
      {
        language: "cpp",
        filename: "foc_current_loop.cpp",
        code: `// Deterministic 50kHz Current Regulation Loop
void MotorController::ExecuteFocLoop(float i_alpha, float i_beta, float rotor_theta) {
    // 1. Forward Park Transform (Stationary -> Rotating dq Frame)
    float sin_th = arm_sin_f32(rotor_theta);
    float cos_th = arm_cos_f32(rotor_theta);
    
    float i_d =  i_alpha * cos_th + i_beta * sin_th;
    float i_q = -i_alpha * sin_th + i_beta * cos_th;

    // 2. PI Regulators with Anti-Windup Clamp
    float v_d_err = 0.0f - i_d; // Zero d-axis current for SPM
    float v_q_err = target_iq_current - i_q;

    d_integral += (v_d_err * Ki_d) * DT_SAMPLE;
    q_integral += (v_q_err * Ki_q) * DT_SAMPLE;

    float v_d = (v_d_err * Kp_d) + d_integral;
    float v_q = (v_q_err * Kp_q) + q_integral;

    // 3. Space Vector Modulation Output to Timer Registers
    ApplySvmPwm(v_d, v_q, sin_th, cos_th);
}`,
      },
    ],
    content: [
      "In high-performance robotics, motor acceleration and efficiency determine platform performance. Driving high-speed brushless motors requires managing peak currents in excess of 50 Amperes without allowing the motor inverter to desynchronize during dynamic load shifts.",
      "Traditional trapezoidal six-step commutation generates severe torque ripple and acoustic harmonic distortion, which stresses motor bearings and overheats stator laminations. At ROST, we transitioned entirely to Field-Oriented Control (FOC) executed directly on an ARM Cortex-M7 running at 480MHz.",
      "By maintaining magnetic flux strictly orthogonal to rotor magnets (d-axis current commanded to zero), we maximize torque efficiency per ampere and enable regenerative dynamic braking capable of decelerating a high-RPM rotor smoothly in fractions of a second.",
    ],
  },
  {
    id: "migrating-ros1-to-ros2-humble",
    title: "Migrating Autonomous Mobile Robotics from ROS 1 to ROS 2 Humble",
    slug: "migrating-ros1-to-ros2-humble",
    summary:
      "Lessons learned eliminating rosmaster single points of failure, configuring CycloneDDS for packet loss resilience, and porting Nav2 lifecycle nodes.",
    category: "Autonomous Robotics",
    readTime: "11 min read",
    publishedAt: "DECEMBER 14, 2025",
    author: {
      name: "Rasika Priyanath",
      role: "Web & Software Lead",
      avatar: "/images/team/marina-vargas.png",
    },
    tags: ["ROS 2 Humble", "Nav2", "DDS", "LiDAR SLAM", "Linux RT-Preempt"],
    snippets: [
      {
        language: "xml",
        filename: "cyclonedds_config.xml",
        code: `<!-- CycloneDDS Low-Latency P2P Configuration -->
<CycloneDDS xmlns="https://cdds.io/config">
  <Domain id="any">
    <General>
      <NetworkInterfaceAddress>eth0</NetworkInterfaceAddress>
      <AllowMulticast>true</AllowMulticast>
      <MaxMessageSize>65500B</MaxMessageSize>
    </General>
    <Internal>
      <Watermarks>
        <High>500kB</High>
      </Watermarks>
    </Internal>
  </Domain>
</CycloneDDS>`,
      },
    ],
    content: [
      "For years, university robotics teams tolerated the legacy ROS 1 roscore master architecture. But in real-world field operations and complex multi-sensor environments, an intermittent Wi-Fi drop or transient process crash could freeze node discovery across the entire robot.",
      "With ROS 2 Humble Hawksbill running atop RT-Preempt Linux on our embedded computing hardware, we achieved distributed node peer-to-peer discovery using Data Distribution Service (DDS).",
      "Lifecycle nodes allow AEGIS-1 to safely boot sensors in strict deterministic phases: Unconfigured -> Inactive -> Active -> Finalized. If a LiDAR point-cloud stream drops below 10Hz, the lifecycle manager automatically invokes a state transition to safe hold without halting the whole system.",
    ],
  },
  {
    id: "designing-custom-4-layer-pcb-kicad",
    title: "Designing Custom 4-Layer Power Inverter PCBs in KiCAD 8",
    slug: "designing-custom-4-layer-pcb-kicad",
    summary:
      "Stackup optimization, controlled impedance differential routing for CAN-FD, and copper pour thermal dissipation for continuous currents.",
    category: "Hardware & PCB Design",
    readTime: "9 min read",
    publishedAt: "FEBRUARY 02, 2026",
    author: {
      name: "Divantha Ambrose",
      role: "President",
      avatar: "/images/team/tariq-al-mansoor.png",
    },
    tags: ["KiCAD 8", "4-Layer PCB", "CAN-FD", "Thermal Design", "Hardware"],
    snippets: [
      {
        language: "text",
        filename: "pcb_stackup_spec.txt",
        code: `Layer 1 (Top Signal):      1.0 oz Cu (High-speed gate drive lines)
Prepreg 2116:              0.12mm (FR-4 Hi-Tg 170°C)
Layer 2 (Internal GND):    2.0 oz Cu (Solid continuous reference plane)
Core:                      1.00mm FR-4 core
Layer 3 (Internal VBUS):   2.0 oz Cu (48V High-current bus rail pour)
Prepreg 2116:              0.12mm (FR-4 Hi-Tg 170°C)
Layer 4 (Bottom Signal):   1.0 oz Cu (Low-noise analog feedback & shunts)`,
      },
    ],
    content: [
      "In compact autonomous rovers where volume and thermal dissipation are severely constrained, standard commercial off-the-shelf ESCs often suffer from poor thermal efficiency and electrical noise.",
      "By engineering custom 4-layer boards in KiCAD with 2-ounce internal copper planes and filled microvias under high-side MOSFETs, we achieve thermal conductivities previously requiring massive extruded aluminum heat sinks.",
      "We routed differential CAN-FD traces with strictly matched 120-ohm differential impedance across the outer layer directly above an uninterrupted solid ground plane, effectively eliminating inductive motor spike noise.",
    ],
  },
  {
    id: "lidar-inertial-odometry-gps-denied",
    title: "3D LiDAR-Inertial Odometry in GPS-Denied Environments",
    slug: "lidar-inertial-odometry-gps-denied",
    summary:
      "Tightly-coupled factor graph optimization using Livox Mid-360 non-repetitive scanning and high-precision tactical IMU integration.",
    category: "Autonomous Robotics",
    readTime: "12 min read",
    publishedAt: "JANUARY 29, 2026",
    author: {
      name: "Siyath Weerasinghe",
      role: "Vice President",
      avatar: "/images/team/marina-vargas.png",
    },
    tags: ["LiDAR SLAM", "LIO-SAM", "GTSAM", "Point Cloud", "Jetson Orin"],
    snippets: [
      {
        language: "cpp",
        filename: "imu_preintegration.cpp",
        code: `// Tightly-Coupled Factor Graph IMU Pre-integration
void LioEstimator::IntegrateImuMeasurement(const ImuData& imu) {
    double dt = imu.timestamp - prev_imu_time;
    if (dt <= 0.0 || dt > 0.05) return;

    // Accumulate delta rotation and velocity in body frame
    Eigen::Vector3d unacc = imu.accel - current_bias_acc;
    Eigen::Vector3d ungyr = imu.gyro - current_bias_gyr;

    imu_preintegrator->integrateMeasurement(unacc, ungyr, dt);
    prev_imu_time = imu.timestamp;

    // Check keyframe distance threshold for LiDAR scan matching
    if (CheckKeyframeCondition()) {
        AddLiDARKeyframeFactor();
    }
}`,
      },
    ],
    content: [
      "When navigating indoors or within reinforced concrete facilities, satellite GPS signals attenuate completely. The robot must rely purely on onboard perceptive sensors to avoid accumulating catastrophic drift.",
      "By fusing high-frequency (200Hz) angular rates from a tactical IMU with non-repetitive 3D point clouds from the Livox Mid-360 LiDAR, our estimator maintains drift rates under 0.2% over two kilometers of travel.",
      "The result is a real-time dense topological map transmitted via mesh relay back to the mission control station, enabling instantaneous autonomous path re-planning.",
    ],
  },
];
