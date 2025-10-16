const globalHistory = [];
const globalFuture = [];

function applyChange(id, newValue) {
  const h1 = document.querySelector(`.quarter[data-id="${id}"] .counter`);
  const oldValue = parseInt(h1.textContent);
  if (newValue === oldValue) return;
  h1.textContent = newValue;
  localStorage.setItem(id, newValue);
  globalHistory.push({ id, from: oldValue, to: newValue });
  globalFuture.length = 0; // clear redo stack
}

document.querySelectorAll('.quarter').forEach(quarter => {
  const id = quarter.dataset.id;
  const h1 = quarter.querySelector('.counter');
  const saved = localStorage.getItem(id);
  h1.textContent = saved ? saved : '0';

  quarter.querySelectorAll('.action').forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.action;
      let value = parseInt(h1.textContent);
      let newValue = action === 'del' ? 0 : value + parseInt(action);
      applyChange(id, newValue);
    });
  });
});

function undo() {
  if (globalHistory.length === 0) return;
  const last = globalHistory.pop();
  const h1 = document.querySelector(`.quarter[data-id="${last.id}"] .counter`);
  h1.textContent = last.from;
  localStorage.setItem(last.id, last.from);
  globalFuture.push(last);
}

function redo() {
  if (globalFuture.length === 0) return;
  const next = globalFuture.pop();
  const h1 = document.querySelector(`.quarter[data-id="${next.id}"] .counter`);
  h1.textContent = next.to;
  localStorage.setItem(next.id, next.to);
  globalHistory.push(next);
}

function resetAll() {
  document.querySelectorAll('.quarter').forEach(q => {
    const id = q.dataset.id;
    const h1 = q.querySelector('.counter');
    const oldValue = parseInt(h1.textContent);
    applyChange(id, 0);
  });
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      alert(`فشل في تفعيل ملء الشاشة: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}