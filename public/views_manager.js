$(() => {
  const $content = $('#content');

  window.views_manager = {};

  window.views_manager.show = (item) => {
    
    $dashBoardContents.detach();
    $tableContents.detach();
    $accountContents.detach();

    switch (item) {
      case 'dashboard':
        $dashBoardContents.appendTo($content);
        break;
      case 'tables':
        $tableContents.appendTo($content);
        break;
      case 'accounts':
        $accountContents.appendTo($content);
        break;
    }
  }
})