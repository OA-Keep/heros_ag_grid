import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

import { ColDef } from 'ag-grid-community';
import { HeroService } from '../hero.service';

import { HeroRenderer } from "../heroRender";
import { CustomButtonComponent } from "../customButtomComponent";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  @Input() rowData: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  // 使用Render指定特定樣式
  columnDefs: ColDef[] = [
    { field: 'id' },
    { field: 'name' },
    { field: 'level' },
    { field: 'birthday' },
    {
      field: 'link', cellRenderer: HeroRenderer,
      sortable: false,
      filter: false,
    },
    {
      field: "delete",
      cellRenderer: CustomButtonComponent,
      sortable: false,
      filter: false
    }
  ];


  defaultColDef = {
    sortable: true,
    filter: true
  };

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.rowData = heroes);
  }
}
