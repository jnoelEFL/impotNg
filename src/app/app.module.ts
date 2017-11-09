import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ModalInfoComponent } from './modal-info/modal-info.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SituationComponent } from './situation/situation.component';
import { ResultatComponent } from './resultat/resultat.component';
import { MonetairePipe } from './pipes/monetaire.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalInfoComponent,
    NavigationComponent,
    SituationComponent,
    ResultatComponent,
    MonetairePipe
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
