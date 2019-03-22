import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { InfoService } from "../info.service";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  // declaring the variables

  public users1;
  public users2;
  public users3;
  public users4;
  public users5;

  all = [];



  // hide functanality

  indexExpanded: number = -1;

  togglePanels(index: number) {
      this.indexExpanded = index == this.indexExpanded ? -1 : index;
  }



  constructor(private _info: InfoService,private dialog:MatDialog) {}

  ngOnInit() {
    this._info.getData().subscribe(data => {
      this.users1 = Object.values(data.slider_images);
      this.users2 = Object.values(data.image_grid);
      this.users3 = Object.values(data.banner_array);
      this.users4 = Object.values(data.products);
      this.users5 = Object.values(data.instagram_images);

      this.all = [
        { title: "Slider Images", users: this.users1, type: "carousel" },
        { title: "Image Grid", users: this.users2, type: "image_grid" },
        { title: "Banner Images", users: this.users3, type: "image" },
        { title: "Product Grid", users: this.users4, type: "product" },
        { title: "Instagram Grid", users: this.users5, type: "image" }
      ];
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.all, event.previousIndex, event.currentIndex);
    console.log(this.all);
  }


  panelDelete(index) {    
    this.all = this.all.filter((users, i) => i !== index)

  }
  Bookmarks(index){
    this.all = [...this.all, this.all[index]]

  }



}
