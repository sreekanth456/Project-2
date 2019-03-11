import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { SubComponent } from "./sub/sub.component";

const routes: Routes = [
  { path: "", redirectTo: "/main", pathMatch: "full" },
  {
    path: "main",
    component: MainComponent
  },

  {
    path: "sub",
    component: SubComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
