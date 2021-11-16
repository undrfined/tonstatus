export interface ServicePerformanceV1 {
  service: string;
  from: Date;
  to: Date;
  avgResponseTime: number;
  up: boolean;
  uptime: number;
  lastCheck: Date | null;
}

export function api(path: string, params: any = {}): Promise<any> {
  return fetch(`http://localhost/${path}?${new URLSearchParams(params)}`).then(
    (r) => r.json()
  );
}

export function getWebservices(): Promise<ServicePerformanceV1[]> {
  return api("webservices");
}
