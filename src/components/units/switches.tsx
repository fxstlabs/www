interface SwitchProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
}

// Switch Component
export function Switch({checked, onChange, label}: SwitchProps) {
    return (
        <label className="flex items-center gap-3 cursor-pointer">
            <div
                onClick={() => onChange(!checked)}
                className={`relative w-11 h-6 rounded-full transition-colors ${
                    checked ? 'bg-primary' : 'bg-outline-variant'
                }`}
            >
                <div
                    className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-surface transition-transform ${
                        checked ? 'translate-x-5' : 'translate-x-0'
                    }`}
                />
            </div>
            {label && <span className="text-on-surface">{label}</span>}
        </label>
    );
}
