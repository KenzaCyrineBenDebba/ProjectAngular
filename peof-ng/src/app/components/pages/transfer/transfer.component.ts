import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Transaction, transactionObject } from 'src/app/shared/Model/transaction';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import {TransactionService} from '../../../shared/Service/transaction.service';



@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
    listTransactions: any;
    listAccounts: any;

    form = false;
    transaction!: Transaction;
    TransactionsObject!: transactionObject;
    accountBalance: any;
    closeResult!: string;

    b1: any;
    b2: any;
    fromAccount: any ;
    toAccount: any ;
    account_id:any;

    transaction_type = 'Transfer';
    source = 'online';
    status = 'success';
    reason_code = 'Transfer Transaction Successful';
    created_at: any;
    transferForm: FormGroup;
    completeDate: Date;

    constructor(private transactionService: TransactionService, private modalService: NgbModal){

        this.completeDate = new Date();
        this.created_at = this.completeDate.toISOString();
        this.created_at = this.created_at.substring(0, this.created_at.length - 1);
    }

  ngOnInit(): void {
      this.getTransactions();
      this.transaction = {

          transaction_id: null,

          account_id: null,
          transaction_type: null,
          amount: null,
          source: null,
          status: null,
          reason_code: null,
          created_at: null,
      };
  }
    getTransactions(){
        this.transactionService.getTransactions().subscribe(res => this.listTransactions = res);
    }
    addTransaction(t: any) {
        this.transactionService.addTransaction(t).subscribe(() => {
            this.getTransactions();
            this.form = false;
        });
    }

    editTransaction(transaction: Transaction){
        this.transactionService.editTransaction(transaction).subscribe();
    }

    deleteTransaction(transactionId: any){
        this.transactionService.deleteTransaction(transactionId).subscribe(() => this.getTransactions());
    }

    getAccounts(){
        this.transactionService.getAccounts().subscribe(res => this.listAccounts = res);
    }

    getAccountBalance(accountID: any){
        this.transactionService.getAccountBalance(accountID).subscribe(res => this.accountBalance = res);
    }

    changeAccountBalanceById(newBalance: any , accountID: any){
        this.transactionService.changeAccountBalanceById(newBalance, accountID).subscribe();
    }



    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
    open(content: any) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    cancel(){
        this.form = false;
    }

    submit() {
        console.log('submitted:', );

        if (!this.transferForm.valid) {
            return alert('Please fill up all fields properly');
        }
        this.transactionService.sendMoneyAction({openModal: true, transactionObject: this.transferForm.value, });
    }

    change(){

    }

}
