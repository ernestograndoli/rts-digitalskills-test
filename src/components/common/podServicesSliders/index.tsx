import SliderComponent from "../SlidersComponent";
import DataDrivenPOD from "./DataDrivenPOD";
import SoftwareDevPOD from "./SoftwareDevPOD";
import PISystemPOD from "./PISystemPOD";

export default function Index() {
    return (
        <SliderComponent>
            <DataDrivenPOD/>
            <SoftwareDevPOD/>
            <PISystemPOD/>
        </SliderComponent>
    )
}