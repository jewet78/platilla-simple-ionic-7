import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
/*aqui se declaran las paginas y por donde se acceden
se usa /tab/... primero porque se se lo saco las tabs no funcionan
no se si es optimo.
tambien aparece que tipo de icono ira en el menu
el icono de las tabs se ve en otro lado*/
export class AppComponent {
  public appPages = [
    { title: 'Noticias', url: './tabs/noticias', icon: 'newspaper' },
    { title: 'Ubicaciones', url: './tabs/ubicaciones', icon: 'compass' },
    { title: 'Notificaciones', url: './tabs/notificaciones', icon: 'flag' },
    { title: 'Preguntas frecuentes', url: './tabs/preguntas-frecuentes', icon: 'help-buoy' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
