import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proy01.2';
  xnombre: string = "Josese";
  xap:string = "Miranda"
  xam:string = "Martinez"
  xedad: number = 20;

  sumar(val1: number, val2: number){
    return val1+val2;
  }

  xfrutas: string[]=["Naranja","Manzana","Platano","Limon","Papaya"];
  ximg: string = "1200px-Tux.png"
  xbusc: string = "https://www.duckduckgo.com"

  ximg2:string = "assets/Images/Logo-Android.png"
  xaltura:string = "600px"
  xancho:string = "600px"
  xbusc2:string = "https://www.yahoo.com"

  xval="123457"

  xcolor: string = "rojo"

  cambiar(){
      this.ximg = "Logo-Android.png"
  }

  xmensaje="";

}
