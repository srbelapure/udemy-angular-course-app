import { ActionReducerMap } from '@ngrx/store'
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer'

//define this global AppState interface with reducer_state:reducer_class_name
export interface AppState{
    shoppingList: fromShoppingList.State
}

//instead of defining the reducers as key value pairs in app.module.ts, we merge it here and then use it in app.module.ts
export const appReducer: ActionReducerMap<AppState>={
    shoppingList: fromShoppingList.shoppingListReducer
}