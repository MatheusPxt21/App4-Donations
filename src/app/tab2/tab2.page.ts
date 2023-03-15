import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  donateBlood(){
    window.open('https://www.google.com.br/maps/search/pontos+de+doa%C3%A7%C3%A3o+de+sangue', '_blank');
  }

  donateClothes(){
    window.open('https://www.google.com.br/maps/search/pontos+de+doa%C3%A7%C3%A3o+de+roupas', '_blank');
  }

  donateFood(){
    window.open('https://www.google.com.br/maps/search/pontos+de+doa%C3%A7%C3%A3o+de+alimentos/maps/search/pontos+de+doa%C3%A7%C3%A3o+de+roupas', '_blank');
  }

}
