import {Check, Search} from "lucide-react";
import React, {useState} from "react";

interface DropdownOption {
    label: string;
    value: string;
}

interface SearchableDropdownProps {
    options: DropdownOption[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export function SearchableDropdown({options, value, onChange, placeholder = 'Select...'}: SearchableDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');

    const filtered = options.filter(opt =>
        opt.label.toLowerCase().includes(search.toLowerCase())
    );

    const selected = options.find(opt => opt.value === value);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-4 py-2 bg-surface-container-low text-on-surface border border-outline rounded-lg flex items-center justify-between hover:bg-surface-container-high transition-colors"
            >
                <span>{selected ? selected.label : placeholder}</span>
                <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsOpen(false)}
                    />
                    <div
                        className="absolute z-20 mt-1 w-full bg-surface-container-high border border-outline rounded-lg shadow-lg overflow-hidden">
                        <div className="p-2 border-b border-outline">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant"
                                        size={16}/>
                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search..."
                                    className="w-full pl-9 pr-3 py-1.5 bg-surface border border-outline-variant rounded text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
                                    autoFocus
                                />
                            </div>
                        </div>
                        <div className="max-h-60 overflow-y-auto">
                            {filtered.length === 0 ? (
                                <div className="px-4 py-3 text-on-surface-variant text-sm">No results found</div>
                            ) : (
                                filtered.map((option) => (
                                    <button
                                        key={option.value}
                                        onClick={() => {
                                            onChange(option.value);
                                            setIsOpen(false);
                                            setSearch('');
                                        }}
                                        className="w-full px-4 py-2 text-left hover:bg-surface-container-highest transition-colors flex items-center justify-between text-on-surface"
                                    >
                                        {option.label}
                                        {value === option.value && <Check size={16} className="text-primary"/>}
                                    </button>
                                ))
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

interface TextInputProps {
    label?: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    error?: string;
}

export function TextInput({label, value, onChange, placeholder, error}: TextInputProps) {
    return (
        <div className="flex flex-col gap-1.5">
            {label && <label className="text-sm font-medium text-on-surface">{label}</label>}
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className={`px-4 py-2 bg-surface border rounded-lg text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 transition-all ${
                    error ? 'border-error focus:ring-error' : 'border-outline focus:ring-primary'
                }`}
            />
            {error && <span className="text-sm text-error">{error}</span>}
        </div>
    );
}

interface NumericInputProps {
    label?: string;
    value: number | string;
    onChange: (value: number | string) => void;
    min?: number;
    max?: number;
    step?: number;
    placeholder?: string;
    error?: string;
}

export function NumericInput({label, value, onChange, min, max, step = 1, placeholder, error}: NumericInputProps) {
    const handleChange = (newValue: string) => {
        const num = parseFloat(newValue);
        if (newValue === '' || newValue === '-') {
            onChange(newValue);
            return;
        }
        if (!isNaN(num)) {
            if ((min === undefined || num >= min) && (max === undefined || num <= max)) {
                onChange(num);
            }
        }
    };

    return (
        <div className="flex flex-col gap-1.5">
            {label && <label className="text-sm font-medium text-on-surface">{label}</label>}
            <input
                type="number"
                value={value}
                onChange={(e) => handleChange(e.target.value)}
                placeholder={placeholder}
                min={min}
                max={max}
                step={step}
                className={`px-4 py-2 bg-surface border rounded-lg text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 transition-all ${
                    error ? 'border-error focus:ring-error' : 'border-outline focus:ring-primary'
                }`}
            />
            {error && <span className="text-sm text-error">{error}</span>}
        </div>
    );
}
