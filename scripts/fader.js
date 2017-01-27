
/* ***** Begin: GreyWyvern's Buffered Text-fade Effect - v2.2a ***** */
var fader = new Array(), fadeQ = new Array();

fader[0] = new fadeObj(0, 'fade0', '000000', 'ffffff', 40, 40, true);

fader[0].message[0] = "<i>\"An incredible cast of musicians who really deliver an awesome live show!  Get your freak on, shake your booty, you know the drill!!!\"</i><br><table width=\"400\" align=\"right\"><tr><td><b>- Sean (Crawdaddy) Crawford, 92.3 FredFM</b></td></tr></table>"
fader[0].message[1] = "<i>\"8Track Mind is a must-see band.   Their retro music and fun stage show only add to what is the essence of this group.  And for my money, that\'s the excellent musicianship and superb vocals. If you\'re a fan of live music, 8Track Mind will never disappoint!!!\"</i><br><table width=\"400\" align=\"right\"><tr><td><b>- Mark Roberts, 105.3 FM \"The Fox\"</b></td></tr></table>"
fader[0].message[2] = "<i>\"I thought you guys were the best band I had EVER heard and I have since said so to several people.   Great voices, great talent - I can\'t say enough!\"</i><br><table width=\"400\" align=\"right\"><tr><td><b>- Rose Arsenault, Department of Tourism and Parks</b></td></tr></table>"
fader[0].message[3] = "<i>\"A big thank you to the entire band for an absolutely fantastic performance... Darin and I were thrilled to have you entertain our guests and it was so nice to see everyone dance the night away!!\"</i><br><table width=\"400\" align=\"right\"><tr><td><b>- Katie and Darin, 8Track Mind customers</b></td></tr></table>"
fader[0].message[4] = "<i>\"WOW. What to say about you guys? The night was a huge success because of the band. They\'re fun, full of life and bring the crowd in. Have not enjoyed a band so much in years. Thanks and keep up the great work!\"</i><br><table width=\"400\" align=\"right\"><tr><td><b>- Rach, 8Track Mind customer</b></td></tr></table>"
fader[0].message[5] = "<i>\"I am amazed by 8Track Mind's talent, as well as their awesome ability to please their audience and get people up dancing. Their wide range of songs kept my attention and left me wanting more.\"</i><br><table width=\"400\" align=\"right\"><tr><td><b>- Michael George, Tony's Music Box Ltd.</b></td></tr></table>"	
fader[0].message[6] = "<i>\"Thank you so much, the event was a big hit and the BAND was amazing.   The feedback from the evening has been outstanding.  I look forward to working with you again and appreciate you and your crew making our event such a success.\"</i><br><table width=\"400\" align=\"right\"><tr><td><b>- Sara Holyoke, Hotel Manager - Delta Fredericton</b></td></tr></table>"
fader[0].message[7] = "<i>\"The music was superb and I have recommended you to all I speak to!\"</i><br><table width=\"400\" align=\"right\"><tr><td><b>- Heather Budreski - ING Insurance</b></td></tr></table>"
fader[0].message[8] = "<i>\"Just performed with 8Track Mind at CFB Gagetown. They Blew my 8 Track Mind with their stellar live show, crisp playing and intoxicating vocals. I\'ll be sure to catch them again the first chance I get. Bravo!\"</i><br><table width=\"400\" align=\"right\"><tr><td><b>- Mark Critch, \"This Hour Has 22 Minutes\"</b></td></tr></table>"
fader[0].message[9] = "<i>\"Thanks for making the trek over to Charlottetown to play for our event \"New Fashioned Christmas\". We had close to 600 people in for the dance and by all accounts a great time was had by all.\"</i><br><table width=\"450\" align=\"right\"><tr><td><b>- James Aylward, Confederation Centre, Charlottetown, PEI</b></td></tr></table>"
fader[0].message[10] = "<i>\"I was totally impressed with 8Track Mind. What a pleasure to hear that great music performed with such precision and energy. 8Track Mind is a band music lovers will enjoy and musicians will admire.\"</i><br><table width=\"400\" align=\"right\"><tr><td><b>- Hal Pennell, Tony’s Music Box Ltd.</b></td></tr></table>"
fader[0].message[11] = "<i>\"All I can say is: Your band was worth every penny.  Everybody talked about how good you guys were at breakfast. Thank you for making our day even better.\"</i><br><table width=\"400\" align=\"right\"><tr><td><b>- Gaetan, 8Track Mind customer</b></td></tr></table>"
	

