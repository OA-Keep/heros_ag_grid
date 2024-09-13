import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', level: '1', birthday: "1986-12-05" },
      { id: 13, name: 'Bombasto', level: '1', birthday: "1981-09-11" },
      { id: 14, name: 'Celeritas', level: '1', birthday: "1990-08-15" },
      { id: 15, name: 'Magneta', level: '1', birthday: "1993-01-07" },
      { id: 16, name: 'RubberMan', level: '1', birthday: "1992-04-16" },
      { id: 17, name: 'Dynama', level: '1', birthday: "1994-05-30" },
      { id: 18, name: 'Dr. IQ', level: '1', birthday: "1989-07-07" },
      { id: 19, name: 'Magma', level: '1', birthday: "1996-02-25" },
      { id: 20, name: 'Tornado', level: '1', birthday: "1990-03-17" }
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
