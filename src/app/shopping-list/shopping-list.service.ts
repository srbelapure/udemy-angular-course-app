import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>()
  private ingredients:Ingredient[] =[
    new Ingredient("apples",5),
    new Ingredient("banannas",5),
    new Ingredient("chickoo",5),
    new Ingredient("dragon fruits",5)
  ];
  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient)
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  adddIngredients(ingredients:Ingredient[]){
    // for(let ingredient of ingredients){
    //   this.addIngredient(ingredient); 
    // }
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.next(this.ingredients.slice())
  }
}
