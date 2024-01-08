import React from "react";
import recipes from '../recipes';
import Swal from "sweetalert2";
const Menu=()=>{
const handleOrder = (id)=>{
    console.log(id,"id is clicked");
    Swal.fire({
        title: "Are you sure?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, order it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Ordered!",
            text: "Your order has been processed.",
            icon: "success"
          });
        }
      });
}

    return(
        <div className="menu-container">
            <div className="menu-header">
                <h2>
                    This weeks specials!
                </h2>
                <button>Order Menu</button>
            </div>

            <div className="cards">
                {
                    recipes.map(recipe =>{
                        return (
                        <div className="menu-items" key={recipe.id}>
                            <img src={recipe.image} alt=""></img>
                            <div className="menu-content">
                                <div className="heading">
                                    <h5>{recipe.title}</h5>
                                    <p>{recipe.price}</p>
                                </div>
                                <p>{recipe.description}</p>
                                <button className="orderbtn" onClick={()=>handleOrder(recipe.id)}>Order</button>
                            </div>
                        </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Menu;