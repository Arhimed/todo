import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { MyComboComponent } from './app/my-combo/my-combo.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
