import { Component } from '@angular/core';
import { LoggerService } from '../service/logger.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  count:number = 0;

  constructor(private logger:LoggerService){
  }

  onClick(){
    this.count++;
    this.logger.writeCount(this.count);
  }

}
