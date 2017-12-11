import { Component, OnInit } from '@angular/core';
import { masterPostList } from './../posts.model';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.css']
})
export class WritingComponent implements OnInit {
  public masterCategory: string = "writing";

  addPost(childPost) {
    masterPostList.push(childPost);
  }

  ngOnInit() {
  }

}
