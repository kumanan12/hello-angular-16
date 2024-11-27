import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent {
  message = 'hello';

  updateMessage() {
    console.log('updateMessage');

    this.message = 'test';
  }
}
