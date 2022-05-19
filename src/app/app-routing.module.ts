import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'route1',
    loadChildren: () =>
      import('./float-banner/float-banner.module').then(
        (m) => m.FloatBannerModule
      ),
  },
  {
    path: 'route3',
    loadChildren: () =>
      import('./countdown-timer/countdown-timer.module').then(
        (m) => m.CountdownTimerModule
      ),
  },
  {
    path: 'route4',
    loadChildren: () =>
      import('./timer-v2/timer-v2.module').then((m) => m.TimerV2Module),
  },

  {
    path: 'route6',
    loadChildren: () =>
      import('./dynamic-div/dynamic-div.module').then(
        (m) => m.DynamicDivModule
      ),
  },
  { path: 'route5', loadChildren: () => import('./marks-table/marks-table.module').then(m => m.MarksTableModule) },
  { path: 'route2', loadChildren: () => import('./product-view/product-view.module').then(m => m.ProductViewModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
