document.addEventListener('DOMContentLoaded', function () {
  var toggles = document.querySelectorAll('[data-menu-toggle]');

  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      var targetId = toggle.getAttribute('data-menu-toggle');
      var panel = document.getElementById(targetId);
      var expanded = toggle.getAttribute('aria-expanded') === 'true';

      toggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      panel.setAttribute('data-open', expanded ? 'false' : 'true');
    });
  });
});
