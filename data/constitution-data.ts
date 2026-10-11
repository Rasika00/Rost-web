export interface ConstitutionObjective {
  id: string;
  number: string;
  title: string;
  category: "Education & Skills" | "Innovation & AI" | "Industry & Faculty" | "Research & Community";
  description: string;
  icon: string;
  tag: string;
}

export interface ConstitutionData {
  title: string;
  officialName: string;
  shortForm: string;
  formalReference: string;
  articles: {
    article1: {
      number: "Article 1";
      title: "Name and Logo";
      description: string;
      ratificationNote: string;
    };
    article2: {
      number: "Article 2";
      title: "Mission and Vision";
      mission: {
        verbatim: string;
        lead: string;
        pillars: string[];
      };
      vision: {
        verbatim: string;
        lead: string;
        pillars: string[];
      };
    };
    article3: {
      number: "Article 3";
      title: "Objectives";
      lead: string;
      objectives: ConstitutionObjective[];
    };
    article4: {
      number: "Article 4";
      title: "Membership";
      lead: string;
      eligibility: string;
      activeMemberId: string;
      juniorMemberId: string;
      requirements: string[];
    };
  };
}

export const CONSTITUTION_DATA: ConstitutionData = {
  title: "What is ROST ? ",
  officialName: "Robotic Society of Technology",
  shortForm: "ROST",
  formalReference: "The Society",
  articles: {
    article1: {
      number: "Article 1",
      title: "Name and Logo",
      description:
        "The society is formally established and designated as the 'Robotic Society of Technology', abbreviated as 'ROST', and officially recognized as 'The Society' within constitutional documentation. The society name and insignia are formally ratified by election majority.",
      ratificationNote: "Formally ratified by election majority under the Faculty of Technology.",
    },
    article2: {
      number: "Article 2",
      title: "Mission and Vision",
      vision: {
        verbatim: "To be a competitor in robotics and artificial intelligence world.",
        lead: "To emerge as a premier competitive force and pioneer in autonomous robotics, intelligent control, and artificial intelligence on national and global stages.",
        pillars: [
          "Global Arena Competitiveness",
          "Advanced Artificial Intelligence",
          "Autonomous Mechatronics Frontiers",
        ],
      },
      mission: {
        verbatim:
          "To inspire minds to be engaging with mentor based programs that develop creativity, technical skills including self-confidence, communication and leadership to interfere with real world.",
        lead: "Inspiring and cultivating future engineers through intensive mentor-led initiatives that nurture creativity, practical technical depth, leadership, and proactive real-world engineering impact.",
        pillars: [
          "Mentor-Based Technical Tracks",
          "Applied Creativity & Engineering",
          "Leadership & Real-World Impact",
        ],
      },
    },
    article3: {
      number: "Article 3",
      title: "Objectives",
      lead: "The society operates under nine core constitutional objectives designed to accelerate technical mastery, interdisciplinary research, and industry alignment.",
      objectives: [
        {
          id: "obj-1",
          number: "01",
          title: "Robotics Comprehension & Learning",
          category: "Education & Skills",
          description:
            "To assist students in comprehending, creating, and learning robotics through foundational theory and practical laboratory experience.",
          icon: "BookOpen",
          tag: "FOUNDATIONS",
        },
        {
          id: "obj-2",
          number: "02",
          title: "Conceptualization & Programming",
          category: "Innovation & AI",
          description:
            "Give motivated students the opportunity to conceptualize, design, and program robots as a means of expressing their skills, knowledge, and creativity.",
          icon: "Cpu",
          tag: "DESIGN & CODE",
        },
        {
          id: "obj-3",
          number: "03",
          title: "Innovator Collaboration",
          category: "Research & Community",
          description:
            "Organize interactive sessions and open technical roundtables to foster close collaboration with leading inventors and innovators.",
          icon: "Share2",
          tag: "COLLABORATION",
        },
        {
          id: "obj-4",
          number: "04",
          title: "Applied AI & Robotics Development",
          category: "Innovation & AI",
          description:
            "Create cutting-edge robotics and artificial intelligence systems engineered to solve real-world problems in the technological landscape.",
          icon: "Brain",
          tag: "AI & SYSTEMS",
        },
        {
          id: "obj-5",
          number: "05",
          title: "Youth Industry Leadership",
          category: "Education & Skills",
          description:
            "Encourage and empower young minds to develop into the modern robotics and automation industry's primary driving force.",
          icon: "TrendingUp",
          tag: "YOUTH EMPOWERMENT",
        },
        {
          id: "obj-6",
          number: "06",
          title: "Research & Knowledge Sharing",
          category: "Research & Community",
          description:
            "Motivate society members to conduct robotics-related research and hardware projects that foster continuous, peer-to-peer knowledge sharing.",
          icon: "GraduationCap",
          tag: "R&D EXCHANGE",
        },
        {
          id: "obj-7",
          number: "07",
          title: "Industrial & Enterprise Linkages",
          category: "Industry & Faculty",
          description:
            "Initiate and maintain active, constant communication with leading technology organizations, research institutes, and industry partners.",
          icon: "Globe",
          tag: "INDUSTRY NETWORK",
        },
        {
          id: "obj-8",
          number: "08",
          title: "Faculty Coordination & Industry Visits",
          category: "Industry & Faculty",
          description:
            "Coordinate closely with university faculty leadership to organize society-wide industrial site visits and technological expeditions.",
          icon: "Building2",
          tag: "FACULTY EXPEDITIONS",
        },
        {
          id: "obj-9",
          number: "09",
          title: "Sustained Workshops & Ecosystem Events",
          category: "Research & Community",
          description:
            "Plan and execute regular meetings, workshops, hackathons, and activities to continuously promote knowledge and keep the society strong and stable.",
          icon: "Rocket",
          tag: "SUSTAINABLE ECOSYSTEM",
        },
      ],
    },
    article4: {
      number: "Article 4",
      title: "Membership",
      lead: "Official membership protocol, eligibility criteria, and credentialing governed by the Faculty of Technology.",
      eligibility:
        "All undergraduate students currently enrolled in the Faculty of Technology are eligible to apply for official membership in the organization.",
      activeMemberId:
        "All active and accepted members receive an official society ID card to formally identify themselves across university facilities, national arenas, and industry events.",
      juniorMemberId:
        "An official society ID card valid for one year is issued to all junior members upon induction into the society.",
      requirements: [
        "Undergraduate enrollment in the Faculty of Technology",
        "Active participation in society workshops and technical projects",
        "Adherence to the constitutional safety and laboratory codes of conduct",
        "Annual validation and renewal for junior cadet credentials",
      ],
    },
  },
};
