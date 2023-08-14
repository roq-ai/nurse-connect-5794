interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Healthcare Facility Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Nurse User', 'Healthcare Facility Owner', 'Healthcare Facility Manager', 'Healthcare Staffing Agency'],
  tenantName: 'Organization',
  applicationName: 'Nurse Connect',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
