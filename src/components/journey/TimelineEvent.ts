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
      "/lovable-uploads/Book.png",
      "/lovable-uploads/UMD.jpg",
    ]
  },
  {
    year: "2022",
    title: "Microsoft Cloud Security Internship",
    description: "Developed API for URL scanning and incident analysis",
    details: "As a Cloud Security Intern at Microsoft, I contributed to one of the world’s largest incident response teams, gaining hands-on experience in analyzing and mitigating cyber threats. I spearheaded the development of an API for URL scanning, which streamlined the detection of malicious links and enhanced the team’s ability to respond to security incidents efficiently. This project not only improved operational workflows but also provided valuable insights into the challenges of securing cloud-based systems at scale. Working alongside industry leaders, I deepened my understanding of cybersecurity operations and the critical role of leadership in managing high-stakes environments. This experience solidified my passion for leveraging technology to address complex security challenges and prepared me for advanced work in AI-driven cybersecurity.",
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
      "/lovable-uploads/Nas.jpg",
      "/lovable-uploads/Planete.jpg",
      "/lovable-uploads/Launch.jpg",
    ]
  },
  {
    year: "2023",
    title: "Capstone Project",
    description: "Threat Intelligence and Behaviour Analysis Research",
    details: "For my capstone project at the United States Naval Academy, I developed an innovative methodology to track and attribute threat actors by leveraging reputation-based systems. This approach enabled the systematic harvesting of threat intelligence data, allowing for the identification of new targets and maintaining continuity on known adversaries by detecting changes in their tradecraft. By focusing on reputation as a key metric, the project introduced a novel framework for network intrusion detection that not only enhanced threat visibility but also improved the ability to attribute malicious activities to specific actors. This work showcased my ability to think critically about cybersecurity challenges and create practical, forward-thinking solutions to address evolving threats in the digital landscape.",
    delay: 0.4,
    position: { x: 35, y: 65 },
    bgImage: "photo-1472396961693-142e6e269027",
    expandedImages: [
      "/lovable-uploads/Nas.jpg",
      "photo-1451187580459-43490279c0fa",
    ]
  },
  {
    year: "2024-Present",
    title: "MIT Graduate Research",
    description: "Master's in Technology and Policy",
    details: "As a graduate student in the Technology and Policy Program (TPP) at the Massachusetts Institute of Technology (MIT), I am exploring the critical intersection of technology, policy, and society, with a focus on artificial intelligence and cybersecurity. This interdisciplinary program equips me with the tools to analyze complex technological challenges and develop policy solutions that balance innovation, security, and ethical considerations. My research and insights have also extended to the global stage, as demonstrated by my keynote address at the Philippine Navy’s Cybersecurity Awareness Webinar, where I discussed the role of AI in modern military operations and its implications for international security. Through TPP, I am deepening my understanding of how emerging technologies can address global challenges while ensuring responsible governance, empowering me to contribute to impactful decisions that shape the future of technology in a rapidly evolving world.",
    delay: 0.5,
    position: { x: 15, y: 80 },
    bgImage: "photo-1466721591366-2d5fba72006d",
    expandedImages: [
      "/lovable-uploads/Cerfificate.jpg",
      "/lovable-uploads/Sched.jpg",
    ]
  },
  {
    year: "2024-Present",
    title: "MIT ALFA Group",
    description: "Artificial Adversarial Intelligence Research",
    details: "My research focuses on advancing the intersection of artificial intelligence and cybersecurity, with a particular emphasis on adversarial intelligence and threat detection. At MIT’s Computer Science and Artificial Intelligence Laboratory (CSAIL), I am working with the Anyscale Learning For All (ALFA) group to computationally replicate adversarial behaviors, exploring how AI agents can compete, learn, and adapt in simulated environments like CybORG. Leveraging Large Language Models (LLMs) and the BRON knowledge graph, I am developing coevolutionary algorithms to enhance the capabilities of AI-driven cybersecurity systems. Previously, during my capstone project at the Naval Academy, I pioneered a novel methodology for tracking threat actors using reputation-based systems, enabling the systematic harvesting of threat intelligence and improving network intrusion detection. My research aims to push the boundaries of AI and cybersecurity, creating innovative solutions to address evolving threats in digital and military domains.",
    delay: 0.6,
    position: { x: 30, y: 95 },
    bgImage: "photo-1485827404703-89b55fcc595e",
    expandedImages: [
      "photo-1485827404703-89b55fcc595e",
      "photo-1451187580459-43490279c0fa",
    ]
  }
];
