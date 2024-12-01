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
    position: { x: 10, y: 5 },
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
    position: { x: 5, y: 35 },
    bgImage: "photo-1493962853295-0fd70327578a",
    expandedImages: [
      "photo-1493962853295-0fd70327578a",
      "photo-1588666309990-d68f08e3d4a6",
    ]
  },
  {
    year: "2023-Present",
    title: "MIT Graduate Research",
    description: "AI applications in cybersecurity",
    details: "Currently researching advanced AI applications in cybersecurity at MIT CSAIL, focusing on threat detection and automated response systems.",
    delay: 0.3,
    position: { x: 8, y: 65 },
    bgImage: "photo-1466721591366-2d5fba72006d",
    expandedImages: [
      "photo-1466721591366-2d5fba72006d",
      "photo-1620712943543-bcc4688e7485",
    ]
  }
];