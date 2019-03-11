import { Component, OnInit, Input } from '@angular/core';
import { InfoService } from '../info.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';


@Component({
  selector: 'app-common-body',
  templateUrl: './common-body.component.html',
  styleUrls: ['./common-body.component.css']
})
export class CommonBodyComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

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

  

}
