import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNn9MRfwh7ZRKI9eZ7y4w7QT4mupy_rifi3w&usqp=CAU'),
    new Recipe('Another Test Recipe', 'This is a simple test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNn9MRfwh7ZRKI9eZ7y4w7QT4mupy_rifi3w&usqp=CAU'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
