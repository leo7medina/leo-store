import { Component, OnDestroy, OnInit } from '@angular/core'
import { Employee } from '../../../interfaces/Employee'
import { GeneratorService } from '../../../services/generator.service'
import { Observable, Subscriber, Subscription } from 'rxjs'
import { tap } from 'rxjs/operators'

const names = ['nicolas', 'juan', 'felipe', 'maria'];

@Component({
  selector: 'app-layout-contact',
  templateUrl: './layout-contact.component.html',
  styleUrls: ['./layout-contact.component.scss']
})
export class LayoutContactComponent implements OnInit, OnDestroy {

  salesList: Employee[] = [];
  bList: Employee[] = [];

  value$: Observable<number>;
  //value: number;
  //sub$: Subscription;

  constructor(private generatorService: GeneratorService) {
    this.value$ = this.generatorService.getData().pipe(
      tap(num => console.log(num))
    );
  }

  ngOnInit(): void {
    this.salesList = this.generatorService.generate(names, [10, 20], 10);
    this.bList = this.generatorService.generate(names, [10, 20], 10)

    // this.sub$ = this.generatorService.getData().subscribe( value => {
    //   this.value = value;
    //   console.log(value);
    // })
  }

  addItem(list: Employee[], label: string) {
    if (label) {
      list.unshift({
        label,
        num: this.generatorService.generateNumber([10, 20]),
      });
    }

  }

  ngOnDestroy() {
    console.log('on destroy');
    //this.sub$.unsubscribe();
  }

}
