export const EMAIL = 'challoufnour@yahoo.com'
export const PHONE = '+21628027565'
export const PHONE_LABEL = '+216 28 027 565'
export const LINKEDIN = 'https://www.linkedin.com/in/nour-challouf-a494803b9/'
export const cvUrl = import.meta.env.BASE_URL + 'Nour_Challouf_CV.pdf'

import smartBus from './assets/photos/smart-bus.webp'
import kpit from './assets/photos/kpit-desk.webp'
import icrcs from './assets/photos/icrcs-speaker.webp'
import tsypCrowd from './assets/photos/tsyp12-crowd.webp'
import maltaTeam from './assets/photos/malta-team.webp'
import maltaPodium from './assets/photos/malta-podium.webp'
import maltaBanner from './assets/photos/malta-banner.webp'
import tsypManager from './assets/photos/tsyp12-manager.webp'
import pfe1 from './assets/photos/pfe-1.webp'
import pfe2 from './assets/photos/pfe-2.webp'
import uavBench from './assets/photos/uav-bench.webp'
import ingenico from './assets/photos/ingenico-terminal.webp'

export const tools = ['C', 'C++', 'STM32', 'CAN / LIN', 'Embedded Linux', 'Python', 'Robot Framework', 'Jenkins', 'XGBoost', 'PyTorch', 'Flutter', 'NestJS']

export type Skill = { ini: string; name: string; group: string; desc: string }
export const skills: Skill[] = [
  { ini: 'St', name: 'STM32', group: 'Embedded', desc: 'Firmware with CubeIDE and CubeMX.' },
  { ini: 'Li', name: 'Embedded Linux', group: 'Embedded', desc: 'Raspberry Pi with YOLOv8 and OpenCV.' },
  { ini: 'CA', name: 'CAN / LIN', group: 'Embedded', desc: 'ECU-to-ECU communication between modules.' },
  { ini: 'Db', name: 'DBC files', group: 'Embedded', desc: 'CAN message definitions, written from scratch.' },
  { ini: 'Al', name: 'Altium Designer', group: 'Embedded', desc: 'Hardware and circuit design.' },
  { ini: 'C', name: 'C', group: 'Languages', desc: 'Firmware for STM32 boards and test benches.' },
  { ini: 'C+', name: 'C++', group: 'Languages', desc: 'Embedded C/C++ for hands-on hardware work.' },
  { ini: 'Py', name: 'Python', group: 'Languages', desc: 'Test tooling, GUIs and machine learning.' },
  { ini: 'Jv', name: 'Java', group: 'Languages', desc: 'General-purpose programming.' },
  { ini: 'VH', name: 'VHDL', group: 'Languages', desc: 'Describing digital hardware.' },
  { ini: 'Ml', name: 'Matlab', group: 'Languages', desc: 'Numerical computing and prototyping.' },
  { ini: 'Rf', name: 'Robot Framework', group: 'Validation & CI', desc: 'Tests run against real device functions.' },
  { ini: 'Je', name: 'Jenkins', group: 'Validation & CI', desc: 'CI/CD pipelines for automated delivery.' },
  { ini: 'Gi', name: 'Git', group: 'Validation & CI', desc: 'Version control, alone and in a team.' },
  { ini: 'XG', name: 'XGBoost', group: 'ML & Data', desc: 'Supervised fault classification.' },
  { ini: 'RF', name: 'Random Forest', group: 'ML & Data', desc: 'A benchmark model for fault detection.' },
  { ini: 'Pt', name: 'PyTorch', group: 'ML & Data', desc: 'Deep learning with 1D-CNN and Informer.' },
  { ini: 'Sk', name: 'scikit-learn', group: 'ML & Data', desc: 'Classical machine learning in Python.' },
  { ini: 'If', name: 'Isolation Forest', group: 'ML & Data', desc: 'Unsupervised anomaly detection.' },
  { ini: 'Ne', name: 'NestJS', group: 'Web & Mobile', desc: 'A secure REST back-end.' },
  { ini: 'Mo', name: 'MongoDB Atlas', group: 'Web & Mobile', desc: 'Schema design and data-access logic.' },
  { ini: 'Fl', name: 'Flutter', group: 'Web & Mobile', desc: 'A mobile app with live GPS tracking.' },
  { ini: 'Fb', name: 'Firebase', group: 'Web & Mobile', desc: 'Back-end services for mobile apps.' },
  { ini: 'Ht', name: 'HTML & CSS', group: 'Web & Mobile', desc: 'Web basics, from markup to styling.' },
]

export const filters = ['All', 'Embedded', 'Languages', 'Validation & CI', 'ML & Data', 'Web & Mobile']

