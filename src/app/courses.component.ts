import { Component} from "@angular/core";

@Component({
  selector: 'courses',
  template: `
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
  `
})

export class CoursesComponent {
  email="me@example.com";

  onSave($event: MouseEvent){
    $event.stopPropagation();
    console.log("Button was clicked", $event);
  }

  onDivClicked(){
      console.log("Div was clicked");
  }

  onKeyUp(){
    console.log(this.email);
  }

}
