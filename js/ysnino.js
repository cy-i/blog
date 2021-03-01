document.onmousedown = function mdClick(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e.button == 2 || e.button == 3) {
        mAlert();
    }
}

document.oncontextmenu = new Function("return false;");

document.onkeydown = document.onkeyup = document.onkeypress = function(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];

    if (e && e.keyCode == 123) {
            mAlert();
            e.returnValue = false;
            return (false);
    }
}

function mAlert() {
    layer.msg("从天上下来的都是妖怪");
}