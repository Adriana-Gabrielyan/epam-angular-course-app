import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptionalComponent } from './optional/optional.component';
import { HostComponent } from './host/host.component';
import { HostChildComponent } from './host-child/host-child.component';
import { HostParentComponent } from './host-parent/host-parent.component';
import { SelfComponent } from './self/self.component';
import { SelfNoDataComponent } from './self-no-data/self-no-data.component';
import { ResolutionModifiersComponent } from './resolution-modifiers.component';
import { SkipselfComponent } from './skipself/skipself.component';



@NgModule({
  declarations: [
    OptionalComponent,
    HostComponent,
    HostChildComponent,
    HostParentComponent,
    SelfComponent,
    SelfNoDataComponent,
    ResolutionModifiersComponent,
    SkipselfComponent
  ],

  imports: [
    CommonModule
  ],
  exports:[
    OptionalComponent,
    HostComponent,
    HostChildComponent,
    HostParentComponent,
    SelfComponent,
    SelfNoDataComponent,
    ResolutionModifiersComponent,
    SkipselfComponent
  ]
})
export class ResolutionModifiersModule { }
