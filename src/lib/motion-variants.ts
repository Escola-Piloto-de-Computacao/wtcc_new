const minicursosV = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, time: 5 }
};

const cronogramaV = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

const mesaLeftV = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
};

const mesaRightV = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
};

const appearV = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

export { minicursosV, cronogramaV, mesaLeftV, mesaRightV, appearV };