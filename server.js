server = require("express");
const bodyParser = require("body-parser");
require("ejs");
app = server();
socketlisten = app.listen(5000);
io = require("socket.io")(socketlisten);
app.set("view ejgine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
app.use(server.static(__dirname+'/views'));

io.on("connection", (socket) => {
})

app.get('/',(req,res)=>{
    res.render("index.ejs")
})
app.get('/pingPong',(req,res)=>{
    res.render("modelpong.ejs")
})
app.get('/showSkeleton',(req,res)=>{
    res.render("showSkeleton.ejs")
})
app.get('/dinoGame',(req,res)=>{
    res.render("dinoGame.ejs")
})
app.get('/showjump',(req,res)=>{
    res.render('showjump.ejs')
})
app.get('/about',(req,res)=>{
    res.render('about.ejs')
})
app.get('/instruction',(req,res)=>{
    res.render('instruction.ejs')
})
app.get('/settings',(req,res)=>{
    res.render('settings.ejs')
})
app.get('/pingpongiframe',(req,res)=>{
    res.setHeader('Origin-Agent-Cluster','?1');
    res.render('pingPongiframe.ejs')
})
