import type { Project, Reference } from './types';

export const HERO_DETAILS = {
  name: "Godswill Conduah",
  work: "A Graphic Designer and Model",
  introduction: "Crafting visual stories that captivate and inspire. With a passion for clean aesthetics and impactful design, I turn complex ideas into beautiful, intuitive creations.",
  lifeStory: "I'm Godswill Conduah, a graphic designer and professional model with 5 years of experience in visual arts and personal branding. I specialize in creating stunning graphics—from logos and branding packages—that capture essence and elevate identities, while my modeling work brings concepts to life through runway, and commercial shoots. Browse my graphic design portfolio for innovative projects and my modeling gallery for captivating imagery. Let's collaborate—I'm eager to bring your ideas into focus.",
  experienceYears: 5,
  worksCompleted: 66,
  socials: {
    instagram: 'https://www.instagram.com/kingraptureishere?igsh=cnJ1M3c4OGwzemRh&utm_source=qr',
    snapchat: 'https://snapchat.com/t/0EzIM5YR',
    whatsapp: 'https://wa.me/0594933558' // Replace with your WhatsApp link
  }
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Brand Identity for 'Village de la Casquette'",
    category: "Branding",
    imageUrl: "images/CAP.jpg",
    description: "Complete brand identity development for a new business startup, including logo, color palette, and typography.",
  },
  {
    id: 2,
    title: "Flyer for Business",
    category: "Flyer",
    imageUrl: "images/Akrofi 2.jpg",
    description: "A flyer for a business startup.",
  },
  {
    id: 3,
    title: "Identity for Clothing Brand",
    category: "Branding",
    imageUrl: "images/CHOCO BLACK.png",
    description: "Created an identity for an upcoming clothing brand.",
  },
  {
    id: 4,
    title: "Catwalk",
    category: "Modelling",
    imageUrl: "images/photo_2025-10-02_13-40-36.jpg",
    description: "Being on the runway for techniquestyle2025",
  },
   {
    id: 5,
    title: "Catwalk",
    category: "Modelling",
    imageUrl: "images/photo_2025-10-02_16-19-16.jpg",
    description: "Being on the runway for techniquestyle2025.",
  },
  {
    id: 6,
    title: "Catwalk",
    category: "Modelling",
    imageUrl: "images/photo_2025-10-03_14-51-06.jpg",
    description: "Being on the runway for techniquestyle2025.",
  },
];

export const REFERENCES: Reference[] = [
  {
    id: 1,
    name: "Roy Kum",
    title: "Creative Director",
    company: "Innovate Inc.",
    quote: "Godswill is a rare talent. His ability to translate abstract concepts into stunning visuals is unparalleled. He's a true asset to any team.",
    avatarUrl: "https://picsum.photos/seed/avatar1/100/100",
  },
  {
    id: 2,
    name: "John Smith",
    title: "Marketing Manager",
    company: "Solutions Co.",
    quote: "Working with Godswill was a game-changer for our campaigns. His designs not only look amazing but also deliver measurable results.",
    avatarUrl: "https://picsum.photos/seed/avatar2/100/100",
  },
   {
    id: 3,
    name: "Emily White",
    title: "Lead UX Researcher",
    company: "NextGen Apps",
    quote: "Godswill has an incredible eye for user-centric design. He consistently delivers interfaces that are both beautiful and incredibly functional.",
    avatarUrl: "https://picsum.photos/seed/avatar3/100/100",
  },
];