var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var  Articles = {
    'article-one': {
      title: 'Makerafts | Article One',
      heading: 'First Makeraft Article',
      content: `<p>
                    Content here is something that does not really matter.
               </p>
               `
    },
    
    'article-two': {
      title: 'Makerafts | Article Two',
      heading: 'Second Makeraft Article',
      content: `<p>
                    This is content Part of the Article two which actually is of no use again.
               </p>
               `
    }
};

function createtemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    var articletemplate = `
    <html>
        <head>
            <link href="/ui/makeraft_upload.jpeg" rel="icon">
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

var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});

var names = [];
app.get('/submit_name/:name', function (req,res){
    var name = req.params.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/makeraft_upload.jpeg', function (req, res) {
  res.sendFile(path.join(__dirname,'ui', 'makeraft_upload.jpeg'));
});

app.get('/:name', function(req, res){
    var name = req.params.name;
    res.send(createtemplate(Articles[name]));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
