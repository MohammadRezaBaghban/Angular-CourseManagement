import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../heros';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add('HeroService: Hero with id = ${hero.id} has been selected');

  }
  constructor(private heroSerive: HeroService, public messageService: MessageService) { }

  getHeroes() {
    this.heroSerive.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }

}
