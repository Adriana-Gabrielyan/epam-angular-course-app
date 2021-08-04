import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProvidersViewProvidersModule } from './providers-view-providers/providers-view-providers.module';
import { ResolutionModifiersModule } from './resolution-modifiers/resolution-modifiers.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ProvidersViewProvidersModule,
    ResolutionModifiersModule
  
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
