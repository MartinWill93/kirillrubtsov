/* ACTIVE PANEL */
$(function() {
  $('.nav-menu-panel [href]').each(function() {
    if (this.href == window.location.href) {
      $(this).addClass('active-menu-panel');
    }
  });
});