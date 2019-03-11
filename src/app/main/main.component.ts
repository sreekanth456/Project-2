import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { DropListRef, CdkDrag, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public users1;
  public users2;
  public users3;
  public users4;
  public users5;

  constructor(private _info: InfoService,private dialog:MatDialog) { }

  ngOnInit() {
    this._info.getData().subscribe((data)=>{

      this.users1= Object.values(data.slider_images);
      this.users2=Object.values(data.image_grid);
      this.users3= Object.values(data.banner_array);
      this.users4= Object.values(data.products);
      this.users5= Object.values(data.instagram_images);

    })
  }

  onEdit(){
    const dialogRef= this.dialog.open(EditDialogComponent,{
      width:'330px',
      height:'250px',
      // position: { top: "15px" },
      data:{}
    });
 
    dialogRef.afterClosed().subscribe(result =>{
      alert("User choose ${result}");
 
    });

  }

  onDelete(){

    const dialogRef= this.dialog.open(DeleteDialogComponent,{
      width:'330px',
      height:'250px',
      // position: { bottom : "20px" },
      data:{}
    });
 
    dialogRef.afterClosed().subscribe(result =>{
      alert("User choose ${result}");
 
    });
}

// drop(event: CdkDragDrop<any>) {

// moveItemInArray(event.container,event.previousIndex, event.currentIndex)
// }

}