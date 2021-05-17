import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients:Ingredient[];
  private subscription: Subscription

  constructor(private shoppingList : ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingList.getIngredients()
    this.subscription = this.shoppingList.ingredientsChanged.subscribe(
      (ingdients:Ingredient[])=>{
        this.ingredients=ingdients
      }
    )
  }

  onEditItem(index: number) {
    this.shoppingList.startedEditing.next(index);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
