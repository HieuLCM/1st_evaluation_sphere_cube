import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss'],
})
export class LoadComponent {
  // Define the inputs for the component
  @Input() loaded = false;
  @Input() progress: number = 0;
}