import { Component, OnInit } from '@angular/core';
import { Post } from './../post.model';
import { masterPostList } from './../posts.model';

@Component({
  selector: 'app-fanart',
  templateUrl: './fanart.component.html',
  styleUrls: ['./fanart.component.css']
})

export class FanartComponent implements OnInit {
  public masterCategory: string = "fanart";
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
