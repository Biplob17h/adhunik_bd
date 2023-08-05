import './Order.scss'

const Order = () => {
  return (
    <>
      <div className="order">
        <div className="order-title text-2xl font-bold py-5">How to order</div>
        <div className="orderpros flex gap-4 items-baseline">
            <div className="ordernumber flex flex-col">
                {/* custom css */}
                <div className='div'>1</div>
                <div className='vline'></div>
                <div className='div'>2</div>
                <div className='vline'></div>
                <div className='div'>3</div>
            </div>
            {/* custom css */}
            <div className="orderline flex flex-col gap-4">
                <div className="div">
                    <h2>Select service</h2>
                    <p>From the category, select the service you are looking for.</p>
                    </div>
                <div className="div">
                <h2>Book your schedule</h2>
                    <p>Select your convenient time slot.</p>
                </div>
                <div className="div">
                <h2>Place order</h2>
                    <p>Confirm your order by clicking ‘Place order’.</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Order
