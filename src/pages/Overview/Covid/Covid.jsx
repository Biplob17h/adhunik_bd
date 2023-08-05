import "./Covid.scss";

const Covid = () => {
  return (
    <>
      <div className="covid py-10">
        <div className="covid-header">
          <div className="text-2xl font-extrabold">
            Preparations against COVID-19
          </div>
          <div className="py-5">
            <img
              className="w-[300px]"
              src="https://i.postimg.cc/PxbbBLsX/badge.png"
              alt=""
            />
          </div>
        </div>
        <div className="covid-body ">
          <div className="desc py-5 opacity-80">
            We are well-equipped and well-prepared to protect your health and
            hygiene while <br /> serve you. Our preparations include-
          </div>
          <div className="safty">
            <ul className="list-disc pl-4 text-[17px] leading-10 text-xl font-bold opacity-75 ">
              <li>Checked Health condition of service specialist</li>
              <li>Ensuring use of masks, hand sanitisers, gloves, etc</li>
              <li>Disinfecting equipments before and after the work</li>
              <li>Maintaining social distancing</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Covid;
