import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductModel } from '../store/models/store.models';
import * as productAction from '../store/actions/store.actions'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private store: Store<ProductModel>
  ) { }

  ngOnInit(): void {
  }

  buyNow(product:any){
    product = JSON.parse(JSON.stringify(product));
    product.quantity = 1;
    this.store.dispatch(productAction.AddToCart({cart:product}));
  }

  dumyProduct=[
    {
      _id:0,
      name:"A",
      price:20,
      image:"https://www.freepnglogos.com/uploads/food-png/fast-food-transparent-png-pictures-icons-and-png-18.png"
    },
    {
      _id:1,
      name:"B",
      price:30,
      image:"https://www.freepnglogos.com/uploads/food-png/junk-food-archives-classic-0.png"
    },
    {
      _id:2,
      name:"C",
      price:10,
      image:"https://www.pngkey.com/png/full/154-1546929_p-packed-food-items-png.png"
    },
    {
      _id:0,
      name:"A",
      price:20,
      image:"https://www.freepnglogos.com/uploads/food-png/fast-food-transparent-png-pictures-icons-and-png-18.png"
    },
    {
      _id:1,
      name:"B",
      price:30,
      image:"https://www.freepnglogos.com/uploads/food-png/junk-food-archives-classic-0.png"
    },
    {
      _id:2,
      name:"C",
      price:10,
      image:"https://www.pngkey.com/png/full/154-1546929_p-packed-food-items-png.png"
    },
    {
      _id:0,
      name:"A",
      price:20,
      image:"https://www.freepnglogos.com/uploads/food-png/fast-food-transparent-png-pictures-icons-and-png-18.png"
    },
    {
      _id:1,
      name:"B",
      price:30,
      image:"https://www.freepnglogos.com/uploads/food-png/junk-food-archives-classic-0.png"
    },
    {
      _id:2,
      name:"C",
      price:10,
      image:"https://www.pngkey.com/png/full/154-1546929_p-packed-food-items-png.png"
    },
    {
      _id:0,
      name:"A",
      price:20,
      image:"https://www.freepnglogos.com/uploads/food-png/fast-food-transparent-png-pictures-icons-and-png-18.png"
    },
    {
      _id:1,
      name:"B",
      price:30,
      image:"https://www.freepnglogos.com/uploads/food-png/junk-food-archives-classic-0.png"
    },
    {
      _id:2,
      name:"C",
      price:10,
      image:"https://www.pngkey.com/png/full/154-1546929_p-packed-food-items-png.png"
    }
  ]

}
