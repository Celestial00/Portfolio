import { TiThMenu } from "react-icons/ti";

export default function Navbar(props) {
    
    function foo(){

        props.check();

    }
    
    return (
        <div className=" flex justify-between items-center p-4 ">

            <div className="" >

               <div onClick={foo} className="flex justify-center items-center bg-secondary w-[40px] h-[40px]  rounded-md ">

               <TiThMenu size={26} color="#eb5e28"  />

               </div>

            </div>


            <div className=" w-[100px] justify-center items-center h-[30px] flex space-x-3">

                <div className="w-[15px] h-[15px] hover:h-[20px] hover:w-[20px] duration-100 ease-in bg-orange-400 rounded-xl "></div>
                <div className="w-[15px]  h-[15px] hover:h-[20px] hover:w-[20px] duration-100 ease-in bg-[#c1121f] rounded-xl "></div>
                <div className="w-[15px]  h-[15px] hover:h-[20px] hover:w-[20px] duration-100 ease-in bg-[#0077b6] rounded-xl "></div>
            
            </div>

        </div>

    )
}
