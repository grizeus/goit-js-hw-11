"use strict";

import simpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export default function renderGallery(fetchList) {
  const gallery = document.querySelector("ul.gallery-list");
  const galleryMarkup = fetchList
    .map(picture => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = picture;
      return `
        <li class="gallery-item">
            <a href="${largeImageURL}" target="_blank">
                <div class="img-wrapper">
                  <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
                </div>
            </a>
            <ul class="gallery-item-info">
                <li class="gallery-item-likes">Likes ${likes}</li>
                <li class="gallery-item-views">Views ${views}</li>
                <li class="gallery-item-comments">Comments ${comments}</li>
                <li class="gallery-item-downloads">Downloads ${downloads}</li>
            </ul>
        </li>
        `;
    })
    .join("");

  gallery.insertAdjacentHTML("beforeend", galleryMarkup);

  const lightbox = new simpleLightbox(".gallery-list a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}
