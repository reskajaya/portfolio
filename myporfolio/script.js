// JavaScript for Changing Images
document.addEventListener("DOMContentLoaded", function() {
    const webDesignImages = [
        "asset/web-design1.jpg",
        "asset/web-design2.jpg",
        "asset/web-design3.jpg" // Add more images if needed
    ];

    const photographyImages = [
        "asset/photography1.jpg",
        "asset/photography2.jpg",
        "asset/photography3.jpg"
    ];

    const brandingImages = [
        "asset/branding1.jpg",
        "asset/branding2.jpg",
        "asset/branding3.jpg"
    ];

    // Function to change image every few seconds
    function changeImage(imageArray, elementId) {
        let index = 0;
        setInterval(function() {
            document.getElementById(elementId).src = imageArray[index];
            index = (index + 1) % imageArray.length; // Loop through the images
        }, 3000); // Change image every 3 seconds
    }

    // Change images for each category
    changeImage(webDesignImages, "web-design-img");
    changeImage(photographyImages, "photography-img");
    changeImage(brandingImages, "branding-img");
});

