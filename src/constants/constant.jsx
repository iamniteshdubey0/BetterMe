import s1 from "../assets/SVG/1SCENE.svg";
import s2 from "../assets/SVG/2SCENE.svg";
import s3 from "../assets/SVG/3SCENE.svg";
import s4 from "../assets/SVG/4SCENE.svg";
import s5 from "../assets/SVG/5SCENE.svg";
import s6 from "../assets/SVG/6SCENE.svg";
import s7 from "../assets/SVG/7SCENE.svg";
import s8 from "../assets/SVG/8SCENE.svg";
import s9 from "../assets/SVG/9SCENE.svg";
import s10 from "../assets/SVG/10SCENE.svg";
import {
  Apple,
  BrickWallFire,
  ChartBarIncreasing,
  Flower2Icon,
  ImageIcon,
  RailSymbolIcon,
  ThumbsUp,
  Vault,
} from "lucide-react";
import { title } from "framer-motion/client";

export const Images = [s1, s2, s3, s4, s5];

export const NavbarSection = {
  brand: "BetterMe",
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "Personality Types", href: "#personality-types" },
    { label: "Teams", href: "#teams" },
    { label: "Resources", href: "#resources" },
  ],
  cta: "Login",
};

export const HeroSection = {
  title:
    "Where we empower\nyou to embrace\nyour unique 🧬 personality\nand unleash your full\npotential",
  image: s6,
  stats: [
    { number: "236+", label: "Tests Taken Globally" },
    { number: "98%", label: "Results Accuracy" },
  ],
  cta: "Start Test",
  buttons: ["Get a personality test", "Self-discovery", "Personal growth"],
};

export const MissionSection = {
  title:
    "Our mission is to provide individuals with\nvaluable insights into their personality",
  missionCards: [
    {
      title: "Our Mission",
      heading:
        "Our mission is to empower individuals to embrace their boldness and live authentically.",
      description:
        "We believe that everyone possesses unique traits and strengths that, when embraced, can lead to personal growth, fulfillment, and success.",
    },
    {
      title: "Our Expertise",
      heading:
        "With years of experience in the field of personality development and self-improvement.",
      description:
        "Our professionals hold advanced degrees in psychology and have extensive training in coaching and counseling.",
    },
    {
      title: "Our Approach",
      heading:
        "At Bold, we take a holistic approach to help individuals embrace their boldness.",
      description:
        "We understand that boldness encompasses various aspects of life, including mindset, communication, self-confidence, and goal-setting.",
    },
  ],
  quote: {
    text: "Welcome to Bold, where we believe in the transformative power of embracing your uniqueness and living fearlessly",
    author: "Ghea, your bold CEO",
  },
};

export const PersonalityTypesSection = {
  label: "Personality Types",
  title:
    "Test Descriptions: Discover Your Personality Type, Relationship Compatibility Test, Career Aptitude Test.",
  cta: "Read More",
};

export const BoldnessTraitsSection = {
  title:
    "We believe that boldness encompasses a range of distinct characteristics that define and empower individuals",
  description:
    "These bold traits are not limited to a single definition but form a vibrant spectrum of qualities that, when embraced, can lead to personal growth, resilience, and success.",
  traits: {
    title: "Bold Traits",
    bt: [
      { icon: <ThumbsUp />, label: "Confidence" },
      { icon: <ImageIcon />, label: "Assertiveness" },
      { icon: <BrickWallFire />, label: "Risk-Taking" },
      { icon: <Flower2Icon />, label: "Perseverance" },
      { icon: <ChartBarIncreasing />, label: "Growth Mindset" },
      { icon: <Vault />, label: "Authenticity" },
    ],
  },
  appDownload: {
    avail: [
      { platform: "Google Play", icon: <RailSymbolIcon size={28} /> },
      { platform: "App Store", icon: <Apple size={28} /> },
    ],
    btn: { title: "Download Now", link: "#" },
  },
};

export const TestimonialSection = {
  title:"Testimonials",
  quote:
    "Bold helped me recognize my strengths and step outside my comfort zone. I'm now living a more fulfilling and adventurous life.",
  name: "Amber Augustin",
  role: "Adventurer (ISFP-A)",
};

export const CallToActionSection = {
  title:
    "Are you ready to uncover your boldness and embrace your true potential?",
  cta: "Start Test",
};

export const FooterSection = {
  description:
    "Take our Bold Personality Assessment, Leadership Potential Assessment, and Risk-Taking Profile",
  links: ["Home", "Personality Types", "Teams", "Resources"],
  brand: "Bold",
  copyright: "© 2025",
};
