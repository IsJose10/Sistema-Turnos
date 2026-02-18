import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { EmpleadosComponent } from './empleado/empleado.component';
import { AsignarTurnoComponent } from './asignar-turno/asignar-turno.component';

@NgModule({
    declarations: [
        LoginComponent,
        EmpleadosComponent,
        AsignarTurnoComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule
    ],
    exports: [
        LoginComponent,
        EmpleadosComponent,
        AsignarTurnoComponent,
    ]
})
export class AppModule { }

