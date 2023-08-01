const memfs = require('memfs')
// const { fs, vol, Volume } = memfs;

// const json = {
//     './README.md': '1-1',
//     './src/index.js': '1-2',
//     './node_modules/debug/index.js': '1-3',
// };
// vol.fromJSON(json);

// const vol2 = new Volume()
// vol2.fromJSON({
//     './README.md': '2-2',
// })
// console.log(fs.readFileSync('./README.md', 'utf8'))
// console.log(vol.readFileSync('./src/index.js', 'utf8'))
// console.log(vol2.readFileSync('./README.md', 'utf8'))

const { getAvailableFileMapSync } = require('./fs-map')

function loadDirToMemSync(dir) {
    const vol = new memfs.Volume()
    const fileMap = getAvailableFileMapSync(dir)
    vol.fromJSON(fileMap)
    return vol
}

module.exports = {
    loadDirToMemSync
}

