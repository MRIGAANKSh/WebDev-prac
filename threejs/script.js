// const scene = new THREE.Scene(); //scene
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// //camera 

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;
// const canvas=document.querySelector("#draw")

// const renderer = new THREE.WebGLRenderer({canvas});
// renderer.setSize( window.innerWidth, window.innerHeight );


// function animate() {
//     window.requestAnimationFrame(animate)
//     renderer.render( scene, camera );
//     cube.rotation.x += 0.01;
// cube.rotation.y += 0.01;
//   }
// animate()

//scene
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(65,window.innerWidth/window.innerHeight,0.1,100);
camera.position.z=5;
scene.add(camera);

let box=new THREE.BoxGeometry(1,1,1);
let material=new THREE.MeshBasicMaterial({color:0x00ff00});
let mesh=new THREE.Mesh(box,material);

mesh.rotation.y=1.22
mesh.scale.z=2



scene.add( mesh );
const canvas=document.querySelector("#draw")
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.render(scene,camera)