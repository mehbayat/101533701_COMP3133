import { Component } from '@angular/core';

@Component({
  selector: 'students',
  template: `
    <h1>{{ getTitle() }}</h1>
    <h2>Today is {{ getCurrentDate() }}</h2>
  `
})
export class StudentsComponent {
  title: string = 'Welcome to the Students Component';

  getTitle(): string {
    return this.title;
  }

  getCurrentDate(): string {
    return new Date().toDateString();
  }
}
