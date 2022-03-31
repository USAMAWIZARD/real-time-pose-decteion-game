server = require("express");
const bodyParser = require("body-parser");
require("ejs");
app = server();
socketlisten = app.listen(5000);
io = require("socket.io")(socketlisten);
app.set("view ejgine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(server.static(__dirname+'/views'));

io.on("connection", (socket) => {
})

app.get('/',(req,res)=>{
    res.render("index.ejs")
})
app.get('/pingPong',(req,res)=>{
    res.render("pingPong.ejs")
})
app.get('/showskeleton',(req,res)=>{
    res.render("showskeleton.ejs")
})
app.get('/dinoGame',(req,res)=>{
    res.render("dinoGame.ejs")
})
app.get('/showmodel',(req,res)=>{
    res.render('showmodel.ejs')
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
