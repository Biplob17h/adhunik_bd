import './Serviceoverview.scss'

const Serviceoverview = () => {
  return (
    <>
      <div className="serviceoverview pt-2">
        <div className="service-header text-3xl opacity-85 font-bold pb-7">Overview of Painting Services</div>
        <div className="service-title font-semibold text-xl opacity-85 pb-4">Why take sheba.xyz painting service?</div>
        <div className="service-point">
            <ul className='list-disc pl-4 text-[17px] leading-8'>
                <li>We ensure experienced professional and expert painters</li>
                <li>We ensure only branded products are used by experts</li>
                <li>We ensure proper safety and service equipment carries by expert</li>
                <li>We ensure proper covering before painting and cleaning after service</li>
                <li>We ensure right measurement, process and product at the same time</li>
                <li>We ensure our customer post service warranty protection</li>
                <li>We assist our customer up-to 12 months EMI facility</li>
                <li>We ensure cost savings for long time to our customers</li>
                <li>We ensure on time work completion with quality service</li>
                <li>We ensure no hidden cost un-like other local service providers</li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Serviceoverview
