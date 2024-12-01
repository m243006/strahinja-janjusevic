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
    year: "2022",
    title: "Microsoft Internship",
    description: "Developed tools for incident response",
    details: "Created automated incident response tools that improved response time by 40%. Collaborated with security teams across multiple divisions.",
    delay: 0.2,
    position: { x: 15, y: 45 },
    bgImage: "photo-1485833077593-4278bba3f11f",
    expandedImages: [
      "photo-1485833077593-4278bba3f11f",
      "photo-1633419461186-7d40a38105ec",
    ]
  },
  {
    year: "2023-Present",
    title: "MIT Graduate Research",
    description: "AI applications in cybersecurity",
    details: "Currently researching advanced AI applications in cybersecurity at MIT CSAIL, focusing on threat detection and automated response systems.",
    delay: 0.3,
    position: { x: 10, y: 85 },
    bgImage: "photo-1466721591366-2d5fba72006d",
    expandedImages: [
      "photo-1466721591366-2d5fba72006d",
      "photo-1620712943543-bcc4688e7485",
    ]
  }
];