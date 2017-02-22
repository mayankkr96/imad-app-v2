var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Article = {
  title: 'Makerafts | Article One',
  heading: 'First Makeraft Article',
  content: `<p>
                This is content Part of the Article One.
           </p>
           `
};


function createtemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    var articletemplate = `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="box">
                <div>
                    <a href="/" style="color: white">Home</a>
                </div>
                <br> <hr/>
                <h2>
                    ${heading}
                </h2>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return articletemplate;
}
    
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/A-LRF.png', function (req, res) {
  res.sendFile(path.join(__dirname,'ui', 'A-LRF.png'));
});

app.get('/article-one', function(req, res){
    res.send(createtemplate(Article));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
