import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { IPost } from '../sharedClassesAndFiles/IPosts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  postsList:IPost[];
  errorMsg:any;
  constructor(private postService:PostService) {
    this.postsList=[]
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((postData)=>{
      this.postsList=postData;
    },(error)=>{
      this.errorMsg=error
    })
  }

}
