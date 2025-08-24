export type TeamSection = 'founders' | 'co-founders' | 'heads';

export type TeamMember = {
  name: string;
  designation: string;
  image?: string; // e.g. "/images/team/saudAli.jpeg"
  bio: string;
  section: TeamSection;
  socials?: {
    linkedin?: string;
    twitter?: string; // or X
    instagram?: string;
  };
};

const ourTeamsData: TeamMember[] = [
  // Founders (2)
  {
    name: "Bilawal Ayoub",
    designation: "CEO & Founder",
    image: "/images/team/team1.png",
    bio: "Vision-driven founder leading WGTechSol’s growth, product strategy, and partnerships.",
    section: 'founders',
    socials: {
      linkedin: "https://www.linkedin.com/in/bilawal",
      twitter: "https://twitter.com/bilawal",
      instagram: "https://instagram.com/bilawal",
    },
  },
  {
    name: "Ali Raza",
    designation: "Founder & Chairman",
    image: "/images/team/ali-raza.jpg",
    bio: "Serial entrepreneur focused on culture, client success, and long-term vision.",
    section: 'founders',
    socials: {
      linkedin: "https://www.linkedin.com/in/ali-raza",
      twitter: "https://twitter.com/ali_raza",
      instagram: "https://instagram.com/ali.raza",
    },
  },

  // Co-Founders (2)
  {
    name: "Haris Khan",
    designation: "Co‑Founder & CTO",
    bio: "Leads technology strategy—modern stacks, scalability, and engineering excellence.",
    section: 'co-founders',
    socials: {
      linkedin: "https://www.linkedin.com/in/haris-khan",
      twitter: "https://twitter.com/haris_cto",
      instagram: "https://instagram.com/haris.cto",
    },
  },
  {
    name: "Sara Ahmed",
    designation: "Co‑Founder & COO",
    bio: "Owns operations—process, delivery, and team growth with a quality-first mindset.",
    section: 'co-founders',
    socials: {
      linkedin: "https://www.linkedin.com/in/sara-ahmed",
      twitter: "https://twitter.com/sara_ops",
      instagram: "https://instagram.com/sara.ops",
    },
  },

  // Heads of Departments (multi)
  {
    name: "Maria Khan",
    designation: "Head of Design",
    bio: "Design leader focused on accessible, scalable UI systems and memorable user experiences.",
    section: 'heads',
    socials: {
      linkedin: "https://www.linkedin.com/in/maria-khan",
      twitter: "https://twitter.com/maria_khan",
      instagram: "https://instagram.com/maria.khan",
    },
  },
  {
    name: "Hassan Ahmed",
    designation: "Head of Engineering",
    bio: "Builds robust APIs and high-performance frontends using Next.js, Node.js, and cloud services.",
    section: 'heads',
    socials: {
      linkedin: "https://www.linkedin.com/in/hassan-ahmed",
      twitter: "https://twitter.com/hassan_dev",
      instagram: "https://instagram.com/hassan.dev",
    },
  },
  {
    name: "Sana Iqbal",
    designation: "Product Manager",
    image: "/images/team/sana-iqbal.jpg",
    bio: "Turns user insights into actionable roadmaps, aligning business goals with product outcomes.",
    section: 'heads',
    socials: {
      linkedin: "https://www.linkedin.com/in/sana-iqbal",
      twitter: "https://twitter.com/sana_pm",
      instagram: "https://instagram.com/sana.pm",
    },
  },
  {
    name: "Umar Farooq",
    designation: "DevOps Lead",
    image: "/images/team/umar-farooq.jpg",
    bio: "Automates CI/CD, observability, and scalable infra on AWS—security-first and cost-aware.",
    section: 'heads',
    socials: {
      linkedin: "https://www.linkedin.com/in/umar-farooq",
      twitter: "https://twitter.com/umar_ops",
      instagram: "https://instagram.com/umar.ops",
    },
  },
];

export default ourTeamsData;