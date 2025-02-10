import { Component } from '@angular/core';
import { MyComboComponent } from './my-combo/my-combo.component'

@Component({
  selector: 'app-root',
  imports: [MyComboComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Artjom';
  my_message = 'Gop!Gop! всё путём'
  logo_bild = 'logo_af.png';
}
