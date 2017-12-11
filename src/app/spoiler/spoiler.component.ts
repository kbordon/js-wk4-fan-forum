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

  addPost(childPost) {
    masterPostList.push(childPost);
  }

  ngOnInit() {
  }
}
