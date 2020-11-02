import { Component, OnInit } from '@angular/core';
import { PostsService } from './../../../_services/posts.service';
import { DataService } from '../../../_services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listPosts = [];
  dataPosts = [];
  constructor(private data: DataService, public postService: PostsService) { }

  ngOnInit() {
    this.getPosts();
    this.data.currentMessage.subscribe(message => this.searchItem(message));
  }

  getPosts() {
    this.postService.getPosts().subscribe(data => {
      const result: any = data;
      this.listPosts = result;
      this.dataPosts = result;
    }, error => {
    });
  }
  searchItem(message) {
    if (message !== '') {
      this.postService.searchPosts(message).subscribe(response => {
        const result: any = response;
        this.listPosts = result;
      }, error => {
      });
    } else {
      this.dataPosts = [];
    }

  }
}
