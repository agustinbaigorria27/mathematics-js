// const precioOriginal = 200;
// const descuento = 8;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
};

function onClickPriceDiscount(){
    const InputPrice = document.getElementById("inputPrice");
    const priceValue = InputPrice.value;

    const InputCoupon = document.getElementById("inputCoupon");
    const couponValue = InputCoupon.value;

    const isCouponValueValid = function(coupon){
        return coupon.name === couponValue;
    };

    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {
        alert("El cupón " + couponValue + " no es valido.");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

        const resultPrice = document.getElementById("resultPrice");
        resultPrice.innerText = "Your total price is of $" + precioConDescuento;
    }
    
    
    /*if (!coupons.includes(couponValue)) {
        alert("El cupón " + couponValue + "no es válido");
     } else if (couponValue === "A523") {
        descuento = 15;
     } else if (couponValue === "B316") {
        descuento = 30;
     } else if (couponValue === "C771") {
        descuento = 25;
     }else if (couponValue === "C628") {
         descuento = 5;
     }*/

    /*switch(couponValue){
        case "A523":
            descuento = 15;
        break;
        case "B316":
            descuento = 20;
        break;
        case "C771":
            descuento = 10;
        break;
        case "C628":
            descuento = 5;
        break;
    }*/

};

const coupons = [
    {
        name: "A523",
        discount: 20,
    },
    {
        name: "B316",
        discount: 20,
    },
    {
        name: "C771",
        discount: 10,
    },
    {
        name: "C628",
        discount: 5,
    }
];




