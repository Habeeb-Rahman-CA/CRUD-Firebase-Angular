import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environment/environment';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp(environment.firebase)), provideFirebaseApp(() => initializeApp({"projectId":"first-project-63541","appId":"1:338181206584:web:d505734a4ce3da55a1accd","storageBucket":"first-project-63541.firebasestorage.app","apiKey":"AIzaSyB4ncy09_AxpvKUlYb-rJ6nHF34du0OkiU","authDomain":"first-project-63541.firebaseapp.com","messagingSenderId":"338181206584"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
