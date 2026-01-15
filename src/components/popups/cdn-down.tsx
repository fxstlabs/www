'use client';

import React, {useState} from 'react';
import {AlertTriangle} from 'lucide-react';
import {ButtonGroup} from "@/components/units/buttons";

const translations = {
    en: {
        title: "Our CDN seems to be down...",
        description: "Some images, styles, or features may not load properly right now. We're working to fix this."
    },
    es: {
        title: "Nuestro CDN parece estar caído...",
        description: "Algunas imágenes, estilos o funciones pueden no cargarse correctamente. Estamos trabajando para solucionarlo."
    },
    de: {
        title: "Unser CDN scheint ausgefallen zu sein...",
        description: "Einige Bilder, Stile oder Funktionen werden möglicherweise nicht richtig geladen. Wir arbeiten an einer Lösung."
    }
};

const languageOptions = [
    {label: 'EN', value: 'en'},
    {label: 'ES', value: 'es'},
    {label: 'DE', value: 'de'}
];

export default function CDNDownPopup() {
    const [language, setLanguage] = useState('en');
    const content = translations[language as keyof typeof translations];

    return (
        <div className="bg-linear-to-br bg-surface-container p-8">
            <div className="fixed bottom-0 left-0 right-0 bg-error-container border-t-2 border-error shadow-lg">
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
                    <div className="shrink-0">
                        <AlertTriangle className="text-error" size={32}/>
                    </div>

                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-on-error-container text-sm">
                            {content.title}
                        </h3>
                        <p className="text-on-error-container text-xs leading-relaxed">
                            {content.description}
                        </p>
                    </div>

                    <div className="shrink-0">
                        <ButtonGroup
                            options={languageOptions}
                            value={language}
                            onChange={setLanguage}
                            layout="row"
                            allowIcons={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}