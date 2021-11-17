import { Component} from "@angular/core";
import { Pipe, PipeTransform } from "@angular/core";



@Component({
  selector: 'courses',
  template: `
    {{ text | summary }}
  `
})

export class CoursesComponent {

  text = `
    Lorem Ipsum is simply dummy text of printing bla laa ala

  `

}
