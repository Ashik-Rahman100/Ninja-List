import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
    const router = useRouter();
    useEffect(() =>{
        setTimeout(() =>{
            router.push("/");
        },3000)
    },[]);

    return (
        <div className="not-found">
            <h1>Ooops...</h1>
            <h2>This Page Can"t Be found.</h2>
            <p>Go Back to the <Link href="/" ><a>Home Page</a></Link> </p>
        </div>
    );
};

export default NotFound;