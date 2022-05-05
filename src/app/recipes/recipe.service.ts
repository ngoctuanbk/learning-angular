import { EventEmitter, Injectable } from "@angular/core"
import { Ingredient } from "../shared/ingredient";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 
            'This is a simple test', 
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNn9MRfwh7ZRKI9eZ7y4w7QT4mupy_rifi3w&usqp=CAU', 
            [
                new Ingredient('Meat', 1),
                new Ingredient('Frech Fries', 20)
            ]),
        new Recipe(
            'Another Test Recipe', 
            'This is a simple test', 
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNn9MRfwh7ZRKI9eZ7y4w7QT4mupy_rifi3w&usqp=CAU', 
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 5)
            ]),
    ];

    constructor(private slService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}