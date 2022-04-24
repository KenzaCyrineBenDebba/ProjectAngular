import { Component, OnInit } from '@angular/core';
import {Transaction} from "./transaction";
import {TransactionService} from "./transaction.service";
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
