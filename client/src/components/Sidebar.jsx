import { ImCross } from "react-icons/im";


export default function Sidebar(props) {

  function CloseSideBar() {
    props.check();
  }

  return (
    <div className="fixed top-0 h-lvh rounded-md w-[400px] bg-secondary">
      <div className=" m-4">
        <ImCross size={20} color="fca311" onClick={CloseSideBar} />
      </div>
    </div>
  );


 
}


