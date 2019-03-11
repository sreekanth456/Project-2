import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  public users1;
  public users2;
  public users3;
  public users4;
  public users5;

  
  constructor(private _info: InfoService) { }

  ngOnInit() {
    this._info.getData().subscribe((data)=>{

      this.users1= Object.values(data.slider_images);
      this.users2=Object.values(data.image_grid);
      this.users3= Object.values(data.banner_array);
      this.users4= Object.values(data.products);
      this.users5= Object.values(data.instagram_images);

    })
  }


}
