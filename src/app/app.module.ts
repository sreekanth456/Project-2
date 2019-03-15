import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { InfoService } from "./info.service";

//angular materials module
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// reactive forms modules
import { ReactiveFormsModule } from "@angular/forms";


// Components

import { MainComponent } from "./main/main.component";
import { SubComponent } from "./sub/sub.component";
import { DeleteDialogComponent } from "./delete-dialog/delete-dialog.component";
import { EditDialogComponent } from "./edit-dialog/edit-dialog.component";
import { CommonBodyComponent } from "./common-body/common-body.component";
import { PannelDeleteDialogComponent } from './pannel-delete-dialog/pannel-delete-dialog.component';


//material modules
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatBadgeModule } from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';

// Virtual scrolling and drag and drop modules
import { ScrollDispatchModule } from "@angular/cdk/scrolling";
import { DragDropModule } from "@angular/cdk/drag-drop";


// carouselModule

import { UICarouselModule } from "ui-carousel";



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SubComponent,
    DeleteDialogComponent,
    EditDialogComponent,
    CommonBodyComponent,
    PannelDeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule,
    HttpClientModule,
    MatDialogModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSnackBarModule,
    ScrollDispatchModule,
    DragDropModule,
    MatBadgeModule,
    UICarouselModule
  ],
  providers: [InfoService],
  bootstrap: [AppComponent],
  entryComponents: [EditDialogComponent, DeleteDialogComponent,PannelDeleteDialogComponent]
})
export class AppModule {}
