function compileCode() {
    const htmlCode = document.getElementById('htmlCode').value;
    const outputFrame = document.getElementById('outputFrame');

    outputFrame.srcdoc = htmlCode;
}
