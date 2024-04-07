import { useState } from "react";

function CurrentYear() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    return (
        <span>{currentYear}</span>
    )
}

export default CurrentYear;