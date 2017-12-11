import { Component, OnInit } from '@angular/core';
import { Post } from './../post.model';
import { masterPostList } from './../posts.model';

@Component({
  selector: 'app-spoiler',
  templateUrl: './spoiler.component.html',
  styleUrls: ['./spoiler.component.css']
})
export class SpoilerComponent implements OnInit {
  masterCategory:string = "Spoiler";


  addPost(childPost) {
    masterPostList.push(childPost);
  }
  ngOnInit() {
  }
}