export type Project = {
  initial: string
  org: string
  name: string
  category: string
  text: string
  gradient: string
  label: string
  href?: string
  photo?: string
}
export const projects: Project[] = [
  {
    initial: 'U',
    org: 'Telnet · End-of-studies',
    name: 'UAV motor fault detection',
    category: 'Embedded + machine learning',
    text: 'A custom STM32 test bench with load, temperature, RPM and sound sensors, feeding an XGBoost and Isolation Forest pipeline across 8 fault classes.',
    gradient: 'linear-gradient(150deg,#a99be0,#7b6bb5)',
    label: 'Feb – June 2026',
    photo: uavBench,
  },
  {
    initial: 'K',
    org: 'KPIT · Summer internship',
    name: 'Automotive lighting system',
    category: 'Embedded C',
    text: 'STM32 firmware for vehicle lighting driven by button inputs, with ECU-to-ECU messaging over CAN and LIN and DBC files written from scratch.',
    gradient: 'linear-gradient(150deg,#e8a6b8,#c98398)',
    label: 'Aug 2025',
    photo: kpit,
  },
  {
    initial: 'T',
    org: 'Telnet · Summer internship',
    name: 'Payment terminal test delivery',
    category: 'Test automation',
    text: 'A Python GUI that replaced a manual SDK file transfer for Ingenico terminals, wired into Jenkins and validated with Robot Framework.',
    gradient: 'linear-gradient(150deg,#f0c29a,#d98a6b)',
    label: 'July 2025',
    photo: ingenico,
  },
  {
    initial: 'S',
    org: 'Academic project',
    name: 'Smart school bus system',
    category: 'Embedded Linux + vision',
    text: 'A dual-webcam Raspberry Pi module running YOLOv8 and OpenCV, plus a Flutter app for child check-in and real-time GPS tracking.',
    gradient: 'linear-gradient(150deg,#8fd0b5,#4aa385)',
    label: '2025',
    photo: smartBus,
  },
  {
    initial: 'D',
    org: 'Djagora · Summer internship',
    name: 'Project management back-end',
    category: 'Back-end',
    text: 'A secure NestJS back-end with REST APIs for authentication, projects and tasks, on a MongoDB Atlas schema and tested with Postman.',
    gradient: 'linear-gradient(150deg,#9fb4ea,#6f86cf)',
    label: 'July – Aug 2024',
  },
]

export type Entry = { when: string; title: string; detail?: string }
export const education: Entry[] = [
  { when: '2023 – 2026', title: 'Engineering degree, Electronics & Communication Systems', detail: 'ENET’Com, National School of Electronics and Telecommunications of Sfax' },
  { when: '2021 – 2023', title: 'Preparatory cycle in Physics & Chemistry', detail: 'FSS' },
  { when: '2021', title: 'High School Diploma with Honors', detail: 'Med Ali Sfax' },
]
export const extras: Entry[] = [
  { when: 'Certificate', title: 'NVIDIA Deep Learning Institute' },
  { when: 'Certified', title: 'Microsoft Azure AI Fundamentals' },
  { when: '2024', title: 'Competitor, IEEE R8 Robot Championship', detail: 'Malta' },
  { when: '2024 – 2025', title: 'Webmaster, IEEE RAS ENET’Com Student Branch Chapter' },
]

export type Mood = { id: string; name: string; colors: [string, string, string] }
export const moods: Mood[] = [
  { id: 'lavender', name: 'Lavender', colors: ['#9d8ccf', '#7b6bb5', '#b3566f'] },
  { id: 'rose', name: 'Rose petal', colors: ['#e69ab5', '#c25a80', '#7b6bb5'] },
  { id: 'peach', name: 'Peach fizz', colors: ['#f0a878', '#d9773f', '#b3566f'] },
  { id: 'mint', name: 'Mint cream', colors: ['#6fcfb0', '#2f9e82', '#b3566f'] },
]

