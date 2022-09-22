
function generateBlock() {
    const container = document.getElementById('container');
    for (let i = 0; i < 25; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.backgroundColor = '#' + Math.random().toString(16).slice(-6);
        container.appendChild(block);
    }
};
generateBlock();

const advancedText = document.createElement("h1");
advancedText.innerHTML = "Advanced";
document.body.append(advancedText);

function generateBlocksInterval() {
    // generateBlock()
    const containerAdvansed = document.createElement('div');
    const advansed = document.createElement('div');
    document.body.appendChild(containerAdvansed);
    containerAdvansed.classList.add('container');

    for (let i = 0; i < 25; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.backgroundColor = '#' + Math.random().toString(16).slice(-6);
        setInterval(() => block.style.backgroundColor = '#' + Math.random().toString(16).slice(-6), 1000);
        containerAdvansed.appendChild(block);
    }
};
generateBlocksInterval();