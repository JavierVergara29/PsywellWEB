import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-details',
  standalone: true, // Asegúrate de que el componente es standalone si así lo usas
  imports: [CommonModule], // Agrega CommonModule a los imports
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent {
  patientId: string | null = null;
  patientDetails: any = {};

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtener el ID del paciente desde la URL
    this.patientId = this.route.snapshot.paramMap.get('id');

    // Lógica para cargar los detalles del paciente en base al ID
    this.patientDetails = this.getPatientDetails(this.patientId);
  }

  // Método simulado para obtener los detalles del paciente (reemplazar con datos reales)
  getPatientDetails(id: string | null) {
    const patients = [
      { id: '1', name: 'Cristina Zapata', age: 25, diagnosis: 'Depresión', notes: 'Paciente en seguimiento.' },
      { id: '2', name: 'Juan Pérez', age: 30, diagnosis: 'Ansiedad', notes: 'Sesiones semanales de terapia.' }
    ];
    return patients.find(patient => patient.id === id);
  }
}
