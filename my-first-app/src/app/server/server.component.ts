import { Component } from "@angular/core";

// Directives are TypeScript feature that provide additional information about a class.
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html' // Webpack bundles the referenced files
})
export class ServerComponent {
    id : number = 10;
    status : string = "offline"
}

// Databinding: communication between TS and template HTML
// Output dat: TS -> HTML
// String interpolation {{ data }} - data can be any expression that results in a string or something that can be converted to a string?
// Cant write multi line structures.
// Property binding [prop]="data"
// Input data: TS <- HTML
// Event binding (event) -> "expression"
// Two way binding: TS <-> HTML
// [(ngModel)]="data"