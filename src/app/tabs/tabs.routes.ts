import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

/* aqui se declaran las rutas para las tabs
la direccion '' root lleva a la pagina noticias */
export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'noticias',
        loadComponent: () =>
          import('../noticias/noticias.page').then((m) => m.NoticiasPage),
      },
      {
        path: 'ubicaciones',
        loadComponent: () =>
          import('../ubicaciones/ubicaciones.page').then((m) => m.UbicacionesPage),
      },
      {
        path: 'notificaciones',
        loadComponent: () =>
          import('../notificaciones/notificaciones.page').then((m) => m.NotificacionesPage),
      },
      {
        path: 'preguntas-frecuentes',
        loadComponent: () =>
          import('../preguntas-frecuentes/preguntas-frecuentes.page').then((m) => m.PreguntasFrecuentesPage),
      },
      {
        path: '',
        redirectTo: '/tabs/noticias',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/noticias',
    pathMatch: 'full',
  },
];
