import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private _url:string="/assets/data/demo.json";

  constructor(private _http:HttpClient, private _dialog:MatDialog) { }

  getData():any{
    return this._http.get<any>(this._url);
  }


  onEdit(){

  }
  



  // openConfirmDialog(msg){
  //   this._dialog.open(MatConfirmDialogComponent,{
  //     width:'390px',
  //     panelClass: 'confirm-dialog-container',
  //     disableClose: true,
  //     position: { top: "15px" },
  //     data :{
  //       message : msg 
  //     }

  //   });
  // }



}
