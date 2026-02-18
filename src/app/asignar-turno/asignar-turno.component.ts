import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { EmpleadoService, Empleado } from '../services/empleado.service';

@Component({
  selector: 'app-asignar-turno',
  standalone: false,
  templateUrl: './asignar-turno.component.html',
  styleUrl: './asignar-turno.component.css'
})
export class AsignarTurnoComponent implements OnInit {
  turnoForm: FormGroup;
  empleado: Empleado | null = null;
  empleadoId: number = 0;
  turnoGuardado: boolean = false;
  cargando: boolean = true;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private empleadoService: EmpleadoService,
    private authService: AuthService
  ) {
    this.turnoForm = this.fb.group({
      fecha: ['', Validators.required],
      horaInicio: ['', Validators.required],
      horaFin: ['', Validators.required],
    }, { validators: this.validarHoras });
  }

  ngOnInit(): void {
    this.empleadoId = Number(this.route.snapshot.paramMap.get('id'));
    this.empleadoService.getEmpleado(this.empleadoId).subscribe({
      next: (data) => {
        this.empleado = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar el empleado', err);
        this.cargando = false;
      }
    });
  }

  validarHoras(control: AbstractControl): ValidationErrors | null {
    const horaInicio = control.get('horaInicio')?.value;
    const horaFin = control.get('horaFin')?.value;
    if (horaInicio && horaFin && horaFin <= horaInicio) {
      return { horaInvalida: true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.turnoForm.invalid) {
      this.turnoForm.markAllAsTouched();
      return;
    }
    console.log('Turno asignado', {
      empleadoId: this.empleadoId,
      ...this.turnoForm.value
    });
    this.turnoGuardado = true;
    setTimeout(() => {
      this.router.navigate(['/empleados']);
    }, 3000);
  }

  volver(): void {
    this.router.navigate(['/empleados']);
  }

  cerrarSesion(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}