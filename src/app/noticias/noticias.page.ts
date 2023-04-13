import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PanelNoticiaComponent } from '../panel-noticia/panel-noticia.component';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,PanelNoticiaComponent],
})
export class NoticiasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
