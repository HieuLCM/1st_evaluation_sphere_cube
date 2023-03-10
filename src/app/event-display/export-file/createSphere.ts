import {
  SphereGeometry,
  MeshBasicMaterial,
  Mesh,
} from 'three';

// Create a sphere with a radius of 300, 100 segments for both width and height,
// and using a basic material with a yellow color
const sphereGeometry = new SphereGeometry(300, 100, 100);
const sphereMaterial = new MeshBasicMaterial({ color: 0xffff00 });
const sphere = new Mesh(sphereGeometry, sphereMaterial);

// Set the sphere's position to (-400, 0, 0) and add it to the group
sphere.position.set(-400, 0, 0);

export { sphere };
