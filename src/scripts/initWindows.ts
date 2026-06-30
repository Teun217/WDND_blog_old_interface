declare global { interface Window { __zTop: number } }
window.__zTop ??= 10;

document.querySelectorAll<HTMLElement>('section[data-window-id]').forEach(win => {
    const handle = win.querySelector<HTMLElement>(':scope > h2')!;
    if (!handle) return;

    win.addEventListener('mousedown', () => { win.style.zIndex = String(++window.__zTop); });
    win.querySelector('.close-btn')!.addEventListener('click', () => { win.style.display = 'none'; });

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
});
