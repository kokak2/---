import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KokaComponent } from './koka/koka.component';
import { FormsModule } from '@angular/forms';
import { ShviloComponent } from './shvilo/shvilo.component';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { P3Component } from './p3/p3.component';
import { P4Component } from './p4/p4.component';
import { P31Component } from './p31/p31.component';
import { P32Component } from './p3/p32/p32.component';
import { P311Component} from './p31/p311/p311.component';
import { P33Component } from './p3/p33/p33.component';
import { P34Component } from './p3/p34/p34.component';
import { P331Component } from './p3/p33/p331/p331.component';
import { P332Component } from './p3/p33/p332/p332.component';
import { P312Component } from './p31/p312/p312.component';
import { P31P313Component } from './p31-p313/p31-p313.component';
import { P313Component } from './p31/p313/p313.component';
import { P314Component } from './p31/p314/p314.component';

@NgModule({
  declarations: [
    AppComponent,
    KokaComponent,
    ShviloComponent,
    P1Component,
    P2Component,
    P3Component,
    P4Component,
    P31Component,
    P32Component,
    P311Component,
    P33Component,
    P34Component,
    P331Component,
    P332Component,
    P312Component,
    P31P313Component,
    P313Component,
    P314Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
