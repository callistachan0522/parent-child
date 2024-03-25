export default function ChildTwo({childParent}) {
    const data = "This is data from the child page to the parent";
    
    return (
        <>
            <button onClick={() => childParent(data)}>Click Child to Parent</button>
        </>
    )
}