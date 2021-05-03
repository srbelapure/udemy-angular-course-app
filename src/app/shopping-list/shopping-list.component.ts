import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[]=[
    new Ingredient("apples",5),
    new Ingredient("banannas",5),
    new Ingredient("chickoo",5),
    new Ingredient("dragon fruits",5)
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredientValueAddedByUser: Ingredient) {
    this.ingredients.push(ingredientValueAddedByUser)
  }

}
