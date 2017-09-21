var fs = require('fs');
var createHTML = require('create-html');
var webshot = require('webshot');
const Filehound = require('filehound');
var http = require('http');
var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');
var serve = serveStatic("./");

var server = http.createServer(function(req, res) {
  var done = finalhandler(req, res);
  serve(req, res, done);
});

server.listen(8000);

var foundHtml = [];
Filehound.create()
  .ext('html')
  .paths("projects/")
  .find((err, htmlFiles) => {
    if (err) return console.error("handle err", err);

    // Screenshots
    htmlFiles.forEach(function(element) {
          let options = {
              screenSize: {
                  width: 1024,
                  height: 768
              },
              shotSize: {
                  width: 1024,
                  height: 768
              },
              renderDelay: '1000',
              streamType: 'jpg',
              quality: '100'
          };
        webshot( 'http://localhost:8000/'+ element,'images/'+ element +'_1024x768.jpg', options, function (err) {
          // screenshot now saved
        });
          foundHtml.push('<article><a title= "'+ element +'"  target="_blank" href="'+ element + ' ">' + element + ' </a><br><img src="/images/'+ element +'_1024x768.jpg" alt="'+element+'"></article>');
    });


    // Filehound is asyncronous
    var bodyContent = '<section><p>Projects in Folder</p><br><span>' + foundHtml + '</span> </section>';
    var html = createHTML({
      title: 'Project Index',
      script: 'index.js',
      scriptAsync: true,
      css: 'style.css',
      lang: 'en',
      dir: 'rtl',
      head: '<meta name="description" content="Projects List">',
      body: bodyContent,
      favicon: 'favicon.png'
    })

    fs.writeFile('index.html', html, function (err) {
      if (err) console.log(err)
    })

});
