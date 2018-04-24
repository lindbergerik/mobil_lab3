document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'page1') {
    page.querySelector('#button1').onclick = function() {
      document.querySelector('#myNavigator').pushPage('page2.html', {data: {title: 'Page 2'}});
    };
  } else if (page.id === 'page2') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }

  if (page.id === 'page1') {
    page.querySelector('#button2').onclick = function() {
      document.querySelector('#myNavigator').pushPage('page3.html', {data: {title: 'Page 3'}});
    };
  } else if (page.id === 'page3') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }

  if (page.id === 'page1') {
    page.querySelector('#button3').onclick = function() {
      document.querySelector('#myNavigator').pushPage('page4.html', {data: {title: 'Page 4'}});
    };
  } else if (page.id === 'page4') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }

  if (page.id === 'page1') {
    page.querySelector('#button4').onclick = function() {
      document.querySelector('#myNavigator').pushPage('page5.html', {data: {title: 'Page 5'}});
    };
  } else if (page.id === 'page5') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});