import { Component} from "@angular/core";

@Component({
  selector: 'courses',
  template: `
    <div (click)="onDivClicked()">
     <button (click)="onSave($event)">Save</button>
    </div>

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

}
