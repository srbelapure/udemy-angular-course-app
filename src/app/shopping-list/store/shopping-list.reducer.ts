import { Ingredient } from "src/app/shared/ingredient.model";

import * as ShoppingListActions from "./shopping-list.actions"

export interface State{
    ingredients:Ingredient[];
    editedIngredient:Ingredient;
    editedIngredientIndex:number;
}

const initialState : State = {
    ingredients: [
        new Ingredient("apples", 5),
        new Ingredient("banannas", 5),
        new Ingredient("chickoo", 5),
        new Ingredient("dragon fruits", 5)
    ],
    editedIngredient:null,
    editedIngredientIndex:-1
}

export function shoppingListReducer(
    state: State = initialState,
    action: ShoppingListActions.ShoppingListActions
) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            }
        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[state.editedIngredientIndex]
            const updatedIngredient = {
                ...ingredient, ...action.payload
            }
            const updatedIngredients = [...state.ingredients]
            updatedIngredients[state.editedIngredientIndex] = updatedIngredient
            return {
                ...state,
                ingredients: updatedIngredients,
                editedIngredient:null,
                editedIngredientIndex:-1
                
            }
        case ShoppingListActions.DELETE_INGREDIENT:
            return {
                ...state,
                ingredients:state.ingredients.filter((ingredient,index)=>{
                    return index !== state.editedIngredientIndex
                }),
                editedIngredient:null,
                editedIngredientIndex:-1
            }
        case ShoppingListActions.START_EDIT:
            return{
                ...state,
                editedIngredient:{...state.ingredients[action.payload]},
                editedIngredientIndex:action.payload
            }
        case ShoppingListActions.STOP_EDIT:
            return{
                ...state,
                editedIngredient:null,
                editedIngredientIndex:-1
            }
        default:
            return state;
    }
}