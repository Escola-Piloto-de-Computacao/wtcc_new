import { Projeto } from "@/lib/definitions";

import { IconPlaneDeparture, IconVirus, IconClipboardData, IconPhotoScan } from "@tabler/icons-react";

const projetosCientificos: Projeto[] = [
    {
        index: 0,
        title: "Pegazuls AERODESIGN",
        image: "/imagens-projetos/pegasus.png",
        icon: <IconPlaneDeparture size={17} />,
    },
    {
        index: 1,
        title: "Projeto sobre Arbovíroses",
        icon: <IconVirus />,
    },
    {
        index: 2,
        title: "Projeto de Lenardo",
        icon: <IconClipboardData />,
    },
    {
        index: 3,
        title: "Desenvolvimento de Atlas Radiográfico Web da normalidade e de posicionamento em pequenos animais domésticos e silvestres",
        icon: <IconPhotoScan />,
    }
];

export { projetosCientificos };