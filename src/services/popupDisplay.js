const openPopup = (imageSrc) => {
    // Open a new window with minimal dimensions
    const popupWindow = window.open('', '_blank', 'width=100,height=100');

    // Load the image and resize the window
    const image = new Image();
    image.onload = function() {
        const width = this.width;
        const height = this.height;

        // Resize the window to match the image size
        popupWindow.resizeTo(width, height);
        popupWindow.document.title = imageSrc;

        // Insert the image directly into the window's document
        popupWindow.document.body.style.margin = '0';
        popupWindow.document.body.innerHTML = `<img src="${imageSrc}" alt="Image Popup" style="width:100%; height:auto;">`;
    };

    // Set the source of the image (starts the loading process)
    image.src = imageSrc;
};

export default openPopup;
