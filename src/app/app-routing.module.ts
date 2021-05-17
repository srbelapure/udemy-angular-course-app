import {Component, NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthComponent } from './auth/auth.component'
import { AuthGuard } from './auth/auth.guard'
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component'
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component'
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component'
import { RecipesResolverService } from './recipes/recipes-resolver.service'

import { RecipesComponent } from './recipes/recipes.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component'

// pathMatch:'full' --> only redirect if full path matches

const appRoutes : Routes=[
    {path:"", redirectTo:"/recipes", pathMatch:'full'}, //redirect to recipe for empty path
    {path:"recipes", 
    component:RecipesComponent , 
    canActivate:[AuthGuard],
    children:[
        {path:'', component:RecipeStartComponent},
        {path:'new', component:RecipeEditComponent},
        {path:':id' , component:RecipeDetailComponent , 
        resolve:[RecipesResolverService]},
        {path:':id/edit', component:RecipeEditComponent, 
        resolve:[RecipesResolverService]}
    ]},
    {path:"shopping-list", component:ShoppingListComponent},
    {path:'auth',component:AuthComponent}
]
@NgModule({
imports:[RouterModule.forRoot(appRoutes)],
exports:[RouterModule]  // since this is extra module and has to be imported into root module
})

export class AppRoutingModule{

}