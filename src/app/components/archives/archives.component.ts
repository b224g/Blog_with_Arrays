import { Component, Input } from '@angular/core';
import { EnregistrementService } from 'src/app/services/enregistrement-service.service';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent {

  @Input() archiveTitre: any;
  archives: any[]=[];

  constructor(private enregistrementservice: EnregistrementService) {
    
    this.archives=enregistrementservice.archives;
  }
}
