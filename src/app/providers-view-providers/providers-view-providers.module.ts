import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { InspectorComponent } from './inspector/inspector.component';
import { ProvidersViewProvidersComponent } from './providers-view-providers.component';

@NgModule({
  declarations: [
    ChildComponent,
    InspectorComponent,
    ProvidersViewProvidersComponent,
  ],
  imports: [CommonModule],
  exports:[
    ChildComponent,
    InspectorComponent,
    ProvidersViewProvidersComponent,
  ]
})
export class ProvidersViewProvidersModule {}
