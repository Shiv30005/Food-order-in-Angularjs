import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodpageComponent } from './foodpage.component';

import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common'; // Import CurrencyPipe

@Component({
  selector: 'app-your-component',
  templateUrl: 'your-component.component.html',
})
export class YourComponent {
  food = {
    // Your food object here
    price: 123.45, // Replace with the actual price
  };

  constructor(private currencyPipe: CurrencyPipe) {} // Inject CurrencyPipe

  // Other methods and properties for your component
}

describe('FoodpageComponent', () => {
  let component: FoodpageComponent;
  let fixture: ComponentFixture<FoodpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodpageComponent],
    });
    fixture = TestBed.createComponent(FoodpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
