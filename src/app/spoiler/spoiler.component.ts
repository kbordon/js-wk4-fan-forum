import { Component, OnInit } from '@angular/core';
import { Post } from './../post.model';
import { masterPostList } from './../posts.model';

@Component({
  selector: 'app-spoiler',
  templateUrl: './spoiler.component.html',
  styleUrls: ['./spoiler.component.css']
})

export class SpoilerComponent implements OnInit {
  public masterCategory:string = "spoiler";
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
