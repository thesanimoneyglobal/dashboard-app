import {Box} from "@mui/material";
import {useColors} from "../common/theme/hooks/useMode.ts";

interface Props {
    progress?: number;
    size?: number;
}

function Circle({progress = 55, size = 40}: Props) {
    const colors = useColors();
    const angle = (progress / 100) * 360; // Convert progress to an angle

    return (
        <Box
            sx={{
                background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
                             conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
                             ${colors.greenAccent[500]}`,
                borderRadius: "50%",
                width: `${size}px`,
                height: `${size}px`,
            }}
        />
    );
}

export default Circle;
