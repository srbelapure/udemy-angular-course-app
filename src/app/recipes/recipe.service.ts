import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  public recipeSelected = new EventEmitter<Recipe>();
  private recipes:Recipe[]=[
    new Recipe('A test recipe', "test description","https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVjaXBlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",[
      new Ingredient('cereal',1),
      new Ingredient('soup',2)
    ]),
    new Recipe('A test recipe1', "test description1","https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVjaXBlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",[
      new Ingredient('cereal',10),
      new Ingredient('soup',20)
    ]),
    new Recipe('A test recipe2', "test description2","https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVjaXBlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",[
      new Ingredient('cereal',100),
      new Ingredient('soup',200)
    ]),
    new Recipe('A test recipe3', "test description3","https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVjaXBlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",[
      new Ingredient('cereal',1000),
      new Ingredient('soup',2000)
    ])
  ]
  constructor(private slService:ShoppingListService) { }

  getRecipes(){
    //return this.recipes ---> gives direct access to original array
    return this.recipes.slice(); // --> this gets only a copy of recipes
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.slService.adddIngredients(ingredients)
  }
}
