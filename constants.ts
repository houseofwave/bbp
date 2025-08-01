
import { NavLink, ProductLine, ColorPalette, Testimonial } from './types';

export const NAV_LINKS: NavLink[] = [
  { href: '#hero', label: 'Home' },
  { href: '#products', label: 'Products' },
  { href: '#color-chart', label: 'Color Chart' },
  { href: '#about', label: 'About' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export const FEATURED_BRANDS = [
  { 
    name: 'INOX', 
    description: 'Economy/Standard Emulsion with a quality matt finish for everyday applications.',
    color: 'text-slate-500', 
    id: 'inox' 
  },
  { 
    name: 'SAFARI', 
    description: 'Premium Emulsion with a beautiful sheen finish for an enhanced appearance.',
    color: 'text-amber-500', 
    id: 'safari' 
  },
  { 
    name: 'SAPPHIRE', 
    description: 'Luxury Emulsion with a high gloss finish for the most premium applications.',
    color: 'text-blue-500', 
    id: 'sapphire' 
  },
];

export const PRODUCT_LINES: ProductLine[] = [
  {
    id: 'inox',
    brand: 'INOX',
    title: 'INOX',
    description: 'Economy/Standard Emulsion with Matt Finish',
    brandColor: 'text-slate-500',
    products: [
      { name: 'Acrylic Distemper', description: 'Economical water-based paint with good coverage and matt finish.', features: ['Matt Finish', 'Water-Based', 'Interior Use'], image: 'https://picsum.photos/seed/inox1/400/300' },
      { name: 'Wall Primer', description: 'Standard primer for preparing walls before paint application.', features: ['Base Coat', 'Good Adhesion', 'Seals Surface'], image: 'https://picsum.photos/seed/inox2/400/300' },
      { name: 'Exterior Emulsion', description: 'Weather-resistant paint for exterior surfaces.', features: ['Weather Resistant', 'UV Protection', 'Exterior Use'], image: 'https://picsum.photos/seed/inox3/400/300' },
      { name: 'Interior Emulsion', description: 'Standard emulsion for interior walls with good coverage.', features: ['Smooth Finish', 'Easy Application', 'Interior Use'], image: 'https://picsum.photos/seed/inox4/400/300' },
    ],
  },
  {
    id: 'safari',
    brand: 'SAFARI',
    title: 'SAFARI',
    description: 'Premium Emulsion with Sheen Finish',
    brandColor: 'text-amber-500',
    products: [
      { name: 'Distemper Bucket', description: 'Premium distemper paint with enhanced coverage and durability.', features: ['Sheen Finish', 'Better Coverage', 'Interior Use'], image: 'https://picsum.photos/seed/safari1/400/300' },
      { name: 'Distemper Pouch', description: 'Convenient pouch packaging for small applications.', features: ['Easy To Use', 'Compact', 'Economic Size'], image: 'https://picsum.photos/seed/safari2/400/300' },
      { name: 'Metal Primer', description: 'Premium protective coating for metal surfaces.', features: ['Anti-Rust', 'Strong Adhesion', 'Metal Protection'], image: 'https://picsum.photos/seed/safari3/400/300' },
      { name: 'Cement/Wall Primer', description: 'Premium primer for all types of wall surfaces.', features: ['Enhanced Coverage', 'Better Adhesion', 'Interior/Exterior'], image: 'https://picsum.photos/seed/safari4/400/300' },
      { name: 'Zinc Chrome Metal Primer', description: 'Specialized primer for galvanized and metal surfaces.', features: ['Zinc Chromate', 'Corrosion Resistant', 'Metal Surfaces'], image: 'https://picsum.photos/seed/safari5/400/300' },
      { name: 'Exterior Emulsion', description: 'Premium exterior paint with enhanced weather resistance.', features: ['Long-Lasting', 'Weather Protection', 'Fade Resistant'], image: 'https://picsum.photos/seed/safari6/400/300' },
      { name: 'Interior Emulsion', description: 'Premium interior paint with smooth sheen finish.', features: ['Rich Texture', 'Stain Resistant', 'Sheen Finish'], image: 'https://picsum.photos/seed/safari7/400/300' },
      { name: 'Water Base Enamel', description: 'Water-based enamel paint for wood and metal surfaces.', features: ['Eco-friendly', 'Quick Drying', 'Low Odor'], image: 'https://picsum.photos/seed/safari8/400/300' },
    ],
  },
  {
    id: 'sapphire',
    brand: 'SAPPHIRE',
    title: 'SAPPHIRE',
    description: 'Luxury Emulsion with High Gloss Finish',
    brandColor: 'text-blue-500',
    products: [
      { name: '2in1 Emulsion', description: 'Luxury paint suitable for both interior and exterior applications.', features: ['High Gloss', 'Versatile Use', 'Premium Quality'], image: 'https://picsum.photos/seed/sapphire1/400/300' },
    ],
  },
];

export const COLOR_PALETTES: ColorPalette[] = [
    {
        id: 'acrylic',
        name: 'Acrylic Distemper',
        colors: [
            { name: 'White', hex: '#FFFFFF' },
            { name: 'Pale Cream', hex: '#FFF9C4' },
            { name: 'Daffodil', hex: '#FFEB3B' },
            { name: 'Yellow', hex: '#FFEE58' },
            { name: 'Ivory', hex: '#FFFFF0' },
            { name: 'Liril', hex: '#CCFF90' },
            { name: 'Tango', hex: '#FFCC80' },
            { name: 'Sunrise', hex: '#FF9800' },
            { name: 'Light Green', hex: '#9CCC65' },
            { name: 'Parrot Green', hex: '#00C853' },
            { name: 'Signal Red', hex: '#F44336' },
            { name: 'Sky Blue', hex: '#29B6F6' },
            { name: 'Wild Lilac', hex: '#CE93D8' },
            { name: 'Merry Pink', hex: '#F8BBD0' },
            { name: 'Electric Blue', hex: '#40C4FF' },
            { name: 'Pista', hex: '#AED581' },
            { name: 'Jaipuriya Pink', hex: '#FF80AB' },
            { name: 'Pale Rose', hex: '#F48FB1' },
            { name: 'Aquamarine', hex: '#00BFA5' },
            { name: 'Candy', hex: '#FFCDD2' },
        ],
    },
    {
        id: 'special',
        name: 'Special Emulsion',
        colors: [
            { name: 'Magenta', hex: '#9C27B0' },
            { name: 'Purple', hex: '#8E24AA' },
            { name: 'Lemon Shuffle', hex: '#8BC34A' },
            { name: 'Orange', hex: '#FF9800' },
            { name: 'Yellow', hex: '#FFEB3B' },
            { name: 'Soothing Sapphire', hex: '#1565C0' },
            { name: 'Jolly Holly', hex: '#388E3C' },
            { name: 'Signal Red', hex: '#F44336' },
            { name: 'Sunrise', hex: '#FF9800' },
            { name: 'Terracotta', hex: '#795548' },
        ]
    }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "The Safari Premium Emulsion gave our living room a stunning, vibrant look. The quality is simply outstanding and it was so easy to apply. Highly recommended!",
    name: 'Sarah L.',
    title: 'Homeowner, Colorville',
  },
  {
    quote: "As a professional contractor, I rely on BIG BRIGHT Paints for all my projects. The INOX line offers incredible value and performance. My clients are always happy.",
    name: 'Mark D.',
    title: 'Professional Contractor',
  },
  {
    quote: "We used the SAPPHIRE 2in1 Emulsion for our new office space, and the high-gloss finish is just spectacular. It completely transformed the environment.",
    name: 'Emily R.',
    title: 'Interior Designer',
  },
];