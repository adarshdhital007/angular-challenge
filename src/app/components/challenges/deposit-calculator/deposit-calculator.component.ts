import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-deposit-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './deposit-calculator.component.html',
  styleUrl: './deposit-calculator.component.scss',
  host: { ngSkipHydration: 'true' },
})
export class DepositCalculatorComponent implements OnInit {
  initialDeposit = 10000;
  numberOfMonths = 12;
  interestRate = 5;

  moneyBefore = '';
  moneyAfter = '';
  heightAfter = 0;

  constructor() {}
  ngOnInit(): void {
    this.calculate();
  }

  calculate(): void {
    if (!this.initialDeposit) return;

    const interest = this.interestRate * 0.01;

    if (!interest) return;
    const years = this.numberOfMonths / 12;

    if (!years) return;

    const result = Math.round(this.initialDeposit * (1 + interest) ** years);

    const height = (result / this.initialDeposit) * 100;

    this.heightAfter = height;

    this.moneyBefore = this.initialDeposit.toString();

    this.moneyAfter = result.toString();
  }

  onInput(): void {
    this.calculate();
  }

  onChange(): void {
    this.calculate();
  }
}
