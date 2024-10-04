import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Patient {
  id: string;
  name: string;
  age: number;
  diagnosis: string;
  emotionalStatus: string; // Agregar la propiedad emotionalStatus
}

@Component({
  selector: 'app-patients-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientsListComponent {
  filteredPatients: Patient[] = [
    { id: '1', name: 'Cristina Zapata', age: 25, diagnosis: 'Depresión', emotionalStatus: 'Estable' },
    { id: '2', name: 'Juan Pérez', age: 30, diagnosis: 'Ansiedad', emotionalStatus: 'Moderado' },
    { id: '3', name: 'Ana García', age: 28, diagnosis: 'Estrés', emotionalStatus: 'Severo' }
  ];

  selectPatient(patient: Patient) {
    console.log(`Selected patient: ${patient.name}`);
  }

  onSearch(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredPatients = this.filteredPatients.filter(patient =>
      patient.name.toLowerCase().includes(query)
    );
  }
}
