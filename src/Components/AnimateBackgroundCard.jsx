import { Card} from "@mui/material";
import { styled } from "@mui/system";

const AnimateBackgroundCard = styled(Card)(({ theme }) => ({
    position: "relative",
    borderRadius: "16px",
    overflow: "hidden",
    padding: "2px", // to make space for border
    background: "linear-gradient(270deg, #ff0000, #00ff00, #0000ff, #ff0000)",
    backgroundSize: "800% 800%",
    animation: "borderAnimation 15s ease-in infinite",

    "& .MuiCardContent-root": {
        background: theme?.palette?.background?.paper,
        borderRadius: "14px", 
    },

    "@keyframes borderAnimation": {
        "0%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
        "100%": { backgroundPosition: "0% 50%" },
    },
}));
export default AnimateBackgroundCard; 