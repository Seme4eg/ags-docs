import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const base = '/ags-docs';

const config = [
    'Installation',
    'JavaScript',
    'First Widgets',
    'Reactivity',
    'Theeming',
    'Config Object',
    'Type Checking',
    'CLI',
    'Widgets',
    'Variables',
    'Services',
    'Utils',
    'Custom Service',
    'Subclassing GTK Widgets',
    'Examples',
];

const widgets = [
    'Window',
    'Box',
    'Button',
    'CenterBox',
    'CircularProgress',
    'Entry',
    'EventBox',
    'Icon',
    'Label',
    'Overlay',
    'ProgressBar',
    'Revealer',
    'Scrollable',
    'Slider',
    'Stack',
    'Menu',
    'MenuItem',
];

// https://astro.build/config
export default defineConfig({
    site: 'https://aylur.github.io',
    base,
    integrations: [
        starlight({
            title: 'AGS Wiki',
            editLink: {
                baseUrl: 'https://github.com/Aylur/ags-docs',
            },
            social: {
                github: 'https://github.com/Aylur/ags',
                discord: 'https://discord.gg/CXQpHwDuhY',
            },
            customCss: ['./src/styles/custom.css'],
            sidebar: [
                {
                    label: 'Configuration',
                    items: config.map(label => ({
                        label, link: 'config/' + label.toLowerCase().replaceAll(' ', '-'),
                    })),
                },
                {
                    label: 'Builtin Services',
                    collapsed: true,
                    autogenerate: { directory: '/services' },
                },
                {
                    label: 'Builtin Widgets',
                    collapsed: true,
                    items: widgets.map(label => ({
                        label, link: 'config/widgets#' + label.toLowerCase(),
                    })),
                },
            ],
        }),
    ],
});
