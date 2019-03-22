import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DeleteDialogComponent } from "../delete-dialog/delete-dialog.component";
import { EditDialogComponent } from "../edit-dialog/edit-dialog.component";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-common-body",
  templateUrl: "./common-body.component.html",
  styleUrls: ["./common-body.component.css"]
})
export class CommonBodyComponent implements OnInit {
  
  @Output() usersChange = new EventEmitter<any>();
  

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  // parent component parsing the data from child component

  @Input() users;
  @Input() type = "default";


  onDelete(index) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: "330px",
      height: "250px",
      // position: { top: "15px" },
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      // alert("User choose ${result}");
      
      console.log(`Dialog result: ${result}`);
      if (result){
      this.users = this.users.filter((users, i) => i !== index)
      }
      this.usersChange.emit(this.users);
    });
  }




  // Edit button

  onEdit(index) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: "330px",
      height: "250px",
      // position: { top: "15px" },
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      // alert("User choose ${result}");

      console.log(`Dialog result: ${result}`);
      this.users[index].name=result
      this.usersChange.emit(this.users);

    });
  }

  // delete button

 
  
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.users, event.previousIndex, event.currentIndex);
    this.usersChange.emit(this.users);
  }
}
