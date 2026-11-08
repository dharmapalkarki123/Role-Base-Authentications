import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { Patients } from './pages/patients/patients';
import { AppointmentList } from './pages/appointment-list/appointment-list';
import { Dashboard } from './pages/dashboard/dashboard';
import { NewAppointment } from './pages/new-appointment/new-appointment';
import { Employees } from './pages/employees/employees';

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
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'new',
        component: NewAppointment
      },
      {
        path: 'patients',
        component: Patients
      },
      {
        path: 'appointmentList',
        component: AppointmentList
      },
      {
        path: 'employee',
        component: Employees
      }
    ]
  }



];
