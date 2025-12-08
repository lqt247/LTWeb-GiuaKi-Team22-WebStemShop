<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<!--HEADER-->
<header class="header">

    <!-- PHẦN TRÊN -->
    <div class="header__first">
        <div class="container">
            <div class="header__top-left">
                <a href="https://maps.app.goo.gl/nj1KfxS8ajpDxTni6" target="_blank">
                    <span><i class="fa-solid fa-location-dot"></i> Trường Đại Học Nông Lâm TPHCM</span>
                </a>
                <a href=""><span><i class="fa-solid fa-envelope"></i> shopstemteam22@gmail.com</span></a>
            </div>
            <div class="header__top-right">
                <div class="header__phone-top">
                    <a href=""><span><i class="fa-solid fa-phone"></i> +84 123456789</span></a>
                </div>
                <div class="header_icon-top">
                    <a href="" class="header__icon-right"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="" class="header__icon-right"><i class="fa-brands fa-instagram"></i></a>
                    <a href="" class="header__icon-right"><i class="fa-brands fa-amazon"></i></a>
                    <a href="" class="header__icon-right"><i class="fa-brands fa-twitter"></i></a>
                </div>
            </div>
        </div>
    </div>

    <!-- PHẦN DƯỚI: NAV -->
    <div class="header__end">
        <div class="container">
            <div class="header__end-left">

                <!-- LOGO -->
                <div class="header__logo">
                    <a href="${pageContext.request.contextPath}/index.jsp">
                        <img src="${pageContext.request.contextPath}/assets/images/logo.png" alt="logo">
                    </a>
                </div>

                <!-- NAV -->
                <div class="header__nav">
                    <nav class="nav-content">
                        <ul class="nav__list">

                            <li class="nav__item">
                                <a href="${pageContext.request.contextPath}/index.jsp">Trang chủ</a>
                            </li>

                            <!-- Giới thiệu -->
                            <li class="nav__item dropdown">
                                <a href="${pageContext.request.contextPath}/about.jsp">
                                    Giới thiệu <i class="fa-solid fa-chevron-down"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a href="${pageContext.request.contextPath}/about-stem.jsp">Về STEMSHOP</a></li>
                                    <li><a href="${pageContext.request.contextPath}/mission.jsp">Sứ mệnh & Tầm nhìn</a></li>
                                    <li><a href="${pageContext.request.contextPath}/guide.jsp">Tài liệu hướng dẫn</a></li>
                                </ul>
                            </li>

                            <!-- SHOP -->
                            <li class="nav__item dropdown">
                                <a href="${pageContext.request.contextPath}/shop.jsp">
                                    Cửa hàng <i class="fa-solid fa-chevron-down"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a href="${pageContext.request.contextPath}/cart.jsp">Giỏ hàng</a></li>
                                    <li><a href="${pageContext.request.contextPath}/wishlist.jsp">Yêu thích</a></li>
                                    <li><a href="${pageContext.request.contextPath}/checkout.jsp">Thanh toán</a></li>
                                </ul>
                            </li>

                            <!-- BLOG -->
                            <li class="nav__item dropdown">
                                <a href="${pageContext.request.contextPath}/blog.jsp">
                                    Bài viết <i class="fa-solid fa-chevron-down"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a href="${pageContext.request.contextPath}/blog-category.jsp">Danh mục bài viết</a></li>
                                </ul>
                            </li>

                            <!-- SỰ KIỆN -->
                            <li class="nav__item dropdown">
                                <a href="${pageContext.request.contextPath}/events.jsp">
                                    Sự kiện <i class="fa-solid fa-chevron-down"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a href="${pageContext.request.contextPath}/workshop-register.jsp">Đăng ký tham gia</a></li>
                                    <li><a href="${pageContext.request.contextPath}/materials.jsp">Tài liệu Workshop</a></li>
                                    <li><a href="${pageContext.request.contextPath}/rate.jsp">Đánh giá</a></li>
                                </ul>
                            </li>

                            <li class="nav__item">
                                <a href="${pageContext.request.contextPath}/contact.jsp">Liên hệ</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <!-- USER + CART -->
            <div class="header__end-right">
                <div class="header__shop">
                    <a href="${pageContext.request.contextPath}/wishlist.jsp"><i class="fa-solid fa-heart"></i></a>
                    <a href="${pageContext.request.contextPath}/cart.jsp"><i class="fa-solid fa-cart-shopping"></i></a>
                </div>

                <div class="header__user">
                    <a href="${pageContext.request.contextPath}/sign-in.jsp">
                        <span><i class="fas fa-user"></i> Đăng nhập </span>
                    </a>
                    <span class="divider">|</span>
                    <a href="${pageContext.request.contextPath}/sign-up.jsp">
                        <span><i class="fas fa-pencil-alt"></i> Đăng ký </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</header>
