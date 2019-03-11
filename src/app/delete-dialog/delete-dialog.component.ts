import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(public snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  deleteSnackBar(){
     const snackbarRef = this.snackbar.open('Delete Sucess fully',' Image ',{

     });

  }

  backSnackBar(){

    const snackbarRef = this.snackbar.open(' Information canot delete', ' ?',{


    })
  }

 
  

}
