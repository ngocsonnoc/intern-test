const IMAGES = require.context('../assets/images')
export function getImageFromPath(path) {
    return IMAGES(path)
}