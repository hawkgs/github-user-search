import { InjectionToken } from '@angular/core';

export interface AppConfig {
  apiUrl: string;
  pageSize: number;
}

export const AppConfigToken = new InjectionToken<AppConfig>('app.config');

export const Config: AppConfig = {
  apiUrl: 'https://api.github.com',
  pageSize: 5
};

