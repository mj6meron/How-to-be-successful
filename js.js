// js.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => populateData(data.list));
});

function populateData(points) {
    const container = document.getElementById('content-container');

    points.forEach((point, index) => {
        // Create section div
        const section = document.createElement('div');
        section.className = 'idea';

        // Create the header for the section
        const header = document.createElement('h2');
        header.className = `header point-${index + 1}`;
        // Include the point number with the title in the header text
        header.textContent = `${index + 1}. ${point.title}`;

        // Create the content paragraph for the section
        const content = document.createElement('p');
        content.className = 'content';
        // Replace newlines with line breaks in content
        content.innerHTML = point.content.replace(/\n/g, '<br>');

        // Append the header and content to the section div
        section.appendChild(header);
        section.appendChild(content);

        // Append the section to the container
        container.appendChild(section);
    });
}

