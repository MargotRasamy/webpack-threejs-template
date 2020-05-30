import './styles/main.css';
import Annexe from './scripts/annexe.js';
import lilo from './images/lilo.png';
const annexe = new Annexe()
console.log('Webpack working well !')
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
const loader = new GLTFLoader()
// Window sizes
let windowW = window.width;
let windowH = window.height;

import Girl from './models/Girl.gltf';



// Sizes
const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

window.addEventListener('resize', () =>
{
    // Save sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
})


// Scene
const scene = new THREE.Scene()

// Camera and Lights (environnment)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)
scene.background = new THREE.Color('#FFEFF2');
const hemisphereLight = new THREE.HemisphereLight( 0xffffff, 0x444444, 3 )
hemisphereLight.position.set( 0, 200, 0 )
scene.add( hemisphereLight );

// Objects
let girl
loader.load( Girl , function ( gltf ) {
    girl =  gltf.scene
    girl.position.y = -1
	scene.add( girl );
});

// Renderer
let renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('.webgl')
})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(sizes.width, sizes.height)


//  Loop
const loop = () => {

	// Update


    // Render
    renderer.render(scene, camera)

    // Keep looping
    window.requestAnimationFrame(loop)
}

loop()




