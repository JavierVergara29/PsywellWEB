import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app-routing.module'; // Asegúrate de que las rutas estén disponibles

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // Asegúrate de proveer las rutas aquí
  ]
})
.catch(err => console.error(err));
