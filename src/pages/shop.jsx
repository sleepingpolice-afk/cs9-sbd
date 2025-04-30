import Navbar from "../component/navbar.jsx"
import Cards from "../component/cards.jsx"

export default function shop(){
    return(
        <section>
            <div className=" top-0 mt-0 absolute w-screen h-screen overflow-x-hidden">
                <Navbar />
                
                <div className="p-20 pt-5"><Cards /></div>
            </div> 
        </section>
    )
}