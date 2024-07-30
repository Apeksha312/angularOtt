import { Component, OnInit ,Input} from '@angular/core';
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
  selector: 'app-shopcart-list',
  templateUrl: './shopcart-list.component.html',
  styleUrls: ['./shopcart-list.component.css']
})
export class ShopcartListComponent implements OnInit {
  ot:Ott[]=[];

  @Input() total:number =0;

  constructor(private ottt:OttServiceService) { }

  ngOnInit(): void {

    this.ot=this.ottt.getSelectedItems()
  }

}
