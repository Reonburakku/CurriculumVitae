import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  experiences: Experience[] = [];

  constructor() { }

  public GetExperiences(): Experience[] {

    this.experiences.push({
      Order: 1,
      Position: '',
      Company: '',
      StartYear: '',
      StartMonth: '',
      FinishYear: '',
      FinishMonth: '',
      Description: ''
    });
    return this.experiences;
  }
}
