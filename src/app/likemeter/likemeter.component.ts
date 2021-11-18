import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './likemeter.component.html',
  styleUrls: ['./likemeter.component.css']
})
export class LikemeterComponent  {

  @Input('isActive') isActive: boolean | undefined;
  @Input('likeCount') likesCount: number | undefined;


  onClick(){
    // @ts-ignore
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
  }


}
