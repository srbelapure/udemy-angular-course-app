import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
//@Input() -> we get value of "recipe" from recipe-list.component *ngFor[to get data feom outside we use @Input() decorator]
  @Input() recipe:Recipe;
  @Output() selectedRecipe = new EventEmitter<void>()
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeItemSelect(){
    this.selectedRecipe.emit()
  }

}
