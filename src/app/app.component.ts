import { Component } from '@angular/core';
import Post from 'src/app/post.modal';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public title = 'KodeBook';

    public post: Post;
    public postList: Post[];

    public constructor(private sanitizer: DomSanitizer) {
      this.post = new Post();

      this.postList = [];
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

    /** Post Image */
    public postImage(event) {
      console.log('Posting Image...');

      // IT WILL GIVE ACCESS TO INPUT ELEMENT 
      const refElement = event.target;
      const uploadedFile = refElement.files[0];

      const uploadedFileAsUrl = URL.createObjectURL(uploadedFile);
      const uploadedFileAsUrlNew = this.sanitizer.bypassSecurityTrustResourceUrl(uploadedFileAsUrl);

      this.post.postType = 'IMAGE';
      this.post.postValueMedia = uploadedFileAsUrlNew;

      // SPLICE - Using this we can add element to any position.
      this.postList.splice(0, 0, this.post);

      console.log(uploadedFile);

      // RE INITIALZE
      this.post = new Post();
    }

    /** Post Image */
    public postVideo(event) {
      console.log('Posting Video...');

      // IT WILL GIVE ACCESS TO INPUT ELEMENT
      const refElement = event.target;
      const uploadedFile = refElement.files[0];

      const uploadedFileAsUrl = URL.createObjectURL(uploadedFile);
      const uploadedFileAsUrlNew = this.sanitizer.bypassSecurityTrustResourceUrl(uploadedFileAsUrl);

      this.post.postType = 'VIDEO';
      this.post.postValueMedia = uploadedFileAsUrlNew;

      // SPLICE - Using this we can add element to any position.
      this.postList.splice(0, 0, this.post);

      // RE INITIALZE
      this.post = new Post();
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
