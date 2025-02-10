import { Component, Inject } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
	selector: 'app-my-combo',
    imports: [],
    templateUrl: './my-combo.component.html',
    styleUrl: './my-combo.component.css'
})
export class MyComboComponent {
    constructor(@Inject(AppComponent) private parent: AppComponent) {
    }
    test_output = '';
    curr_bild = '';
    onChange(e: any) {
		this.test_output = e.target.value;
		this.parent.my_message = e.target.value;
        switch (e.target.value) {
            case 'Finnair':
                this.curr_bild = 'logo_ay.png';
                break;
            case 'KLM':
                this.curr_bild = 'logo_klm.png';
                break;
            default:
                this.curr_bild = 'logo_af.png';
        }
        this.parent.logo_bild = this.curr_bild;
   }
}