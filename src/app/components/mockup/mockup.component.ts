import { Component, OnInit, Input, Output } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-mockup',
  templateUrl: './mockup.component.html',
  styleUrls: ['./mockup.component.css'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('0.5s ease-out', style({ height: 484 })),
        animate('0.5s ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ height: 484, opacity: 1 }),
        animate('0.5s ease-in', style({ opacity: 0 })),
        animate('0.5s ease-in', style({ height: 0 })),
      ]),
    ]),
  ],
})
export class MockupComponent implements OnInit {

  @Input() index?:number;
  @Output() i?:number;

  public isChecked = true;

  ngOnInit(): void {
  }
}
