import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeroComponent } from './components/hero/hero.component';
import { TopPicksComponent } from './components/top-picks/top-picks.component';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { EmailSubscriptionComponent } from './components/email-subscription/email-subscription.component';
import { FeaturesComponent } from './components/features/features.component';


@NgModule({
  declarations: [
    HeroComponent,
    TopPicksComponent,
    DashboardComponent,
    CategoriesComponent,
    EmailSubscriptionComponent,
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
