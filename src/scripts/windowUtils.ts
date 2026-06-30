declare global { interface Window { __zTop: number } }
window.__zTop ??= 10;

export function bringToFront(el: HTMLElement) {
    el.style.zIndex = String(++window.__zTop);
}

export function makeDraggable(win: HTMLElement, handle: HTMLElement) {
    handle.style.cursor = 'grab';
    handle.addEventListener('mousedown', (e: MouseEvent) => {
        const rect = win.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        handle.style.cursor = 'grabbing';
        document.body.style.userSelect = 'none';

        function onMouseMove(e: MouseEvent) {
            const x = Math.min(Math.max(0, e.clientX - offsetX), Math.max(0, window.innerWidth - win.offsetWidth));
            const y = Math.min(Math.max(0, e.clientY - offsetY), Math.max(0, window.innerHeight - win.offsetHeight));
            win.style.left = `${x}px`;
            win.style.top = `${y}px`;
        }

        function onMouseUp() {
            handle.style.cursor = 'grab';
            document.body.style.userSelect = '';
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
}

export function openNoteWindow(win: HTMLElement) {
    const note = document.getElementById(`${win.id}-note`) as HTMLElement;
    if (!note) return;
    note.style.display = 'grid';
    bringToFront(note);
    if (!note.style.left) {
        const rect = win.getBoundingClientRect();
        const x = Math.min(rect.left + 40, window.innerWidth - note.offsetWidth);
        const y = Math.min(rect.top + 40, window.innerHeight - note.offsetHeight);
        note.style.left = `${Math.max(0, x)}px`;
        note.style.top = `${Math.max(0, y)}px`;
    }
}
