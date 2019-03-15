import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DeleteDialogComponent } from "../delete-dialog/delete-dialog.component";
import { EditDialogComponent } from "../edit-dialog/edit-dialog.component";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { PannelDeleteDialogComponent } from "../pannel-delete-dialog/pannel-delete-dialog.component";


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
  @Input() type='default';


  // Edit button 

  onEdit() {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: "330px",
      height: "250px",
      // position: { top: "15px" },
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      alert("User choose ${result}");
    });
  }

  // delete button 

  onDelete() {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: "330px",
      height: "250px",
      // position: { top: "15px" },
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      // alert("User choose ${result}");
    });
  }

  // panel delete buuton info 

  panelDelete() {
    var dialogRef = this.dialog.open(PannelDeleteDialogComponent, {
      width: "330px",
      height: "250px",
      // position: { top: "15px" },
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      // alert("User choose ${result}");
    });
  }

  

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.users, event.previousIndex, event.currentIndex);
    this.usersChange.emit(this.users);
  }


}
