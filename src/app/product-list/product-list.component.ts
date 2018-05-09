import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  messages : Message[];
  constructor() { }

  ngOnInit() {
    this.messages = [
      { from :'John', subject:'offer', content:'Latest offers' },
       { from :'Rakesh', subject:'Hi', content:'How r you' }
    ];
  }

}

export class Message{
  public from:string;
  public subject:string;
  public content:string;
}
