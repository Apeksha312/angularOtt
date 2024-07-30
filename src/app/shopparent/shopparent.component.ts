import { Component, OnInit } from '@angular/core';
interface Ott{
  ottImgUrl:string,
  ottName:string;
  ottPrice:number
}
@Component({
  selector: 'app-shopparent',
  templateUrl: './shopparent.component.html',
  styleUrls: ['./shopparent.component.css']
})
export class ShopparentComponent implements OnInit {
  ot:Ott[]=[];
  public total=0;
  // handleTocart(product:Ott)
  // {
  //   this.ot.push(product);
  //   this.total += product.ottPrice;
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
