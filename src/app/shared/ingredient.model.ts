// export class Ingredient {
//     public name: string;
//     public amount: number;
//     constructor(name: string, amt: number) {
//         this.name = name;
//         this.amount = amt;
//     }
// }

//Alternative new way, which prevents initial declaration of variable names
export class Ingredient {
    constructor(public name: string, public amount: number) {
    }
}