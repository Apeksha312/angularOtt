import { Injectable } from '@angular/core';
interface Ott{
  ottImgUrl:string,
  ottName:string;
  ottPrice:number;
}

@Injectable({
  providedIn: 'root'
})
export class OttServiceService {

  allOttList:Ott[]=[{ottImgUrl:"../assets/amazon.jpg",ottName:"Amazon",ottPrice:300},
  {ottImgUrl:"../assets/netflix.jpg",ottName:"Netflix",ottPrice:400}];

  selectedItems: Ott[]=[]
 
  getSelectedItems():Ott[]{
    return this.selectedItems
  }

addToSelectedItem(item:Ott):void{
  this.selectedItems.push(item)
}



  getAllOtt():Ott[]{
    return this.allOttList
  }

  constructor() { }
}
