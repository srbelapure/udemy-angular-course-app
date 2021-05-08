import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { RecipesComponent } from './recipes/recipes.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component'


const appRoutes : Routes=[
    {path:"", redirectTo:"/recipes"},
    {path:"recipes", component:RecipesComponent},
    {path:"shopping-list", component:ShoppingListComponent},
]
@NgModule({
imports:[RouterModule.forRoot(appRoutes)],
exports:[RouterModule]  // since this is extra module and has to be imported into root module
})

export class AppRoutingModule{

}