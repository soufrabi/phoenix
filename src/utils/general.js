

const getDeviceInfo = () => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    const orientation = vw > vh ? "landscape" : "portrait"

    return {
        vw: vw,
        vh: vh,
        orientation: orientation
    }

}


const isTouchEnabled = () => {
    return ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0);
}


const isOrientationPortrait = ()=>{
    return window.matchMedia("(orientation:portrait)").matches
}


const liesWithinBoundingRect = (x,y,rect)=>{
    if(x>=rect.left && x<=rect.right && y>= rect.top && y<= rect.bottom){
        return true;
    }else {
        return false;
    }
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
const getRandomArbitrary = (min, max)=>{
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
const getRandomInt = (min, max)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



export {
    getDeviceInfo,
    isTouchEnabled,
    isOrientationPortrait,
    liesWithinBoundingRect,
    getRandomArbitrary,
    getRandomInt
}

