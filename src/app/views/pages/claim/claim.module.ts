import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ClaimComponent} from "./claim.component";
import {Ng2SearchPipeModule} from "ng2-search-filter";

const routes: Routes = [
  {
    path: '',
    component: ClaimComponent
  }
]

@NgModule({
  declarations: [ClaimComponent],
  bootstrap: [ClaimComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    Ng2SearchPipeModule

  ]
})
export class ClaimModule {

}
