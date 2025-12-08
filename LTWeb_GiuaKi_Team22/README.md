<h1 align="center" > ⚙️ Đồ án Giữa Kì - Team 22</h1>
<p align="center">
  <b>Môn học:</b> Lập trình Web · 
  <b>Giảng viên hướng dẫn:</b> Phan Đình Long  
</p>

## <p align="center">**Website bán dụng cụ học tập STEM cho trẻ em** </p> 
### 💡 Mục tiêu cuối cùng
>**Tạo ra:** một website thân thiện với người dùng, sinh động và mang tính chuyên nghiệp dựa trên kiến thức đã được học.   
> **Đúc kết:** Hiểu và hiện thực 1 trang web hoàn chỉnh.  
> **Kiến thức:** Thành thạo và hiểu rõ các ngôn ngữ: HTML, CSS, JS - Các câu lệch và thao tác kết nói với Database: MySQL.  
> **ĐẠT KẾT QUẢ CAO - 10Đ** 

## 👥 Thành viên nhóm

| Họ tên | MSSV | GitHub |
|:-------|:---------|:--------|
| Lê Quang Trường 🔑 (Leader) | 23130355 | [@lqt247](https://github.com/lqt247) | 
| Phan Văn Thi | 23130309 | [@thiphan2301 ](https://github.com/thiphan2301) |
| Nguyễn Thanh Tuấn | 20130456 | [@thanhtuan2701](https://github.com/thanhtuan2701) |

## Cấu trúc thư mục
 - Lưu ý: file **.html** *được in đậm* là **nav**


- LTWeb_GiuaKi_Nhom22-Shop_Steam/  
  - index.html   → Trang chủ   
  - README.md → Tài liệu mô tả dự án
  - src/ 
    - componets/          → Các phần giao diện dùng chung
      - header.html
      - footer.html
    - page/        → Các trang .html
        - main/
          - **about.html** → Giới thiệu về STEM & nhóm phát triển
          - **contact.html** → Liên hệ
          - faq.html → Câu hỏi thường gặp (footer/about_info)
          - policy.html → Chính sách bảo hành / đổi trả (footer)
          - terms.html → Điều khoản sử dụng (footer)
        - about_info/  → NHÓM CON CỦA “about” 
            - about-stem.html → Giải thích về STEM
            - about-group.html  → Giới thiệu nhóm phát triển 
            - guide.html → Tài liệu hướng dẫn sử dụng sản phẩm
            -  mission.html   → Sứ mệnh & Tầm nhìn
            - main/faq.html → Câu hỏi thường gặp (footer/about_info)
        - shop/ → Cửa hàng & sản phẩm
            - **shop.html** → Trang sản sản phẩm
            - category.html → Danh mục sản phẩm
            - product-detail.html → Chi tiết sản phẩm
            - **cart.html** → Giỏ hàng
            - **wishlist.html** → Danh sách yêu thích
            - checkout.html → Thanh toán
        - user/   Tài khoản & hồ sơ người dùng
          - **sign-in.html** → Đăng nhập
          - **sign-up.html** → Đăng ký
          - forgot-password.html → Quên mật khẩu
          - profile.html    → Trang thông tin người dùng 
        - content/ → Kho học tập & bài viết STEM
          - **blog.html** → Danh sách bài viết
          - blog-category.html  → Danh mục bài viết
          - blog-detail.html → Chi tiết bài viết
        - workshop/   → Sự kiện & hoạt động STEM
            - **events.html**  → Sự kiện, Workshop STEM
            - rate.html  → Đánh giá khách hàng
            - register.html   →  Trang đăng ký tham gia workshop / event
            - materials.html    → Tài liệu / slide / nội dung workshop
    - assets/
        - css/ → Các file CSS
          - style.css  → file CSS: nó để CSS những cái chung chung !QUAN TRỌNG
          - component.css
          - base.css  → file CSS: để đạt nền chung (ví dụ: font chung h1,h2, font-size chung)
          - layout/  
            - header.css
            - footer.css
            - container.css
          - fonts/ → Font chữ sử dụng
            - fonts.css  → Khai báo font ở đây //Down font đặt biệt// Thông thường dùng gg font cho nhanh.   
          - pages/   → file CSS: css riêng từng trang -> sau đó link vào .html
            - ???.css  
            - ???.css  
            - ???.css  
            - ???.css  
        - js/ → Các file JavaScript  
            - components.js → logic tải các trang  
            - main.js → main js  
            - pages/  → file JS: js riêng từng trang -> sau đó src vào .html  
               - ?????.js
               - ?????.js
               - ?????.js
        - images/ → Chứa hình ảnh  
            - logo.jpg
            - banner/
            - products/
            - blog/
            - ......
        - data/ → File dữ liệu giả lập (JSON)
     
  

 
## ⚙️ YÊU CẦU CHUNG VỀ CODE
### 🧭 MỤC TIÊU CHUNG
- Code **dễ đọc, dễ hiểu, dễ bảo trì**, ai cũng nắm rõ phần mình làm.
- Cấu trúc dự án **rõ ràng**, dễ mở rộng khi phát triển thêm tính năng.
- Sử dụng **cú pháp BEM** cho class nha.

- FONTS: **lấy và sử dụng ở trang:** https://fonts.google.com/ => import vào fonts.css

## ⚙️ QUY TẮC CHUNG
- HTML: Dùng thẻ semantic (`<header>`, `<main>`, `<section>`, `<footer>`).
- CSS: Đặt tên theo quy tắc BEM.
- JS: Mỗi trang dùng file riêng trong `/assets/js/pages/` nếu có tính năng đặc biệt.
- Mọi phần layout (Header/Footer) được nạp tự động qua `components.js`.




#### 💻 HTML

**Yêu cầu:**
- Tất cả trang `.html` **sử dụng chung Header và Footer** để đồng nhất giao diện.  
- Dùng **HTML5 semantic tags** (`header`, `nav`, `main`, `section`, `article`, `footer`, ...) để cấu trúc nội dung rõ ràng.  
- **Không dùng `float`** — thay bằng **Flexbox hoặc CSS Grid** cho bố cục hiện đại.  
- Ghi **comment rõ ràng** để người khác dễ hiểu phần code:

#### 🎨 CSS

**Nguyên tắc chung:**
- Dùng **quy tắc đặt tên BEM** (Block – Element – Modifier) để dễ hiểu, dễ mở rộng.
  ```css
  .card {}            /* Block */
  .card__image {}     /* Element */
  .card--highlight {} /* Modifier */

  /* Ví dụ: Thẻ sản phẩm trong trang Shop */

  /* Block – đại diện cho một khối độc lập */
  .product-card {
    background-color: #fff;
  }

  /* Element – phần tử con nằm trong block */
  .product-card__image {
    width: 100%;
  }

  .product-card__title {

  }

  .product-card__price {

  }

  /* Modifier – biến thể của block (ví dụ: sản phẩm nổi bật) */
  .product-card--featured {
  
  }


- Tất cả .html nên dùng 1 file **style.css** (duy nhất).


## 📋 Bảng Task

**Bảng Task của nhóm** tại link dưới đây:  

[📋 - Bảng Task Team 22](https://docs.google.com/spreadsheets/d/1wz3HGwNG3Q0sIKK-cX_u41N2N5kKUkCvMzlcieURk8U/edit?usp=sharing)


## 📝 Mô tả 
Đây là repo chứa toàn bộ mã nguồn và tài liệu của đồ án giữa kì môn Lập trình Web – được thực hiện bởi Team 22 dưới sự hướng dẫn của thầy Phan Đình Long.

Dự án được xây dựng với mục tiêu vận dụng các kiến thức đã học về HTML, CSS, JavaScript, MySQL để tạo nên một website hoàn chỉnh, có giao diện thân thiện, sinh động và mang tính thực tế cao.

Sản phẩm cuối cùng là Website bán dụng cụ học tập STEM cho trẻ em,
giúp người dùng có thể xem – tìm kiếm – đặt mua sản phẩm, đồng thời khám phá thêm kiến thức STEM thông qua các bài viết và hướng dẫn học tập.

Dự án không chỉ giúp nhóm nâng cao kỹ năng lập trình web, mà còn hiểu rõ quy trình xây dựng một ứng dụng web thực tế – từ khâu lên ý tưởng, thiết kế giao diện, kết nối cơ sở dữ liệu, đến triển khai và kiểm thử sản phẩm.

Mục tiêu: Hoàn thiện sản phẩm đúng tiến độ, hoạt động ổn định, giao diện đẹp – hướng tới điểm 10 tuyệt đối cho đồ án giữa kì. KAKA

### 🔍 Giới thiệu

**STEM** là viết tắt của bốn lĩnh vực chính:

| Chữ cái | Nghĩa tiếng Anh | Nghĩa tiếng Việt |
|:--------|:----------------|:----------------|
| **S** | Science | Khoa học |
| **T** | Technology | Công nghệ |
| **E** | Engineering | Kỹ thuật |
| **M** | Mathematics | Toán học |

Giáo dục STEM hướng đến việc giúp học sinh **học thông qua trải nghiệm thực tế**,  
rèn luyện khả năng **tư duy logic**, **sáng tạo** và **giải quyết vấn đề**.  

**Đồ chơi** hoặc **dụng cụ học tập** STEM là các sản phẩm giúp trẻ **vừa chơi vừa học**,  
thông qua việc **lắp ráp, thí nghiệm, lập trình và khám phá khoa học**.

Đồ chơi STEAM thực chất là 1 phần của dụng cụ học tập STEAM. Giúp các bạn nhỏ tích cực học hỏi tìm hiểu hơn.

---

### 🛒 Mục tiêu của dự án

Dự án **Website bán dụng cụ học tập STEM cho trẻ em** được xây dựng:

-  **Cung cấp** các sản phẩm, thiết bị và bộ kit STEM chất lượng dành cho học sinh tiểu học & THCS.  
-  **Hỗ trợ phụ huynh, giáo viên và học sinh** dễ dàng tìm kiếm, lựa chọn và mua sắm sản phẩm mang tính sáng tạo.  
-  **Tạo ra môi trường học tập trực tuyến thú vị**, nơi người dùng có thể vừa học vừa thực hành kiến thức khoa học – công nghệ.

---

### ⚙️ Demo các chức năng cơ bản

Người dùng có thể thực hiện các tính năng cơ bản sau:

| Biểu tượng | Chức năng | Mô tả |
|:-----------:|:-----------|:------|
| 🔎 | **Tìm kiếm sản phẩm** | Lọc và tìm sản phẩm cần mua theo danh mục (Robot, Arduino, Cảm biến, v.v.) |
| 🛍️ | **Giỏ hàng và Thanh toán** | Thêm sản phẩm, xử lý đơn hàng, thanh toán online |
| 🧠 | **Blog STEM** | Đọc bài hướng dẫn và hoạt động thực hành tại nhà |
| 👤 | **Quản lý tài khoản** | Xem thông tin cá nhân, lịch sử mua hàng |
| 💬 | **Đánh giá sản phẩm** | Bình luận và góp ý cho các sản phẩm đã mua |

---

## 💡 Ghi chú
Mọi thay đổi cần được thực hiện qua Pull Request.  
Sẽ cập nhật thêm. - Trong file báo cáo .doc
