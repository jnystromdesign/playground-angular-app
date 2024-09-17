export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: Address;
}

export interface UserCreation {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: Address;
}

export interface Address {
  street: string;
  city: string;
  zipcode: string;
}
