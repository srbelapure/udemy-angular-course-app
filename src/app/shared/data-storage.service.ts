import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { exhaustMap, map, take, tap } from 'rxjs/operators'
import { AuthService } from "../auth/auth.service";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {

    constructor(private http: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService) { }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes()
        return this.http.put(
            'https://angular-recipe-book-proj-32e80-default-rtdb.firebaseio.com/recipes.json', recipes)
            .subscribe((response) => {
                console.log(response)
            })
    }

    fetchRecipes() {
        //always subscribe to http request at places/component were we want the response(i.e, were we utilize the code in a template for further use)
        return this.http
            .get<Recipe[]>(
                'https://angular-recipe-book-proj-32e80-default-rtdb.firebaseio.com/recipes.json'
            ).pipe(
                map((recipes) => {
                    return recipes.map((recipe) => {
                        return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
                    })
                }),
                tap(recipes => {
                    this.recipeService.setRecipes(recipes)
                })
            )
    }
}