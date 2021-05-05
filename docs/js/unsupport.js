function isIE() { //是否为ie浏览器?
    if (window.ActiveXObject || "ActiveXObject" in window) {
        return true;
    } else {
        return false;
    }
}

function jumpUnsupportHtml() {
    window.location.href = "/web/unsupport.html";
}

if (isIE()) {
    jumpUnsupportHtml()
}