import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/style1.css',
                'resources/css/style2.css',
                'resources/js/script1.js',
                'resources/js/script2.js'],
            refresh: true,
        }),
    ],
});
