function toggleStartMenu() {
  document.getElementById('start-menu').classList.toggle('hidden');
}

function openWindow(type) {
  const winContainer = document.getElementById('windows');
  
  const windowEl = document.createElement('div');
  windowEl.classList.add('window');
  windowEl.innerHTML = `
    <div class="window-header">
      <span>${type.toUpperCase()}</span>
      <button class="close-btn" onclick="this.parentElement.parentElement.remove()">X</button>
    </div>
    <div class="window-content">
      ${getWindowContent(type)}
    </div>
  `;
  
  makeDraggable(windowEl);
  winContainer.appendChild(windowEl);
}

function getWindowContent(type) {
  if (type === 'about') {
    return `<p>Hello, I'm Muaz — welcome to MuazOS98!</p>`;
  } else if (type === 'projects') {
    return `<ul><li>Project A</li><li>Project B</li></ul>`;
  } else if (type === 'gallery') {
    return `<p>Gallery placeholder</p>`;
  } else if (type === 'contact') {
    return `<p>Email: you@example.com</p>`;
  } else if (type === 'recycle') {
    return `<p>Recycle Bin is empty</p>`;
  }
}

function makeDraggable(el) {
  const header = el.querySelector('.window-header');
  let offsetX = 0, offsetY = 0, isDragging = false;

  header.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - el.offsetLeft;
    offsetY = e.clientY - el.offsetTop;
  });

  document.addEventListener('mouseup', () => isDragging = false);
  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    el.style.left = (e.clientX - offsetX) + 'px';
    el.style.top = (e.clientY - offsetY) + 'px';
  });
}
