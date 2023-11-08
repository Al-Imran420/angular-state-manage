import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductModel } from '../store/models/store.models';
import * as productSelector from '../store/selectore/store.selectors';
import * as productAction from '../store/actions/store.actions'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts:ProductModel[] = [];
  sum:number = 0
  
  constructor(
    private store: Store<ProductModel>,
  ) { 
    this.store.select(productSelector.getProducts).subscribe((res:any)=>{
      let total = 0
      res.forEach((data:any)=>{
        total += data.price
      })
      this.carts = res;
      this.sum = total;
      console.log(this.carts);
      
    })
  }

  ngOnInit(): void {
  }

  deleteCartIteam(product:ProductModel){
    this.store.dispatch(productAction.RemoveToCart({cart:product}));
  }

}
