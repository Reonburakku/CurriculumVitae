import { BooleanInput } from '@angular/cdk/coercion';
import { Component } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import { GlobalVariables } from '../globals/global';
import {ActivatedRoute} from '@angular/router';
import { DataService } from '../services/data.service';
import { Experience } from '../models/Experience';
import { MenuOptions } from '../models/MenuOptions';
import { Basic } from '../models/Basic';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hoja De Vida';
  language: any = this.route.snapshot.paramMap.get('lang');
  esIcon = "https://manuelmendezninja.s3.sa-east-1.amazonaws.com/Assets/Colombia.jpg";
  enIcon = "https://manuelmendezninja.s3.sa-east-1.amazonaws.com/Assets/EEUU.png";
  form: FormGroup;

  menuOptions: MenuOptions[] = [];
  basicText: any;
  resumeText: any;
  menuControl = new FormControl();
  select= "Resume";


  constructor(private route:ActivatedRoute, private dataService: DataService) {


    this.form = new FormGroup({
      options: this.menuControl,
    });

    var menuJson = this.dataService.GetMenuOptions(this.language);
    for(const prop in menuJson) {
      this.menuOptions.push(menuJson[prop]);
    }

    var basicJson = this.dataService.GetBasic(this.language);
    this.basicText = basicJson;

    var resumeJson = this.dataService.GetResume(this.language);
    this.resumeText = resumeJson;


  }

  goToPage(pageName:string){
    console.log(pageName);
    window.location.href = pageName;
  }
}
