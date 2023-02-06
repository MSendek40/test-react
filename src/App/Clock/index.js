import { ClockStyle } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock =() => {

    const date = useCurrentDate();

    return (<ClockStyle>

Dzisiaj jest {" "}
{date.toLocaleString(undefined, {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long"
})};

    </ClockStyle>)
}

export default Clock; 