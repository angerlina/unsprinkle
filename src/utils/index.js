 const defaultExtension = '.jpg'

 const avifEndings = {
    '1x': '.avif 1x',
    '2x': '@2x.avif 2x',
    '3x': '@3x.avif 3x',
}

const jpgEndings = {
    '1x': '.jpg 1x',
    '2x': '@2x.jpg 2x',
    '3x': '@3x.jpg 3x',
}
/**
 * @param {string} src for instance: /images/alexandru-rotariu-dog.jpg */
export const getSrcSets = (src) => {
    const avif = [src.replace(defaultExtension, avifEndings['1x']),
        src.replace(defaultExtension, avifEndings['2x'],
            src.replace(defaultExtension, avifEndings['3x']))].join(', ')
    const jpg = [src.replace(defaultExtension, jpgEndings['1x']),
        src.replace(defaultExtension, jpgEndings['2x'],
            src.replace(defaultExtension, jpgEndings['3x']))].join(', ')
    return [avif, jpg];
}
