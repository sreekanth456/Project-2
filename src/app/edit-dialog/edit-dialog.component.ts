import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  rep:string;

  constructor(public snackbar:MatSnackBar) { }

  ngOnInit() {
  }

  titleSnackBar(){
    const snackbarRef = this.snackbar.open("  Title Changed  SucessFully" , " !" ,{


    })
  }

  redirectSnackBar(){

    const snackbarRef = this.snackbar.open(" Redirect Url Changed SucessFully" , " !" ,{


    })

  }

}
