import { Component, OnInit } from '@angular/core';
import { Storing } from '../storing';
@Component({
  selector: 'app-something',
  templateUrl: './something.component.html',
  styleUrls: ['./something.component.css']
})
export class SomethingComponent implements OnInit {

  stuff: Storing = {
    id:1,
    name:'A name',
    desc:'Using two-way binding'
  }
  constructor() { }

  ngOnInit(): void {
  }

  test = 'Using Component'
}
