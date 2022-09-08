export interface User {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  purchasesSum: number;
  sex: boolean;
  bithDate: string;
  password: string;
  isActive: boolean;
  role: string;
}

export interface LoginBody {
  phone: string;
  password: string;
}

export interface UserBody {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  sex: boolean;
  bithDate: string;
  password: string;
}


export interface Response {
  message: string;
  response: string;
  status: number;
}
