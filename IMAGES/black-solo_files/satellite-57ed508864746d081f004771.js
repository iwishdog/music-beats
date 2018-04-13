_satellite.pushAsyncScript(function(event, target, $variables){
  (function() {

  function addMarinTracking() {
    var str = '';
    var aosid = _satellite.getVar('Marin AOSID');
    var mtid = _satellite.getVar('Marin - MTID')
    var muid = _satellite.getVar('Marin MUID');
    str += aosid ? ('&aosid=' + encodeURIComponent(aosid)) : '';
    str += mtid ? ('&mtid=' + encodeURIComponent(mtid)) : '';
    str += muid ? ('&muid=' + encodeURIComponent(muid)) : '';
    return str;
  }

  function changeButton(b) {
      try {
          var omniture = s; // the global omniture variable
          if (!omniture || !omniture.c_r || !b) {
              return;
          }
          if (b.href.indexOf('cid') === -1) {
              return;
          }

          var visitorId = '' + omniture.c_r('s_vi');

          if (visitorId) {
            var pipeSplit = visitorId.split('|');
            if (pipeSplit.length) {
              var vId = ''+pipeSplit[pipeSplit.length-1];
              vId = vId.replace(/\[CE\]/gi, '');

              if (b.href.indexOf(vId) !== -1) {
                 return;
              }

              var exitLinkTypes = /www.apple.com\/shop|www.apple.com\/[a-z-]+\/shop|store.apple.com/i;
              if(exitLinkTypes.test(b.href)){
                 b.href = b.href + '_' + vId + addMarinTracking();
              }

            }
          }
      } catch(e) {

      }
  }

  function changeCurrentButtons() {

      var buttons = document.querySelectorAll([
          'a[href^="http://store.apple.com/"]',
          'a[href^="https://store.apple.com/"]',
          'a[href^="http://www.apple.com/"]',
          'a[href^="https://www.apple.com/"]',
          ].join(', ')
        );

      for (var i=0;i<buttons.length;i++) {
          changeButton(buttons[i]);
      }
  }

  //this line is so omniture always tries to fetch the marin id
  try { addMarinTracking(); } catch(e) {};
  try {
    setTimeout(changeCurrentButtons, 1500);
    if (jQuery) {
      jQuery('body')
        .on('click', 'a[href^="http://www.apple.com/"]', changeCurrentButtons)
        .on('mouseover', 'a[href^="http://www.apple.com/"]', changeCurrentButtons)
        .on('click', 'a[href^="http://store.apple.com/"]', changeCurrentButtons)
        .on('mouseover', 'a[href^="http://www.apple.com/"]', changeCurrentButtons)
        .on('click', 'a[href^="https://www.apple.com/"]', changeCurrentButtons)
        .on('mouseover', 'a[href^="https://www.apple.com/"]', changeCurrentButtons)
        .on('click', 'a[href^="https://store.apple.com/"]', changeCurrentButtons)
        .on('mouseover', 'a[href^="https://www.apple.com/"]', changeCurrentButtons);
    }
    changeCurrentButtons();
  } catch(e) {
  }
})();
});
