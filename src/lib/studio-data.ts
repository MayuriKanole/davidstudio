import endlessLights from "@/assets/endless-lights.png.asset.json";
import brightSouls from "@/assets/bright-souls.png.asset.json";
import lostInVoids from "@/assets/lost-in-voids.png.asset.json";
import arrowGame from "@/assets/arrow-game.png.asset.json";
import ankit from "@/assets/ankit.jpeg.asset.json";
import parv from "@/assets/parv.png.asset.json";
import harshal from "@/assets/harshal.jpg.asset.json";
import bhumit from "@/assets/bhumit.png.asset.json";
import ameya from "@/assets/ameya.png.asset.json";
import kashyap from "@/assets/kashyap.jpeg.asset.json";
import ashish from "@/assets/ashish.png.asset.json";
import mayuri from "@/assets/mayuri-kanole.jpg.asset.json";

export const HERO_VIDEO =
  "https://res.cloudinary.com/uwpz0bf1/video/upload/v1791142795/Untitled_design_3.mp4";

export const games = [
  {
    title: "Endless Lights",
    status: "Released",
    genre: "Puzzle Action",
    image: endlessLights.url,
    description:
      "Navigate shifting light patterns and uncover hidden pathways in this fast-paced puzzle action game. Every level brings new challenges, tighter timing, and satisfying solutions that reward precision and creativity.",
    primary: { label: "Play on itch.io", href: "https://davids-studio.itch.io/endless-lightss" },
    secondary: { label: "Watch Trailer", href: "https://youtu.be/DHsYF9V3-p8?si=7rlfg9X6n0TyJDIc" },
  },
  {
    title: "Bright Souls",
    status: "Released",
    genre: "Atmospheric Adventure",
    image: brightSouls.url,
    description:
      "Guide luminous spirits through enchanted worlds in this atmospheric adventure. Blend combat, exploration, and puzzle-solving to restore light to places that have fallen into shadow.",
    primary: { label: "Play on itch.io", href: "https://davids-studio.itch.io/bright-souls" },
    secondary: { label: "Watch Gameplay", href: "https://youtu.be/6eiX0D0HYyY?si=mM2lXkLEPLHKTgrS" },
  },
  {
    title: "Lost in Voids",
    status: "Released",
    genre: "Exploration",
    image: lostInVoids.url,
    description:
      "Drift through surreal, ever-shifting voids in this contemplative exploration game. Piece together fragments of a forgotten world while navigating minimalist environments that react to your presence.",
    primary: { label: "Play on itch.io", href: "https://davids-studio.itch.io/lost-in-voids" },
  },
  {
    title: "The Arrow Game",
    status: "Released",
    genre: "Puzzle · Android",
    image: arrowGame.url,
    description:
      "Master every move and solve satisfying arrow puzzles in a game built around precision, momentum, and sharp thinking.",
    primary: {
      label: "Get on Play Store",
      href: "https://play.google.com/store/apps/details?id=com.DavidsStudio.TheArrowGame&pcampaignid=web_share",
    },
  },
] as const;

export const team = [
  {
    name: "Ankit Chandra",
    role: "Founder",
    description:
      "Founded the studio with a vision to create games that leave a mark. Leads development direction and keeps every project grounded in quality.",
    image: ankit.url,
  },
  {
    name: "Parv Bhatt",
    role: "Game Generalist and Animator",
    description:
      "Wears many hats across animation, gameplay, and design. Brings characters and environments to life through motion and interaction.",
    image: parv.url,
  },
  {
    name: "Harshal Shinde",
    role: "Game Developer",
    description:
      "Focused on building responsive, polished gameplay systems. Writes code that feels good to play.",
    image: harshal.url,
    portfolio: "https://harshal-shinde-developer-portfolio-881650708754.asia-southeast1.run.app/",
  },
  {
    name: "Bhumit Gevariya",
    role: "Game Developer",
    description:
      "Tackles core mechanics and systems programming. Prefers solving problems that push the project forward.",
    image: bhumit.url,
  },
  {
    name: "Harsh Sharma",
    role: "3D Artist and Designer",
    description:
      "Builds the visual language of every project. From modeling to texturing, creates assets that define the look and feel.",
  },
  {
    name: "Ameya Hatekar",
    role: "Game Developer and Designer",
    description:
      "Blends technical skill with design thinking. Works across gameplay systems and level design to shape how games feel.",
    image: ameya.url,
    portfolio: "https://amey-hatekar-portfolio.vercel.app/",
  },
  {
    name: "Kashyap Vadhel",
    role: "Game Developer and Level Designer",
    description:
      "Combines level design with programming to build worlds worth exploring. Focused on pacing, flow, and player experience.",
    image: kashyap.url,
    portfolio: "https://kashyapv-portfolio.vercel.app/",
  },
  {
    name: "Ashish Kumar",
    role: "Software Developer",
    description:
      "Handles tooling, build systems, and technical infrastructure. Keeps the pipeline efficient and the codebase clean.",
    image: ashish.url,
    portfolio: "https://ashish-portfolio-kohl.vercel.app/",
  },
  {
    name: "Devendra Pratap Jaiswal",
    role: "Software Developer",
    description:
      "Works on backend systems and engine-level integration. Builds the foundations that let gameplay ideas become reality.",
    portfolio: "https://devendrajaiswalportfolio.netlify.app/",
  },
  {
    name: "Mayuri Kanole",
    role: "Game Content and Marketing Associate",
    description:
      "Works across game content, storytelling, and marketing, helping shape how David’s Studio projects are presented. Also contributes to video editing, game research, and promotional content.",
    image: mayuri.url,
  },
] as const;

export const aboutParagraphs = [
  "David's Studio is an independent game development studio driven by a shared passion for creating games that are enjoyable, memorable, and built with care. Every project begins with a simple idea and grows through creativity, collaboration, and attention to detail.",
  "Our team brings together developers, artists, designers, and creators who believe that great games are shaped by thoughtful gameplay, distinctive visual design, and polished player experiences. From the earliest prototype to the final release, we focus on building worlds that players enjoy exploring and experiences they want to return to.",
  "As we continue to grow, our goal remains the same: to create original games that reflect our creativity, challenge our skills, and connect with players around the world while staying true to the spirit of independent game development.",
] as const;

export const pillars = [
  {
    title: "Original Game Development",
    text: "We build games from the ground up, creating original gameplay mechanics and experiences that stand apart. Every title starts with a unique vision and is shaped through iteration, testing, and a genuine love for the craft.",
  },
  {
    title: "Art & Creative Design",
    text: "Visuals are more than decoration — they tell stories. Our artists and designers focus on building cohesive worlds through animation, environment design, and art direction that gives each project its own identity.",
  },
  {
    title: "Player-First Experiences",
    text: "Great games respect the player's time. We prioritize tight controls, clear feedback, and polished interactions so every moment feels intentional and every session leaves players wanting to come back.",
  },
] as const;

export const socials = {
  linkedin: "https://www.linkedin.com/company/david-s-studio/",
  instagram: "https://www.instagram.com/davidstudio2256/",
  itch: "https://davids-studio.itch.io/",
  map: "https://www.google.com/maps/place/Lucknow,+Uttar+Pradesh,+India",
};