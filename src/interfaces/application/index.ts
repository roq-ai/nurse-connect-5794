import { ShiftInterface } from 'interfaces/shift';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ApplicationInterface {
  id?: string;
  status: string;
  shift_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  shift?: ShiftInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  shift_id?: string;
  user_id?: string;
}
