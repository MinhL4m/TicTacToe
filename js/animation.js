
var Animation = function () {

    /**
     * move the element out of screen
     * @param {element} domElement 
     */
    let moveOut = (domElement) => {
        domElement.classList.add('moveout');
        domElement.classList.remove('appear');
    }

    let moveUp = (domElement) => {
        domElement.classList.add('moveup');
        domElement.classList.remove('appear');
    }

    /**
     * move the element into the screen
     * @param {element} domElement 
     */
    let appear = (domElement) => {
        domElement.classList.remove('moveup');
        domElement.classList.remove('moveout');
        domElement.classList.add("appear");
    }

    /**
     * make the element disappear 
     * @param {element} domElement 
     */
    let close = (domElement) => {
        domElement.classList.add('hidden');
    }

    return {
        moveOut: moveOut,
        appear: appear,
        close: close,
        moveUp: moveUp
    }
}();

export default Animation;