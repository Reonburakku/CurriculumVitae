import { BooleanInput } from '@angular/cdk/coercion';
import { Component } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';

interface MenuOptions {
  value: string;
  name: string;
  checked: BooleanInput;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HojaDeVida';
  form: FormGroup;
  menuOptions: MenuOptions[] = [
    {value: 'resume', name: 'Resume', checked: true },
    {value: 'experiences', name: 'Experiences', checked: false },
    {value: 'formation', name: 'Formation', checked: false },
    {value: 'certificates', name: 'Certificates', checked: false }
  ];
  menuControl = new FormControl();
  select= "Resume";

  constructor() {
    this.form = new FormGroup({
      options: this.menuControl,
    });

  }
}
