import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Employee } from '../../../interfaces/Employee'

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit {

  @Input() title: string;
  @Input() data: Employee[] = [];

  @Output() add = new EventEmitter<string>();

  label: string;

  constructor() { }

  ngOnInit(): void {
    this.label = '';
  }

  addItem() {
    this.add.emit(this.label);
    this.label = '';
  }

}
