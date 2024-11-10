import { useEffect } from "react";

const Contact = () => {
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         console.log("useEffect timer")
    //     }, 1000)

    //     return () => {
    //         clearInterval(timer)
    //     }
    // }, []);

    return (
        <div>
            <h1>Contact us page</h1>
            <form>
                <input type="text" placeholder="Name" className="border-gray-500 border p-2 m-2" />
                <input type="text" placeholder="Message" className="border-gray-500 border p-2 m-2" />
                <button className="bg-blue-500 text-white py-2 px-3 rounded-md">Submit</button>
            </form>
        </div>
    )
}

export default Contact;