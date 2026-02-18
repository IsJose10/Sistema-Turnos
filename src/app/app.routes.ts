import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmpleadosComponent } from './empleado/empleado.component';
import { AsignarTurnoComponent } from './asignar-turno/asignar-turno.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'empleados', component: EmpleadosComponent, canActivate: [authGuard] },
    { path: 'asignar-turno/:id', component: AsignarTurnoComponent, canActivate: [authGuard] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' }
];