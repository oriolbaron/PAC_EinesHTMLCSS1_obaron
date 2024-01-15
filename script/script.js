function loadYouTubeIframe(container) {
    var thumbnail = container.querySelector('.youtube-thumbnail');
    var iframe = container.querySelector('.youtube-iframe');
    if (!iframe.hasAttribute('src')) {
      iframe.setAttribute('src', iframe.getAttribute('data-src'));
      iframe.style.display = 'block';
      thumbnail.style.display = 'none';
    }
}