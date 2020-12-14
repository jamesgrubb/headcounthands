const htmlmin = require("html-minifier");

module.exports = (eleventyConfig) => {


    eleventyConfig.addTransform("htmlmin", function(content,outputPath){
        if (
            process.env.ELEVENTY_PRODUCTION && outputPath && outputPath.endsWith(".html")
        ){
            let minified = htmlmin.minify(content,{
                useShortDoctype : true,
                removeComments: true,
                collapseWhitespace: true
            })
            return minified
        }

        return content

    })

    eleventyConfig.addWatchTarget('./src/_tmp/style.css')
    
    eleventyConfig.addPassthroughCopy({'./node_modules/alpinejs/dist/alpine.js':"/js/alpine.js"})
    eleventyConfig.addPassthroughCopy({'./src/js/script.js':"/js/script.js"})

    eleventyConfig.addPassthroughCopy({"./src/_tmp/style.css":"/style.css"})

    eleventyConfig.addShortcode("version", function(){
        return String(Date.now())
    })
    
    return{
        dir:{
            output: "public",
            input: "src"
        }
    }
}