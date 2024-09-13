import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Utils{
  public OrderArray(array: any[], prop: string){
    var result = array.sort((a,b) => a[prop] - b[prop]);
    return result;
  }
  public OrderArrayDesc(array: any[], prop: string){
    var result = array.sort((a,b) => b[prop] - a[prop]);
    return result;
  }
}
