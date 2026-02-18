import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService, Empleado } from '../services/empleado.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-empleados',
  standalone: false,
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadosComponent implements OnInit {
  empleados: Empleado[] = [];
  cargando: boolean = true;

  constructor(
    private empleadoService: EmpleadoService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.empleadoService.getEmpleados().subscribe({
      next: (data) => {
        this.empleados = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar empleados:', err);
        this.cargando = false;
      }
    });
  }

  asignarTurno(id: number): void {
    this.router.navigate(['/asignar-turno', id]);
  }

  cerrarSesion(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}