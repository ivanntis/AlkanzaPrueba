import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {PollComponent} from './poll/poll.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.modules';
import {HttpModule} from '@angular/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatProgressSpinnerModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {environment} from './commons/constants';
import { UserPollComponent } from './user-poll/user-poll.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component'



@NgModule({
    declarations: [
        AppComponent,
        PollComponent,
         UserPollComponent,
         AdminComponent,
         AdminLoginComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpModule,
        FlexLayoutModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule

    ],
      entryComponents: [ UserPollComponent ],

    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
