import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { UserEffects } from './state/users/user.effects';
import { appConfig } from './app.config';
import { provideEffects } from '@ngrx/effects';
import { provideServerRendering } from '@angular/platform-server';
import { provideStore } from '@ngrx/store';
import { userReducer } from './state/users/user.reducer';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideStore({ users: userReducer }),
    provideEffects(UserEffects),
    provideHttpClient(withFetch()),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
