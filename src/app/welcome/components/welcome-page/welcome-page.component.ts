import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {

  parametro:any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.parametro = this.route.snapshot.paramMap.get('name');
  }


}
