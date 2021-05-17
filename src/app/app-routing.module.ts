import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

// pathMatch:'full' --> only redirect if full path matches

const appRoutes : Routes=[
    {path:"", redirectTo:"/recipes", pathMatch:'full'}, //redirect to recipe for empty path
]
@NgModule({
imports:[RouterModule.forRoot(appRoutes)],
exports:[RouterModule]  // since this is extra module and has to be imported into root module
})

export class AppRoutingModule{

}