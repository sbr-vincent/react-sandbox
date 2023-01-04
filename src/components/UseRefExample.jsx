import { useRef } from "react"
// useRef is an alternative to useState. Certain instances where you would use useRef over useState
// Changing a reference value doesn't re-render the component
// Helps get a reference to a specific DOM element
function UseRefExample() {
    // inputRef will be an object with one property called current
    // Calling inputRef.current will actually give us the DOM element that the ref attribute is attached to
    const inputRef = useRef()
    const paraRef = useRef()

    const onSubmit = (e) => {
        e.preventDefault()
        inputRef.current.value = "Hello"
        inputRef.current.style.backgroundColor = "green"
        paraRef.current.innerText = "Goodbye"

        console.log(inputRef.current.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" ref={inputRef} id="name" className="form-control mb-2" />
            <button type="submit" className="btn btn-danger">Submit</button>

            <p onClick={() => inputRef.current.focus()} ref={paraRef}>Hello</p>
        </form>
    )
}

export default UseRefExample