import TextHeightToLinesCount from './TextHeightToLinesCount.js';

var ResizeText = function (textObject, width, height) {
    textObject.setFixedSize(width, height);

    var style = textObject.style;
    var wrapWidth = Math.max(width, 0);

    var maxLines = Math.ceil(TextHeightToLinesCount.call(this, height)) + 1;

    if (this.textObjectType === 0) {
        style.wordWrapWidth = wrapWidth;
        style.maxLines = maxLines;
    } else {
        style.wrapWidth = wrapWidth;
        style.maxLines = maxLines;
    }

    textObject.updateText();
}

export default ResizeText;