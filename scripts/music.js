
function albumCover(filename, album, artist) {
	
	var artistOut = '';
//    if (album != artist) {     
    	artistOut = '<br/>\
    		<span class="artist">' + artist + '</span>';
//    }
        
    document.write('\
                        <div class="item">\
                            <img class="content" src="' + filename + '"/>\
                            <div class="caption">\
                                <span class="album">' + album + '</span>' + artistOut + '\
                            </div>\
                            <div class="label">&nbsp;</div>\
                        </div>\
                   '
    )
}
