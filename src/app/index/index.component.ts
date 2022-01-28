import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RetraitserviceService } from '../retraitservice.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  option = "Orange Money";
  frais = 0;
  fraisc = 0;
  values = 0;
  retrait: any;
  retraitc: any;
  nombreRetrait = 0;
  tabRetrait: any;
  attention = "";
  concurence = "";
  selected = 'om';
  inpt='';
  gain='';


  constructor(private retraiservice: RetraitserviceService) {
  }

  ngOnInit(): void {

  }

  changeom() {
    this.option = "Orange Money";
    this.attention = "";
    this.concurence = "";
    this.nombreRetrait=0;
    this.inpt='';
    this.frais=0;
    this.gain='';

  }

  changemomo() {
    this.option = "Mobile Money";
    this.attention = "";
    this.concurence = "";
    this.nombreRetrait=0;
    this.inpt='';
    this.frais=0;
    this.gain='';

  }

  onKey(event: any) {
    if ((event.target.value >= 100) && (event.target.value % 5 == 0) && (this.isInt(event.target.value) == true) && (event.target.value <= 500000)) {
      if (this.option == "Orange Money") {
        let resp = this.retraiservice.getRetrait("om", event.target.value);
        resp.subscribe(data => {
          this.retrait = data;
          this.frais = this.retrait.frais;
          console.log(data);
          this.nombreRetrait = this.retrait.sommes.length;
          this.tabRetrait = this.retrait.sommes;
          this.gain = "Les frais initiaux étaient de : "+this.retrait.initial;
        });

        /*let res = this.retraiservice.getRetrait("momo", event.target.value);
        res.subscribe(data => {
          this.retraitc = data;
          this.fraisc = this.retraitc.frais;

          if (this.fraisc < this.frais) {

            this.concurence = "Mobile money propose des frais à " + this.fraisc + " pour le même montant";
          }
          else {
            this.concurence = "";
          }
        });*/

        this.attention = "";
      }
      else if ((this.option == "Mobile Money") && (event.target.value % 5 == 0) && (this.isInt(event.target.value) == true) && (event.target.value <= 500000)) {
        let resp = this.retraiservice.getRetrait("momo", event.target.value);
        resp.subscribe(data => {
          this.retrait = data;
          this.frais = this.retrait.frais;
          this.nombreRetrait = this.retrait.sommes.length;
          this.tabRetrait = this.retrait.sommes;
          this.gain = "Les frais initiaux étaient de : "+this.retrait.initial;

        });

        /*let res = this.retraiservice.getRetrait("momo", event.target.value);
        res.subscribe(data => {
          this.retraitc = data;
          this.fraisc = this.retraitc.frais;

          if (this.fraisc < this.frais) {

            this.concurence = "Orange money propose des frais à " + this.fraisc + " pour le même montant";
          }
          else {
            this.concurence = "";
          }
        });*/

        this.attention = "";
      }
    }
    else if ((this.isInt(event.target.value) == false) || (event.target.value % 5 != 0) || (event.target.value > 500000)) {
      this.attention = "Nb : La sommes doit respecter le système monétaire du Cameroun et doit être en chiffre et être inférieur à 500.000 xaf";
      this.nombreRetrait = 0;
      this.frais = 0;
      this.gain='';
    }
    else {
      this.nombreRetrait = 0;
      this.frais = 0;
      this.gain='';
    }
  }

  isInt(value: any) {
    var er = /^-?[0-9]+$/;
    return er.test(value);
  }


}
