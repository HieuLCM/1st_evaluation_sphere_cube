import { Component } from '@angular/core';
import { EventDisplayService } from 'phoenix-ui-components';
import { Configuration, PhoenixMenuNode, PresetView } from 'phoenix-event-display';

@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.scss'],
})
export class EventDisplayComponent {
  loaded = false; // Flag indicating if the event display has finished loading
  loadingProgress = 0; // Percentage of event display loading progress

  // Root node for the Phoenix menu
  phoenixMenuRoot: PhoenixMenuNode = new PhoenixMenuNode('Phoenix Menu', 'phoenix-menu');

  constructor(private eventDisplay: EventDisplayService) {}

  ngOnInit() {
    const configuration: Configuration = {
      // Array of preset views to use in the event display
      presetViews: [
        new PresetView('Right View', [1700, 0, 0], [0, 0, 0], 'right-cube'),
        new PresetView('Center View', [0, 1000, 1400], [0, 0, 0], 'top-cube'),
        new PresetView('Left View', [-1700, 0, 0], [0, 0, 0], 'left-cube'),
      ],

      // Default view to show when the event display is loaded
      defaultView: [0, 0, 1500, 0, 0, 0], // x,y,z of position followed by x,y,z of target

      // Root node for the Phoenix menu
      phoenixMenuRoot: this.phoenixMenuRoot,
    };

    this.eventDisplay.init(configuration); // Initialize the event display with the specified configuration

    // Load GLTF geometry for the event display
    this.eventDisplay.loadGLTFGeometry(
      '../../assets/sphere.glb', // Path to GLB file for the sphere
      'sphere', // Unique identifier for the geometry
      undefined, // Optional callback function to execute when the geometry is loaded
      1, // Scale factor for the geometry
      true // Flag indicating whether the geometry should be visible or not
    );
    this.eventDisplay.loadGLTFGeometry(
      '../../assets/cube.glb', // Path to GLB file for the cube
      'cube', // Unique identifier for the geometry
      undefined, // Optional callback function to execute when the geometry is loaded
      1, // Scale factor for the geometry
      true // Flag indicating whether the geometry should be visible or not
    );

    // Set up listeners for the loading manager of the event display
    this.eventDisplay.getLoadingManager().addProgressListener((progress) => (this.loadingProgress = progress));
    this.eventDisplay.getLoadingManager().addLoadListenerWithCheck(() => (this.loaded = true));
  }
}
