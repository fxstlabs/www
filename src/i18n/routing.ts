import {defineRouting} from "next-intl/routing";

export const routing = defineRouting({
    locales: ['en', 'es'],
    defaultLocale: 'en',
    pathnames: {
        '/': '/',

        '/services': {
            es: 'servicios'
        },

        '/services/manufacturing': {
            es: 'servicios/manufactura'
        },
        '/services/manufacturing/3d-printing': {
            es: 'servicios/manufactura/impresion-3d'
        },
        '/services/manufacturing/cnc-machining': {
            es: 'servicios/manufactura/maquinado-cnc'
        },
        '/services/manufacturing/part-finishes': {
            es: 'servicios/manufactura/acabados-de-parte'
        },
        '/services/manufacturing/pcb': {
            es: 'servicios/manufactura/pcb'
        },
        '/services/manufacturing/sheet-metal': {
            es: 'servicios/manufactura/laminas-metalicas'
        },

        '/services/process-architecture': {
            es: 'servicios/aquitectura-de-procesos'
        },

        '/services/project-management': {
            es: 'servicios/administracion-de-proyectos'
        },

        '/support': {
            es: 'ayuda'
        },

        '/support/status': {
            es: 'ayuda/estado-del-sistema'
        },

        '/support/help': {
            es: 'ayuda/centro-de-ayuda'
        },
    }
})