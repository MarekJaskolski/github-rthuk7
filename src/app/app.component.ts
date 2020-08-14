import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  text = '';
  showDone(){
    console.log("Zrobione")
  }

  zoom(deltaY: number) {
    const direction = deltaY < 0 ? -1 : 1;
    console.log(direction)
  }
}
