export interface AlbumPhoto {
  id: string;
  title: string;
  image: string;
  caption?: string;
}

export interface RostAlbum {
  id: string;
  name: string;
  title: string; // alias for name
  category: string;
  album: string; // alias for name
  caption: string;
  telemetry: string;
  date: string;
  aspectRatio: "landscape" | "portrait" | "square";
  image: string; // cover image
  coverImage: string;
  tags: string[];
  collectionUrl?: string;
  photos: AlbumPhoto[];
}

export type GalleryItem = RostAlbum;

export const ROST_ALBUMS: RostAlbum[] = [
  {
    id: "rost-agm",
    name: "ROST AGM",
    title: "ROST AGM",
    album: "ROST AGM",
    category: "ROST AGM",
    caption:
      "Official proceedings, executive committee appointments, and visionary directives at the ROST Annual General Meeting, Faculty of Technology.",
    telemetry: "ALBUM: ROST_AGM // VENUE: FACULTY_OF_TECHNOLOGY",
    date: "2026",
    aspectRatio: "landscape",
    image:
      "https://res.cloudinary.com/pasongqn/image/upload/v1794658477/814779683_1099824349675869_5212132639773939324_n.jpg",
    coverImage:
      "https://res.cloudinary.com/pasongqn/image/upload/v1794658477/814779683_1099824349675869_5212132639773939324_n.jpg",
    tags: ["ROST AGM", "Annual General Meeting", "Faculty of Technology", "Society Leadership"],
    collectionUrl: "https://collection.cloudinary.com/pasongqn/96d14ae3de8f674d2a89ac1e8d3cb26c",
    photos: [
      {
        id: "agm-01",
        title: "ROST AGM",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794658488/814873502_1099815676343403_1979764160882745793_n.jpg",
      },
      {
        id: "agm-02",
        title: "ROST AGM",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794658487/814560891_1099821919676112_7207049735592914511_n.jpg",
      },
      {
        id: "agm-03",
        title: "ROST AGM",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794658488/809107188_1099824199675884_2339157470815875355_n.jpg",
      },
      {
        id: "agm-04",
        title: "ROST AGM",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794658479/815209452_1099821413009496_714842159696411012_n.jpg",
      },
      {
        id: "agm-05",
        title: "ROST AGM",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794658479/815468506_1099823033009334_147117467966954287_n.jpg",
      },
      {
        id: "agm-06",
        title: "ROST AGM",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794658478/814364957_1099815829676721_4684542422899395266_n.jpg",
      },
      {
        id: "agm-07",
        title: "ROST AGM",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794658478/814560885_1099822513009386_8048062887137277274_n.jpg",
      },
      {
        id: "agm-08",
        title: "ROST AGM",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794658478/814740747_1099820329676271_1317512305890185971_n.jpg",
      },
      {
        id: "agm-09",
        title: "ROST AGM",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794658478/814873515_1099822976342673_4289958459902735395_n.jpg",
      },
      {
        id: "agm-10",
        title: "ROST AGM",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794658477/814779683_1099824349675869_5212132639773939324_n.jpg",
      },
    ],
  },
  {
    id: "rost-career-awareness-2026",
    name: "ROST Career Awareness Session",
    title: "ROST Career Awareness Session",
    album: "Career Awareness",
    category: "Career Awareness",
    caption:
      "Industry mentorship, career guidance journeys, and professional tech insights shared with Faculty of Technology undergraduates.",
    telemetry: "ALBUM: CAREER_AWARENESS // DATE: AUGUST_15_2026",
    date: "AUGUST 15, 2026",
    aspectRatio: "landscape",
    image:
      "https://res.cloudinary.com/pasongqn/image/upload/v1794655197/800098088_2066576244020725_3001038137368904299_n.jpg",
    coverImage:
      "https://res.cloudinary.com/pasongqn/image/upload/v1794655197/800098088_2066576244020725_3001038137368904299_n.jpg",
    tags: ["Career Awareness", "Mentorship", "Faculty of Technology", "IT Industry"],
    photos: [
      {
        id: "career-01",
        title: "ROST Career Awareness Session",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794655197/800098088_2066576244020725_3001038137368904299_n.jpg",
      },
      {
        id: "career-02",
        title: "ROST Career Awareness Session",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794659772/800881818_1427582612595992_2085795528840882246_n.jpg",
      },
      {
        id: "career-03",
        title: "ROST Career Awareness Session",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794659770/800718884_2263713594451513_8079480989334740903_n.jpg",
      },
      {
        id: "career-04",
        title: "ROST Career Awareness Session",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794659771/800514436_2071980740350664_7061557841990191070_n.jpg",
      },
      {
        id: "career-05",
        title: "ROST Career Awareness Session",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794659768/800796880_1394387372141308_1055819092156341311_n.jpg",
      },
      {
        id: "career-06",
        title: "ROST Career Awareness Session",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794659767/800842612_1517667483723922_1054244464583474189_n.jpg",
      },
      {
        id: "career-07",
        title: "ROST Career Awareness Session",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794659766/799347275_1091186260539678_8495069311306543438_n.jpg",
      },
      {
        id: "career-08",
        title: "ROST Career Awareness Session",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794659765/800862920_3185680104955302_9050881781707137417_n.jpg",
      },
      {
        id: "career-09",
        title: "ROST Career Awareness Session",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794659765/800796680_2193026918144514_722620090250420458_n.jpg",
      },
      {
        id: "career-10",
        title: "ROST Career Awareness Session",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794659764/799829633_1570446744013748_6122167274314642644_n.jpg",
      },
    ],
  },
  {
    id: "rost-esp32-workshop-2026",
    name: "ESP32 Workshop 2026",
    title: "ESP32 Workshop 2026",
    album: "ESP32 Workshop",
    category: "ESP32 Workshop",
    caption:
      "Hands-on embedded programming, sensor interfacing, and physical IoT project development with ESP32 microcontrollers.",
    telemetry: "ALBUM: ESP32_WORKSHOP // DATE: AUGUST_14_2026",
    date: "AUGUST 14, 2026",
    aspectRatio: "landscape",
    image:
      "https://res.cloudinary.com/pasongqn/image/upload/v1794659989/777330369_1073597782298526_396491591141072046_n.jpg",
    coverImage:
      "https://res.cloudinary.com/pasongqn/image/upload/v1794659989/777330369_1073597782298526_396491591141072046_n.jpg",
    tags: ["ESP32", "IoT", "Embedded Systems", "Hardware Workshop"],
    photos: [
      {
        id: "esp32-01",
        title: "ESP32 Workshop 2026",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794659989/777330369_1073597782298526_396491591141072046_n.jpg",
      },
      {
        id: "esp32-02",
        title: "ESP32 Workshop 2026",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794659990/777354725_1073601715631466_1050197436812492188_n.jpg",
      },
      {
        id: "esp32-03",
        title: "ESP32 Workshop 2026",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794659991/776310611_1073600625631575_2723102549074894306_n.jpg",
      },
      {
        id: "esp32-04",
        title: "ESP32 Workshop 2026",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794659993/778244713_1073599788964992_1284821204260246922_n.jpg",
      },
      {
        id: "esp32-05",
        title: "ESP32 Workshop 2026",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794659994/777383905_1073599228965048_8327572939871301326_n.jpg",
      },
      {
        id: "esp32-06",
        title: "ESP32 Workshop 2026",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794659995/781296399_1073597902298514_8645687026893995574_n.jpg",
      },
      {
        id: "esp32-07",
        title: "ESP32 Workshop 2026",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794659996/778034194_1073597152298589_8234444454717473168_n_1.jpg",
      },
      {
        id: "esp32-08",
        title: "ESP32 Workshop 2026",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794659998/778025524_1073597135631924_6140422088414358338_n.jpg",
      },
      {
        id: "esp32-09",
        title: "ESP32 Workshop 2026",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794659999/778916397_1073597068965264_4981834846655651794_n.jpg",
      },
      {
        id: "esp32-10",
        title: "ESP32 Workshop 2026",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794660000/778711386_1073597045631933_3612614628757889669_n.jpg",
      },
      {
        id: "esp32-11",
        title: "ESP32 Workshop 2026",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794660227/776580025_1073598915631746_1266807878439621947_n.jpg",
      },
    ],
  },
  {
    id: "rost-arduino-workshop-2026",
    name: "ROST Arduino Workshop 2026",
    title: "ROST Arduino Workshop 2026",
    album: "Arduino Workshop",
    category: "Arduino Workshop",
    caption:
      "Foundational microcontroller engineering, real-time problem solving, and circuit logic with Arduino platforms.",
    telemetry: "ALBUM: ARDUINO_WORKSHOP // DATE: FEBRUARY_22_2026",
    date: "FEBRUARY 22, 2026",
    aspectRatio: "landscape",
    image:
      "https://res.cloudinary.com/pasongqn/image/upload/v1794660546/654317936_940818728909766_1401505482021496798_n.jpg",
    coverImage:
      "https://res.cloudinary.com/pasongqn/image/upload/v1794660546/654317936_940818728909766_1401505482021496798_n.jpg",
    tags: ["Arduino", "Embedded Programming", "Hardware Logic", "Workshop 2026"],
    photos: [
      {
        id: "arduino-01",
        title: "ROST Arduino Workshop 2026",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794660546/654317936_940818728909766_1401505482021496798_n.jpg",
      },
      {
        id: "arduino-02",
        title: "ROST Arduino Workshop 2026",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794660545/655710277_940819668909672_6491164021003906435_n.jpg",
      },
      {
        id: "arduino-03",
        title: "ROST Arduino Workshop 2026",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794660543/656092313_940819768909662_91807019206476198_n.jpg",
      },
      {
        id: "arduino-04",
        title: "ROST Arduino Workshop 2026",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794660542/655009748_940820385576267_808354122614095452_n.jpg",
      },
      {
        id: "arduino-05",
        title: "ROST Arduino Workshop 2026",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794660540/654250597_940820345576271_1968473059391946037_n.jpg",
      },
      {
        id: "arduino-06",
        title: "ROST Arduino Workshop 2026",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794660538/653715421_940819548909684_3738379946565384378_n.jpg",
      },
      {
        id: "arduino-07",
        title: "ROST Arduino Workshop 2026",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794660537/655242126_940820148909624_1235224436227975835_n.jpg",
      },
      {
        id: "arduino-08",
        title: "ROST Arduino Workshop 2026",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794660536/654866452_940819885576317_7976465817881789815_n.jpg",
      },
      {
        id: "arduino-09",
        title: "ROST Arduino Workshop 2026",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794660536/654628157_940820605576245_7789179221314116126_n.jpg",
      },
      {
        id: "arduino-10",
        title: "ROST Arduino Workshop 2026",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794660534/655456677_940818755576430_8792477956381735913_n.jpg",
      },
      {
        id: "arduino-11",
        title: "ROST Arduino Workshop 2026",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794657132/654499668_940818692243103_7231100990043212697_n.jpg",
      },
    ],
  },
  {
    id: "rost-robotics-iot-intro-session",
    name: "Exploring Robotics & IoT",
    title: "Exploring Robotics & IoT",
    album: "Introduction to Robotics",
    category: "Introduction to Robotics",
    caption:
      "Introduction to Robotics and IoT for newcomers featuring interactive activities and guest lecture by Mr. Husni Mohomad.",
    telemetry: "ALBUM: ROBOTICS_IOT_INTRO // DATE: JANUARY_25_2026",
    date: "JANUARY 25, 2026",
    aspectRatio: "landscape",
    image:
      "https://res.cloudinary.com/pasongqn/image/upload/v1794657414/624524630_899576653033974_6667067312148271890_n.jpg",
    coverImage:
      "https://res.cloudinary.com/pasongqn/image/upload/v1794657414/624524630_899576653033974_6667067312148271890_n.jpg",
    tags: ["Introduction to Robotics", "IoT", "Newcomer Session", "Faculty of Technology"],
    photos: [
      {
        id: "intro-01",
        title: "Exploring the World of Robotics and IoT",
        image:
          "https://res.cloudinary.com/pasongqn/image/upload/v1794657414/624524630_899576653033974_6667067312148271890_n.jpg",
        caption: "Interactive robotics session for technology undergraduates at the faculty premises.",
      },
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = ROST_ALBUMS;
