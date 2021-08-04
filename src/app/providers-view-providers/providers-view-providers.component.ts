import { Component, OnInit } from '@angular/core';
import { FlowerService } from './flower.service';
import { AnimalService } from './animal.service';

@Component({
  selector: 'app-providers-view-providers',
  templateUrl: './providers-view-providers.component.html',
  styleUrls: ['./providers-view-providers.component.css']
})
export class ProvidersViewProvidersComponent implements OnInit {

  constructor(public flower: FlowerService, public animal: AnimalService) {}


  ngOnInit(): void {
  }

}
