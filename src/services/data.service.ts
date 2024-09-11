import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as esJson from '../resources/es.json';
import * as enJson from '../resources/en.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: any;
  options: any[] = [];
  constructor() { }

  private setLanguage(lang: String){
    switch(lang){
      case "es":
        this.data = esJson;
        break;
      case "en":
        this.data = enJson;
        break;
      default:
        this.data = esJson;
        break;
    }
  }

  public GetBasic(lang: String): any[] {
    this.setLanguage(lang);
    var result = this.data.basic;
    return result;
  }
  public GetMenuOptions(lang: String): any {
    this.setLanguage(lang);
    var result = this.data.menu;
    return result;
  }
  public GetResume(lang: String): any[] {
    this.setLanguage(lang);
    var result = this.data.resume;
    return result;
  }
  public GetExperiences(lang: String): any[] {
    this.setLanguage(lang);
    var result = this.data.experiences;
    return result;
  }
}
