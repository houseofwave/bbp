
export interface NavLink {
  href: string;
  label: string;
}

export interface Product {
  name: string;
  description: string;
  features: string[];
  image: string;
}

export interface ProductLine {
  id: string;
  brand: string;
  title: string;
  description: string;
  brandColor: string;
  products: Product[];
}

export interface Color {
    name: string;
    hex: string;
}

export interface ColorPalette {
    id: string;
    name: string;
    colors: Color[];
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}