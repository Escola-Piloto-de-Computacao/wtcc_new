import { Projeto } from "@/lib/definitions";

import { IconPlaneDeparture, IconVirus, IconPhotoScan } from "@tabler/icons-react";

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
        image: "/imagens-projetos/cienciadedados.jpg",
        icon: <IconVirus size={17} />,
    },
    {
        index: 2,
        title: "Desenvolvimento de Atlas Radiográfico Web da normalidade e...",
        image: "/imagens-projetos/radiografico.jpg",
        icon: <IconPhotoScan size={17} />,
    }
];

export { projetosCientificos };