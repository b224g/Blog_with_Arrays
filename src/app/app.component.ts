import { Component } from '@angular/core';
import { EnregistrementService } from './services/enregistrement-service.service';

export class Enregistrer{
  constructor(
    public id:number,
    public auteur: string,
    public enregistrementTitre: string,
    public categori: string,
    public contenu: string

  ){}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  enregs: Enregistrer[]=[];
  archives: any []=[];
  titre: any ='';

  constructor(private enregistrementservice: EnregistrementService) {
    this.enregs=enregistrementservice.enregs
    this.archives=enregistrementservice.archives;
  }

  id:number=0;
  auteur: string="";
  enregistrementTitre: string="";
  categori:string="";
  contenu: string="";

  creer1_enregistrement()
  {
    if(this.auteur!='' && this.enregistrementTitre!='' && this.categori!='' && this.contenu !='')
      this.enregistrementservice.creer1_enregistrement(new Enregistrer(this.id, this.auteur, this.enregistrementTitre, this.categori, this.contenu));
  }

}
