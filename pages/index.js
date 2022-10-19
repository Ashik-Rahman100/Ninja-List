import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor distinctio ipsa debitis itaque. Libero officiis mollitia ullam laborum, sit reiciendis.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui deleniti voluptatibus eos quidem sed commodi mollitia numquam vero doloremque sint!</p>
      <Link href='/ninjas' >
        <a>See Ninja Listing</a>
      </Link>
    </div>
    
  )
}
