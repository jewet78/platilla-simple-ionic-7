import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
/*es el componen card para las noticias, 
lo separe para dejar mas limpia la pagina noticias 
en caso de modificaciones imprevistas */

@Component({
  selector: 'app-panel-noticia',
  templateUrl: './panel-noticia.component.html',
  styleUrls: ['./panel-noticia.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class PanelNoticiaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
