$(() => {
  $('#side-bar').on('click', '#dashboard', (e) => {
    $('.nav-link').removeClass('active');
    $(e.target).addClass('active');

    views_manager.show('dashboard');
  })

  $('#side-bar').on('click', '#tables', (e) => {
    $('.nav-link').removeClass('active');
    $(e.target).addClass('active');

    views_manager.show('tables');
  })

  $('#side-bar').on('click', '#account', (e) => {
    $('.nav-link').removeClass('active');
    $(e.target).addClass('active');

    views_manager.show('accounts');
  })
})