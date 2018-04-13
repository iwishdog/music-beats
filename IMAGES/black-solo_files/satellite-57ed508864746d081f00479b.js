//Create a global data object for analytics
if(typeof(dtmDataObj) == 'undefined'){
  dtmDataObj = {
    page: {
    	pageUrl: window.location.href,
      pageName: _satellite.getVar('SC - pageName'),
      channel: '',
      charSet: document.charset,
      referringUrl: document.referrer,
      language: navigator.language,
    }
	};
}

//Create methods for dtmDataObj
dtmDataObj.utl = {
}

//Setting global variables for Analytics
dtmDataObj.page.pageType = _satellite.getVar('SC - pageType');
