import { Component,Input } from '@angular/core';
import { Enregistrer } from 'src/app/app.component';
import { EnregistrementService } from 'src/app/services/enregistrement-service.service';

@Component({
  selector: 'app-enregistrement',
  templateUrl: './enregistrement.component.html',
  styleUrls: ['./enregistrement.component.css']
})
export class EnregistrementComponent {
  
  @Input()id:any;
  @Input()auteur:any;
  @Input()enregistrementTitre: any;
  @Input()categori: any;
  @Input()contenu:any;
 

  enregs: Enregistrer[]=[];
  

  constructor(private enregistrementservice: EnregistrementService){
    this.enregs=enregistrementservice.enregs
  }

  d_l_Eregistrement(id: number)
  {
    this.enregistrementservice.d_l_Eregistrement(id);
  }

  f_R_Archive(id: number){
    this.enregistrementservice.f_R_Archive(id);
  }
}
