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
    year: "2020-2024",
    title: "U.S. Naval Academy",
    description: "Bachelor of Science - Dual Major in Cyber Operations (NSA-CAE) and Computer Science",
    details: "During my time at the United States Naval Academy, I pursued a dual major in Cyber Operations and Computer Science, graduating with a strong foundation in both technical expertise and leadership. As part of the prestigious NSA Centers of Academic Excellence (CAE) program, I honed my skills in cybersecurity, focusing on threat intelligence, network defense, and operational methodologies. My capstone project introduced an innovative approach to tracking threat actors, leveraging reputation-based systems to enhance network intrusion detection and attribution. Beyond academics, I served in leadership roles as a Squad Leader and Drill Officer, mentoring peers and ensuring the success of over 140 midshipmen. These experiences not only deepened my technical knowledge but also instilled a strong sense of discipline, teamwork, and commitment to excellence—qualities that continue to drive my work in cybersecurity and artificial intelligence.",
    delay: 0.1,
    position: { x: 15, y: 5 },
    bgImage: "/public/lovable-uploads/13468a15-c480-49f5-a07a-ff29333dd9f7.png",
    expandedImages: [
      "lovable-uploads/Book.png",
      "/lovable-uploads/5cb60864-a1b6-48fc-9509-2a71111471e8.png",
    ]
  },
  {
    year: "2022",
    title: "Microsoft Cloud Security Internship",
    description: "Developed API for URL scanning and incident analysis",
    details: "Contributed to incident analysis and spearheaded the development of an API for URL scanning, optimizing response to cyber threats. Gained valuable insights into leadership within cybersecurity operations as part of one of the world's largest incident response teams.",
    delay: 0.2,
    position: { x: 30, y: 25 },
    bgImage: "photo-1493962853295-0fd70327578a",
    expandedImages: [
      "photo-1493962853295-0fd70327578a",
      "photo-1588666309990-d68f08e3d4a6",
    ]
  },
  {
    year: "2023",
    title: "NASA Internship",
    description: "Developed Helios website for solar data visualization",
    details: "Played a pivotal role in developing Helios website, utilizing 3D rendering technology to visualize solar images with data from the Helioviewer API. Conducted magnetic field line extrapolations crucial for comprehending the sun's magnetic structure.",
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
    title: "Capstone Project",
    description: "Threat Intelligence and Behaviour Analysis Research",
    details: "Created a new operational methodology utilizing reputation that would enable the systematic harvesting of threat intelligence data for threat actor identification and tracking. Developed new approaches to network intrusion detection aimed at achieving attribution.",
    delay: 0.4,
    position: { x: 35, y: 65 },
    bgImage: "photo-1472396961693-142e6e269027",
    expandedImages: [
      "photo-1472396961693-142e6e269027",
      "photo-1451187580459-43490279c0fa",
    ]
  },
  {
    year: "2024-Present",
    title: "MIT Graduate Research",
    description: "Master's in Technology and Policy",
    details: "Pursuing a Master of Science in Technology and Policy with a focus on Artificial Intelligence and Cyber Security at MIT. Selected projects include research in AI applications for cybersecurity and policy development.",
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
    description: "Artificial Adversarial Intelligence Research",
    details: "Research focused on computationally replicating Adversarial Intelligence, developing ALFA agents competing in CybORG while using Large Language Models and BRON for support with coevolutionary algorithms.",
    delay: 0.6,
    position: { x: 30, y: 95 },
    bgImage: "photo-1485827404703-89b55fcc595e",
    expandedImages: [
      "photo-1485827404703-89b55fcc595e",
      "photo-1451187580459-43490279c0fa",
    ]
  }
];
