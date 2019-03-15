import { Component, OnInit, EventEmitter, Output, Input} from "@angular/core";
import { InfoService } from "../info.service";
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {

// declaring the variables

@Output() allChange = new EventEmitter<any>(); 

  public users1;
  public users2;
  public users3;
  public users4;
  public users5;
  

all=[];


  constructor(private _info: InfoService) {}

  ngOnInit() {
    this._info.getData().subscribe(data => {
      this.users1 = Object.values(data.slider_images);
      this.users2 = Object.values(data.image_grid);
      this.users3 = Object.values(data.banner_array);
      this.users4 = Object.values(data.products);
      this.users5 = Object.values(data.instagram_images);
      
      this.all=[
        {title:"Slider Images",users: this.users1},
        {title:"Image Grid",users: this.users2},
        {title:"Banner Images",users: this.users3},
        {title:"Product Grid",users: this.users4},
        {title:"Instagram Grid",users: this.users5},
      ]
    });

    
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.all, event.previousIndex, event.currentIndex);
    console.log(this.all);
    this.allChange.emit(this.all);

  }

}
