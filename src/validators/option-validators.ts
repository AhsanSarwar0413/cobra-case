import { PRICE } from "@/config/product";

export const COLORS = [
    {
        label: "Black",
        value: "black",
        tw: "zinc-950",
    },
    {
        label: "Blue",
        value: "blue",
        tw: "blue-950",
    },
    {
        label: "Rose",
        value: "rose",
        tw: "rose-950",
    }
] as const;

export const MODELS = {
    name: "models",
    options: [
        {
            label: "iPhone X",
            value: "iphonex"
        },
        {
            label: "iPhone 11",
            value: "iphone11"
        },
        {
            label: "iPhone 12",
            value: "iphone12"
        },
        {
            label: "iPhone 13",
            value: "iphone13"
        },
        {
            label: "iPhone 14",
            value: "iphone14"
        },
        {
            label: "iPhone 15",
            value: "iphone15"
        },
        {
            label: "iPhone 16",
            value: "iphone16"
        }
    ]
} as const;

export const MATERIALS = {
    name: "material",
    options: [
        {
            label: "Silicone",
            value: 'silicone',
            description: undefined,
            price: PRICE.material.silicone,
        },
        {
            label: "Soft Polycarbonate",
            value: 'polycarbonate',
            description: "Scratch-resisting coating",
            price: PRICE.material.polycarbonate,
        }
    ]
} as const;

export const FINISHES = {
    name: "finish",
    options: [
        {
            label: "Smooth Finish",
            value: 'smooth',
            description: undefined,
            price: PRICE.finish.smooth,
        },
        {
            label: "Textured Finish",
            value: 'textured',
            description: "Soft grippy texture",
            price: PRICE.finish.textured,
        }
    ]
} as const;