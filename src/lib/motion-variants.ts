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
    visible: { opacity: 1, x: 0 }
};

const mesaRightV = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 }
};

const appearV = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

const leftV = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
};

const uppV = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5 } }
};

const downV = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
};

const leftV2 = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { delay: 1 } }
};

const downV2 = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { delay: 1.2 } }
};

const downV3 = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5 } }
};

const rightV = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.25 } }
};

export { minicursosV, cronogramaV, mesaLeftV, mesaRightV, appearV, leftV, uppV, downV, leftV2, downV2, rightV, downV3 };