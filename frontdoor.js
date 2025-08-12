function createFrontDoor(targetId, configUrl) {
  fetch(configUrl)
    .then(response => response.json())
    .then((thumbnails) => {
      const container = document.createElement('div');
      container.className = 'frontdoor-container';

      const grid = document.createElement('div');
      grid.className = 'frontdoor-grid';

      thumbnails.forEach((item, idx) => {
        const cell = document.createElement('div');
        cell.className = 'frontdoor-cell';

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = `Front Door Thumbnail ${idx + 1}`;

        if (item.link) {
          const link = document.createElement('a');
          link.href = item.link;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          link.appendChild(img);
          cell.appendChild(link);
        } else {
          cell.appendChild(img);
        }

        grid.appendChild(cell);
      });

      container.appendChild(grid);

      if (targetId) {
        const target = document.getElementById(targetId);
        if (target) {
          target.appendChild(container);
        } else {
          document.body.appendChild(container);
        }
      } else {
        document.body.appendChild(container);
      }
    });
}

// Make the function available in the global scope
window.createFrontDoor = createFrontDoor;