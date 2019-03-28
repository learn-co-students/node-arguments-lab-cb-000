var num = parseInt(process.argv[3], 10) ;
var length = process.argv[2] ;

function randomPassword(span) {
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var x = 0; x < span; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    console.log(pass);
}

for(var i = 0; i < num; i++ ){
  randomPassword(length)
}
//full disclosure. I didn't write this password generation algorithm. I just copied it from https://jsfiddle.net/Guffa/DDn6W/
// shoutouts to Goran Andersson from Bondfallet, Vastmanlands lan, Sweden.

process.exit(0) ;