export type Photo = { src: string; alt: string; caption: string; desc: string; tag: string }
export const gallery: Photo[] = [
  { src: uavBench, alt: 'UAV brushless motor with a red propeller on a custom test bench with sensors and wiring', tag: 'UAV fault detection · 2026', caption: 'The UAV motor test bench', desc: 'The bench I designed and built at Telnet: a BLDC motor with its propeller on a custom aluminium mount, wired to sensors and an STM32 acquisition board, used to emulate motor faults and record real data for the XGBoost and Isolation Forest pipeline.' },
  { src: ingenico, alt: 'Ingenico Move/3500 payment terminal on a desk with Visa training cards', tag: 'Telnet · July 2025', caption: 'Ingenico terminal under test', desc: 'An Ingenico Move/3500 on my test desk at Telnet. My Python GUI sent low-level files to terminals like this one through the SDK, and Robot Framework tests in Jenkins checked its real functions.' },
  { src: pfe1, alt: 'Nour holding her end-of-studies certificate in front of ENET’Com', tag: 'UAV fault detection · 2026', caption: 'End-of-studies project, ENET’Com', desc: 'The day I presented my end-of-studies project on intelligent fault detection and predictive maintenance for UAV BLDC motors, carried out at Telnet.' },
  { src: pfe2, alt: 'Nour in graduation attire holding a certificate in front of ENET’Com', tag: 'ENET’Com · Class of 2026', caption: 'Engineer, class of 2026', desc: 'Three years at the National School of Electronics and Telecommunications of Sfax, closed with the project that brought firmware and machine learning together.' },
  { src: smartBus, alt: 'Cardboard smart school bus prototype with a webcam on a line track', tag: 'Smart School Bus · 2025', caption: 'The smart school bus prototype', desc: 'Our final-year prototype: a small bus following a track, with a webcam wired to a Raspberry Pi running YOLOv8 for obstacle detection and OpenCV for facial recognition.' },
  { src: kpit, alt: 'KPIT workstation with a monitor and a laptop showing embedded code', tag: 'KPIT · Aug 2025', caption: 'My workstation at KPIT', desc: 'Where I wrote STM32 firmware in C for an automotive lighting prototype, with CAN and LIN messages between ECUs documented in DBC files.' },
  { src: tsypManager, alt: 'TSYP12 Sessions Manager poster featuring Nour Challouf', tag: 'IEEE · TSYP12', caption: 'Sessions Manager, TSYP12', desc: 'My role at the 12th IEEE Tunisian Students and Young Professionals Congress: organising and coordinating the technical sessions of the event.' },
  { src: tsypCrowd, alt: 'The TSYP12 community in red shirts on stage under the TSYP12 logo', tag: 'IEEE · Community', caption: 'TSYP12: #teams_build_dreams', desc: 'The whole TSYP12 community on one stage. Seeing hundreds of volunteers work towards one goal is what taught me what teamwork really means.' },
  { src: icrcs, alt: 'ICRCS 2025 speaker poster featuring Nour Challouf', tag: 'IEEE · ICRCS 2025', caption: 'Speaker at ICRCS 2025', desc: 'Invited to speak at the 4th International Congress on Recent Trends in Computer Science (IEEE Computer Society Bangladesh Chapter) on 17 April 2025. Topic: Embedded Systems in Robotics and Automation.' },
  { src: maltaTeam, alt: 'Nour taking a selfie with the Tunisian team in Malta', tag: 'IEEE R8 · Malta 2024', caption: 'With the team in Malta', desc: 'A selfie with my teammates and friends at the IEEE Region 8 Robot Championship. Competing abroad together turned colleagues into a family.' },
  { src: maltaPodium, alt: 'The team holding certificates behind a table with their robots', tag: 'IEEE R8 · Malta 2024', caption: 'Certificates at the Robot Championship', desc: 'The team with our certificates next to the robots we built, tested and fixed on the spot during the competition.' },
  { src: maltaBanner, alt: 'Nour standing in front of the IEEE Robot Championships banner', tag: 'IEEE R8 · Malta 2024', caption: 'IEEE R8 Robot Championship 2024', desc: 'Representing ENET’Com and Tunisia as a competitor at the IEEE Region 8 Robot Championship, hosted in Malta.' },
]

export type IeeeRole = { when: string; role: string; text: string; photo: string; alt: string }
export const ieeeRoles: IeeeRole[] = [
  { when: '2024 – 2025', role: 'Webmaster · IEEE RAS ENET’Com', text: 'I took care of the chapter’s web presence. It was my first real responsibility inside IEEE: shipping something other people depend on, on time.', photo: tsypCrowd, alt: 'IEEE community' },
  { when: '2024', role: 'Competitor · IEEE R8 Robot Championship, Malta', text: 'Building a robot with a team and making it work on competition day, abroad and under pressure, taught me to debug calmly and to trust my teammates.', photo: maltaTeam, alt: 'Team in Malta' },
  { when: '2025', role: 'Speaker · ICRCS 2025', text: 'I explained embedded systems in robotics and automation to an international audience. Learning to make a technical topic clear is a skill I now use every day.', photo: icrcs, alt: 'ICRCS 2025 poster' },
  { when: 'TSYP12', role: 'Sessions Manager', text: 'Coordinating the sessions of a national congress meant planning, delegating and keeping many people and schedules aligned.', photo: tsypManager, alt: 'TSYP12 Sessions Manager' },
]

export const ieeeStats = [
  { b: 'TSYP12', t: 'Sessions Manager' },
  { b: 'R8', t: 'Robot Championship, Malta' },
  { b: 'ICRCS', t: 'Invited speaker, 2025' },
  { b: 'RAS', t: 'Webmaster, ENET’Com chapter' },
]
export const ieeeSkills = [
  { t: 'Leadership', d: 'Managing the sessions of a national congress taught me to plan, delegate and keep a whole programme on time.' },
  { t: 'Public speaking', d: 'From student rooms to an international stage, I learned to explain embedded systems clearly to any audience.' },
  { t: 'Teamwork under pressure', d: 'A robot that must work on competition day teaches you to debug together, calmly and fast.' },
  { t: 'Confidence and network', d: 'IEEE gave me mentors, friends across borders and the courage to say yes to bigger things.' },
]
