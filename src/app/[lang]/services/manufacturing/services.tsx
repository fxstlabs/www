import {ServicesGrid} from "@/components/templates/services";

export function ManufacturingServices() {
    const services = [
        {
            title: '3D Printing',
            href: 'manufacturing/3d-printing',
            description: 'Rapid prototyping and production with precision additive manufacturing technology.',
            imageUrl: '/images/pages/services/manufacturing/3d-printing/main-cover.jpg'
        },
        {
            title: 'Sheet Metal Fabrication',
            href: 'manufacturing/sheet-metal',
            description: 'High-precision sheet metal cutting and bending.',
            imageUrl: '/images/pages/services/manufacturing/sheet-metal/main-cover.jpg'
        },
        {
            title: 'CNC Machining',
            href: 'manufacturing/cnc-machining',
            description: 'Precise machining, milling (3-axis, 5-axis), and turning.',
            imageUrl: '/images/pages/services/manufacturing/cnc-machining/main-cover.jpg'
        },
        {
            title: 'Printed Circuit Boards',
            href: 'manufacturing/pcb',
            description: 'Professional circuit board manufacturing and assembly with quick turnaround times.',
            imageUrl: '/images/pages/services/manufacturing/pcb/main-cover.jpg'
        },
        {
            title: 'Part Finishes',
            href: 'manufacturing/part-finishes',
            description: 'Beautiful part finishes to solidify your product\'s presentation.',
            imageUrl: '/images/pages/services/manufacturing/part-finishes/main-cover.jpg'
        }
    ];

    return (
        <ServicesGrid
            services={services}
            showTitleOnImage={false}
            maxWidth="default"
        />
    );
}