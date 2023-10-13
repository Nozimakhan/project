import React from "react";
import { useState, useEffect } from "react";
import { instance } from "../../api/axios";
import { useParams } from "react-router-dom";
import { BsCartCheckFill } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import './OrderDetails.scss';

const OrderDetails = () => {
  const { status } = useParams();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    instance("/order/all-orders", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access-admin-token"),
      },
    })
      .then((response) => setOrder(response.data.allOrders))
      .catch((err) => console.log(err));
  }, [status]);

  console.log(order);


  const deleteOrder = (id) => {
    instance.delete(`/order/delete-single-order/${id}`, {
      headers: {
        "Authorization": "Bearer" + localStorage.getItem("access-admin-token")
      }
    }).then(response => console.log(response.data))
      .catch(err => console.log(err))
  }


  let contacted = order?.filter((item) => item.contacted === true);
  let notContacted = order?.filter((item) => item.contacted === false);
  return (
    <>
      <div className="card__wrapper">
        {
          status === "contacted" ? contacted.map((item) =>
            <div className="card" key={item._id}>
              <div className="cart-info__wrapper">
                <div className="cart-wrapper">
                  <BsCartCheckFill />
                </div>
                <div class="cart-contact">
                  <div>
                    <h1>{item.fullname}</h1>
                    <h2>{item.phonenumber}</h2>
                  </div>
                  <Link to={`tel: ${item.phonenumber}`} class="OrderItems_call__order__mFBD4">
                    <FiPhoneCall />
                  </Link>
                </div>
              </div>
              <div className="contacted-info">
                <div className="mark"></div>
                <p>{item.contacted === true ? "Алоқага чиқилди" : "Алоқага чиқилмади"}</p>
              </div>
              <p class="cart-time">Маҳсулот буюртма вақти:<span>{item.orderedAt}</span></p>
              <div class="cart-price-quantity">
                <p class="cart-quantity">Маҳсулот умумий сони: <span>{item.orderedproducts[0].quantity}</span></p>
                <p class="cart-price">Маҳсулот умумий нархи: <span>{item.orderedproducts[0].cost} CУМ</span></p>
              </div>
              <div className="btns">
                <button className="more" >Батафсил</button>
                <button className="contacted-btn" >Aлоқага чиқилди</button>
                <button className="delete" type="button" onClick={() => deleteOrder(item._id)} >Буюртмани ўчириш</button>
              </div>
            </div>) : status === "all" ? order.map((item) => <div className="card" key={item._id}>
              <div className="cart-info__wrapper">
                <div className="cart-wrapper">
                  <BsCartCheckFill />
                </div>
                <div class="cart-contact">
                  <div>
                    <h1>{item.fullname}</h1>
                    <h2>{item.phonenumber}</h2>
                  </div>
                  <Link to={`tel: ${item.phonenumber}`} class="OrderItems_call__order__mFBD4">
                    <FiPhoneCall />
                  </Link>
                </div>
              </div>
              <div className="contacted-info">
                <div className="mark"></div>
                <p>{item.contacted === true ? "Алоқага чиқилди" : "Алоқага чиқилмади"}</p>
              </div>
              <p class="cart-time">Маҳсулот буюртма вақти:<span>{item.orderedAt}</span></p>
              <div class="cart-price-quantity">
                <p class="cart-quantity">Маҳсулот умумий сони: <span>{item.orderedproducts[0].quantity}</span></p>
                <p class="cart-price">Маҳсулот умумий нархи: <span>{item.orderedproducts[0].cost} CУМ</span></p>
              </div>
              <div className="btns">
                <button className="more" >Батафсил</button>
                <button className="contacted-btn" >Aлоқага чиқилди</button>
                <button className="delete" type="button" onClick={() => deleteOrder(item._id)} >Буюртмани ўчириш</button>
              </div>
            </div>) : notContacted.map((item) => <div className="card" key={item._id}>
              <div className="cart-info__wrapper">
                <div className="cart-wrapper">
                  <BsCartCheckFill />
                </div>
                <div class="cart-contact">
                  <div>
                    <h1>{item.fullname}</h1>
                    <h2>{item.phonenumber}</h2>
                  </div>
                  <Link to={`tel: ${item.phonenumber}`} class="OrderItems_call__order__mFBD4">
                    <FiPhoneCall />
                  </Link>
                </div>
              </div>
              <div className="contacted-info">
                <div className="mark"></div>
                <p>{item.contacted === true ? "Алоқага чиқилди" : "Алоқага чиқилмади"}</p>
              </div>
              <p class="cart-time">Маҳсулот буюртма вақти:<span>{item.orderedAt}</span></p>
              <div class="cart-price-quantity">
                <p class="cart-quantity">Маҳсулот умумий сони: <span>{item.orderedproducts[0].quantity}</span></p>
                <p class="cart-price">Маҳсулот умумий нархи: <span>{item.orderedproducts[0].cost} CУМ</span></p>
              </div>
              <div className="btns">
                <button className="more" >Батафсил</button>
                <button className="contacted-btn" >Aлоқага чиқилди</button>
                <button className="delete" type="button" onClick={() => deleteOrder(item._id)} >Буюртмани ўчириш</button>
              </div>
            </div>)
        }
      </div>
    </>
  );
};

export default OrderDetails;