import { Routes } from '@angular/router';
/*aqui se ven las rutas de las paginas
tabs es la root, dentro de esta, noticias es la root
 es asi para que las tabs funcionen 
 no se si sea optimo*/
 /*el menu recorre estas direcciones, no tabs
 se pueden poner paginas nuevas al menu sin que aparescan nuevas tabs */
export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },

  {
    path: 'noticias',
    loadComponent: () => import('./noticias/noticias.page').then( m => m.NoticiasPage)
  },
  {
    path: 'ubicaciones',
    loadComponent: () => import('./ubicaciones/ubicaciones.page').then( m => m.UbicacionesPage)
  },
  {
    path: 'notificaciones',
    loadComponent: () => import('./notificaciones/notificaciones.page').then( m => m.NotificacionesPage)
  },
  {
    path: 'preguntas-frecuentes',
    loadComponent: () => import('./preguntas-frecuentes/preguntas-frecuentes.page').then( m => m.PreguntasFrecuentesPage)
  },
  
];
