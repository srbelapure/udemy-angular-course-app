import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Injectable({
    providedIn: 'root'
  })

export class RecipesResolverService implements Resolve<Recipe[]>{
    constructor( private dataStorageService:DataStorageService,
        private recipeService : RecipeService){}

    resolve(route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot){
            const recipes = this.recipeService.getRecipes()
            if(recipes.length === 0){
                //there are no recipes, hence fetch them
                return this.dataStorageService.fetchRecipes()
            }
            else{
                //we do have recipes, so no need to fetch them
                return recipes
            }
        }
    
}