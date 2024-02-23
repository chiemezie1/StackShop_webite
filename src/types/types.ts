export type ErrorResponse = {
  code: string;
  message?: string;
  issues?: { message: string }[];
};

export type UserInfo = {
  email?: string;
  country?: string;
  givenName?: string;
  familyName?: string;
  phoneNumber?: string;
  postalCode?: string;
  streetAddress?: string;
  locality?: string;
  birthdate?: string;
  gender?: string;
};

export interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}
export interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface CartContextValue {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
}

export interface ProductDisplayProps {
  addToCart: (item: any) => void;
  number?: number;
  gender: string;
  country: string;
}

export interface ImageResources {
  [key: string]: {
    src: string;
  };
}