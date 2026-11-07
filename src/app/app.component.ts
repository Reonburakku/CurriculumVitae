import { BooleanInput } from '@angular/cdk/coercion';
import { Component, inject } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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
  experienceText: any;
  formationText: any;
  certificationsText: any;
  experienceList: any[];
  formationList: any[];
  certificationsList: any[];
  menuControl = new FormControl();
  select= "Resume";
  dialog = inject(MatDialog);

  /** Ancho por debajo del cual la página se muestra en tabs. */
  static readonly MOBILE_QUERY = '(max-width: 1023.98px)';
  isMobile = false;
  /**
   * AppComponent se usa como componente raíz y también como componente de la ruta ':lang/home'.
   * Solo la instancia de la ruta (la que tiene idioma) dibuja la página; la raíz solo aloja el router-outlet.
   */
  isRouted = this.language != null;
  mobileTabIndex = 0;


  constructor(private route:ActivatedRoute, private dataService: DataService, private utils: Utils) {


    this.form = new FormGroup({
      options: this.menuControl,
    });

    inject(BreakpointObserver)
      .observe(AppComponent.MOBILE_QUERY)
      .pipe(takeUntilDestroyed())
      .subscribe(state => {
        if (state.matches && !this.isMobile) {
          // Al pasar a tabs, abrir la misma sección que estaba seleccionada en el menú.
          this.mobileTabIndex = Number(this.selectedSection) - 1;
        }
        this.isMobile = state.matches;
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
    this.experienceText = experienceJson;
    this.experienceList = this.experienceText.list;
    this.experienceList = utils.OrderArrayDesc(this.experienceList, "id");

    var formationJson = this.dataService.GetFormation(this.language);
    this.formationText = formationJson;
    this.formationList = this.formationText.list;
    this.formationList = utils.OrderArrayDesc(this.formationList, "id");

    var certificationsJson = this.dataService.GetCertificates(this.language);
    this.certificationsText = certificationsJson;
    this.certificationsList = this.certificationsText.list;
    this.certificationsList = utils.OrderArrayDesc(this.certificationsList, "id");

  }

  /** Valor ("1".."4") de la sección principal seleccionada en el menú lateral. */
  get selectedSection(): string {
    const value = this.menuControl.value;
    return (Array.isArray(value) ? value[0] : value) ?? '1';
  }

  onMobileTabChange(index: number) {
    this.mobileTabIndex = index;
    // Las primeras tabs corresponden a las opciones del menú lateral: mantenerlas sincronizadas.
    if (index < this.menuOptions.length) {
      this.menuControl.setValue([this.menuOptions[index].value]);
    }
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
