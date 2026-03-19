export type TeamMember = {
  slug: string;
  src: string;
  name: string;
  role: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
  bio: string;
  description?: string;
  about: string;          
  experience: string;
};

export const teamMembers: TeamMember[] = [
  {
    slug: "kritika-kaushik",
    src: "/images/me.png",
    name: "Kritika Kaushik",
    role: "Interior Designer",
    instagram: "https://www.instagram.com/creatikaaaa/",
    linkedin: "https://www.linkedin.com/in/kritika-kaushik-a965b1243/",
    twitter: "https://www.instagram.com/creatikaaaa/",
    bio: "Interior designer crafting refined, functional, and emotionally engaging spaces.",
    description:
      "Kritika creates interiors that balance elegance, comfort, and usability, with a strong focus on timeless materials, thoughtful detailing, and a warm contemporary identity.",
    about:
      "Kritika Kaushik is an interior designer with a strong inclination toward creating spaces that feel both luxurious and deeply personal. Her design philosophy revolves around balance — between aesthetics and functionality, minimalism and warmth, structure and fluidity. She believes that interiors should not only look beautiful but also enhance the way people experience everyday life. Her work reflects a thoughtful selection of materials, textures, and lighting, resulting in spaces that feel timeless yet contemporary.",
    experience:
      "Kritika has worked on a diverse range of residential and boutique commercial projects, focusing on high-end interior detailing and spatial optimization. Over time, she has developed a strong command over concept development, material selection, and execution planning. Her experience includes working closely with clients, vendors, and contractors to ensure seamless project delivery while maintaining design integrity. She continues to explore evolving design trends while staying rooted in her core aesthetic values.",
  },
  {
    slug: "sejal-kaushik",
    src: "/images/me.png",
    name: "Sejal Kaushik",
    role: "Urban Planner",
    instagram: "https://www.instagram.com/sejalkaushikk/",
    linkedin: "https://www.linkedin.com/in/ar-sejal-kaushik/",
    twitter: "https://www.instagram.com/creatikaaaa/",
    bio: "Urban planner focused on sustainable, people-centric, and future-ready environments.",
    description:
      "Sejal works on planning ideas that connect infrastructure, people, and place, with an emphasis on sustainability, usability, and long-term urban impact.",
    about:
      "Sejal Kaushik is an urban planner who works at the intersection of design, infrastructure, and human experience. Her approach is centered on creating cities and environments that are not only efficient but also inclusive and sustainable. She is deeply interested in how spatial systems influence human behavior and how thoughtful planning can improve quality of life. Her work reflects a balance between analytical thinking and creative problem-solving, allowing her to design spaces that respond to both present needs and future challenges.",
    experience:
      "Sejal has been involved in urban planning projects ranging from small-scale developments to larger city-level strategies. Her experience includes research-based planning, zoning strategies, and spatial analysis. She has worked on projects that address mobility, land use, and environmental sustainability. Through her work, she aims to bridge the gap between policy, design, and real-world implementation, ensuring that planning solutions are both practical and impactful.",
  },
  {
    slug: "omkar-malgave",
    src: "/images/me.png",
    name: "Omkar Malgave",
    role: "Architect",
    instagram: "https://www.instagram.com/ar.omkar_malgave_09/",
    linkedin: "https://www.linkedin.com/in/omkar-malgave/",
    twitter: "https://www.instagram.com/creatikaaaa/",
    bio: "Architect focused on clarity of form, spatial storytelling, and contemporary design.",
    description:
      "Omkar approaches architecture through clean forms, clear visual language, and spatial experiences that combine functionality with strong design character.",
    about:
      "Omkar Malgave is an architect with a strong focus on clean design language and meaningful spatial experiences. His work explores the relationship between form, function, and human interaction. He believes architecture should tell a story — one that is expressed through proportions, materials, and light. His design approach is rooted in simplicity, precision, and a deep understanding of how spaces are perceived and used.",
    experience:
      "Omkar has worked on architectural projects that range from conceptual design to execution-level detailing. His experience includes residential and mixed-use developments, where he has contributed to design ideation, 3D visualization, and technical drawings. He is particularly interested in modern architectural practices and continuously refines his approach by studying evolving global design trends while maintaining contextual relevance.",
  },
];