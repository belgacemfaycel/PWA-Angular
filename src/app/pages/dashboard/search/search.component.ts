import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../_services/data.service';
import { PostsService } from '../../../_services/posts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  listPosts = [];
  constructor(private data: DataService, public postService: PostsService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.searchItem(message));
  }
  searchItem(message) {
    if (message !== '') {
      this.postService.searchPosts(message).subscribe(response => {
        const result: any = response;
        this.listPosts = result;
      }, error => {
      });
    } else {
      this.listPosts = [];
    }

  }
}
