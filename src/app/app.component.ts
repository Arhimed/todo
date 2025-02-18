import { Component, inject } from '@angular/core';
import { MyComboComponent } from './my-combo/my-combo.component'
import { ProfileCardComponent } from './common-ui/profile-card/profile-card.component';
import { ProfileService } from './data/services/profile.service';
import { JsonPipe } from '@angular/common';
import { Profile } from './data/interfaces/profile.interface';

@Component({
  selector: 'app-root',
  imports: [MyComboComponent, ProfileCardComponent, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Artjom';
  my_message = 'Select the airline'
  logo_bild = '/assets/images/logo_af.png';
  profiles: Profile[] =[]
  profileService = inject(ProfileService)

  constructor () {
    //this.profileService.getTestAccounts().subscribe(
      //val => { this.profiles = val})
  }


}
