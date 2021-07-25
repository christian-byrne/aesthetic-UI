const code = tmpl.content.querySelector('pre').innerText;
const box = document.querySelector('.box');
const dialog = document.querySelector('.cm-body');

var myCodeMirror = CodeMirror(dialog, {
    value: code,
    mode:  "lips",
    lineWrapping: true,
    lineNumbers: true,
    matchBrackets: true,
    theme: 'twilight',
    inputStyle: "contenteditable"
});

function download(url) {
    var a = document.createElement('a');
    a.download = 'screenshot.png';
    a.href = url;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

var button = document.querySelector('button');
button.addEventListener('click', () => {
    const node = document.querySelector(".wrapper");
    html2canvas(node, {
        scale: window.devicePixelRatio
    }).then(canvas => {
        //document.body.appendChild(canvas);
        var url = canvas.toDataURL("image/png");
        download(url);
    });
});
let height;
const body = document.body;
myCodeMirror.on('change', function() {
    var rect = dialog.getBoundingClientRect();
    if (height !== rect.height) {
        height = rect.height;
        body.style.setProperty('--height', rect.height + 300);
    }
});