import {
  FormationIcon,
  RegistrationIcon,
  BrandingIcon,
  CoachingIcon,
  CorporateSupportIcon,
} from "../components/Icon";

// FaInstagram

import { FaWhatsapp } from "react-icons/fa";
import { BiLogoTiktok } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";

// service details mapping
const serviceDetails = [
  {
    id: "formation",
    card: {
      icon: <FormationIcon />,
      title: "Business Formation & Development",
      color: "#00A38B",
      desc: "Set up your company with expert guidance and structured documentation.",
      list: [
        "Guidance on business structure",
        "Preparation of documentation",
        "Support through formation process",
        "Post-formation advisory",
      ],
    },
  },
  {
    id: "registration",
    card: {
      icon: <RegistrationIcon />,
      title: "Business Registration Services",
      color: "#002855",
      desc: "We handle your registration processes with precision and compliance.",
      list: [
        "Registration step guidance",
        "Document preparation & submission",
        "Coordination with authorities",
        "Follow-up until completion",
      ],
    },
  },
  {
    id: "branding",
    card: {
      icon: <BrandingIcon />,
      title: "Business Branding",
      color: "#C28F2C",
      desc: "We help businesses build strong, recognizable and compelling identities.",
      list: [
        "Brand strategy",
        "Name development",
        "Messaging & positioning",
        "Logo & identity creation",
      ],
    },
  },
  {
    id: "coaching",
    card: {
      icon: <CoachingIcon />,
      title: "Business Coaching & Advisory",
      color: "#008576",
      desc: "Strategic coaching to help you grow and make informed decisions.",
      list: [
        "Business planning",
        "Growth strategy",
        "Solution-focused sessions",
        "Personalized coaching",
      ],
    },
  },
  {
    id: "support",
    card: {
      icon: <CorporateSupportIcon />,
      title: "Corporate and Administrative Support",
      color: "#203959",
      desc: "We help businesses stay organized, compliant, and efficient through professional corporate support services.",
      list: [
        "General compliance and business documentation",
        "Record management and administrative coordination",
        "Operational support to simplify internal processes",
        "Routine business maintenance assistance",
      ],
    },
  },
];

// mobile nav

export const navItems = [
  { label: "Home", href: "#" },
  {
    label: "About",
    children: [
      { label: "Our Company", href: "#about" },
      { label: "Meet the Founder", href: "#founder" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "Business Formation & Development", href: "#formation" },
      { label: "Business Registration Services", href: "#registration" },
      { label: "Business Branding", href: "#branding" },
      { label: "Business Coaching & Advisory", href: "#coaching" },
      { label: "Corporate and Administrative Support", href: "#support" },
    ],
  },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
  {
    label: "Legal Links",
    children: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];

export const aboutMenuItem = [
  { href: "#about", text: "Our Company" },
  { href: "#founder", text: "Meet The Founder" },
];

export const serviceMenuItem = [
  { href: "#formation", text: "Business Formation & Development" },
  { href: "#registration", text: "Business Registration Services" },
  { href: "#branding", text: "Business Branding" },
  { href: "#coaching", text: "Business Coaching & Advisory" },
  { href: "#support", text: "Corporate & Administrative Support" },
];

// mission

export const missionItems = [
  {
    number: "01",
    title: "Simplify Business Legalities",
    body: "Demystifying the complexities of business registration and legal compliance, making it easy and accessible for every entrepreneur to build on a solid, legal foundation.",
  },
  {
    number: "02",
    title: "Empower through Structure",
    body: 'Providing startups and SMEs with the organizational frameworks and corporate structures necessary to transition from "side hustles" to professional, scaleable enterprises.',
  },
  {
    number: "03",
    title: "Foster Sustainable Growth",
    body: "Offering strategic guidance and brand-building tools that ensure long-term sustainability and profitability for our clients in a competitive market.",
  },
  {
    number: "04",
    title: "Bridge the Professionalism Gap",
    body: "Equipping small business owners with the corporate identity and professional polish required to attract premium investors, partners, and customers.",
  },
  {
    number: "05",
    title: "Cultivate Entrepreneurial Excellence",
    body: "Serving as a lifelong partner for business owners, providing the continuous support and clarity needed to navigate the challenges of the modern business world with confidence.",
  },
];

// Footer section

// footer social icons
export const socialIconsContainer = [
  {
    href: "https://wa.me/message/4F2ZBE3VOLNEC1",
    socialIcon: <FaWhatsapp size={25} />,
    arialLabel: "Chat with us on whatsapp",
  },
  {
    href: "https://www.tiktok.com/@thecorporatebrandup?_r=1&_t=ZM-91tdnXKKzvs",
    socialIcon: <BiLogoTiktok size={25} />,
    arialLabel: "Visit out Tiktok page",
  },
  {
    href: "mailto:thecorporatebrandup@gmail.com?subject=Business Inquiry",
    socialIcon: <MdOutlineEmail size={29} />,
    arialLabel: "Send us an email",
  },
];

// footer links
export const footerCompany = [
  { href: "#home", text: "Home" },
  { href: "#about", text: "About" },
  { href: "#testimonials", text: "Testimonials" },
  { href: "#faqs", text: "FAQs" },
];

// footer services links
export const footerServices = [
  { href: "#formation", text: "Business Formation" },
  { href: "#registration", text: "Business Registration" },
  { href: "#branding", text: "Brand Identity Development" },
  { href: "#coaching", text: "Business Coaching" },
  { href: "#support", text: "Administrative Support" },
];

// legal links
export const footerLegal = [
  { href: "/privacy-policy", text: "Privacy Policy" },
  { href: "/refund-policy", text: "Refund Policy" },
  { href: "/terms-of-service", text: "Terms of Service" },
];

export default serviceDetails;
