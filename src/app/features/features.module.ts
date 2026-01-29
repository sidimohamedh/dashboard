import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ApplicationsComponent } from './applications/applications.component';
import { FeaturesRoutingModule } from './features-routing.module';

@NgModule({
  declarations: [DashboardComponent, UsersComponent, ApplicationsComponent],
  imports: [CommonModule, FeaturesRoutingModule],
})
export class FeaturesModule {}
