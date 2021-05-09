import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe:Recipe;
  id:number;

  constructor(private recipeSercive:RecipeService , 
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = +params['id']  // + is used to convert string to integer
        this.recipe = this.recipeSercive.getRecipe(this.id)
      }
    )
  }

  onAddToShoppingList(){
    this.recipeSercive.addIngredientsToShoppingList(this.recipe.ingredients)
  }

  onEditRecipe(){
this.router.navigate(['edit'],{relativeTo:this.route})
  }

}