var RGB = new Array(256), k = 0, hex = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
for (var i = 0; i < 16; i++) for (var j = 0; j < 16; j++) RGB[k++] = hex[i] + hex[j];

function fadeObj(number, id, colOff, colOn, spdIn, spdOut, def) {
    this.number = number;
    this.id = id;
    this.colOff = [parseInt(colOff.substr(0, 2), 16), parseInt(colOff.substr(2, 2), 16), parseInt(colOff.substr(4, 2), 16)];
    this.colOn = [parseInt(colOn.substr(0, 2), 16), parseInt(colOn.substr(2, 2), 16), parseInt(colOn.substr(4, 2), 16)];
    this.colNow = [parseInt(colOff.substr(0, 2), 16), parseInt(colOff.substr(2, 2), 16), parseInt(colOff.substr(4, 2), 16)];
    this.spdIn = spdIn;
    this.spdOut = spdOut;
    this.def = def;
    this.direction = false;
    this.active = false;
    this.message = new Array();
    this.messageNow = 0;
}

function fadeCmd(number, message, direction) {
    this.number = number;
    this.message = message;
    this.direction = direction;
}

function fade(number, message, direction) {
    if (fader[number].def && fader[number].messageNow == 0 && fader[number].direction) {
        fadeQ[fadeQ.length] = new fadeCmd(number, 0, false);
        fadeQ[fadeQ.length] = new fadeCmd(number, message, direction);
        message = 0;
        direction = false;
    } else fadeQ[fadeQ.length] = new fadeCmd(number, message, direction);
    setTimeout(function() {
        fadeBegin(number);
    }, 20);
}

function fadeBegin(number) {
    for (var x = 0; x < fadeQ.length; x++) {
        for (var y = x + 1; y < fadeQ.length; y++) {
            if (fadeQ[x].number == fadeQ[y].number && fadeQ[x].message == fadeQ[y].message && fadeQ[x].direction != fadeQ[y].direction) {
                fadeQ.splice(x, 1);
                fadeQ.splice(y - 1, 1);
            }
        }
    }
    if (!fader[number].active) {
        for (var x = 0; x < fadeQ.length; x++) {
            if (fadeQ[x].number == number && fadeQ[x].direction != fader[number].direction) {
                var del = fadeQ.splice(x, 1);
                setTimeout(function() {
                    fadeEng(number, del[0].message, del[0].direction);
                }, 0);
                break;
            }
        }
    }
}

function fadeEng(number, message, direction) {
    if (!fader[number].active) {
        fader[number].active = true;
        fader[number].direction = direction;
        fader[number].messageNow = message;
        document.getElementById(fader[number].id).innerHTML = fader[number].message[message];
    }
    var iniCol = (direction) ? fader[number].colOff : fader[number].colOn;
    var endCol = (direction) ? fader[number].colOn : fader[number].colOff;
    var incCol = fader[number].colNow;
    var spd = (direction) ? fader[number].spdIn : fader[number].spdOut;
    for (var x = 0; x < 3; x++) {
        var incr = (endCol[x] - iniCol[x]) / spd;
        incCol[x] = (incr < 0) ? Math.max(incCol[x] + incr, endCol[x]) : Math.min(incCol[x] + incr, endCol[x]);
    }
    document.getElementById(fader[number].id).style.color = "#" + RGB[parseInt(incCol[0])] + RGB[parseInt(incCol[1])] + RGB[parseInt(incCol[2])];
    if (incCol[0] == endCol[0] && incCol[1] == endCol[1] && incCol[2] == endCol[2]) {
        fader[number].active = false;
        for (var x = 0; x < fadeQ.length; x++) {
            if (fadeQ[x].number == number) {
                var del = fadeQ.splice(x, 1);
                setTimeout(function() {
                    fadeEng(number, del[0].message, del[0].direction);
                }, 0);
                return false;
            }
        }
        if (!direction) {
            if (fader[number].def) {
                setTimeout(function() {
                    fadeEng(number, 0, true);
                }, 0);
            } else document.getElementById(fader[number].id).innerHTML = "&nbsp;";
        }
    } else setTimeout(function() {
        fadeEng(number, message, direction);
    }, 0);
}
/* ***** End: GreyWyvern's Buffered Text-fade Effect - v2.2a ******* */

