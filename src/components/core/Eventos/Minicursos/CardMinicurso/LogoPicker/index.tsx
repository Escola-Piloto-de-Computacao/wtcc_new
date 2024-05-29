import {
    BackendIcon,
    FrontEndIcon,
    InicianteIcon, WebIcon,
    MathIcon,
    LanguageIcon,
    FrameworkIcon,
    MobileIcon, ToolIcon,
    GameIcon,
    OSIcon,
    AutomationIcon,
    RobotIcon
} from "@/components/ui/icons";

interface LogoPickerProps { label: string; };
const LogoPicker: React.FC<LogoPickerProps> = ({ label }) => {
    switch (label) {
        case "front-end":
            return (
                <div className="pt-[0.5px]">
                    <FrontEndIcon size={19} />
                </div>
            );
        case "web":
            return (
                <div className="pt-[0.4px]">
                    <WebIcon size={19} />
                </div>
            );
        case "iniciante":
            return (
                <div className="pt-[0.4px]">
                    <InicianteIcon size={19} />
                </div>
            );
        case "exatas":
            return (
                <div className="pt-[0.3px]">
                    <MathIcon size={19} />
                </div>
            );
        case "linguagem":
            return (
                <div className="pt-[0.4px]">
                    <LanguageIcon size={19} />
                </div>
            );
        case "framework":
            return (
                <div className="pt-[0.5px]">
                    <FrameworkIcon size={18} />
                </div>
            );
        case "mobile":
            return (
                <div className="pt-[0.3px]">
                    <MobileIcon size={19} />
                </div>
            );
        case "back-end":
            return (
                <div className="pt-[0.3px]">
                    <BackendIcon size={19} />
                </div>
            );
        case "ferrementa":
            return (
                <div className="pt-[0.3px]">
                    <ToolIcon size={19} />
                </div>
            );
        case "jogos":
            return (
                <div className="pt-[0.4px] pr-[0.5px]">
                    <GameIcon size={19} />
                </div>
            );
        case "sistemas operacionais":
            return (
                <div className="pt-[0.3px]">
                    <OSIcon size={19} />
                </div>
            );
        case "automação":
            return (
                <div className="pt-[0.3px]">
                    <AutomationIcon size={19} />
                </div>
            );
        case "robótica":
            return (
                <div className="pt-[0.3px]">
                    <RobotIcon size={19} />
                </div>
            );
        case "análise de dados":
            return (
                <div className="pt-[0.4px]">
                    <MathIcon size={19} />
                </div>
            );
        default:
            return null;
    }
};

export default LogoPicker;