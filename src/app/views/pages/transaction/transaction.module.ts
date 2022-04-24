import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {TransactionComponent} from "./transaction.component";
import {Ng2SearchPipeModule} from "ng2-search-filter";

const routes: Routes = [
  {
    path: '',
    component: TransactionComponent
  }
]

@NgModule({
  declarations: [TransactionComponent],
  bootstrap: [TransactionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    Ng2SearchPipeModule

  ]
})
export class TransactionModule {

}
