// let imagesSource = "C://Users/zarina/kazakhtemirzhol/src/images/"
export function requireImage(imageName) {
    console.log(__dirname)
    console.log(imageName+'/src/')
    
    return require(__dirname + imageName)
}

