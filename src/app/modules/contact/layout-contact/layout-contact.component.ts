import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../interfaces/Employee'
import { GeneratorService } from '../../../services/generator.service'

const names = ['nicolas', 'juan', 'felipe', 'maria'];

@Component({
  selector: 'app-layout-contact',
  templateUrl: './layout-contact.component.html',
  styleUrls: ['./layout-contact.component.scss']
})
export class LayoutContactComponent implements OnInit {

  salesList: Employee[] = [];
  bList: Employee[] = [];

  constructor(private generatorService: GeneratorService) { }

  ngOnInit(): void {
    this.salesList = this.generatorService.generate(names, [10, 20], 10);
    this.bList = this.generatorService.generate(names, [10, 20], 10);
  }

  addItem(list: Employee[], label: string) {
    list.unshift({
      label,
      num: this.generatorService.generateNumber([10, 20]),
    });
  }

}
