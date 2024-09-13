import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as esBasicJson from '../resources/es/basic.json';
import * as esMenuJson from '../resources/es/menu.json';
import * as esResumeJson from '../resources/es/resume.json';
import * as esExperiencesJson from '../resources/es/experiences.json';
import * as esFormationJson from '../resources/es/formation.json';
import * as esCertificatesJson from '../resources/es/certificates.json';
import * as enBasicJson from '../resources/en/basic.json';
import * as enMenuJson from '../resources/en/menu.json';
import * as enResumeJson from '../resources/en/resume.json';
import * as enExperiencesJson from '../resources/en/experiences.json';
import * as enFormationJson from '../resources/en/formation.json';
import * as enCertificatesJson from '../resources/en/certificates.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataBasic: any;
  dataMenu: any;
  dataResume: any;
  dataExperiences: any;
  dataFormation: any;
  dataCertificates: any;
  options: any[] = [];
  constructor() { }

  private setLanguage(lang: String){
    switch(lang){
      case "es":
        this.dataBasic = esBasicJson;
        this.dataMenu = esMenuJson;
        this.dataResume = esResumeJson;
        this.dataExperiences = esExperiencesJson;
        this.dataFormation = esFormationJson;
        this.dataCertificates = esCertificatesJson
        break;
      case "en":
        this.dataBasic = enBasicJson;
        this.dataMenu = enMenuJson;
        this.dataResume = enResumeJson;
        this.dataExperiences = enExperiencesJson;
        this.dataFormation = enFormationJson;
        this.dataCertificates = enCertificatesJson
        break;
      default:
        this.dataBasic = esBasicJson;
        this.dataMenu = esMenuJson;
        this.dataResume = esResumeJson;
        this.dataExperiences = esExperiencesJson;
        this.dataFormation = esFormationJson;
        this.dataCertificates = esCertificatesJson
        break;
    }
  }

  public GetBasic(lang: String): any[] {
    this.setLanguage(lang);
    var result = this.dataBasic.basic;
    return result;
  }
  public GetMenuOptions(lang: String): any {
    this.setLanguage(lang);
    var result = this.dataMenu.menu;
    return result;
  }
  public GetResume(lang: String): any[] {
    this.setLanguage(lang);
    var result = this.dataResume.resume;
    return result;
  }
  public GetExperiences(lang: String): any[] {
    this.setLanguage(lang);
    var result = this.dataExperiences.experiences;
    return result;
  }
  public GetFormation(lang: String): any[] {
    this.setLanguage(lang);
    var result = this.dataFormation.formation;
    return result;
  }
  public GetCertificates(lang: String): any[] {
    this.setLanguage(lang);
    var result = this.dataCertificates.certificates;
    return result;
  }
}
