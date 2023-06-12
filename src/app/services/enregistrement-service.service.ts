import { Injectable } from '@angular/core';
import { Enregistrer } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class EnregistrementService {

  enregs: Enregistrer[]=[
    {
      id:0,
      auteur: "Biro Barry",
      enregistrementTitre: "CO-Fondation de la B-Fish",
      categori: "Humanitaire",
      contenu: "Le premier élément que vous allez déporter dans votre service est le tableau des FaceSnaps. Il est important de savoir qu'un service n'a pas de méthode  ngOnInit(), car les services ne sont pas instanciés de la même manière que les components. Il faudra donc déclarer et initialiser le tableau dans la même expression."
    }

  ];


  archives: any[]=[];

  id: number=1;

  creer1_enregistrement(enreg: Enregistrer)
  {
    enreg.id=this.id;
    this.enregs.push(enreg)
    this.id++;
  }

  d_l_Eregistrement(id: number)
  {
    const index = this.enregs.findIndex(enreg =>enreg.id===id);
    if(index !==-1)
    {
      this.enregs.splice(index,1)
    }
  }

  
  f_R_Archive(id: number)
  {
    const index = this.archives.findIndex(enreg => enreg.id===id);
    const enreg = this.archives.find(erg => erg.id===id)
    this.archives.push(enreg?.enregistrementTitre);
    
    if (index!==-1) {
      this.archives.push(enreg)
    }
  }


  constructor() { }
}
