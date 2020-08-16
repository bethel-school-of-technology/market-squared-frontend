import { Component } from '@angular/core';
//comment

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MarketSquared';
  staticPath: string = 'http://localhost:3001/staticData';
}
