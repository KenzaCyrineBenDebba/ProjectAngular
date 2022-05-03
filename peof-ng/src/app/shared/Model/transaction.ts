export class Transaction {

  transaction_id!:any;

  account_id!:any;
  transaction_type!:any;
  amount!:any;
  source!:any;
  status!:any;
  reason_code!:any;
  created_at!:any;

}
export interface CashFLowModel{
    openModal: boolean
    transactionObject :transactionObject
}

export interface transactionObject {
    fromAccount:string
    toAccount:string
    amount:number
}

// this.transaction_type = 'Transfer'
// this.created_at = parseInt(moment().format('x'));
// this.source = 'online'
// this.status = 'success'
// this.reason_code='Transfer Transaction Successful'
