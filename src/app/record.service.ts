import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor() { }
  list = [
    {
      id: 1,
      name: 'kelvin'
    },
    {
      id: 2,
      name: 'someone'
    }
  ];
}
