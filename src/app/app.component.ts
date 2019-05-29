import { Component } from '@angular/core';
import Post from 'src/app/post.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public title = 'KodeBook';

    public post: Post;
    public postList: Post[];

    public constructor() {
      this.post = new Post();

      // SAMPLE IMAGE POST
      const samplePostImage = new Post();
      samplePostImage.postType = 'IMAGE';
      samplePostImage.postValue = 'assets/hbd.jpg';

      this.postList = [samplePostImage];
    }

    /** Post Text */
    public postText() {
      // PUSH METHOD
      // this.postList.push(this.post);

      // SPLICE - Using this we can add element to any position.
      this.postList.splice(0, 0, this.post);

      // RE INITIALZE
      this.post = new Post();
    }

    /** DELETE POST */
    public deletePost(itemIndex) {
       this.postList.splice(itemIndex, 1);
    }


    /** Update Like */
    public likeCount(item: Post) {
      item.likeCount += 1;
    }

    /** Update Subscribe */
    public subscribeCount(item: Post) {
      item.subscribeCount += 1;
    }

    /** Add Comment */
    public addComment(item: Post) {
      item.commentList.push('thank you');
    }
}
