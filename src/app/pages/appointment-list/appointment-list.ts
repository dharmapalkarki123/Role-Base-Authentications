import { Component } from '@angular/core';
import { DoctorOnly } from '../../directives/doctor-only';

@Component({
  selector: 'app-appointment-list',
  imports: [DoctorOnly],
  templateUrl: './appointment-list.html',
  styleUrl: './appointment-list.css',
  standalone: true,
})
export class AppointmentList {}
