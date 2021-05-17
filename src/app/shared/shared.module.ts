import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner/loading-spinner.component";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";
@NgModule({
    declarations:[
        LoadingSpinnerComponent,
        AlertComponent,
        PlaceholderDirective,
        DropdownDirective,
    ],
    imports:[
        CommonModule
    ],
    exports:[
       //there is no need to export any routing components, because weare using RecipesRoutingModule 
       LoadingSpinnerComponent,
       AlertComponent,
       PlaceholderDirective,
       DropdownDirective,
       CommonModule
    ]
})

export class SharedModule{
    
}