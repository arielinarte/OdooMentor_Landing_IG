document.querySelectorAll('.reg-form').forEach(function(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var card = form.closest('.form-card');
      card.querySelector('.form-body').style.display = 'none';
      card.querySelector('.confirm').classList.add('show');
    });
  });
