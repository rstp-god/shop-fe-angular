import {User} from '../common/interfaces/user';

export interface State {
  id: number
  user: User;
}

export const initialState: State = {
  id: 0,
  user: {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    purchasesSum: 0,
    sex: true,
    bithDate: new Date().toLocaleDateString(),
    password: '',
    isActive: false,
    role: ''
  }
};
