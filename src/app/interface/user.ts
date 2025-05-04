export interface User {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  password: string;
  age: number;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;

    zip: string;
    country: string;
  };
  isActive: boolean;
  createdAt: string;
  roles: string[];
  image: string;
}

export interface ApiResponse extends User {
  limit: number;
  skip: number;
  total: number;
  users: User[];
}

export interface RequestBody {
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  age: number;
}
