

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


export { getDeviceInfo }

