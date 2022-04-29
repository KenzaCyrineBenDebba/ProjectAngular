import { Component, OnInit } from '@angular/core';
import {Transaction} from "./shared/Model/transaction";
import {TransactionService} from "./shared/Service/transaction.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nobleui-angular';
  ngOnInit(): void {}


}

