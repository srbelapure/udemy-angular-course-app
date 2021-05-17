import {NgModule} from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

// pathMatch:'full' --> only redirect if full path matches

const appRoutes : Routes=[
    {path:"", redirectTo:"/recipes", pathMatch:'full'}, //redirect to recipe for empty path
    // {path:'recipes',loadChildren:'./recipes/recipes.module.ts#RecipesModule'}
    {path:'recipes',
    loadChildren:() => import('./recipes/recipes.module').then(m=>
        m.RecipesModule)
    },
    {path:'shopping-list',
    loadChildren:() => import('./shopping-list/shopping-list.module').then(m=>
        m.ShoppingListModule)
    },
    {path:'auth',
    loadChildren:() => import('./auth/auth.module').then(m=>
        m.AuthModule)
    }

]
@NgModule({
imports:[RouterModule.forRoot(appRoutes, { preloadingStrategy:PreloadAllModules })],
exports:[RouterModule]  // since this is extra module and has to be imported into root module
})

export class AppRoutingModule{

}