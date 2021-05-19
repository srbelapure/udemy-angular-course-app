import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import * as ShoppingListActions from './store/shopping-list.actions'
import * as fromApp from '../store/app.reducer'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients:Observable<{ingredients:Ingredient[]}>;
  private subscription: Subscription

  constructor(
    private store: Store<fromApp.AppState>
    ) { }

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList')

    // this.ingredients = this.shoppingList.getIngredients()
    // this.subscription = this.shoppingList.ingredientsChanged.subscribe(
    //   (ingdients:Ingredient[])=>{
    //     this.ingredients=ingdients
    //   }
    // )
  }

  onEditItem(index: number) {
    //this.shoppingList.startedEditing.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index))
  }

  ngOnDestroy(){
    //this.subscription.unsubscribe()
  }

}
