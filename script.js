// Example of a potential problematic loop
function appendContent() {
    const container = document.getElementById('content-container');
    for (let i = 0; i < 10; i++) {
        // Ensure this loop has a proper termination condition
        const newContent = document.createElement('div');
        newContent.textContent = 'Repeated Content';
        container.appendChild(newContent);
    }
}

// Check if this function is being called repeatedly or incorrectly
appendContent(); 