import { ApplicationInterface } from 'interfaces/application';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ShiftInterface {
  id?: string;
  start_time: any;
  end_time: any;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  application?: ApplicationInterface[];
  organization?: OrganizationInterface;
  _count?: {
    application?: number;
  };
}

export interface ShiftGetQueryInterface extends GetQueryInterface {
  id?: string;
  organization_id?: string;
}