/* *****
          * The code below describes how to make a throbbing or automatic fade
          * sequence of messages.  The throbFade function is called repeatedly
          * which controls what commands are sent to the fade engine, rather
          * than using mouseovers.
          *
          * Notes:
          * - A global variable throbStep is used to keep track of where the
          *   animation is currently in the sequence.
          * - The list of messages defined in the fader *must* start at zero (0)
          *   and count upwards without skipping any integers.
          * - The second line of the throbFade() function controls how fast
          *   commands get sent to the fade engine.  It waits only 100 milli-
          *   seconds when fading out, but 4000 milliseconds (4 seconds) when
          *   fading in; this means the message will remain visible for about 4
          *   seconds before fading out again.
          *
          * Other types of fade animation are possible simply by designing
          * different ways to control the fade-ins and fade-outs!
          */
function throbFade() {
    fade(0, Math.floor(throbStep / 2), (throbStep % 2) ? false : true);
    setTimeout("throbFade();", (throbStep % 2) ? 100 : 10000);
    if (++throbStep > fader[0].message.length * 2 - 1) throbStep = 0;
}

var images = new Array();
var x = 0;
images[3] = 'images/8tm-index.jpg';
images[1] = 'images/8tm-index2.jpg';
images[2] = 'images/8tm-index4.jpg';
// images[4] = 'images/8tm-index3.jpg';
images[0] = 'images/8tm-index5.jpg';

/* Start with a random quote */
var throbStep = 2 * Math.floor(Math.random()*fader[0].message.length);
setTimeout("throbFade();", 1000);

function opacity(id, opacStart, opacEnd, millisec) {
    //speed for each frame
    var speed = Math.round(millisec / 100);
    var timer = 0;

    //determine the direction for the blending, if start and end are the same nothing happens
    if(opacStart > opacEnd) {
        for(i = opacStart; i >= opacEnd; i--) {
            setTimeout("changeOpac(" + i + ",'" + id + "')",(timer * speed));
            timer++;
        }
    } else if(opacStart < opacEnd) {
        for(i = opacStart; i <= opacEnd; i++)
        {
            setTimeout("changeOpac(" + i + ",'" + id + "')",(timer * speed));
            timer++;
        }
    }
}

//change the opacity for different browsers
function changeOpac(opacity, id) {
    var object = document.getElementById(id).style;
    object.opacity = (opacity / 100);
    object.MozOpacity = (opacity / 100);
    object.KhtmlOpacity = (opacity / 100);
    object.filter = "alpha(opacity=" + opacity + ")";
}

function startitup() {


    x = (x + 1) % images.length;
    setTimeout("blendimage('blenddiv','blendimage', images[x] ,2000);", 29000);
}

function preload() {
    for(i = 0; i <= images.length; i++) {
        document.write('<img src="' + images[i] + '" style="display: none">');
    }
}

function blendimage(divid, imageid, imagefile, millisec) {
    var speed = Math.round(millisec / 100);
    var timer = 0;

    //set the current image as background
    document.getElementById(divid).style.backgroundImage = "url(" + document.getElementById(imageid).src + ")";



    //make image transparent
    changeOpac(0, imageid);

    //make new image
    document.getElementById(imageid).src = imagefile;

    //fade in image
    for(i = 0; i <= 99; i++) {
        setTimeout("changeOpac(" + i + ",'" + imageid + "')",(timer * speed));
        timer++;
    }

    x = (x + 1) % images.length;
    setTimeout("blendimage('blenddiv','blendimage', images[x] ,2000);", 19000);
}
