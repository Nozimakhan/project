import React from "react";
import { useState, useEffect } from "react";
import { instance } from "../../api/axios";
import { useParams } from "react-router-dom";

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


  const deleteOrder = (id) =>{
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
    <div>
      {
      status === "contacted" ? contacted.map((item) => <div key={item._id}>{item?.fullname}<button onClick={deleteOrder} >Delete</button></div>) : status === "all" ? order.map((item) => <div key={item._id}>{item?.fullname}<button onClick={deleteOrder}>Delete</button></div>) : notContacted.map((item) => <div key={item._id}>{item?.fullname}<button onClick={deleteOrder}>Delete</button></div>)
    }
    </div>
  );
};

export default OrderDetails;