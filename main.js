import * as THREE from './node_modules/three/build/three.module.js';

//import { OrbitControls } from 'https://unpkg.com/three/examples/jsm/controls/OrbitControls.js';


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// scene 
const scene = new THREE.Scene();
// camera
const camera = new THREE.PerspectiveCamera(
    75, window.innerWidth/window.innerHeight,
    0.1,1000
)
//const orbit = new OrbitControls(camera, renderer.domElement);
// Cube 
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:0x346beb});
const cube = new THREE.Mesh(geometry, material);
cube.position.set(1,1,1)
scene.add(cube);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
camera.position.set(0,2,5);
//orbit.update();
function animate(){
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
    renderer.render(scene,camera);
}
renderer.render(scene, camera);
renderer.setAnimationLoop(animate);