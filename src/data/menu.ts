import { MenuItem, Branch } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'Party Jollof Rice + Chicken',
    description: 'Smoky Nigerian Jollof rice served with oversized grilled chicken and spicy plantain.',
    price: 3500,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80&w=800',
    badge: 'Best Seller'
  },
  {
    id: 'm2',
    name: 'Rice + Fresh Fish',
    description: 'White rice or Jollof served with fresh, peppered Tilapia fish.',
    price: 3300,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'm3',
    name: 'Signature Chicken Shawarma',
    description: 'Double sausage, extra cream, and spicy grilled chicken in a soft wrap.',
    price: 3500,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&q=80&w=800',
    badge: 'Fan Favorite'
  },
  {
    id: 's1',
    name: 'Fried Plantain (Dodo)',
    description: 'Sweet, ripe fried plantain portions.',
    price: 600,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's2',
    name: 'Moin Moin',
    description: 'Steamed bean pudding with fish and egg.',
    price: 800,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1610450949065-1f2842426ddc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'd1',
    name: 'Chilled Zobo Drink',
    description: 'Natural Hibiscus drink with ginger and pineapple hints.',
    price: 700,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1543157145-f71f653456f9?auto=format&fit=crop&q=80&w=800'
  }
];

export const BRANCHES: Branch[] = [
  {
    id: 'b1',
    name: 'Ilorin Main',
    address: 'Post Office Area, Ilorin',
    city: 'Ilorin',
    coords: { lat: 8.4799, lng: 4.5418 }
  },
  {
    id: 'b2',
    name: 'Ikeja Branch',
    address: 'Allen Avenue, Ikeja',
    city: 'Lagos',
    coords: { lat: 6.5966, lng: 3.3532 }
  },
  {
    id: 'b3',
    name: 'Ibadan North',
    address: 'UI Gate Area, Ibadan',
    city: 'Ibadan',
    coords: { lat: 7.4435, lng: 3.9003 }
  }
];
