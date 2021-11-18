import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
})
export class IconComponent {
  @Input('is-favorite') isFavorite = false;
  @Output('change') click = new EventEmitter();

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.click.emit({newValue: this.isFavorite});
  }


}
