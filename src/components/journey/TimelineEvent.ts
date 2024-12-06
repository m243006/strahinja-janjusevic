export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  delay: number;
  details: string;
  position: { x: number; y: number };
  bgImage: string;
  expandedImages: string[];
}

export const timeline: TimelineEvent[] = [
  {
    year: "2015-2019",
    title: "Podgorica Montenegro High School",
    description: "Classical high school education with focus on sciences",
    details: "Completed high school education at one of Montenegro's premier institutions, developing strong foundations in sciences and mathematics while experiencing the rich cultural heritage of the Balkans.",
    delay: 0.1,
    position: { x: 15, y: 5 },
    bgImage: "photo-1482938289607-e9573fc25ebb",
    expandedImages: [
      "photo-1482938289607-e9573fc25ebb",
      "photo-1547652577-b4fe2c001414",
    ]
  },
  {
    year: "2019-2023",
    title: "U.S. Naval Academy",
    description: "Dual degree in Cyber Operations and Computer Science",
    details: "Worked extensively with U.S. Military and NSA on cutting-edge cybersecurity projects. Led team initiatives and developed secure systems.",
    delay: 0.2,
    position: { x: 30, y: 25 },
    bgImage: "photo-1493962853295-0fd70327578a",
    expandedImages: [
      "photo-1493962853295-0fd70327578a",
      "photo-1588666309990-d68f08e3d4a6",
    ]
  },
  {
    year: "2022",
    title: "Microsoft Internship",
    description: "Developed tools for incident response",
    details: "Created automated incident response tools that improved response time by 40%. Collaborated with security teams across multiple divisions.",
    delay: 0.3,
    position: { x: 20, y: 45 },
    bgImage: "photo-1485833077593-4278bba3f11f",
    expandedImages: [
      "photo-1485833077593-4278bba3f11f",
      "photo-1633419461186-7d40a38105ec",
    ]
  },
  {
    year: "2023",
    title: "NASA Internship",
    description: "Visualizing solar data",
    details: "Developed innovative visualization tools for solar research data, enabling scientists to better understand solar phenomena and their effects on Earth.",
    delay: 0.4,
    position: { x: 35, y: 65 },
    bgImage: "photo-1472396961693-142e6e269027",
    expandedImages: [
      "photo-1472396961693-142e6e269027",
      "photo-1451187580459-43490279c0fa",
    ]
  },
  {
    year: "2023-Present",
    title: "MIT Graduate Research",
    description: "AI applications in cybersecurity",
    details: "Currently researching advanced AI applications in cybersecurity at MIT CSAIL, focusing on threat detection and automated response systems.",
    delay: 0.5,
    position: { x: 15, y: 80 },
    bgImage: "photo-1466721591366-2d5fba72006d",
    expandedImages: [
      "photo-1466721591366-2d5fba72006d",
      "photo-1620712943543-bcc4688e7485",
    ]
  },
  {
    year: "2024-Present",
    title: "MIT ALFA Group",
    description: "Advanced research in AI and cybersecurity",
    details: "Contributing to cutting-edge research in AI policy and cybersecurity as part of MIT's renowned ALFA (Artificial Intelligence Foundations and Applications) group.",
    delay: 0.6,
    position: { x: 30, y: 95 },
    bgImage: "photo-1485827404703-89b55fcc595e",
    expandedImages: [
      "photo-1485827404703-89b55fcc595e",
      "photo-1451187580459-43490279c0fa",
    ]
  }
];