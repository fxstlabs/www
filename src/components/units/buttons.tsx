import React from "react";
import {LucideIcon} from "lucide-react";

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'tertiary' | 'primary_outlined' | 'secondary_outlined' | 'tertiary_outlined';
    icon?: LucideIcon;
    onClick?: () => void;
    disabled?: boolean;
}

export function Button({children, variant = 'primary', icon: Icon, onClick, disabled}: ButtonProps) {
    const baseStyles = "px-5 py-3 rounded-lg font-medium transition-all hover:shadow-md shadow-shadow disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer";

    const variants = {
        primary: "bg-primary text-on-primary hover:bg-primary/75",
        secondary: "bg-secondary text-on-secondary hover:bg-secondary/75",
        tertiary: "bg-tertiary text-on-tertiary hover:bg-tertiary/75",
        primary_outlined: "border-1 border-primary text-primary hover:bg-primary/10",
        secondary_outlined: "border-1 border-secondary text-secondary hover:bg-secondary/10",
        tertiary_outlined: "border-1 border-tertiary text-tertiary hover:bg-tertiary/10"
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${variants[variant]} flex items-center gap-2 duration-50 not-active:duration-250 active:scale-[0.95]`}
        >
            {Icon && <Icon size={18}/>}
            {children}
        </button>
    );
}

interface ButtonGroupOption {
    label: string;
    value: string;
    icon?: LucideIcon;
}

interface ButtonGroupProps {
    options: ButtonGroupOption[];
    value: string;
    onChange: (value: string) => void;
    layout?: 'row' | 'column' | 'matrix';
    allowIcons?: boolean;
}

export function ButtonGroup({options, value, onChange, layout = 'row', allowIcons = true}: ButtonGroupProps) {
    const layoutStyles = {
        row: 'flex flex-wrap gap-2',
        column: 'flex flex-col gap-2',
        matrix: 'grid grid-cols-2 sm:grid-cols-3 gap-2'
    };

    return (
        <div className={layoutStyles[layout]}>
            {options.map((option) => {
                const isSelected = value === option.value;
                const Icon = allowIcons ? option.icon : null;

                return (
                    <button
                        key={option.value}
                        onClick={() => onChange(option.value)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all hover:scale-[1.02] flex items-center justify-center gap-2 duration-50 not-active:duration-250 active:scale-[0.98] ${
                            isSelected
                                ? 'shadow-md bg-primary-container text-on-primary-container'
                                : 'hover:bg-secondary-container/50 bg-secondary-container text-on-secondary-container'
                        }`}
                    >
                        {Icon && <Icon className={isSelected ? "text-primary" : ""} size={18}/>}
                        {option.label}
                    </button>
                );
            })}
        </div>
    );
}

