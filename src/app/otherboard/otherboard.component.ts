import { Component, OnInit } from '@angular/core';
import { ResetService } from '../services/reset.service'

@Component({
  selector: 'app-otherboard',
  templateUrl: './otherboard.component.html',
  styleUrls: ['./otherboard.component.css']
})
export class OtherboardComponent implements OnInit {

  constructor(public reset: ResetService) { }

  ngOnInit() { 
    console.log(this.reset.reset)
  }

  

}
