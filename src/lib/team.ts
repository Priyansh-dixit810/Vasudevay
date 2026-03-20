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
  facebook: string;
};

export const teamMembers: TeamMember[] = [
  {
    slug: "kritika-kaushik",
    src: "/images/me.png",
    name: "Kritika Kaushik",
    role: "Interior Designer",
    facebook: "",
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
    src: "/images/sejalKaushik.png",
    name: "Sejal Kaushik",
    role: "Urban Planner",
    facebook: "https://www.facebook.com/profile.php?id=100008247227600",
    instagram: "https://www.instagram.com/sejalkaushikk/",
    linkedin: "https://www.linkedin.com/in/ar-sejal-kaushik/",
    twitter: "https://www.instagram.com/creatikaaaa/",
    bio: "Urban planner focused on sustainable, people-centric, and future-ready environments.",
    description:
      "Sejal works on planning ideas that connect infrastructure, people, and place, with an emphasis on sustainability, usability, and long-term urban impact.",
    about: "Sejal Kaushik is an Architect and Urban Planner whose work is driven by a deep interest in understanding and shaping urban spaces that are not only functional, but also inclusive and climate-responsive. She completed her Bachelor’s degree from MBS School of Planning and Architecture, Delhi, where her thesis focused on designing a Science Centre that integrates science communication with urban space, creating opportunities for innovation, interaction, and implementation within a comfortable microclimate suited to Delhi’s climate. She completed her Master of Planning (Urban Planning) from the School of Planning and Architecture, New Delhi in 2026. Her postgraduate research focused on planning strategies to empower women in MSMEs in Indore, with an emphasis on creating more supportive urban environments for working women. Her work reflects a commitment to designing cities that are equitable, people-centric, and responsive to both social and environmental contexts."
    ,
    experience: "Sejal Kaushik has developed a strong foundation in architecture and urban planning through a combination of academic and professional experiences. During her Master’s, she has worked extensively on projects involving master planning, site planning, and infrastructure planning across diverse regions of the country, including Guntur, Zirakpur, and Guwahati. Her work has involved spatial analysis, field-based surveys, and the preparation of proposals addressing infrastructure systems, mobility, and nature-based solutions. In addition, she has gained professional exposure through an internship at the Institute of Urban Transport (India), where she contributed to projects related to sustainable urban mobility and policy-oriented planning. She has also worked with architectural firms in New Delhi, contributing to residential and institutional projects through design development, drawings, and site understanding. Her experience reflects a balanced approach that combines analytical planning with design sensitivity, with a focus on creating inclusive, functional, and well-integrated urban environments."
  },
  {
    slug: "omkar-malgave",
    src: "/images/me.png",
    name: "Omkar Malgave",
    role: "Architect",
    facebook: "",
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