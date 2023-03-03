import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'workspace', loadChildren: () => import('./pages/workspace/workspace.module').then(m => m.WorkspaceModule) },
  { path: 'activity', loadChildren: () => import('./pages/activityPage/activityPage.module').then(m => m.ActivityPageModule) },
  { path: 'demo', loadChildren: () => import('./pages/demoActivity/demoActivity.module').then(m => m.DemoActivityModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
