var BIG_IMG_SELECTOR = '[data-img-type="target"]';
var IMG_TITLE_SELECTOR = '[data-img-type="title"]';
var THUMBNAIL_SELECTOR = '[data-img-type="checker"]';

function changeImage(imgUrl, title) {
    'use strict';

    var bigImage = document.querySelector(BIG_IMG_SELECTOR);
    bigImage.setAttribute('src', imgUrl);
    var imageTitle = document.querySelector(IMG_TITLE_SELECTOR);
    imageTitle.textContent = title;
}

function thumbnailImage(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-img-url');
}

function thumbnailTitle(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-img-title');
}

function changeImageWithThumbnail(thumbnail) {
    'use strict';
    changeImage(thumbnailImage(thumbnail), thumbnailTitle(thumbnail));
}

function thumbnailClickHandler(thumbnail) {
    'use strict';
    thumbnail.addEventListener('click', function (event) {
        event.preventDefault();
        changeImageWithThumbnail(thumbnail);
    });
}

function readThumbnailTable() {
    'use strict';
    var thumbnails = document.querySelectorAll(THUMBNAIL_SELECTOR);
    var thumbnailTable = [].slice.call(thumbnails);
    return thumbnailTable;
}

function initiateEvents() {
    'use strict';
    var thumbnails = readThumbnailTable();
    thumbnails.forEach(thumbnailClickHandler);
}

initiateEvents();