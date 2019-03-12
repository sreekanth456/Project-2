import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-common-body',
  templateUrl: './common-body.component.html',
  styleUrls: ['./common-body.component.css']
})
export class CommonBodyComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  @Input() users;


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
      // position: { top: "15px" },
      data:{}
    });
 
    dialogRef.afterClosed().subscribe(result =>{
      alert("User choose ${result}");
      
 
    });

}

// drop(event : CdkDragDrop<string [] >){

//   if(event.previousContainer === event.container){
//     moveItemInArray(event.container.data,event.previousIndex,event.currentIndex);
//   }else{

//     transferArrayItem(event.previousContainer.data,event.container.data,event.previousIndex,event.currentIndex);

//   }
// }


drop(event: CdkDragDrop<string[]>) {
  moveItemInArray(this.users, event.previousIndex, event.currentIndex);
}

}
