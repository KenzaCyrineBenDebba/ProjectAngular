import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Transaction} from "../Model/transaction";

@Injectable({
  providedIn:'root'
})
export class ClaimService{
  transaction: Transaction= new Transaction(); //nest7a9hech yodhhorli

  readonly apiServerUrl='http://localhost:8083';
  constructor(private http:HttpClient){}

  getClaims(){
    return this.http.get('http://localhost:8083/SpringMVC/claim/retrieve-all-claims');
  }


  addClaim(claim: any){
    return this.http.post('http://localhost:8083/SpringMVC/claim/add-claim',claim);
  }

  editClaim(claim: any){
    return this.http.put('http://localhost:8083/SpringMVC/claim/modify-claim', claim);
  }

  deleteClaim(claimId: any){
    return this.http.delete('http://localhost:8083/SpringMVC/claim/remove-claim/'+claimId);
  }



}
