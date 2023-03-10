import {
  MeshBasicMaterial,
  Mesh,
  BoxGeometry
} from 'three';

// Create a cube with a width, height, and depth of 450
// and using a basic material with a green color
const cubeGeometry = new BoxGeometry(450, 450, 450, 100, 100, 100);
const cubeMaterial = new MeshBasicMaterial({ color: 0x00ff00 });
const cube = new Mesh(cubeGeometry, cubeMaterial);

// Set the cube's position to (500, 0, 0) and add it to the group
cube.position.set(500, 0, 0);

export { cube };
