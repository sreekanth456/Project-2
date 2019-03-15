import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  @Input() users1;
  @Input() users2;
  @Input() users3;
  @Input() users4;
  @Input() users5;


  
  constructor() { }

  ngOnInit() {


  }


}
