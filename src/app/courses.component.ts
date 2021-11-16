import { Component} from "@angular/core";

@Component({
  selector: 'courses',
  template: `
    <input (keyup.enter)="onKeyUp()">

  `
})

export class CoursesComponent {

  onSave($event: MouseEvent){
    $event.stopPropagation();
    console.log("Button was clicked", $event);
  }

  onDivClicked(){
      console.log("Div was clicked");
  }

  onKeyUp(){
    console.log("Enter was pressed");
  }

}
