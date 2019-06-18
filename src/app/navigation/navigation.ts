import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'content',
        title    : 'Contenido',
        type     : 'group',
        children : [
            {
                id       : 'intro',
                title    : 'Introducción',
                type     : 'item',
                icon     : 'note',
                url      : '/introduction'
            },
            {
                id       : 'ps',
                title    : 'Primeros Pasos en TS',
                type     : 'item',
                icon     : 'note',
                url      : '/first-steps'
            },
            {
                id       : 'class',
                title    : 'Clases',
                type     : 'item',
                icon     : 'note',
                url      : '/class'
            },
            {
                id       : 'decorators',
                title    : 'Decoradores',
                type     : 'item',
                icon     : 'note',
                url      : '/decorators'
            },
            {
                id       : 'modules',
                title    : 'Módulos',
                type     : 'item',
                icon     : 'note',
                url      : '/modules'
            },
            // {
            //     id       : 'automationsystems',
            //     title    : 'Sistemas de automatización',
            //     type     : 'item',
            //     icon     : 'note',
            //     url      : '/automation-systems'
            // },
            // {
            //     id       : 'tips',
            //     title    : 'Consejos',
            //     type     : 'item',
            //     icon     : 'note',
            //     url      : '/tips'
            // }
            {
                id       : 'tutorials',
                title    : 'Tutoriales',
                type     : 'item',
                icon     : 'note',
                url      : '/tutorials'
            }
        ]
    }
];
