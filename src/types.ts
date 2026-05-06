export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'mains' | 'sides' | 'extras' | 'drinks';
  image: string;
  badge?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  city: string;
  coords: { lat: number; lng: number };
}
