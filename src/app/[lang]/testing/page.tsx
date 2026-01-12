'use client'

import {useState} from "react";
import {Check, Heart, Star} from "lucide-react";
import {Switch} from "@/components/units/switches";
import {Button, ButtonGroup} from "@/components/units/buttons";
import {NumericInput, SearchableDropdown, TextInput} from "@/components/units/inputs";

export default function UIKitDemo() {
    const [switchOn, setSwitchOn] = useState(false);
    const [selectedButton, setSelectedButton] = useState('option1');
    const [selectedDropdown, setSelectedDropdown] = useState('');
    const [textValue, setTextValue] = useState('');
    const [numericValue, setNumericValue] = useState<number | string>(0);

    const buttonOptions = [
        {value: 'option1', label: 'Hearts', icon: Heart},
        {value: 'option2', label: 'Stars', icon: Star},
        {value: 'option3', label: 'Check', icon: Check}
    ];

    const dropdownOptions = [
        {value: 'react', label: 'React'},
        {value: 'vue', label: 'Vue'},
        {value: 'angular', label: 'Angular'},
        {value: 'svelte', label: 'Svelte'},
        {value: 'solid', label: 'Solid'}
    ];

    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-4xl mx-auto space-y-12">
                <h1 className="text-4xl font-bold text-on-surface mb-8">UI Component Kit</h1>

                {/* Switch */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-on-surface">Switch</h2>
                    <Switch checked={switchOn} onChange={setSwitchOn} label="Enable notifications"/>
                </section>

                {/* Buttons */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-on-surface">Buttons</h2>
                    <div className="flex flex-wrap gap-3">
                        <Button variant="primary">Primary Button</Button>
                        <Button variant="secondary">Secondary Button</Button>
                        <Button variant="tertiary">Tertiary Button</Button>
                        <Button variant="primary_outlined" icon={Heart}>With Icon</Button>
                        <Button variant="secondary_outlined" icon={Heart}>With Icon</Button>
                        <Button variant="tertiary_outlined" icon={Heart}>With Icon</Button>
                    </div>
                </section>

                {/* Button Groups */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-on-surface">Button Groups</h2>

                    <div className="space-y-2">
                        <h3 className="text-lg font-medium text-on-surface">Row Layout</h3>
                        <ButtonGroup
                            options={buttonOptions}
                            value={selectedButton}
                            onChange={setSelectedButton}
                            layout="row"
                        />
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-medium text-on-surface">Column Layout</h3>
                        <ButtonGroup
                            options={buttonOptions}
                            value={selectedButton}
                            onChange={setSelectedButton}
                            layout="column"
                        />
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-medium text-on-surface">Matrix Layout</h3>
                        <ButtonGroup
                            options={buttonOptions}
                            value={selectedButton}
                            onChange={setSelectedButton}
                            layout="matrix"
                        />
                    </div>
                </section>

                {/* Dropdown */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-on-surface">Searchable Dropdown</h2>
                    <SearchableDropdown
                        options={dropdownOptions}
                        value={selectedDropdown}
                        onChange={setSelectedDropdown}
                        placeholder="Choose a framework..."
                    />
                </section>

                {/* Form Inputs */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-on-surface">Form Inputs</h2>
                    <TextInput
                        label="Text Input"
                        value={textValue}
                        onChange={setTextValue}
                        placeholder="Enter some text..."
                        error=""
                    />
                    <NumericInput
                        label="Numeric Input"
                        value={numericValue}
                        onChange={setNumericValue}
                        min={0}
                        max={100}
                        placeholder="Enter a number..."
                        error=""
                    />
                </section>
            </div>
        </div>
    );
}
