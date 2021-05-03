import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', "test description","https://camo.githubusercontent.com/c145792cf7624bfd9d84025cd0871e005dab78bf0cfd93fe3213bcbb03724754/68747470733a2f2f692e696d6775722e636f6d2f59317338464b622e706e67"),
    new Recipe('A test recipe1', "test description1","https://camo.githubusercontent.com/c145792cf7624bfd9d84025cd0871e005dab78bf0cfd93fe3213bcbb03724754/68747470733a2f2f692e696d6775722e636f6d2f59317338464b622e706e67"),
    new Recipe('A test recipe2', "test description2","https://camo.githubusercontent.com/c145792cf7624bfd9d84025cd0871e005dab78bf0cfd93fe3213bcbb03724754/68747470733a2f2f692e696d6775722e636f6d2f59317338464b622e706e67"),
    new Recipe('A test recipe3', "test description3","https://camo.githubusercontent.com/c145792cf7624bfd9d84025cd0871e005dab78bf0cfd93fe3213bcbb03724754/68747470733a2f2f692e696d6775722e636f6d2f59317338464b622e706e67")
  ] // recipes will be of type Recipe model defined by us, which is an array
  constructor() { }

  ngOnInit(): void {
  }

}
