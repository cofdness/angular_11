import {Component, Input} from '@angular/core';
import {AdComponent} from './ad.component';

@Component({
  template: `
  <div class="job-ad">
    <h4>{{data.headline}}</h4>
    <p>{{data.body}}</p>
  </div>
  `
})
export class HeroJobAdComponent implements AdComponent {
  @Input() data: any;
}
