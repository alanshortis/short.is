function _clearFilter(postItems) {
  document.getElementById('js-clear').hidden = true;
  for (var i = 0; i < postItems.length; i++) {
    postItems[i].hidden = false;
  }
}


function _applyFilter(postItems, category) {
  document.getElementById('js-clear').hidden = false;
  for (var i = 0; i < postItems.length; i++) {
    if (postItems[i].dataset.section != category) {
      postItems[i].hidden = true;
    }
  }
}


function filterListen() {
  var filterButtons = document.getElementsByClassName('js-filter'),
      postItems = document.getElementsByClassName('js-post');

  for (var i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener('click', function() {
      var category = this.dataset.category.toLowerCase();
      _clearFilter(postItems);
      if (category === 'all') {
        return false;
      }
      else {
        _applyFilter(postItems, category);
      }
    });
  }
}


module.exports = {
  listen: filterListen
};
