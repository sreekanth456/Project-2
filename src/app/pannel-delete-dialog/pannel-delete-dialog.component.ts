import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pannel-delete-dialog',
  templateUrl: './pannel-delete-dialog.component.html',
  styleUrls: ['./pannel-delete-dialog.component.css']
})
export class PannelDeleteDialogComponent implements OnInit {

  rep:string;

  constructor(private snackbar:MatSnackBar) { }

  ngOnInit() {
  }

  deleteSnackBar(){
    const snackbarRef = this.snackbar.open('Delete Sucess fully',' UNDO ',{

     horizontalPosition:'start'

    });
    snackbarRef.onAction().subscribe((result)=>{
     alert("Undo the save")
   })


 }

 backSnackBar(){

   const snackbarRef = this.snackbar.open(' Information canot delete', ' UNDO',{

     horizontalPosition:"left"
   });
   snackbarRef.onAction().subscribe((result)=>{
     alert("Undo the save")
   })

 }

}
