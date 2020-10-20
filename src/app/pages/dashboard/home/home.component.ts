import { Component, OnInit } from '@angular/core';
import { PostsService } from './../../../_services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listPosts = [];
  constructor(public postService: PostsService) { }

  ngOnInit() {
    this.getPosts();
  }
  getPosts() {
    this.postService.getPosts().subscribe(data => {
      const result: any = data;
      this.listPosts = result;
    }, error => {
    });
  }
}
