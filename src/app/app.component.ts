import { BooleanInput } from '@angular/cdk/coercion';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';
import { Utils } from '../utils/Utils'
import { GlobalVariables } from '../globals/global';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { MenuOptions } from '../models/MenuOptions';
import { MatDialog,  MAT_DIALOG_DATA } from '@angular/material/dialog';




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
  experienceList: any[];
  formationList: any[];
  certificationsList: any[];
  menuControl = new FormControl();
  select= "Resume";
  dialog = inject(MatDialog);


  constructor(private route:ActivatedRoute, private dataService: DataService, private utils: Utils) {


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

    var experienceJson = this.dataService.GetExperiences(this.language);
    this.experienceList = experienceJson;
    this.experienceList = utils.OrderArrayDesc(this.experienceList, "id");

    var formationJson = this.dataService.GetFormation(this.language);
    this.formationList = formationJson;
    this.formationList = utils.OrderArrayDesc(this.formationList, "id");

    var certificationsJson = this.dataService.GetCertificates(this.language);
    this.certificationsList = certificationsJson;
    this.certificationsList = utils.OrderArrayDesc(this.certificationsList, "id");

  }

  goToPage(pageName:string){
    console.log(pageName);
    window.location.href = pageName;
  }

  openDialog(title: string, image: string) {
    this.dialog.open(ImageDialogComponent, {
      data: {
        title: title,
        image: image,
      },
    });
  }
}
