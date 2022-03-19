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
