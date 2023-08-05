import './Overview.scss'
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import { Link } from "react-router-dom";
import Serviceoverview from './Serviceoverview/Serviceoverview';
import Faq from './Faq/Faq';
import Order from './Order/Order';
import Covid from './Covid/Covid';
import Details from './Details/Details';

const Overview = () => {
  return (
    <>
     <Header/>
    <div className="overview">
      <div className="container w-[1270px] mx-auto">
        <div className="row flex">
          <div className="sidebar col-md-3">
          <div className="flex flex-col opacity-60 font-semibold text-[18px] w-[180px] gap-4 py-3">
            <Link className='sidebarone' to={'/#'}>Service Overview</Link>
            <Link to={'/#'}>FAQ</Link>
            <Link to={'/#'}>Reviews</Link>
            <Link to={'/#'}>Details</Link>
          </div>
          </div>
          <div className="line col-md-1">
            {/* this div use for vartical line */}
          </div>
          <div className="col-md-8 pl-8 w-[850px]">
            <Serviceoverview/>
            <Faq/>
            <Order/>
            <Covid/>
            <Details/>
          </div>
        </div>
      </div>
    </div>

        

      
    </>
  );
};

export default Overview;
