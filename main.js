// Import the THREE.js library
import * as THREE from "three";

// Allow camera controls around the scene
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Allow .gltf model loading
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer({ alpha: true }); // Alpha true for transparent background
renderer.setSize(window.innerWidth, window.innerHeight);
// Add the renderer to the DOM

document.body.appendChild(renderer.domElement);

// Load a GLTF model of a cube
const loader = new GLTFLoader();

loader.load(
  "cube.gltf",
  function (gltf) {
    // If file successfully loaded, add it to the scene
    scene.add(gltf.scene);
  },
  function (xhr) {
    // While loading, log the progress
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  function (error) {
    // If there is an error loading the file, log it
    console.error(error);
  }
);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
