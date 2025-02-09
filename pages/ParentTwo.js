import { useState } from "react"
import ChildTwo from "./ChildTwo";
export default function ParentTwo() {
    const [data, setData] = useState();
    const ChildToParent = (childData) => {
        setData(childData);
    }
    return (
        <>
            {data}
            <ChildTwo childParent={ChildToParent}/>
        </>
    )
}