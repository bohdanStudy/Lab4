/* FlowTask — landing page behaviour */

document.addEventListener('DOMContentLoaded', function () {

  /* Sign-up flow */

  function startSignup() {
    var trial = document.getElementById('trial');
    if (trial) {
      trial.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = 'index.html#trial';
    }
  }

  var headerCta = document.getElementById('header-cta');
  if (headerCta) {
    headerCta.addEventListener('click', startSignup);
  }

  var heroCta = document.getElementById('hero-cta');
  if (heroCta) {
    heroCta.addEventListener('click', startSignup);
  }

  /* Trial form */

  var trialForm = document.getElementById('trial-form');
  if (trialForm) {
    trialForm.addEventListener('submit', function (event) {
      event.preventDefault();
      trialForm.querySelector('.trial__success').hidden = false;
    });
  }

  /* FAQ accordion */

  document.querySelectorAll('.faq__q').forEach(function (question) {
    question.addEventListener('click', function () {
      var isExpanded = question.getAttribute('aria-expanded') === 'true';
      question.setAttribute('aria-expanded', String(!isExpanded));
      question.nextElementSibling.hidden = isExpanded;
      question.parentElement.classList.toggle('is-open', !isExpanded);
    });
  });

});
