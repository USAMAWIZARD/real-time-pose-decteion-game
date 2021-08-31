server = require("express");
const bodyParser = require("body-parser");
require("ejs");
app = server();
socketlisten = app.listen(5000);
io = require("socket.io")(socketlisten);
app.set("view ejgine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(server.static(__dirname));

io.on("connection", (socket) => {
})

app.get('/',(req,res)=>{
    res.render("index.ejs")
})
app.get('/showskeleton',(req,res)=>{
    res.render("showskeleton.ejs")
})
app.get('/showskeleton',(req,res)=>{
    res.render("showskeleton.ejs")
})
app.get('/showmodel',(req,res)=>{
    res.render('showmodel.ejs')
})
