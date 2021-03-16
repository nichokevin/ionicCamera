import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  tebak : number;
  myRand : number;
  hasil : boolean;
  src : string;
  isenabled = true;
  
  ngOnInit(){
    this.myRand = Math.floor(Math.random() * 9 + 1);
  }
  quest() {
    
    if (this.tebak == this.myRand){
      this.hasil = true;
      console.log(this.hasil);
      this.src="assets/icon/favicon.png"
      this.isenabled=false;
    }      
  }
  
}
