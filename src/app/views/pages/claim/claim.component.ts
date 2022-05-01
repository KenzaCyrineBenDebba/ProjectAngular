import {Component, HostListener, OnInit} from '@angular/core';
import {Claim} from "../../../shared/Model/claim";
import {ClaimService} from "../../../shared/Service/claim.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";
import {Transaction} from "../../../shared/Model/transaction";

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.scss']
})


export class ClaimComponent implements OnInit {
  term: string;
  listClaims:any;
  form:boolean=false;
  claim!:Claim;
  closeResult!: string;
  transaction:Transaction[]=[];
  transaction_type: ({ transaction_type: string } | { transaction_type: string } | { transaction_type: string } | { transaction_type: string })[];





  constructor(private claimService: ClaimService, private modalService: NgbModal){}
  ngOnInit(): void {
    this.getClaims();
    this.transaction_type=[
      {transaction_type:"Transfer"},
      {transaction_type:"deposit"},
      {transaction_type:"Withdrawal"},
      {transaction_type:"Payment"}

    ]

  }
  getClaims(){
    this.claimService.getClaims().subscribe(res=>this.listClaims=res)
  }

  addClaim(t:any) {
    this.claimService.addClaim(t).subscribe(()=> {
      this.getClaims();
      this.form = false;
    });
  }

  editClaim(claim:Claim){
    this.claimService.editClaim(claim).subscribe();
  }

  deleteClaim(claimId:any){
    this.claimService.deleteClaim(claimId).subscribe(()=>this.getClaims());
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

  save(f: NgForm){ //f de type ngForm
    console.log(f.value['account_id'],f.value['claim_type'], f.value['amount'],f.value['source'], f.value['status'],f.value['reason_code'], f.value['created_at'],f.value['claim'],f.value['transaction_id']); //pour recuperer le contunu de differents input du form dans la partie console(inspecter)
  }


}








