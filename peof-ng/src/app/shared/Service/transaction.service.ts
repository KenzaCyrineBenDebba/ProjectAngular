import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Subject } from 'rxjs';
import { CashFLowModel, transactionObject } from "../Model/transaction";
@Injectable({
  providedIn:'root'
}) 
export class TransactionService{
  readonly apiServerUrl='http://localhost:8083';
  constructor(private http:HttpClient){}

  getTransactions(){
    return this.http.get('http://localhost:8083/SpringMVC/transaction/retrieve-all-transactions');
  }

  addTransaction(transaction: any){
    return this.http.post('http://localhost:8083/SpringMVC/transaction/add-transaction',transaction);
  }

  editTransaction(transaction: any){
    return this.http.put('http://localhost:8083/SpringMVC/transaction/modify-transaction', transaction);
  }

  deleteTransaction(transactionId: any){
    return this.http.delete('http://localhost:8083/SpringMVC/transaction/remove-transaction/'+transactionId);
  }

  getAccounts(){
      return this.http.get('http://localhost:8083/SpringMVC/transaction/retrieve-all-accounts');
  }

  getAccountBalance(accountID: any){
      return this.http.get('http://localhost:8083/SpringMVC/transaction/getAccountBalance'+accountID);
  }

  changeAccountBalanceById(newBalance:any , accountID:any){
      return this.http.put('http://localhost:8083/SpringMVC/transaction/changeaccountbalancebyid', +newBalance +accountID);

  }

    transactionSubject = new Subject()
    $transactionSubject = this.transactionSubject.asObservable()

    approveTransactionSubject = new Subject()
    $approveTransactionSubject = this.approveTransactionSubject.asObservable()
    sendMoneyAction(value : CashFLowModel){
        this.transactionSubject.next(value)
    }

    approveTransaction(value : transactionObject){
        this.approveTransactionSubject.next(value)
    }





}
