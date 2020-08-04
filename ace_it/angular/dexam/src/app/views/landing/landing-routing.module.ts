import { NgModule } from "@angular/core";
import { BlogDetailsPageComponent } from './blog-details-page/blog-details-page.component';

import { Routes, RouterModule } from '@angular/router';
import { LandingV9Component } from './landing-v9/landing-v9.component';
import { DemosComponent } from './components/demos/demos.component';
import {InvoicepageComponent} from "./pages/invoicepage/invoicepage.component";
import {StudentspageComponent} from "./pages/studentspage/studentspage.component";
import {TutorpageComponent} from "./pages/tutorpage/tutorpage.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {OpportunitiesComponent} from "./pages/opportunities/opportunities.component";
import {ScheduleComponent} from "./pages/schedule/schedule.component";
import {TimePickerComponent} from "./components/time-picker/time-picker.component";
import {DatePickerComponent} from "./components/date-picker/date-picker.component";
import {SideNavComponent} from "./components/side-nav/side-nav.component";
import {BillingComponent} from "./pages/billing/billing.component";
import {ChatComponent} from "./pages/chat/chat.component";
import {QuickGigsComponent} from "./pages/quick-gigs/quick-gigs.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {AuthGuard} from "../helpers/auth.guard";
import {Role} from "../sessions/signin/role";

const routes: Routes = [

  {
    path: "v9",
    component: LandingV9Component
  },
  {
    path: "blog-details",
    component: BlogDetailsPageComponent
  },
    {
    path: 'dashboard',
    component: DashboardComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Student] }
  },
  // {
  //   path: 'billing',
  //   component: InvoicepageComponent
  // },
  {
    path: 'students',
    component: StudentspageComponent,
      canActivate: [AuthGuard],
      data: { roles: [Role.Tutor] }
  },
  {
    path: 'tutors',
    component: TutorpageComponent,
      canActivate: [AuthGuard],
      data: { roles: [Role.Staff] }
  },
  {
    path: 'profile',
    component: ProfileComponent,
      canActivate: [AuthGuard],
      // data: { roles: [Role.Admin] }
  },
   {
    path: 'opportunities',
    component: OpportunitiesComponent,
       canActivate: [AuthGuard],
       data: { roles: [Role.Tutor] }
  },
    {
    path: 'gigs',
    component: QuickGigsComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Tutor] }
  },
   {
    path: 'schedule',
    component: ScheduleComponent,
       canActivate: [AuthGuard],
       // data: { roles: [Role.Admin] }
  },
   {
    path: 'billing',
    component: BillingComponent,
       canActivate: [AuthGuard],
       data: { roles: [Role.Tutor] }
  },
   {
    path: 'chat',
    component: ChatComponent,
       canActivate: [AuthGuard],
       data: { roles: [Role.Staff] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
