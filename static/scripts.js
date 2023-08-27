
$(document).ready(function() {
    let validImageCount = 0;

    $('#url-form').submit(function(e) {
        e.preventDefault();
        const url = $('#url').val();
        const urlObject = new URL(url);
        fetch(`http://localhost:5000/image-details?url=${url}`)
            .then(response => response.json())
            .then(data => {
                validImageCount = 0; // reset the valid image count
                $('#image-count').text(validImageCount);
                $('#images-container').empty();
                if (data.image_count === 0) {
                    $('#images-container').append("<p>No images found.</p>");
                } else {
                    data.image_details.forEach(img => {
                        let src = img.src;
                        if (src.startsWith('//')) {
                            src = `${urlObject.protocol}${src}`;
                        } else if (src.startsWith('/')) {
                            src = `${urlObject.protocol}//${urlObject.host}${src}`;
                        } else if (!src.startsWith('http')) {
                            src = `${urlObject.protocol}//${urlObject.host}/${src}`;
                        }
                        let image = new Image();
                        image.src = src;
                        image.onload = function() {
                            validImageCount++;
                            $('#image-count').text(validImageCount);
                            $('#images-container').append(`<a href="${src}" download><img src="${src}" width="200"></a>`);
                        };
                    });
                }
            })
            .catch(error => {
                console.error("Error fetching images:", error);
            });
    });
});


