export interface ServicePerformanceV1 {
  service: string;
  from: string;
  to: string;
  avgResponseTime: number;
  up: boolean;
  uptime: number;
  lastCheck: string | null;
  last24Hours: DateServicePerformanceMeasurementV1[];
}

export interface DateServicePerformanceMeasurementV1 {
  service: string;
  date: string;
  avgResponseTime: number;
  uptime: number;
  recordsCount: number;
}

export interface BlocksMeasurementV1 {
  blocks1minute: number;
  blocks5minute: number;
  blocks15minute: number;
  date: string;
}

export interface ValidatorsPerformanceV1 {
  last: ValidatorsMeasurementV1;
  avgTotalValidators: number;
  avgOnlineValidators: number;
  from: string;
  to: string;
}

export interface TpsPerformanceV1 {
  last: TpsMeasurementV1;
  avgTps1Minute: number;
  avgTps5Minute: number;
  avgTps15Minute: number;
  from: string;
  to: string;
}

export interface BlocksPerformanceV1 {
  last: BlocksMeasurementV1;
  avgBlocks1Minute: number;
  avgBlocks5Minute: number;
  avgBlocks15Minute: number;
  from: string;
  to: string;
}

export interface LiteserversPerformanceV1 {
  last: LiteserversMeasurementV1;
  from: string;
  to: string;
}

export interface LiteserversMeasurementV1 {
  online: string[];
  offline: string[];
  averageResponseTime: number;
  outOfSync: string[];
  date: string;
}

export interface ValidatorsMeasurementV1 {
  totalValidators: number;
  onlineValidators: number;
  date: string;
}

export interface TpsMeasurementV1 {
  tps1minute: number;
  tps5minute: number;
  tps15minute: number;
  date: string;
}

export function api(path: string, params: any = {}): Promise<any> {
  return fetch(`http://localhost/${path}?${new URLSearchParams(params)}`).then(
    (r) => r.json()
  );
}

export function getWebserviceHourly(
  service: string,
  from: Date,
  to: Date
): Promise<DateServicePerformanceMeasurementV1[]> {
  const fromStr = from.toUTCString();
  const toStr = to.toUTCString();

  return api(`webservice-hourly/${service}?from=${fromStr}&to=${toStr}`);
}

export function getWebserviceDaily(
  service: string,
  from: Date,
  to: Date
): Promise<DateServicePerformanceMeasurementV1[]> {
  const fromStr = from.toUTCString();
  const toStr = to.toUTCString();

  return api(`webservice-daily/${service}?from=${fromStr}&to=${toStr}`);
}

export function getWebservices(): Promise<ServicePerformanceV1[]> {
  return api("webservices");
}

export function getValidators(): Promise<ValidatorsPerformanceV1> {
  return api("validators");
}

export function getTps(): Promise<TpsPerformanceV1> {
  return api("tps");
}

export function getBlocks(): Promise<BlocksPerformanceV1> {
  return api("blocks");
}

export function getLiteservers(): Promise<LiteserversPerformanceV1> {
  return api("liteservers");
}
