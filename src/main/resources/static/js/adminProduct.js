function check(button) {
    var buttonId = button.id;
    const imageInputs = document.querySelectorAll('.image-input');
    const imageTypes = ['image/jpeg', 'image/png', 'image/gif']; // 허용되는 이미지 타입

    var productId = document.querySelector("input[name='productId']").value;
    var productName = document.querySelector("input[name='productName']").value;
    var productCondition = document.querySelector("input[name='productCondition']").value;
    var productPrice = document.querySelector("input[name='productPrice']").value;
    var productDescription = document.querySelector("textarea[name='productDescription']").value;

    var numberPattern = /^[0-9]+$/;
    var stringPattern = /^[a-zA-Z가-힣!@#$%^&*()-_=+';:,.<>?/\\"[\]{}\|`~]+$/;

    var hasImage;
    for (var i = 0; i < imageInputs.length; i++) {
        var input = imageInputs[i];
        var files = input.files;

        if (files.length > 0) {
            var file = files[0];
            if (imageTypes.includes(file.type)) {
                console.log("Image selected!");
                hasImage = true;
            } else {
                alert("이미지 파일만 업로드 가능합니다.");
                return;
            }
        }
    }
    if (!numberPattern.test(productId)) {
        alert("상품 ID는 숫자만 입력 가능합니다.");
        return;
    }

    if (!stringPattern.test(productName)) {
        alert("상품 이름은 문자열만 입력 가능합니다.");
        return;
    }

    if (!stringPattern.test(productCondition)) {
        alert("상품 상태는 문자열만 입력 가능합니다.");
        return;

    }
    if (!stringPattern.test(productDescription)) {
        alert("상품 설명은 문자열만 입력 가능합니다.");
        return;
    }

    if (!numberPattern.test(productPrice)) {
        alert("상품 가격은 숫자만 입력 가능합니다.");
        return;
    }

    if (!hasImage) {
        alert("파일을 선택해주세요")
        return;
    }

    console.log("submit^^")
    if (buttonId === 'addProduct') {
        document.getElementById('addProductForm').submit();
    } else if (buttonId === 'updateProduct') {
        document.getElementById('updateProductForm').submit();
    }else {
        alert("비정상적인 접근입니다.")
    }


}