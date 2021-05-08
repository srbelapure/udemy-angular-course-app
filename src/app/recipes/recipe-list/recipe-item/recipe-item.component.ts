import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
//@Input() -> we get value of "recipe" from recipe-list.component *ngFor[to get data feom outside we use @Input() decorator]
  @Input() recipe:Recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }

  onRecipeItemSelect(){
    this.recipeService.recipeSelected.emit(this.recipe)
  }

}
