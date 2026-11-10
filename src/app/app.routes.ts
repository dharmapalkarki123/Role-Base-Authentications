import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { Patients } from './pages/patients/patients';
import { AppointmentList } from './pages/appointment-list/appointment-list';
import { Dashboard } from './pages/dashboard/dashboard';
import { NewAppointment } from './pages/new-appointment/new-appointment';
import { authGuard } from './guard/auth-guard';
import { NoAccess } from './pages/no-access/no-access';
import { roleCheckGuard } from './guard/role-check-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'layout',
    component: Layout,
    canActivate:[authGuard],
    children: [

      {
        path: 'new',
        component: NewAppointment,
        canActivate:[roleCheckGuard]
      },
      {
        path: 'patients',
        component: Patients,
        canActivate:[roleCheckGuard]
      },
      {
        path: 'appointmentList',
        component: AppointmentList,
        canActivate:[roleCheckGuard]
      },
      {
        path: 'dashboard',
        component: Dashboard,
        canActivate:[roleCheckGuard]
      },
      {
        path:'no-access',
        component:NoAccess,

      }
    ]
  }



];
