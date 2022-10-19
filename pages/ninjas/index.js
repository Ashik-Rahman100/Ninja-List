// import { useEffect, useState } from "react";
import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css';
export const getStaticProps = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return{
        props:{ninjas:data}
    }
}

const Ninjas = ({ninjas}) => {
    // const [users, setUsers] = useState({});
    // useEffect(() =>{
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(res => res.json())
    //     .then(data => setUsers(data) )
    // },[])
    console.log(ninjas);
    return (
        <div>
            <h1>All Ninjas</h1>
            {
                ninjas.map(ninja =>(
                    <Link href={'/ninjas/' + ninja.id} key={ninja.id} >
                        <a className={styles.single} ><h2>{ninja.name}</h2></a>
                    </Link>)
                )
            }
        </div>
    );
};

export default Ninjas;