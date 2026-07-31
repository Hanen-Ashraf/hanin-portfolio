// Centralized content — edit here to update the whole site
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaPaintBrush,
  FaPenNib,
  FaPalette,
} from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { MdDesignServices, MdOutlineDevices } from 'react-icons/md'
import { TbLayoutGrid } from 'react-icons/tb'

export const personalInfo = {
  name: 'Hanin Ashraf Refat',
  initials: 'HA',
  title: 'Front-End Developer & Graphic Designer',
  education: 'Information Technology Student',
  school: 'WE School for Applied Technology',
  graduation: 'Expected Graduation: 2026',
  location: 'Cairo, Egypt',
  email: 'hanin.ashraf.dev@example.com',
  phone: '+20 100 000 0000',
  github: 'https://github.com/haninashraf',
  linkedin: 'https://linkedin.com/in/haninashraf',
}

export const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Design Gallery', to: 'gallery' },
  { name: 'Certificates', to: 'certificates' },
  { name: 'Contact', to: 'contact' },
]

export const heroRoles = [
  'Front-End Developer',
  2000,
  'Graphic Designer',
  2000,
  'Creative Thinker',
  2000,
  'Problem Solver',
  2000,
]

export const stats = [
  { label: 'Projects', value: 12, suffix: '+' },
  { label: 'Certificates', value: 6, suffix: '+' },
  { label: 'Designs', value: 40, suffix: '+' },
  { label: 'Years Learning', value: 3, suffix: '+' },
]

export const devSkills = [
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3Alt },
  { name: 'JavaScript', icon: FaJsSquare },
  { name: 'Bootstrap', icon: FaBootstrap },
  { name: 'React', icon: FaReact },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Git', icon: FaGitAlt },
  { name: 'GitHub', icon: FaGithub },
  { name: 'Responsive Design', icon: MdOutlineDevices },
]

export const designSkills = [
  { name: 'Adobe Photoshop', icon: FaPaintBrush },
  { name: 'Adobe Illustrator', icon: FaPenNib },
  { name: 'Canva', icon: FaPalette },
  { name: 'Logo Design', icon: MdDesignServices },
  { name: 'Social Media Design', icon: TbLayoutGrid },
  { name: 'UI Design', icon: FaFigma },
]

export const journey = [
  { year: '2023', title: 'Started Programming', desc: 'Took the first step into the world of code — learning logic, structure, and problem solving from the ground up.' },
  { year: '2024', title: 'Started Front-End', desc: 'Dove into HTML, CSS and JavaScript, building real interfaces and falling in love with the web.' },
  { year: '2025', title: 'Started Graphic Design', desc: 'Expanded into visual design — logos, posters and social media content using Adobe tools and Canva.' },
  { year: '2026', title: 'WE School', desc: 'Continuing my Information Technology studies at WE School for Applied Technology, sharpening both design and development skills.' },
]

export const projects = [
  {
    title: 'Restaurant Website',
    description: 'A warm, appetite-driven restaurant site with a digital menu, table reservation flow and smooth scroll storytelling.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: '#',
    demo: '#',
    color: 'from-orange-500/20 to-amber-500/10',
  },
  {
    title: 'E-Commerce Website',
    description: 'A full shopping experience with product filtering, cart management and a clean, conversion-focused checkout flow.',
    tech: ['React', 'JavaScript', 'CSS3'],
    github: '#',
    demo: '#',
    color: 'from-secondary/20 to-accent/10',
  },
  {
    title: 'Game Store',
    description: 'A bold, dark-themed storefront for digital games featuring animated cards, ratings and category browsing.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: '#',
    demo: '#',
    color: 'from-purple-500/20 to-fuchsia-500/10',
  },
  {
    title: 'Weather App',
    description: 'A minimal weather dashboard with live search, animated icons and a soft glassmorphism interface.',
    tech: ['JavaScript', 'API', 'CSS3'],
    github: '#',
    demo: '#',
    color: 'from-sky-500/20 to-accent/10',
  },
  {
    title: 'Portfolio Website',
    description: 'An earlier personal portfolio focused on typography, whitespace and a confident, minimal layout.',
    tech: ['HTML5', 'CSS3', 'Bootstrap'],
    github: '#',
    demo: '#',
    color: 'from-emerald-500/20 to-teal-500/10',
  },
  {
    title: 'Student Management System',
    description: 'A dashboard for managing student records, grades and attendance with clean data tables and forms.',
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
    github: '#',
    demo: '#',
    color: 'from-secondary/20 to-purple-500/10',
  },
]

