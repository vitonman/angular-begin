import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tweet = {
    body: 'Here is the body',
    likeCount: 10,
    isLiked: true
  }

  onLikeChanged(eventArgs: { tweet: boolean }){
    console.log("changed: ", eventArgs);
  }

}
