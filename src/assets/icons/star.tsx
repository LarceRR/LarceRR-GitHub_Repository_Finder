import { ISVGIcon } from "../../store/interfaces";

const Star = ({ fillColor, height, width }: ISVGIcon) => {
    return (
        <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 15.77L16.18 19.5L14.54 12.47L20 7.74L12.81 7.13L10 0.5L7.19 7.13L0 7.74L5.46 12.47L3.82 19.5L10 15.77Z" fill={fillColor}/>
        </svg>
    );
};

export default Star;