export const galleryCategories = ['All', 'Logos', 'Posters', 'Social Media', 'Business Cards', 'Flyers']


export const galleryItems = [
  { id: 1, category: 'Logos', title: 'Nova Studio Logo', height: 'h-72', image: '/src/assets/logo1.png' },
  { id: 2, category: 'Posters', title: 'Summer Fest Poster', height: 'h-96' },
  { id: 3, category: 'Social Media', title: 'Product Launch Post', height: 'h-80' },
  { id: 4, category: 'Business Cards', title: 'Minimal Business Card', height: 'h-64' },
  { id: 5, category: 'Flyers', title: 'Grand Opening Flyer', height: 'h-96' },
  { id: 6, category: 'Logos', title: 'Orbit Tech Logo', height: 'h-64' },
  { id: 7, category: 'Social Media', title: 'Brand Story Carousel', height: 'h-72' },
  { id: 8, category: 'Posters', title: 'Music Night Poster', height: 'h-80' },
  { id: 9, category: 'Flyers', title: 'Sale Weekend Flyer', height: 'h-64' },
  { id: 10, category: 'Business Cards', title: 'Studio Card Set', height: 'h-72' },
  { id: 11, category: 'Logos', title: 'Leaf & Co Logo', height: 'h-80' },
  { id: 12, category: 'Social Media', title: 'Instagram Highlight Set', height: 'h-64' },
]

export const certificates = [
  { title: 'ICDL', issuer: 'International Computer Driving Licence', year: '2024' },
  { title: 'Cisco Networking Basics', issuer: 'Cisco Networking Academy', year: '2024' },
  { title: 'Python Programming', issuer: 'Online Certification', year: '2025' },
  { title: 'Web Development', issuer: 'Online Certification', year: '2025' },
]

export const services = [
  { title: 'Website Design', desc: 'Designing clean, modern websites focused on usability and visual hierarchy.', icon: MdDesignServices },
  { title: 'Front-End Development', desc: 'Turning designs into fast, responsive, production-ready interfaces.', icon: FaReact },
  { title: 'Landing Pages', desc: 'High-converting single pages built to launch products and campaigns quickly.', icon: TbLayoutGrid },
  { title: 'Logo Design', desc: 'Crafting simple, memorable logos that capture a brand\'s identity.', icon: FaPenNib },
  { title: 'Social Media Design', desc: 'Consistent, scroll-stopping visuals for social platforms and campaigns.', icon: FaPalette },
  { title: 'UI Design', desc: 'Designing intuitive, elegant interfaces for web and mobile products.', icon: FaFigma },
]

export const testimonials = [
  {
    name: 'Mona Adel',
    role: 'Small Business Owner',
    text: 'Hanin redesigned our website and the difference was night and day. Clean, fast, and our customers love it.',
  },
  {
    name: 'Youssef Kamal',
    role: 'Startup Founder',
    text: 'Great eye for detail and genuinely easy to work with. The landing page she built helped our launch a lot.',
  },
  {
    name: 'Salma Nabil',
    role: 'Marketing Lead',
    text: 'Her social media designs consistently outperformed our old templates. Professional, on-brand, on time.',
  },
  {
    name: 'Omar Hassan',
    role: 'Fellow Developer',
    text: 'Solid front-end skills and clean code. Hanin understands both design and how to build it properly.',
  },
]
