import { Component, OnInit } from '@angular/core';
import { FlowerService } from './flower.service';
import { LeafService } from './leaf.service';

@Component({
  selector: 'app-resolution-modifiers',
  templateUrl: './resolution-modifiers.component.html',
  styleUrls: ['./resolution-modifiers.component.css']
})
export class ResolutionModifiersComponent implements OnInit {

  constructor(public flower: FlowerService, public leaf: LeafService) {}

  ngOnInit(): void {
  }

}
