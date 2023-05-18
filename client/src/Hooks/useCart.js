export function useCart(product,addToCartFunc){
    function onAdd(){
        addToCartFunc(product)
    }

return{
    onAdd
}
}