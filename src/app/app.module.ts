import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiniwordComponent } from './directives/miniword/miniword.component';
import { FormsModule } from '@angular/forms';
import { ThemeschangeComponent } from './directives/themeschange/themeschange.component';
import { RainbowDirective } from './directives/rainbow.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { IfComponent } from './directives/if/if.component';
import { NgforComponent } from './directives/ngfor/ngfor.component';
import { ShowparagrapheComponent } from './showparagraphe/showparagraphe.component';


@NgModule({
  declarations: [
    AppComponent,
    MiniwordComponent,
    ThemeschangeComponent,
    RainbowDirective,
    HighlightDirective,
    IfComponent,
    NgforComponent,
    ShowparagrapheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
