import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Post } from './../post.model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() formSender = new EventEmitter();
  @Input() categoryType: string;
  submitForm(title, author, image, text){
    let newPost:Post = new Post(title, author, image, text, this.categoryType);

    this.formSender.emit(newPost);
  }

  ngOnInit() {
  }

}
