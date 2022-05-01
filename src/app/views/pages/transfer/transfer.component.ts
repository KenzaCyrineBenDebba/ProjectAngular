import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {TransactionService} from "../../../shared/Service/transaction.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Transaction} from "../../../shared/Model/transaction";
import {Claim} from "../../../shared/Model/claim";

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

  listTransactions:any;
  form:boolean=false;
  transaction!:Transaction;
  closeResult!: string;
  claim!:Claim;
  transfer: any="Transfer";
  source: any="online";
  success: string="success";
  failed: string ="failed";
  InsufficientFund: any="Insufficient Fund";
  created_at:any="";
  TransferSuccessful: any="transaction.reason_code";


  constructor(private transactionService: TransactionService, private modalService: NgbModal){}

  ngOnInit(): void {
    this.getTransactions();
    this.transaction= {

      transaction_id:null,

      account_id:null,
      transaction_type:null,
      amount:null,
      source:null,
      status:null,
      reason_code:null,
      created_at:null,
    }
  }

  getTransactions(){
    this.transactionService.getTransactions().subscribe(res=>this.listTransactions=res)
  }

  addTransaction(t:any) {
    this.transactionService.addTransaction(t).subscribe(()=> {
      this.getTransactions();
      this.form = false;
    });
  }

  saveTransfer(f: NgForm){ //f de type ngForm
    console.log(f.value['account_id'],f.value['transaction_type'], f.value['amount'],f.value['source'], f.value['status'],f.value['reason_code'], f.value['created_at']); //pour recuperer le contunu de differents input du form dans la partie console(inspecter)
  }


  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
  closeForm(){

  }
  cancel(){
    this.form = false;
  }

}
