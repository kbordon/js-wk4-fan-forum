import { Component, OnInit } from '@angular/core';
import { masterPostList } from './../posts.model';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.css']
})
export class WritingComponent implements OnInit {
  public masterCategory: string = "writing";
  public showForm = false;
  addPost(childPost) {
    masterPostList.push(childPost);
  }

  ngOnInit() {
  }
  addFormShow() {
    if(this.showForm) {
      this.showForm = false;
    } else {
      this.showForm = true;
    }
  }
}
