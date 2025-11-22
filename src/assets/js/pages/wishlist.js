
document.addEventListener("DOMContentLoaded", () => {
    //lấy ra các sp trong danh sách yêu thích
    const listWishList = document.querySelectorAll('.wishlist-container__card');
    
    // ------------chức năng remove sp ra khỏi danh sách yêu thích---------------
    //duyệt qua từng sp
    listWishList.forEach(row => {
        const remove = row.querySelector('.trash');
        if(remove) {
            remove.addEventListener('click', () =>{
                row.remove();
            })
        }
        // ----------------chức năng  chuyển sang trang giỏ hàng---------------
        //btnAddtoCart
        const btnAddToCart = row.querySelector('.btn-addToCart');
        if(btnAddToCart){
            btnAddToCart.addEventListener('click', () =>{
                window.location.href = "cart.html";
            })
        }
    } )


})