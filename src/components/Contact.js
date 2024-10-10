import { useEffect } from "react";

const Contact = () => {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("useEffect timer")
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, []);

    return (
        <div>
            <h1>Contact us page</h1>
        </div>
    )
}

export default Contact;