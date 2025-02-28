function upDate(previewPic) {
    console.log("Mouse over event triggered!");
    console.log("Image Source:", previewPic.src);
    console.log("Alt Text:", previewPic.alt);

    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

function myFocus(previewPic) {
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
    imageDiv.innerHTML = previewPic.alt;
}

function myBlur() {
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

function initializeGallery() {
    let images = document.querySelectorAll('.gallery img');

    images.forEach((img) => {
        img.setAttribute('tabindex', '0');

        img.addEventListener('mouseover', function () {
            upDate(this);
        });

        img.addEventListener('mouseleave', function () {
            unDo();
        });

        img.addEventListener('focus', function () {
            myFocus(this);
        });

        img.addEventListener('blur', function () {
            myBlur();
        });
    });

    console.log("Gallery initialized, tabindex added, hover & focus working.");
}

document.addEventListener("DOMContentLoaded", initializeGallery);
