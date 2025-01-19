export interface MonitoringEvent {
  id: string;
  type: string;
  level: 'info' | 'warning' | 'error';
  message: string;
  metadata?: Record<string, unknown>;
}