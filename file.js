var app = require("masarotunda");
var cl = new app.Client();

var cfg = require('./cfg.json');
    let p = cfg.px;
    let server =  cfg.sv;

cl.on('message', async message => {
    let m = message;
    let cmd = m.content;
    let ch = m.channel;

    if(cmd === p + "test") {
        ch.send("test");
    }
})

cl.connect(server);