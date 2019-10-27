//
// buttonLoader
//

module.exports = {

  start: function (button) {

    button.classList.add('loading', 'disabled');
    button.setAttribute('disabled', 'disabled');

  },

  reset: function (button) {

    button.classList.remove('loading', 'disabled', 'success');
    button.removeAttribute('disabled');
  },

  success: function (button) {

    button.classList.remove('loading', 'disabled');
    button.classList.add('success');

    button.removeAttribute('disabled');

    setTimeout(function () {
      button.classList.remove('success');
    }, 1500);
  },

  subscribed: function (button) {

    button.classList.remove('loading', 'disabled');
    button.classList.add('success');

  }
};