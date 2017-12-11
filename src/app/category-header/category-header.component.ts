import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-header',
  templateUrl: './category-header.component.html',
  styleUrls: ['./category-header.component.css']
})
export class CategoryHeaderComponent implements OnInit {
  @Input() childCategory:string;
  @Output() addSender = new EventEmitter();

  addButtonClicked() {
    this.addSender.emit();
  }

  ngOnInit() {
  }

}
