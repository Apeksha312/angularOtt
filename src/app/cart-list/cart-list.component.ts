import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { OttServiceService } from '../ott-service.service';
// interface Product{
//   name:string;
//   price:number;
// }
interface Ott{
  ottImgUrl:string,
  ottName:string;
  ottPrice:number;
}


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  //  @Output() addTocart=new EventEmitter<Product>();
  // products:Product[]=[
  //   {
  //     name:'Tv',price:25000},
  //     {name:'Fridge',price:43000}
   
  // ];
  // AddtoCart(product:Ott)
  // {
  //   ;
  // }
  ot:Ott[]=[];
  total:number = 0;
  constructor(private ottt:OttServiceService) { }

  ngOnInit(): void {
    this.ot=this.ottt.getAllOtt();
    console.log(this.ot)
  }

  addToCart(item:Ott): void{
    this.total+= item.ottPrice;
    this.ottt.addToSelectedItem(item)
  }
}
