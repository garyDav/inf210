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
                id       : 'poo',
                title    : 'P.O.O.',
                type     : 'item',
                icon     : 'note',
                url      : '/poo'
            },
            {
                id       : 'tad',
                title    : 'Tipos avanzados de datos',
                type     : 'item',
                icon     : 'note',
                url      : '/ad-types'
            },
            {
                id       : 'decgen',
                title    : 'Decoradores y Genéricos',
                type     : 'item',
                icon     : 'note',
                url      : '/dec-generics'
            }
        ]
    }
];
