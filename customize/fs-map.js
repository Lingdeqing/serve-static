const klawSync = require('klaw-sync')
const fs = require('fs')

function getAvailableFileMapSync(dir) {
    const fileMap = {}
    try {
        const files = klawSync(dir, { nodir: true })
        files.map((fileItem) => {
            try {
                const text = fs.readFileSync(fileItem.path, 'utf-8')
                fileMap[fileItem.path] = text
            } catch (e) { }
        })
    } catch (e) { }
    return fileMap
}

module.exports = {
    getAvailableFileMapSync
}