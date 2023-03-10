import { Component } from '@angular/core';
import { cube } from './createCube'; // Import the cube geometry
import { sphere } from './createSphere'; // Import the sphere geometry
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js'; // Import the GLTFExporter from the Three.js library

@Component({
  selector: 'app-export-file',
  templateUrl: './export-file.component.html',
  styleUrls: ['./export-file.component.scss'],
})
export class ExportFileComponent {
  // We can export objects directly from the assets folder.
  // In this case, you can change the parameter inside the createCube.ts and createSphere.ts files.
  // Export the customized files and replace sphere.glb and cube.glb with them.
  // We can modify the initialization set-up of the displayed object.

  // Define a method that will be called when the user clicks the button to export the files
  exportFile() {
    // Create a new GLTFExporter object
    const exporter = new GLTFExporter();

    // Export the sphere geometry
    exporter.parse(
      sphere,
      (result) => { // Callback function that is called when the export is complete
        let blob: Blob;

        if (result instanceof ArrayBuffer) {
          blob = new Blob([result], { type: 'model/gltf+json' });
        } else {
          const json = JSON.stringify(result); 
          blob = new Blob([json], { type: 'application/json' });
        }

        const url = URL.createObjectURL(blob); // Create a URL for the blob
        const link = document.createElement('a'); // Create a link element
        link.href = url; // Set the href attribute of the link to the URL
        link.download = 'sphere.glb'; // Set the download attribute of the link to the file name
        link.click(); // Programmatically click the link to start the download

        URL.revokeObjectURL(url); // Revoke the URL to free up memory
      },
      (error) => console.log(error) // Callback function that is called if there is an error
    );

    // Export the cube geometry (same process as for the sphere)
    exporter.parse(
      cube,
      (result) => {
        let blob: Blob;

        if (result instanceof ArrayBuffer) {
          blob = new Blob([result], { type: 'model/gltf+json' });
        } else {
          const json = JSON.stringify(result);
          blob = new Blob([json], { type: 'application/json' });
        }

        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'cube.glb';
        link.click();

        URL.revokeObjectURL(url);
      },
      (error) => console.log(error)
    );
  }
}
