import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HeroesComponent } from '../heroes/heroes.component';
import { FormControl, FormGroup } from '@angular/forms';

// DatePicker Formater
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';
const moment = _rollupMoment || _moment;

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
  // 給Date欄位輸入格式
  birthday = new FormControl(moment(null));
  registerForm = new FormGroup({
    heroName: new FormControl(''),
    heroLevel: new FormControl(''),
    birthday: this.birthday
  });

  // level欄位值
  levelSel: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  // 傳遞 heroesComponent來更新清單
  constructor(private heroService: HeroService, private heroesComponent: HeroesComponent) { }

  // 新增
  add(name: string, level: any, birthday: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name, level, birthday } as Hero)
      .subscribe(_hero => {
        this.heroesComponent.getHeroes();
      });
  }

}
