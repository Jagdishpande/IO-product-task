import { Component } from '@angular/core';
import { IProductCatg, Iproducts } from './shared/model/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iOProducts';

  productArray:Array<Iproducts>=[
    {
      productName:"Samsung",
      pDescription:"lorem ipsum is the dummy paragraph we use it",
      pCategory:"Catlog"
    },
    {
      productName:"Samsung",
      pDescription:"lorem ipsum is the dummy paragraph we use it",
      pCategory:"Product"
    }
  ]

  onAddProductDetails(pname:HTMLInputElement,pDescri:HTMLTextAreaElement,catg:IProductCatg){
    let obj:Iproducts={
      productName:pname.value,
      pDescription:pDescri.value,
      pCategory:catg
    }
    this.productArray.push(obj)
    pname.value="",
    pDescri.value=""
  }
}
