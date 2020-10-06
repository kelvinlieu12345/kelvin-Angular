import { Component } from '@angular/core';
import {RecordService} from './record.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kelvin-Angular';
  constructor(public record: RecordService){}
}
