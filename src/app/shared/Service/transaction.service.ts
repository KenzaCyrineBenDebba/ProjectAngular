import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

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



}
