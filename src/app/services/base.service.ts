import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {
abstract endPoint: string;
  constructor() { }
  get URL(): string{
    return 'http://localhost/api-escuela';
  }
}
