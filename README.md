SISTEMA DE TURNOS – PRUEBA TÉCNICA


TECNOLOGÍAS UTILIZADAS
- Angular 19
- TypeScript
- HTML / CSS (Diseño responsive)
- RxJS
- LocalStorage
- API externa: https://jsonplaceholder.typicode.com/users


FUNCIONALIDADES PRINCIPALES

1) AUTENTICACIÓN (LOGIN)
- Vista de login como pantalla inicial
- Formulario reactivo con validaciones (Email y Password)
- Credenciales configurables en auth.service.ts
- Redirección automática a /empleados al iniciar sesión
- Botón de cerrar sesión visible en todas las vistas internas
- Evita navegar sin sesión activa

2) LISTADO DE EMPLEADOS
- Se consumen datos desde la API pública
- Vista con cards que muestran: nombre, email y botón "Asignar turno"
- Diseño moderno, profesional

3) ASIGNACIÓN DE TURNOS
- Formulario con validaciones:
  * Fecha obligatoria
  * Hora inicio obligatoria
  * Hora fin obligatoria
  * Hora fin mayor que hora inicio
- Mensaje de éxito al guardar
- Los turnos se guardan en localStorage

4) PERSISTENCIA
- Los turnos se guardan en localStorage
- No se pierden al recargar la página

5) RESPONSIVE DESIGN
- Total adaptabilidad a desktop, tablet y móvil


CREDENCIALES DE PRUEBA
Se pueden modificar en:
src/app/core/services/auth.service.ts

Valores por defecto:
Email: admin@test.com
Password: 123456


CÓMO EJECUTAR EL PROYECTO

1. Instalar dependencias:
   npm install

2. Ejecutar servidor:
   ng serve

3. Abrir en navegador:
   http://localhost:4200



FLUJO DE USO
1. Abrir /login
2. Iniciar sesión
3. Redirección a /empleados
4. Seleccionar empleado
5. Asignar turno
