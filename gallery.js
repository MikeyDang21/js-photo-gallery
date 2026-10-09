/* 
   Hàm upDate(previewPic): 
   Kích hoạt khi di chuột (onmouseover) hoặc bấm Tab chuyển tới (onfocus)
*/
function upDate(previewPic) {
    console.log("upDate triggered for:", previewPic.alt);
    
    let imageDiv = document.getElementById("image");
    
    // 1. Thay đổi đường dẫn ảnh nền của div id="image"
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    
    // 2. Thay đổi nội dung chữ hiển thị thành mô tả alt của ảnh
    imageDiv.innerHTML = previewPic.alt;
}

/* 
   Hàm unDo(): 
   Kích hoạt khi rê chuột ra ngoài (onmouseleave) hoặc bỏ chọn (onblur)
*/
function unDo() {
    console.log("unDo triggered");
    
    let imageDiv = document.getElementById("image");
    
    // 1. Trả ảnh nền về mặc định (trống)
    imageDiv.style.backgroundImage = "url('')";
    
    // 2. Trả câu thông báo về trạng thái ban đầu
    imageDiv.innerHTML = "Hover or tab over an image below to display here.";
}

/* 
   Hàm addTabFocus(): 
   Kích hoạt khi trang web tải xong (onload)
*/
function addTabFocus() {
    console.log("addTabFocus triggered - Page loaded successfully");
    
    // Lấy tất cả các thẻ ảnh có class "preview"
    let images = document.querySelectorAll(".preview");
    
    // Dùng vòng lặp for để thêm thuộc tính tabindex="0" cho từng ảnh
    for (let i = 0; i < images.length; i++) {
        console.log("Adding tabindex to image " + (i + 1));
        images[i].setAttribute("tabindex", "0");
    }
}
