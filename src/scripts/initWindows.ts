import { bringToFront, makeDraggable } from './windowUtils';

document.querySelectorAll<HTMLElement>('section[data-window-id]').forEach(win => {
    const handle = win.querySelector<HTMLElement>(':scope > h2')!;
    if (!handle) return;

    win.addEventListener('mousedown', () => bringToFront(win));
    win.querySelector('.close-btn')!.addEventListener('click', () => { win.style.display = 'none'; });

    makeDraggable(win, handle);
});
