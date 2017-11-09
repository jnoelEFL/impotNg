import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ModalInfoComponent } from './modal-info/modal-info.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SituationComponent } from './situation/situation.component';
import { ResultatComponent } from './resultat/resultat.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalInfoComponent,
    NavigationComponent,
    SituationComponent,
    ResultatComponent
  ],
  entryComponents: [
    ModalInfoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
