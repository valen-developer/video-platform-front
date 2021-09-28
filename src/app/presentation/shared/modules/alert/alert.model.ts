export type alertTypes = 'succes' | 'warning' | 'danger' | 'info';

export class Alert {
  uuid: string;
  message: string;
  type: alertTypes;
  autoClose: boolean;
  fadeOut?: boolean;
}
