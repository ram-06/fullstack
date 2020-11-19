console.log("this is drag and drop")

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

// Event listener draggable trigger imgbox

imgBox.addEventListener('dragstart', (e) => {
    console.log('dragstart trigger');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);

});

imgBox.addEventListener('dragend', (e) => {
    console.log(' dragend trigger');
    e.target.className = 'imgBox';
});


for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('dragover has been trigger');
    });
    whiteBox.addEventListener('dragenter', (e) => {
        console.log('dragenter has been trigger');
        e.target.className += ' dashed';
    });
    whiteBox.addEventListener('dragleave', (e) => {
        console.log('dragleave has been trigger');
        e.target.className = ' whiteBox';
    });
    whiteBox.addEventListener('drop', (e) => {
        console.log('drop has been trigger');
        e.target.append(imgBox);
    });
}