import { Marked } from 'marked';

export const md = new Marked({
    breaks: true,
    renderer: {
        html({ text }: { text: string }) {
            return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        }
    }
});
