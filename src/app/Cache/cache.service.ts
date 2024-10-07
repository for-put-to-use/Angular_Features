import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private cache: Map<string, any> = new Map();
  

  constructor() { }

  get(key: string){
    // return this.cache.get(key);
    console.log("CacheService get",key);
    return localStorage.getItem(key); 
  }

  set(key: string, value: any){
    // this.cache.set(key, value);
    console.log("CacheService set", key, value);
    localStorage.setItem(key, value);
  }
}
