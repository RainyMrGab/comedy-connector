import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TeamListComponent} from "./team-list/team-list.component";

@Component({
  selector: 'cc-root',
  standalone: true,
  imports: [RouterOutlet, TeamListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cc-frontend';
}
