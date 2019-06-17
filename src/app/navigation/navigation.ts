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
                url      : '/introduction/15459251a6d6b397565'
            },
            {
                id       : 'ps',
                title    : 'Primeros Pasos en TS',
                type     : 'item',
                icon     : 'note',
                url      : '/first-steps/15459251a6d6b397565'
            },
            {
                id       : 'poo',
                title    : 'P.O.O.',
                type     : 'item',
                icon     : 'note',
                url      : '/poo/15459251a6d6b397565'
            },
            {
                id       : 'tad',
                title    : 'Tipos avanzados de datos',
                type     : 'item',
                icon     : 'note',
                url      : '/ad-types/15459251a6d6b397565'
            },
            {
                id       : 'decgen',
                title    : 'Decoradores y Genéricos',
                type     : 'item',
                icon     : 'note',
                url      : '/dec-generics/15459251a6d6b397565'
            }
        ]
    }
];
