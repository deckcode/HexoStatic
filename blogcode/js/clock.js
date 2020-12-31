var swfUrl = "http://chabudai.sakura.ne.jp/blogparts/honehoneclock/honehone_clock_tr.swf";
var swfTitle = "honehoneclock";
LoadBlogParts();

function LoadBlogParts() { var a = swfUrl; var b = "";
    b += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="160" height="70" id="' + swfTitle + '" align="middle">';
    b += '<param name="allowScriptAccess" value="always" />';
    b += '<param name="movie" value="' + a + '" />';
    b += '<param name="quality" value="high" />';
    b += '<param name="bgcolor" value="#ffffff" />';
    b += '<param name="wmode" value="transparent" />';
    b += '<embed wmode="transparent" src="' + a + '" quality="high" bgcolor="#ffffff" width="160" height="70" name="' + swfTitle + '" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />';
    b += "</object>";
    document.write(b) };