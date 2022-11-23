import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'firebase-app',
    loadChildren: () =>
      import('./modules/firebase-app/firebase-app.module').then(
        (m) => m.FirebaseAppPageModule
      ),
  },
  {
    path: 'firebase-app-check',
    loadChildren: () =>
      import('./modules/firebase-app-check/firebase-app-check.module').then(
        (m) => m.FirebaseAppCheckPageModule
      ),
  },
  {
    path: 'firebase-performance',
    loadChildren: () =>
      import('./modules/firebase-performance/firebase-performance.module').then(
        (m) => m.FirebasePerformancePageModule
      ),
  },
  {
    path: 'firebase-crashlytics',
    loadChildren: () =>
      import('./modules/firebase-crashlytics/firebase-crashlytics.module').then(
        (m) => m.FirebaseCrashlyticsPageModule
      ),
  },
  {
    path: 'firebase-analytics',
    loadChildren: () =>
      import('./modules/firebase-analytics/firebase-analytics.module').then(
        (m) => m.FirebaseAnalyticsPageModule
      ),
  },
  {
    path: 'firebase-messaging',
    loadChildren: () =>
      import('./modules/firebase-messaging/firebase-messaging.module').then(
        (m) => m.FirebaseMessagingPageModule
      ),
  },
  {
    path: 'firebase-remote-config',
    loadChildren: () =>
      import(
        './modules/firebase-remote-config/firebase-remote-config.module'
      ).then((m) => m.FirebaseRemoteConfigPageModule),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
