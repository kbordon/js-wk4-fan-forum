import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from './../post.model';
import { masterPostList } from './../posts.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public childPosts: Post[] = masterPostList;
  @Output() deleteSender = new EventEmitter();
  @Input() childCategoryType: string;

  ngOnInit() {
  }

  editPost(post: Post) {
    post.editing = true;
  }

  doneEdit(post: Post) {
    post.editing = false;
  }

  deletePost(post: Post) {
    let theIndex = masterPostList.indexOf(post);
    masterPostList.splice(theIndex, 1);
  }

  showHideToggle(post: Post) {
    if(post.active) {
      post.active = false;
    } else {
      post.active = true;
    }
  }
}
