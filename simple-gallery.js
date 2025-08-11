// Compiled JavaScript version for browser use (paste the below if you can't compile TypeScript on your own)
function createSimpleGallery(targetId) {
    var thumbnails = [
        'https://placekitten.com/200/200',
        'https://placebear.com/200/200',
        'https://placeimg.com/200/200/any',
        'https://placekitten.com/201/201',
        'https://placebear.com/201/201',
        'https://placeimg.com/201/201/any',
        'https://placekitten.com/202/202',
        'https://placebear.com/202/202',
        'https://placeimg.com/202/202/any',
    ];
    var container = document.createElement('div');
    container.style.maxWidth = '660px';
    container.style.margin = '2rem auto';
    var grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
    grid.style.gap = '16px';
    thumbnails.forEach(function (src, idx) {
        var cell = document.createElement('div');
        cell.style.border = '1px solid #ddd';
        cell.style.borderRadius = '8px';
        cell.style.overflow = 'hidden';
        cell.style.background = '#fafafa';
        cell.style.display = 'flex';
        cell.style.alignItems = 'center';
        cell.style.justifyContent = 'center';
        cell.style.height = '140px';
        var img = document.createElement('img');
        img.src = src;
        img.alt = "Thumbnail ".concat(idx + 1);
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        img.style.display = 'block';
        // First row: wrap in a hyperlink to Netflix
        if (idx < 3) {
            var link = document.createElement('a');
            link.href = 'https://www.netflix.com/';
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.appendChild(img);
            cell.appendChild(link);
        }
        else {
            cell.appendChild(img);
        }
        grid.appendChild(cell);
    });
    container.appendChild(grid);
    if (targetId) {
        var target = document.getElementById(targetId);
        if (target) {
            target.appendChild(container);
        }
        else {
            document.body.appendChild(container);
        }
    }
    else {
        document.body.appendChild(container);
    }
}
// Make sure it's available in the browser global scope
window.createSimpleGallery = createSimpleGallery;
