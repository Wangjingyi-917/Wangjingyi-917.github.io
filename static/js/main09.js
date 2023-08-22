let renderer, camera, scene, light, meshes;
let mixer;
let plane, model;
let pointLight, ambientLight;
let clock = new THREE.Clock();
let axesHelper;
let controls;
let torus;

initRenderer();
initCamera();
initScene();

initLight();
initGeometry();


// initAxesHelper();
// initControls();


window.addEventListener('resize', function () {//渲染结果随着窗体的变化而变化（浏览器变窄了，渲染窗口也变窄）
    camera.aspect = window.innerWidth / this.window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, this.window.innerHeight);
})


/* ------------------场景三要素初始化------------------- */
function initRenderer() {
    renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg'),
        alpha: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor( 0x000000, 0 );
    // renderer.outputEncoding = THREE.sRGBEncoding;
    document.body.appendChild(renderer.domElement);
}

function initCamera() {
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(1, 1, 30);

}

function initScene() {
    scene = new THREE.Scene();
    // scene.background = new THREE.Color(0x111111);
    // scene.fog = new THREE.Fog(0xa0a0a0, 10, 50);//场景虚化
}
/* ------------------场景三要素初始化------------------- */



/* ------------------灯光------------------- */
function initLight() {
    pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5, 5, 5);
    ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(pointLight, ambientLight);

    const lightHelper = new THREE.PointLightHelper(pointLight);
    const gridHelper = new THREE.GridHelper();
    // scene.add(lightHelper,gridHelper);
}
/* ------------------灯光------------------- */



/* ------------------加载3维模型------------------- */
function initGeometry() {
    // torus
    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
    torus = new THREE.Mesh(geometry, material);
    scene.add(torus);
}
/* ------------------加载3维模型------------------- */

function addStar() {
    // star
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);
    const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(100));
    star.position.set(x, y, z)
    scene.add(star);
}

Array(200).fill().forEach(addStar);
//背景
const spaceTxture = new THREE.TextureLoader().load('/static/images/bg.jpg');
scene.background = spaceTxture;



/* ------------------坐标轴------------------- */
function initAxesHelper() {
    axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);
}
/* ------------------坐标轴------------------- */



/* ------------------控制器------------------- */
// function initControls() {
//     controls = new OrbitControls(camera, renderer.domElement);
//     controls.target.set(0, 1, 0);
// }
/* ------------------控制器------------------- */

function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    torus.rotation.x += 0.006;
    torus.rotation.y += 0.01;
    torus.rotation.z += 0.006;

    // jeff.rotation.y += 0.01;
    // jeff.rotation.z += 0.01;

    camera.position.z = t * -0.01;
    camera.position.y = t * -0.0002;
    camera.position.x = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();




/* ------------------渲染器------------------- */
function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.005;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.005;

    // controls.update();
    renderer.render(scene, camera);
}
/* ------------------渲染器------------------- */

animate();