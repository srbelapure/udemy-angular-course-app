/**shopping-list.service.ts   -->> this file is obslete as we are not using services and subjects. We use NgRx for this section */


/**OBSOLETE .ts file */
/**OBSOLETE .ts file */
/**OBSOLETE .ts file */
/**OBSOLETE .ts file */


import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>()
  startedEditing = new Subject<number>()

  private ingredients:Ingredient[] =[
    new Ingredient("apples",5),
    new Ingredient("banannas",5),
    new Ingredient("chickoo",5),
    new Ingredient("dragon fruits",5)
  ];
  constructor() { }

  getIngredient(index:number){
    return this.ingredients[index];
  }

  getIngredients(){
    return this.ingredients.slice();
  }

  //adds an ingredient to recipe detail
  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient)
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  //Adds the list of ingredients in the recipe to shopping-list
  adddIngredients(ingredients:Ingredient[]){
    // for(let ingredient of ingredients){
    //   this.addIngredient(ingredient); 
    // }
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  updateIngredient(index:number , newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  deleteIngredient(index:number){
    this.ingredients.splice(index,1)
    this.ingredientsChanged.next(this.ingredients.slice())
  }
}
