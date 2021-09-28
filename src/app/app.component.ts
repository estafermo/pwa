import { Component, OnInit } from '@angular/core';
import { AstronautsService } from './services/astronauts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-pwa';

  number_of_astronauts: number = 0;

  constructor(private astronautsService: AstronautsService ){

  }
  ngOnInit(): void {
    const result = this.astronautsService.getAll().subscribe((data: any) => 
    {
      this.number_of_astronauts = data.people.length;
    });
  }


}
