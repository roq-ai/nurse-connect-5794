const mapping: Record<string, string> = {
  applications: 'application',
  organizations: 'organization',
  shifts: 'shift',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
