import Geometries from 'three/src/renderers/common/Geometries.js';
import './styles/style.css'
import * as THREE from 'three'
import { update } from 'three/examples/jsm/libs/tween.module.js';
console.log('something else')
console.log(THREE);


//Canvas
const canvas = document.querySelector("canvas.webgl");


//Scene
const scene = new THREE.Scene();


//Sizes

const sizes = {

    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    sizes.height = window.innerHeight;
    sizes.width = window.innerWidth;

    camera.aspect = sizes.width / sizes.height;
    renderer.setSize(sizes.width, sizes.height);
    camera.updateProjectionMatrix();

});
//Camera

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
camera.position.z = 5;
scene.add(camera);

//Geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshNormalMaterial({color: 0x00ff00});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);


//Renderer
const renderer = new THREE.WebGLRenderer(
    {canvas: canvas}
);
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

//Animate
function animate() {
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();
