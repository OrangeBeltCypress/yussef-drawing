document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('drawingCanvas');
    const c = canvas.getContext('2d');
    let painting = false;
    let currentColor = '#000000'; // Default color

    function startPosition(e) {
        painting = true;
        draw(e);
    }

    function endPosition() {
        painting = false;
        c.beginPath();
    }

    function draw(e) {
        if (!painting) return;
        c.lineWidth = 5;
        c.lineCap = 'round';
        c.strokeStyle = currentColor; // Use the current color
        c.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        c.stroke();
        c.beginPath();
        c.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', draw);

    // Clear canvas
    document.getElementById('clear').addEventListener('click', () => {
        c.clearRect(0, 0, canvas.width, canvas.height);
    });

    // Change pen color
    document.getElementById('colorPicker').addEventListener('input', (e) => {
        currentColor = e.target.value;
    });

    // Resize canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth * 0.8;
        canvas.height = window.innerHeight * 0.8;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
});document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('drawingCanvas');
    const c = canvas.getContext('2d');
    let painting = false;
    let currentColor = '#000000'; // Default color

    function startPosition(e) {
        painting = true;
        draw(e);
    }

    function endPosition() {
        painting = false;
        c.beginPath();
    }

    function draw(e) {
        if (!painting) return;
        c.lineWidth = 5;
        c.lineCap = 'round';
        c.strokeStyle = currentColor; // Use the current color
        c.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        c.stroke();
        c.beginPath();
        c.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', draw);

    // Clear canvas
    document.getElementById('clear').addEventListener('click', () => {
        c.clearRect(0, 0, canvas.width, canvas.height);
    });

    // Change pen color
    document.getElementById('colorPicker').addEventListener('input', (e) => {
        currentColor = e.target.value;
    });

    // Resize canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth * 0.8;
        canvas.height = window.innerHeight * 0.8;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
});