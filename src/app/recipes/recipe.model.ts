import { Ingredient } from "../shared/ingredient.model";

//Defines how a single recipe is going to look
export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients:Ingredient[];

    constructor(name: string, desc: string, imgPath: string,ingre_dients:Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imgPath;
        this.ingredients=ingre_dients
    }
}