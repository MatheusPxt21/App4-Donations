import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  openMaps(url: string){
    window.open(url, '_blank');
  }

  donateBlood(){
    this.openMaps('https://www.google.com.br/maps/search/pontos+de+doa%C3%A7%C3%A3o+de+sangue');
  }

  donateClothes(){
    this.openMaps('https://www.google.com.br/maps/search/pontos+de+doa%C3%A7%C3%A3o+de+roupas')
  }

  donateFood(){
    this.openMaps('https://www.google.com.br/maps/search/pontos+de+doa%C3%A7%C3%A3o+de+alimentos/maps/search/pontos+de+doa%C3%A7%C3%A3o+de+roupas')
  }




}
