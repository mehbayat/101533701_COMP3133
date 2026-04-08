import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './missionfilter.component.html',
  styleUrl: './missionfilter.component.css'
})
export class MissionfilterComponent {
  yearSelected = output<string>();
  selectedYear = signal('All');

  years: string[] = ['All'];

  constructor() {
    for (let y = 2006; y <= 2025; y++) {
      this.years.push(y.toString());
    }
  }

  onFilter(): void {
    this.yearSelected.emit(this.selectedYear());
  }

  clearFilter(): void {
    this.selectedYear.set('All');
    this.yearSelected.emit('All');
  }
}
