import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  rep:string;

  constructor(public snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  deleteSnackBar(){
     const snackbarRef = this.snackbar.open('Delete Sucess fully',' UNDO ',{

      horizontalPosition:'start'

     });
     snackbarRef.onAction().subscribe((result)=>{
      // alert("Undo the save")
    })


  }

  backSnackBar(){

    const snackbarRef = this.snackbar.open(' Information canot delete', ' UNDO',{

      horizontalPosition:"left"
    });
    snackbarRef.onAction().subscribe((result)=>{
      // alert("Undo the save")
    })

  }

 
  

}
