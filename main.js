import * as THREE from './node_modules/three/build/three.module.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000
);

function addCube(x, y, z) {
  this.val1 = x;
  this.val2 = y;
  this.val3 = z;
  this.geometry = new THREE.BoxGeometry(1, 1, 1);
  this.material = new THREE.MeshBasicMaterial({ color: 0x346beb });
  this.cube = new THREE.Mesh(this.geometry, this.material);
  this.cube.position.set(this.val1, this.val2, this.val3);
  scene.add(this.cube);
}

addCube.prototype.animate = function() {
  this.cube.rotation.x += 0.01;
  this.cube.rotation.y += 0.01;
  renderer.render(scene, camera);
};

let cube1 = new addCube(2, 3, 1);
let cube2 = new addCube(1, 1, 1);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

camera.position.set(0, 2, 5);

renderer.setAnimationLoop(() => {
  cube1.animate();
  cube2.animate();
});

renderer.render(scene, camera);
