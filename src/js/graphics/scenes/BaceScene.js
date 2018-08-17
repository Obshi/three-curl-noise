import * as THREE from 'three'
import GLTF2Loader from 'three-gltf2-loader'

GLTF2Loader(THREE);

export default class BaceScene {

    constructor(canvas) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 1000);
        this.isTouch = false;
    }

    Update(){
    }

    Resize(width,height){
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    }

    onTouchStart(cursor){
        this.isTouch = true;
        this.touchDown(cursor);
    }

    onTouchMove(cursor){
        if(!this.isTouch) return;
        this.touchMove(cursor);
    }

    onTouchEnd(cursor){
        this.isTouch = false;
        this.touchUp(cursor);
    }

    touchDown(cursor){}
    touchUp(cursor){}
    touchMove(cursor){}
}