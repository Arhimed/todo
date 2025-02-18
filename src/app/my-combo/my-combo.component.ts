import { Component, Inject } from '@angular/core';
import { AppComponent } from '../app.component';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import type { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 
// Register all community features
ModuleRegistry.registerModules([AllCommunityModule]);

// Row Data Interface
interface IRow {
    make: string;
    model: string;
    price: number;
    electric: boolean;
  }
@Component({
	selector: 'app-my-combo',
    imports: [AgGridAngular], // Add Angular Data Grid Component
    templateUrl: './my-combo.component.html',
    styleUrl: './my-combo.component.css'
})
export class MyComboComponent {
    constructor(@Inject(AppComponent) private parent: AppComponent) {
    }



    // Row Data: The data to be displayed.
    iniData: IRow[] = [
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Mercedes", model: "EQA", price: 48890, electric: true },
        { make: "Fiat", model: "500", price: 15774, electric: false },
        { make: "Nissan", model: "Juke", price: 20675, electric: false },
    ];

    rowData = this.iniData;

    // Column Definitions: Defines the columns to be displayed.
    colDefs: ColDef<IRow>[] = [
        { field: "make" },
        { field: "model" },
        { field: "price" },
        { field: "electric" },
      ];
    defaultColDef: ColDef = {
        flex: 1,
    };      

    test_output = '';
    curr_bild = '';
    public onChange(e: any) {
		this.test_output = e.target.value;
		this.parent.my_message = e.target.value;
        switch (e.target.value) {
            case 'Finnair':
                this.curr_bild = '/assets/images/logo_ay.png';
                this.rowData  = [
                    { make: "Volvo", model: "XC 60", price: 64000, electric: false },
                    { make: "Volvo", model: "XE 90", price: 33000, electric: true },
                ];
                break;
            case 'KLM':
                this.curr_bild = '/assets/images/logo_klm.png';
                this.rowData  = [
                    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
                    { make: "Mercedes", model: "EQA", price: 48890, electric: true },
                ];                
                break;
            default:
                this.curr_bild = '/assets/images/logo_af.png';
                this.rowData  = this.iniData;
        }
        this.parent.profileService.getTestAccounts().subscribe(
            val => { this.parent.profiles = val})

        this.parent.logo_bild = this.curr_bild;


   }
}