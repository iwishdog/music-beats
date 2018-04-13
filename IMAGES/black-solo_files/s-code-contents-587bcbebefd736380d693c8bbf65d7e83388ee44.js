	/* SiteCatalyst code version: AppMeasurement 1.6.3
	Copyright 1996-2025 Adobe, Inc. All Rights Reserved
	More info available at http://www.omniture.com */

	// Naf object
	naf = {};

	/************************** CONFIG SECTION **************************/
	/* You may add or alter any code config here. */
	//PROD - CMS - Stage
	if((/stg.beatsbydre.com\/sg[\/|\?]|stg.beatsbydre.com\/sg$/i).test(document.URL)){ 
		s_account='beats-cms-sg-stage';
  }else if((/stg.beatsbydre.com\/br[\/|\?]|stg.beatsbydre.com\/br$/i).test(document.URL)){ 
		s_account='beats-cms-br-stage';
  }else if((/stg.beatsbydre.com\/be[\/|\?]|stg.beatsbydre.com\/be$/i).test(document.URL) ||
          (/stg.beatsbydre.com\/be-nl[\/|\?]|stg.beatsbydre.com\/be-nl$/i).test(document.URL) ||
          (/stg.beatsbydre.com\/be-fr[\/|\?]|stg.beatsbydre.com\/be-fr$/i).test(document.URL)){ 
		s_account='beats-cms-be-stage';
  }else if((/stg.beatsbydre.com\/ru[\/|\?]|stg.beatsbydre.com\/ru$/i).test(document.URL)){ 
		s_account='beats-cms-ru-stage';
  }else if((/stg.beatsbydre.com\/pt[\/|\?]|stg.beatsbydre.com\/pt$/i).test(document.URL)){ 
		s_account='beats-cms-pt-stage';
  }else if((/stg.beatsbydre.com\/ae[\/|\?]|stg.beatsbydre.com\/ae$/i).test(document.URL)){ 
		s_account='beats-cms-ae-stage';
  }else if((/stg.beatsbydre.com\/dk[\/|\?]|stg.beatsbydre.com\/dk$/i).test(document.URL)){ 
		s_account='beats-cms-dk-stage';
  }else if((/stg.beatsbydre.com\/tw[\/|\?]|stg.beatsbydre.com\/tw$/i).test(document.URL)){ 
		s_account='beats-cms-tw-stage';
  }else if((/stg.beatsbydre.com\/my[\/|\?]|stg.beatsbydre.com\/my$/i).test(document.URL)){ 
		s_account='beats-cms-my-stage';
  }else if((/stg.beatsbydre.com\/ph[\/|\?]|stg.beatsbydre.com\/ph$/i).test(document.URL)){ 
		s_account='beats-cms-ph-stage';
  }else if((/stg.beatsbydre.com\/id[\/|\?]|stg.beatsbydre.com\/id$/i).test(document.URL)){ 
		s_account='beats-cms-id-stage';
  }else if((/stg.beatsbydre.com\/th[\/|\?]|stg.beatsbydre.com\/th$/i).test(document.URL)){ 
		s_account='beats-cms-th-stage';
  }else if((/stg.beatsbydre.com\/nz[\/|\?]|stg.beatsbydre.com\/nz$/i).test(document.URL)){ 
		s_account='beats-cms-nz-stage';
  }else if((/stg.beatsbydre.com\/no[\/|\?]|stg.beatsbydre.com\/no$/i).test(document.URL)){ 
		s_account='beats-cms-no-stage';
  }else if((/stg.beatsbydre.com\/vn[\/|\?]|stg.beatsbydre.com\/vn$/i).test(document.URL)){ 
		s_account='beats-cms-vn-stage';
  }else if((/stg.beatsbydre.com\/lu[\/|\?]|stg.beatsbydre.com\/lu$/i).test(document.URL)){ 
		s_account='beats-cms-lu-stage';
  }else if((/stg.beatsbydre.com\/fi[\/|\?]|stg.beatsbydre.com\/fi$/i).test(document.URL)){ 
		s_account='beats-cms-fi-stage';
  }else if((/stg.beatsbydre.com\/it[\/|\?]|stg.beatsbydre.com\/it$/i).test(document.URL)){ 
		s_account='beats-cms-it-stage';
	}else if((/stg.beatsbydre.com\/nl[\/|\?]|stg.beatsbydre.com\/nl$/i).test(document.URL)){ 
		s_account='beats-cms-nl-stage';
	}else if((/stg.beatsbydre.com\/es[\/|\?]|stg.beatsbydre.com\/es$/i).test(document.URL)){ 
		s_account='beats-cms-es-stage';
	}else if((/stg.beatsbydre.com\/at[\/|\?]|stg.beatsbydre.com\/at$/i).test(document.URL)){ 
		s_account='beats-cms-at-stage';
	}else if((/stg.beatsbydre.com\/ch[\/|\?]|stg.beatsbydre.com\/ch$/i).test(document.URL) ||
          (/stg.beatsbydre.com\/ch-de[\/|\?]|stg.beatsbydre.com\/ch-de$/i).test(document.URL) ||
          (/stg.beatsbydre.com\/ch-fr[\/|\?]|stg.beatsbydre.com\/ch-fr$/i).test(document.URL)){ 
		s_account='beats-cms-ch-stage';
	}else if((/stg.beatsbydre.com\/de[\/|\?]|stg.beatsbydre.com\/de$/i).test(document.URL)){ 
		s_account='beats-cms-de-stage';
	}else if((/stg.beatsbydre.com\/fr[\/|\?]|stg.beatsbydre.com\/fr$/i).test(document.URL)){ 
		s_account='beats-cms-fr-stage';
	}else if((/stg.beatsbydre.com\/mx[\/|\?]|stg.beatsbydre.com\/mx$/i).test(document.URL)){ 
		s_account='beats-cms-mx-stage';
	}else if((/stg.beatsbydre.com\/se[\/|\?]|stg.beatsbydre.com\/se$/i).test(document.URL)){ 
		s_account='beats-cms-se-stage';
	}else if((/stg.beatsbydre.com\/ie[\/|\?]|stg.beatsbydre.com\/ie$/i).test(document.URL)){ 
		s_account='beats-cms-ie-stage';
	}else if((/stg.beatsbydre.com\/cn[\/|\?]|stg.beatsbydre.com\/cn$/i).test(document.URL)){ 
		s_account='beats-cms-cn-stage';
	}else if((/stg.beatsbydre.com\/hk[\/|\?]|stg.beatsbydre.com\/hk$/i).test(document.URL) ||
          (/stg.beatsbydre.com\/hk-zh[\/|\?]|stg.beatsbydre.com\/hk-zh$/i).test(document.URL)){ 
		s_account='beats-cms-hk-stage';
	}else if((/stg.beatsbydre.com\/jp[\/|\?]|stg.beatsbydre.com\/jp$/i).test(document.URL)){ 
		s_account='beats-cms-jp-stage';
	}else if((/stg.beatsbydre.com\/kr[\/|\?]|stg.beatsbydre.com\/kr$/i).test(document.URL)){ 
		s_account='beats-cms-kr-stage';
	}else if((/stg.beatsbydre.com\/au[\/|\?]|stg.beatsbydre.com\/au$/i).test(document.URL)){ 
		s_account='beats-cms-au-stage';
	}else if((/stg.beatsbydre.com\/uk[\/|\?]|stg.beatsbydre.com\/uk$/i).test(document.URL)){ 
		s_account='beats-cms-uk-stage';
	}else if((/stg.beatsbydre.com\/ca[\/|\?]|stg.beatsbydre.com\/ca$/i).test(document.URL) ||
          (/stg.beatsbydre.com\/ca-fr[\/|\?]|stg.beatsbydre.com\/ca-fr$/i).test(document.URL)){ 
		s_account='beats-cms-ca-stage';
	}
  else if(document.URL.indexOf('stg.beatsbydre.com')>-1) {
    s_account='beats-cms-us-stage'; 
  }
	//PROD - CMS - Singapore
	else if((/www.beatsbydre.com\/sg[\/|\?]|www.beatsbydre.com\/sg$/i).test(document.URL)){ 
		s_account='beats-cms-sg-prod';
	}
  //PROD - CMS - Brazil
	else if((/www.beatsbydre.com\/br[\/|\?]|www.beatsbydre.com\/br$/i).test(document.URL)){ 
		s_account='beats-cms-br-prod';
	}
  //PROD - CMS - Belgium
	else if((/www.beatsbydre.com\/be[\/|\?]|www.beatsbydre.com\/be$/i).test(document.URL) ||
         (/www.beatsbydre.com\/be-nl[\/|\?]|www.beatsbydre.com\/be-nl$/i).test(document.URL) ||
         (/www.beatsbydre.com\/be-fr[\/|\?]|www.beatsbydre.com\/be-fr$/i).test(document.URL)){ 
		s_account='beats-cms-be-prod';
	}
  //PROD - CMS - Russia
	else if((/www.beatsbydre.com\/ru[\/|\?]|www.beatsbydre.com\/ru$/i).test(document.URL)){ 
		s_account='beats-cms-ru-prod';
	}
  //PROD - CMS - Portugal
	else if((/www.beatsbydre.com\/pt[\/|\?]|www.beatsbydre.com\/pt$/i).test(document.URL)){ 
		s_account='beats-cms-pt-prod';
	}
  //PROD - CMS - UAE
	else if((/www.beatsbydre.com\/ae[\/|\?]|www.beatsbydre.com\/ae$/i).test(document.URL)){ 
		s_account='beats-cms-ae-prod';
	}
  //PROD - CMS - Denmark
	else if((/www.beatsbydre.com\/dk[\/|\?]|www.beatsbydre.com\/dk$/i).test(document.URL)){ 
		s_account='beats-cms-dk-prod';
	}
  //PROD - CMS - Taiwan
	else if((/www.beatsbydre.com\/tw[\/|\?]|www.beatsbydre.com\/tw$/i).test(document.URL)){ 
		s_account='beats-cms-tw-prod';
	}
  //PROD - CMS - Malaysia
	else if((/www.beatsbydre.com\/my[\/|\?]|www.beatsbydre.com\/my$/i).test(document.URL)){ 
		s_account='beats-cms-my-prod';
	}
  //PROD - CMS - Philippines
	else if((/www.beatsbydre.com\/ph[\/|\?]|www.beatsbydre.com\/ph$/i).test(document.URL)){ 
		s_account='beats-cms-ph-prod';
	}
  //PROD - CMS - Indonesia
	else if((/www.beatsbydre.com\/id[\/|\?]|www.beatsbydre.com\/id$/i).test(document.URL)){ 
		s_account='beats-cms-id-prod';
	}
  //PROD - CMS - Thailand
	else if((/www.beatsbydre.com\/th[\/|\?]|www.beatsbydre.com\/th$/i).test(document.URL)){ 
		s_account='beats-cms-th-prod';
	}
  //PROD - CMS - New Zealand
	else if((/www.beatsbydre.com\/nz[\/|\?]|www.beatsbydre.com\/nz$/i).test(document.URL)){ 
		s_account='beats-cms-nz-prod';
	}
  //PROD - CMS - Norway
	else if((/www.beatsbydre.com\/no[\/|\?]|www.beatsbydre.com\/no$/i).test(document.URL)){ 
		s_account='beats-cms-no-prod';
	}
  //PROD - CMS - Vietnam
	else if((/www.beatsbydre.com\/vn[\/|\?]|www.beatsbydre.com\/vn$/i).test(document.URL)){ 
		s_account='beats-cms-vn-prod';
	}
  //PROD - CMS - Luxembourg
	else if((/www.beatsbydre.com\/lu[\/|\?]|www.beatsbydre.com\/lu$/i).test(document.URL)){ 
		s_account='beats-cms-lu-prod';
	}
  //PROD - CMS - Finland
	else if((/www.beatsbydre.com\/fi[\/|\?]|www.beatsbydre.com\/fi$/i).test(document.URL)){ 
		s_account='beats-cms-fi-prod';
	}
  //PROD - CMS - Italy
	else if((/www.beatsbydre.com\/it[\/|\?]|www.beatsbydre.com\/it$/i).test(document.URL)){ 
		s_account='beats-cms-it-prod';
	}
	//PROD - CMS - Netherlands
	else if((/www.beatsbydre.com\/nl[\/|\?]|www.beatsbydre.com\/nl$/i).test(document.URL)){ 
		s_account='beats-cms-nl-prod';
	}
  //PROD - CMS - Spain
  else if((/www.beatsbydre.com\/es[\/|\?]|www.beatsbydre.com\/es$/i).test(document.URL)){ 
		s_account='beats-cms-es-prod';
  }
	//PROD - CMS - Austria
	else if((/www.beatsbydre.com\/at[\/|\?]|www.beatsbydre.com\/at$/i).test(document.URL)){ 
		s_account='beats-cms-at-prod';
	}
	//PROD - CMS - Switzerland German & French in the same report suite 
	else if((/www.beatsbydre.com\/ch[\/|\?]|www.beatsbydre.com\/ch$/i).test(document.URL) ||
         (/www.beatsbydre.com\/ch-de[\/|\?]|www.beatsbydre.com\/ch-de$/i).test(document.URL) ||
         (/www.beatsbydre.com\/ch-fr[\/|\?]|www.beatsbydre.com\/ch-fr$/i).test(document.URL)){ 
		s_account='beats-cms-ch-prod';
	}
	//PROD - CMS - Germany
	else if((/www.beatsbydre.com\/de[\/|\?]|www.beatsbydre.com\/de$/i).test(document.URL)){ 
		s_account='beats-cms-de-prod';
	}
	//PROD - CMS - France
	else if((/www.beatsbydre.com\/fr[\/|\?]|www.beatsbydre.com\/fr$/i).test(document.URL)){ 
		s_account='beats-cms-fr-prod';
	}
	//PROD - CMS - Mexico
	else if((/www.beatsbydre.com\/mx[\/|\?]|www.beatsbydre.com\/mx$/i).test(document.URL)){ 
		s_account='beats-cms-mx-prod';
	}
	//PROD - CMS - Sweden
	else if((/www.beatsbydre.com\/se[\/|\?]|www.beatsbydre.com\/se$/i).test(document.URL)){ 
		s_account='beats-cms-se-prod';
	}
  //PROD - CMS - Ireland
  else if((/www.beatsbydre.com\/ie[\/|\?]|www.beatsbydre.com\/ie$/i).test(document.URL)){ 
		s_account='beats-cms-ie-prod';
  }
	//PROD - CMS - China
	else if((/www.beatsbydre.com\/cn[\/|\?]|www.beatsbydre.com\/cn$/i).test(document.URL)){ 
		s_account='beats-cms-cn-prod';
	}
	//PROD - CMS - Hong Kong English & Chinese in the same report suite 
	else if((/www.beatsbydre.com\/hk[\/|\?]|www.beatsbydre.com\/hk$/i).test(document.URL) ||
         (/www.beatsbydre.com\/hk-zh[\/|\?]|www.beatsbydre.com\/hk-zh$/i).test(document.URL)){ 
		s_account='beats-cms-hk-prod';
	}
	//PROD - CMS - Japan
	else if((/www.beatsbydre.com\/jp[\/|\?]|www.beatsbydre.com\/jp$/i).test(document.URL)){ 
		s_account='beats-cms-jp-prod';
	}
	//PROD - CMS - Korea
	else if((/www.beatsbydre.com\/kr[\/|\?]|www.beatsbydre.com\/kr$/i).test(document.URL)){ 
		s_account='beats-cms-kr-prod';
	}
  //PROD - CMS - Australia
  else if((/www.beatsbydre.com\/au[\/|\?]|www.beatsbydre.com\/au$/i).test(document.URL)){ 
		s_account='beats-cms-au-prod';
	}
  //PROD - CMS - UK
  else if((/www.beatsbydre.com\/uk[\/|\?]|www.beatsbydre.com\/uk$/i).test(document.URL)){ 
		s_account='beats-cms-uk-prod';
	}
  //PROD - CMS - Canada English & French in the same report suite
  else if((/www.beatsbydre.com\/ca[\/|\?]|www.beatsbydre.com\/ca$/i).test(document.URL) || 
          (/www.beatsbydre.com\/ca-fr[\/|\?]|www.beatsbydre.com\/ca-fr$/i).test(document.URL)){ 
		s_account='beats-cms-ca-prod';
	}
	//PROD - Region - Americas - 
	else if(document.URL.indexOf('www.beatsbydre.com')>-1 || document.URL.indexOf('//beatsbydre.com')>-1){
			//s_account='beatsbydre-prod-us'; OLD
    	s_account='beats-cms-us-prod';
	}
	else if(document.URL.indexOf('mx.beatsbydre.com')>-1){
			s_account='beatsbydre-prod-mx';
	}
	//else if(document.URL.indexOf('ca.beatsbydre.com')>-1){
			//s_account='beatsbydre-prod-ca';
	//}
	else if(document.URL.indexOf('br.beatsbydre.com')>-1){
			s_account='beatsbydre-prod-br';	
  } 
  else if(document.URL.indexOf('beatsbydre-qa.corp.apple.com/sg')>-1){
			s_account='beatsbydre-cms-sg-dev';	
  } 
  else if(document.URL.indexOf('beatsbydre-qa.corp.apple.com')>-1){
			s_account='beatsbydre-cms-us-dev';	

	//PROD - Region - Europe and Middle East
	}else if(document.URL.indexOf('ae.beatsbydre.com')>-1){ 
		s_account='beatsbydre-prod-ae';
	}else if(document.URL.indexOf('at.beatsbydre.com')>-1){ 
		s_account='beatsbydre-prod-at';
	}else if(document.URL.indexOf('be.beatsbydre.com')>-1){ 
		s_account='beatsbydre-prod-be';
	}else if(document.URL.indexOf('ch.beatsbydre.com')>-1){  
		s_account='beatsbydre-prod-ch';
	}else if(document.URL.indexOf('de.beatsbydre.com')>-1){ 
		s_account='beatsbydre-prod-de';
	}else if(document.URL.indexOf('dk.beatsbydre.com')>-1){ 
		s_account='beatsbydre-prod-dk';
	}else if(document.URL.indexOf('es.beatsbydre.com')>-1){ 
		s_account='beatsbydre-prod-es';
	}else if(document.URL.indexOf('fi.beatsbydre.com')>-1){ 
		s_account='beatsbydre-prod-fi';
	}else if(document.URL.indexOf('fr.beatsbydre.com')>-1){ 
		s_account='beatsbydre-prod-fr';
	}else if(document.URL.indexOf('ie.beatsbydre.com')>-1){ 
		s_account='beatsbydre-prod-ie';
	}else if(document.URL.indexOf('it.beatsbydre.com')>-1){ 
		s_account='beatsbydre-prod-it';
	}else if(document.URL.indexOf('lu.beatsbydre.com')>-1){ 
		s_account='beatsbydre-prod-lu';
	}else if(document.URL.indexOf('nl.beatsbydre.com')>-1){ 
		s_account='beatsbydre-prod-nl';
	}else if(document.URL.indexOf('no.beatsbydre.com')>-1){ 
		s_account='beatsbydre-prod-no';
	}else if(document.URL.indexOf('pt.beatsbydre.com')>-1){ 
		s_account='beatsbydre-prod-pt';
	}else if(document.URL.indexOf('ru.beatsbydre.com')>-1){ 
		s_account='beatsbydre-prod-ru';
	}else if(document.URL.indexOf('se.beatsbydre.com')>-1){ 
		s_account='beatsbydre-prod-se';
	}
  //else if(document.URL.indexOf('uk.beatsbydre.com')>-1){ 
		//s_account='beatsbydre-prod-uk';
	//PROD - Region - Asia Pacific
	//}
  //else if(document.URL.indexOf('au.beatsbydre.com')>-1){ 
		//s_account='beatsbydre-prod-au';
	//}
  else if(document.URL.indexOf('cn.beatsbydre.com')>-1){ 
		s_account='beatsbydre-prod-cn';
	}else if(document.URL.indexOf('hk.beatsbydre.com')>-1){ 
		s_account='beatsbydre-prod-hk';
	}else if(document.URL.indexOf('id.beatsbydre.com')>-1){ 
		s_account='beatsbydre-prod-id';
	}else if(document.URL.indexOf('jp.beatsbydre.com')>-1){ 
		s_account='beatsbydre-prod-jp';
	}else if(document.URL.indexOf('kr.beatsbydre.com')>-1){ 
		s_account='beatsbydre-prod-kr';
	}else if(document.URL.indexOf('my.beatsbydre.com')>-1){ 
		s_account='beatsbydre-prod-my';
	}else if(document.URL.indexOf('nz.beatsbydre.com')>-1){ 
		s_account='beatsbydre-prod-nz';
	}else if(document.URL.indexOf('ph.beatsbydre.com')>-1){ 
		s_account='beatsbydre-prod-ph';
	}//else if(document.URL.indexOf('sg.beatsbydre.com')>-1){ 
		//s_account='beatsbydre-prod-sg';
	//}
	else if(document.URL.indexOf('th.beatsbydre.com')>-1){ 
		s_account='beatsbydre-prod-th';
	}else if(document.URL.indexOf('tw.beatsbydre.com')>-1){ 
		s_account='beatsbydre-prod-tw';
	}else if(document.URL.indexOf('vn.beatsbydre.com')>-1){ 
		s_account='beatsbydre-prod-vn';
	//DEV - Region - US/UK/CN
	}else if(document.URL.indexOf('uk.stg.beatsbydre.com')>-1 || document.URL.indexOf('uk.dev')>-1){
		s_account='beatsbydre-dev-uk';
	}
	else if(document.URL.indexOf('cn.stg.beatsbydre.com')>-1 || document.URL.indexOf('cn.dev')>-1){  
		s_account='beatsbydre-dev-cn';
	}else if(document.URL.indexOf('beatsbydre-dev.corp.apple.com/sg')>-1){ 
		s_account='beats-sg-cms-dev';
	}else{
	s_account='beatsbydre-dev-global';
	}

	var s=s_gi(s_account);

	/************************** CONFIG SECTION **************************/
	/* Link Tracking Config */
	s.trackDownloadLinks=false;
	s.trackExternalLinks=true;
	s.trackInlineStats=true;
	s.linkDownloadFileTypes='exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx';
	s.linkInternalFilters='javascript:,.beatsbydre.';
	s.linkLeaveQueryString=false;
	s.linkTrackVars='None';
	s.linkTrackEvents='None';

	/* WARNING: Changing any of the below variables will cause drastic
	changes to how your visitor data is collected.  Changes should only be
	made when instructed to do so by your account manager.*/

	s.visitorNamespace='beatsbydre';
	s.dc='d1';
	s.trackingServer='metrics.beatsbydre.com';
	s.trackingServerSecure='smetrics.beatsbydre.com'; 
	s.visitorMigrationKey="515F07A1"
	s.visitorMigrationServer="beatsbydre.d1.sc.omtrdc.net"

	//Setup Clickmap
	function s_getObjectID(o) 
	{
		var ID=o.href;
		return ID;
	}

	s.getObjectID = s_getObjectID;

	//Video Tracking
	s.loadModule('Media');
	s.Media.autoTrack=false;
	s.Media.playerName='Youtube Player';
	s.Media.segmentByMilestones=true;
	s.Media.trackMilestones='25,50,75';
	s.Media.trackUsingContextData=true;
	s.Media.contextDataMapping = {
		'a.media.name':'eVar28,prop28',
		'a.media.segment':'eVar29,prop29',
		'a.media.timePlayed':'event28',
		'a.media.view':'event29',
		'a.media.segmentView':'event30',
		'a.media.complete':'event34',
		'a.media.milestones':{
			25:'event31',
			50:'event32',
			75:'event33',
		}
	} 

	/************************** PLUGIN CONFIG  **************************/
	//Channel Manager Plugin Settings
	s._channelDomain='Social Networks|facebook.com,linkedin.com,twitter.com,orkut.com,friendster.com,livejournal.com,blogspot.com,wordpress.com,friendfeed.com,myspace.com,digg.com,reddit.com'
		+'stumbleupon.com,twine.com,yelp.com,mixx.com,delicious.com,tumblr.com,disqus.com,intensedebate.com,plurk.com,slideshare.net,backtype.com,netvibes.com,mister-wong.com,'
		+'diigo.com,flixster.com,youtube.com,vimeo.com,12seconds.tv,zooomr.com,identi.ca,jaiku.com,flickr.com,imeem.com,dailymotion.com,photobucket.com,fotolog.com,smugmug.com,'
		+'classmates.com,myyearbook.com,mylife.com,tagged.com,brightkite.com,ning.com,bebo.com,hi5.com,yuku.com,cafemom.com,xanga.com,plus.google.com,pinterest.com';
	s._channelParameter='Email|et_cid';
	s._channelPattern='Email|em>Paid Search|ps>Paid Display|pd_>Affiliates|aff_>Social Networks|socdp_,soc_>Consumer Shopping Engines|cse';

	/********************** Event Tracking*****************************/
	jQuery(document).ready(function($){

		//Forgot Password 10-29
		if($("div.formfield.otheroptions a#PasswordReset").length != null){  
			$("div.formfield.otheroptions a#PasswordReset").click(function() {
	  			s_forgotPasswordClick();
			});
		}
		//Create Account -wc edit 2_6_15
		if($('#dwfrm_login_register > fieldset > button').length != null){  
			$('#dwfrm_login_register > fieldset > button').on("click", function() {
				s_createAccount();
			});
		}
		//Guest Checkout 10-28 -wc edit 2_6_15
		if($('div.right-column > form#dwfrm_login_register > button.arrow').length != null){  
			$('div.right-column > form#dwfrm_login_register > button.arrow').on("click", function() {
				s_guestCheckout();
			});
		}
		//Checkout Start 10-28
		if($('div.actions form.formcheckout button[name="dwfrm_cart_checkoutCart"]').length != null){  
			$('button[name="dwfrm_cart_checkoutCart"]').on("click", function(){
				s_checkoutStart();
			});
		}

		//Return to Cart - 10-29
		if($('div.left-column div.section-header a').length !=null){
			$('div.left-column div.section-header a').on("click", function() {
				s_returnToCart();
			});
		}

		//Save my info 10-30
		if($('a.imagebutton.continue-checkout.arrow').length != null){  
			$('a.imagebutton.continue-checkout.arrow').on("click", function() {
				s_saveMyInfo();
			});
		}

			//Cart Icon Clicked - 10-30
		if($('div.innerCart').length != null){
			$('div.innerCart a.linkminicart').on("click", function() {
	  			s_cartIconClick();
			})
		}
			//Cart Icon Clicked - 10-30
		if($('div.stripCart').length != null){
			$('div.stripCart a.linkminicart').on("click", function() {
	  			s_cartIconClick();
			})
		}
	})

	s.usePlugins=true

	s.removeFromCart = function(pid) {
		var s=s_gi(s_account);
		s.linkTrackVars='events,products';
		s.linkTrackEvents=s.events='scRemove';
		s.products=";"+pid;
		s.tl(this,'o','Remove From Cart:'+pid);
		s.linkTrackVars='None';
		s.linkTrackEvents='None';
		s.events='';
		s.products="";
		return true;
		};

	$(function() {
	  function iframeCallback() {
	    	// el = $('body', $('iframe#content-iframe').contents());
	    	el = $('iframe#content-iframe').contents().find('div.confirmDialogBox a.Confirm');
	    	if (el.length != 1) {
	      	setTimeout(iframeCallback, 100);
	      	return;
	    	}
	    	// Get the src, which contains the PID
	    	iFrameSrc = $('iframe#content-iframe').attr('src');
			pidStart = iFrameSrc.toLowerCase().indexOf('?pid=') + 5;
			//Get the PID
			pidVal = iFrameSrc.substring(pidStart,iFrameSrc.length);
			$("iframe#content-iframe").contents().find('div.confirmDialogBox a.Confirm').on("click",function(event){
				s.removeFromCart(pidVal);
			});
	  }
	  iframeCallback();
	});

	function s_doPlugins(s) 
	{

		//Secure Checkout Start - 10-28
		$('div.link2cart a').on("click", function(e) {
			var linkhref=$('div.link2cart a').attr('href');
			if(linkhref.indexOf("/checkout")>-1) {
				s_secureCheckoutStart();
			};	
		})
		
		/* Automate Campaign Tracking Code Extraction based on the cid parameter*/
		if(!s.campaign)
			s.campaign=s.getQueryParam('cid');
		if(!s.campaign&&s.getQueryParam('et_cid'))
			s.campaign='email_'+s.getQueryParam('et_cid');		
		s.campaign=s.getValOnce(s.campaign,'s_campaign',0);
		if(s.campaign=='beats_warranty'||s.campaign=='ca-safe-buying-guide')
		{
			s.campaign='';
			s.pageURL=document.URL.substring(0,document.URL.indexOf('?'));
		}
			
		/*  Automate OrderID eVar */
		if(s.purchaseID)
			s.transactionID=s.eVar11=s.purchaseID;

		/*Employee Purchases*/
		s.contextData['SRC']=s.getQueryParam('src');
		if(s.contextData['SRC']==('beatsepp')) s.events="event40";
		
		if(s_account==('beatsbydre-dev-us') || s_account==('beatsbydreprod')){
			s.eVar17='english';
			s.eVar18='united states';
			s.currencyCode=s.eVar19=s.prop19='USD';
		}

		/* Determine the Channel Source that brought the user to the site */
		s.channelManager('cid','','cmgvo','','s_dl');
		if(s._channel&&!s.eVar21)
		{
			//trim down the email referring domains.  Otherwise, you'll get a *LOT* of unnecessary duplicate domain entries from gmail, hotmail, yahoo! mail, etc.
			s.mailRef=s._referringDomain.indexOf('.mail.')
			if(s.mailRef>-1)
				s._referringDomain=s._referringDomain.substring(s.mailRef+1);
			//set eVar21 and eVar23 equal to the channel.
			s.eVar21=s.prop21=s.prop23=s._channel;
			//Remove plus signs from keywords where plus signs weren't originally used
			if(s._keywords.indexOf('+')==0)
				s._keywords=s._keywords.replace('+','  ');
			s._keywords=s.repl(s._keywords,'+',' ');
			s._keywords=s.repl(s._keywords,'  ',' +').replace(/^\s+/,"");
			//Set the channel detail variables
			
			switch(s.eVar21)
			{
				case 'Paid Search':
					s.eVar22=s.prop22=s.eVar24=s.prop24='SEM: '+s._partner+': '+s._keywords;
					break;
				case 'Natural Search':
					s.eVar22=s.prop22=s.eVar24=s.prop24='SEO: '+s._partner+': '+s._keywords;
					break;
				case 'Affiliates':
					s.eVar22=s.prop22=s.eVar24=s.prop24='Affiliates: '+s._campaignID;
					break;
				case 'Social Networks':
					s.eVar22=s.prop22=s.eVar24=s.prop24='Social Networks: '+s._campaignID;
					break;
				case 'Paid Display':
					s.eVar22=s.prop22=s.eVar24=s.prop24='Paid Display: '+s._campaignID;
					break;
				case 'Consumer Shopping Engines':
					s.eVar22=s.prop22=s.eVar24=s.prop24='Consumer Shopping Engines: '+s._campaignID;
					break;
				case 'Typed/Bookmarked':
					s.eVar22=s.prop22=s.eVar24=s.prop24='Typed/Bookmarked: '+s.pageName;
					break;
				case 'Other Natural Referrers':
					s.eVar22=s.prop22=s.eVar24=s.prop24='Other Natural Referrers: '+s._referringDomain;
					break;
				default:
					s.eVar22=s.prop22=s._campaignID!='n/a'?s._channel+': '+s._campaignID:s._channel+': '+s._referringDomain;
			}

			//Channel first touch
			var channelFirstTouch = get_cookie('s_ev23');
			var channelFirstTouchDet = get_cookie('s_ev24');
			if(channelFirstTouch === null || channelFirstTouchDet === null){
				set_cookie('s_ev23',s.eVar21,document.domain,90);
				set_cookie('s_ev24',s.eVar22,document.domain,90);
			}else{
				s.eVar23=s.prop23=channelFirstTouch;
	      		s.eVar24=s.prop24=channelFirstTouchDet;
			}

			//cross visit participation
			s.eVar25=s.prop25=s.crossVisitParticipation(s.eVar21,'s_ev21','90','5',' > ','',1);
			s.eVar26=s.prop26=s.crossVisitParticipation(s.eVar22,'s_ev22','90','5',' > ','',1);
		}
		
		//Blank out products if events isn't set so that we don't inflate prodViews
		if(s.products&&!s.events)
			s.products='';
		
		//Lowercase all variables
		s.manageVars('lowercaseVars');
		
		//ExactTarget data
		s.eVar15=s.prop15=s.getQueryParam('et_rid');
		s.eVar16=s.prop16=s.getQueryParam('et_cid');
		
		//Setup Clickmap Object IDs
		s.setupDynamicObjectIDs();
		
		//Get rid of browser plugins.  Not used in SC15/not needed
		s.plugins='';
			
		//Change site to beats for onsite log in value
		if (s.eVar5 === 'site') s.eVar5 = 'beats'; 
    
    	//Time Parting by Region - Country - Language - Currency
	      var localeLanguage = 'english';
	      //Americas
	      /*if(s_account.indexOf('beatsbydre-prod-us')>-1 || s_account.indexOf('beatsbydre-dev-us')>-1){
	        s.eVar17=s.prop17='english';
	        localeLanguage = 'english';
	            s.eVar18=s.prop18='united states';
	        s.currencyCode=s.eVar19=s.prop19='USD';
	      }
	      else if(s_account.indexOf('beatsbydre-prod-ca')>-1){
	        s.eVar17=s.prop17='english';
	        localeLanguage = 'english'; 
	        s.eVar18=s.prop18='canada';
	        s.currencyCode=s.eVar19=s.prop19='CAD';
	      }
	      else if(s_account.indexOf('beatsbydre-prod-br')>-1){
	        s.eVar17=s.prop17='portuguese';
	        localeLanguage = 'portuguese';
	        s.eVar18=s.prop18='brazil';
	        s.currencyCode=s.eVar19=s.prop19='BRL';
	      }
	      //Europe & Middle East
	      else if(s_account.indexOf('beatsbydre-prod-be')>-1){
	        s.eVar17=s.prop17='dutch';
	        localeLanguage = 'dutch';
	        s.eVar18=s.prop18='belgium';
	        s.currencyCode=s.eVar19=s.prop19='EUR';
	      }
	      else if(s_account.indexOf('beatsbydre-prod-dk')>-1){
	        s.eVar17=s.prop17='danish';
	        localeLanguage = 'danish';
	        s.eVar18=s.prop18='denmark';
	        s.currencyCode=s.eVar19=s.prop19='DKK';
	      }
	      else if(s_account.indexOf('beatsbydre-prod-de')>-1){
	        s.eVar17=s.prop17='german';
	        localeLanguage = 'german';
	        s.eVar18=s.prop18='germany';
	        s.currencyCode=s.eVar19=s.prop19=s.prop19='EUR';
	      }
	      else if(s_account.indexOf('beatsbydre-prod-es')>-1){
	        s.eVar17=s.prop17='spanish';
	        localeLanguage = 'spanish';
	        s.eVar18=s.prop18='spain';
	        s.currencyCode=s.eVar19=s.prop19='EUR';
	      }
	      else if(s_account.indexOf('beatsbydre-prod-fr')>-1){
	        s.eVar17=s.prop17='french';
	        localeLanguage = 'french';
	        s.eVar18=s.prop18='france';
	        s.currencyCode=s.eVar19=s.prop19='EUR';
	      }
	      else if(s_account.indexOf('beatsbydre-prod-ie')>-1){
	        s.eVar17=s.prop17='english';
	        localeLanguage = 'english';
	        s.eVar18=s.prop18='ireland';
	        s.currencyCode=s.eVar19=s.prop19='EUR';
	      }
	      else if(s_account.indexOf('beatsbydre-prod-it')>-1){
	        s.eVar17=s.prop17='italian';
	        localeLanguage = 'italian';
	        s.eVar18=s.prop18='italy';
	        s.currencyCode=s.eVar19=s.prop19='EUR';
	      }
	      else if(s_account.indexOf('beatsbydre-prod-lu')>-1){
	        s.eVar17=s.prop17='french';
	        localeLanguage = 'french';    
	        s.eVar18=s.prop18='luxembourg';
	        s.currencyCode=s.eVar19=s.prop19='EUR';
	      }
	      else if(s_account.indexOf('beatsbydre-prod-nl')>-1){
	        s.eVar17=s.prop17='dutch';
	        localeLanguage = 'dutch';
	        s.eVar18=s.prop18='netherlands';
	        s.currencyCode=s.eVar19=s.prop19='EUR';
	      }
	      else if(s_account.indexOf('beatsbydre-prod-no')>-1){
	        s.eVar17=s.prop17='norwegian';
	        localeLanguage = 'norwegian';
	        s.eVar18=s.prop18='norway';
	        s.currencyCode=s.eVar19=s.prop19='NOK';
	      }
	      else if(s_account.indexOf('beatsbydre-prod-at')>-1){
	        s.eVar17=s.prop17='german';
	        localeLanguage = 'german';
	        s.eVar18=s.prop18='austria';
	        s.currencyCode=s.eVar19=s.prop19='EUR';
	      }
	      else if(s_account.indexOf('beatsbydre-prod-pt')>-1){
	        s.eVar17=s.prop17='portuguese';
	        localeLanguage = 'portuguese';
	        s.eVar18=s.prop18='portugal';
	        s.currencyCode=s.eVar19=s.prop19='EUR';
	      }
	      else if(s_account.indexOf('beatsbydre-prod-ru')>-1){
	        s.eVar17=s.prop17='russian';
	        localeLanguage = 'russian';
	        s.eVar18=s.prop18='russia';
	        s.currencyCode=s.eVar19=s.prop19='RUB';
	      }
	      else if(s_account.indexOf('beatsbydre-prod-fi')>-1){
	        s.eVar17=s.prop17='finnish';
	        localeLanguage = 'finnish';
	        s.eVar18=s.prop18='finland';
	        s.currencyCode=s.eVar19=s.prop19='EUR';
	      }
	      else if(s_account.indexOf('beatsbydre-prod-se')>-1){
	        s.eVar17=s.prop17='swedish';
	        localeLanguage = 'swedish';
	        s.eVar18=s.prop18='sweden';
	        s.currencyCode=s.eVar19=s.prop19='SEK';
	      }
	      else if(s_account.indexOf('beatsbydre-prod-ch')>-1){
	        s.eVar17=s.prop17='german';
	        localeLanguage = 'german';
	        s.eVar18=s.prop18='switzerland';
	        s.currencyCode=s.eVar19=s.prop19='CHF';
	      }
	      else if(s_account.indexOf('beatsbydre-prod-ae')>-1){
	        s.eVar17=s.prop17='arabic';
	        localeLanguage = 'arabic';
	        s.eVar18=s.prop18='united arab emirates';
	        s.currencyCode=s.eVar19='AED';  
	      }
	      else if(s_account.indexOf('beatsbydre-prod-uk')>-1 || s_account.indexOf('beatsbydre-dev-uk')>-1){
	        s.eVar17=s.prop17='english';
	        localeLanguage = 'english';
	        s.eVar18=s.prop18='united kingdom';
	        s.currencyCode=s.eVar19=s.prop19='GBP'; 
	      }
	      //Asia Pacific
	      else if(s_account.indexOf('beatsbydre-prod-au')>-1){
	        s.eVar17=s.prop17='english';
	        localeLanguage = 'english';
	        s.eVar18=s.prop18='australia';
	        s.currencyCode=s.eVar19=s.prop19='AUD'; 
	      }
	      else if(s_account.indexOf('beatsbydre-prod-cn')>-1 || s_account.indexOf('beatsbydre-dev-cn')>-1){
	        s.eVar17=s.prop17='chinese';
	        localeLanguage = 'chinese'; 
	        s.eVar18=s.prop18='china';
	        s.currencyCode=s.eVar19=s.prop19='CNY';
	        s.charSet='GB2312';
	      }
	      else if(s_account.indexOf('beatsbydre-prod-hk')>-1){
	        s.eVar17=s.prop17='english';
	        localeLanguage = 'english';  
	        s.eVar18=s.prop18='hong kong';
	        s.currencyCode=s.eVar19=s.prop19='HKD';
	      }
	      else if(s_account.indexOf('beatsbydre-prod-id')>-1){
	        s.eVar17=s.prop17='indonesian';
	        localeLanguage = 'indonesian';  
	        s.eVar18=s.prop18='indonesia';
	        s.currencyCode=s.eVar19=s.prop19='IDR';
	      }
	      else if(s_account.indexOf('beatsbydre-prod-jp')>-1){
	        s.eVar17=s.prop17='japanese';
	        localeLanguage = 'japanese';  
	        s.eVar18=s.prop18='japan';
	        s.currencyCode=s.eVar19=s.prop19='JPY';
	      }
	      else if(s_account.indexOf('beatsbydre-prod-my')>-1){
	        s.eVar17=s.prop17='malaysian';
	        localeLanguage = 'malaysian';
	        s.eVar18=s.prop18='malaysia';
	        s.currencyCode=s.eVar19=s.prop19='MYR';
	      }
	      else if(s_account.indexOf('beatsbydre-prod-nz')>-1){
	        s.eVar17=s.prop17='english';
	        localeLanguage = 'english';
	        s.eVar18=s.prop18='new zealand';
	        s.currencyCode=s.eVar19=s.prop19='NZD';
	      }
	      else if(s_account.indexOf('beatsbydre-prod-ph')>-1){
	        s.eVar17=s.prop17='filipino';
	        localeLanguage = 'filipino';
	        s.eVar18=s.prop18='philippines';
	        s.currencyCode=s.eVar19=s.prop19='PHP';
	      }
	      else if(s_account.indexOf('beatsbydre-prod-sg')>-1){
	        s.eVar17=s.prop17='english';
	        localeLanguage = 'english';
	        s.eVar18=s.prop18='singapore';
	        s.currencyCode=s.eVar19=s.prop19='SGD';
	      }
	      else if(s_account.indexOf('beatsbydre-prod-kr')>-1){
	        s.eVar17=s.prop17='korean';
	        localeLanguage = 'korean';
	        s.eVar18=s.prop18='korea';
	        s.currencyCode=s.eVar19='KRW';  
	      }
	      else if(s_account.indexOf('beatsbydre-prod-tw')>-1){
	        s.eVar17=s.prop17='mandarian';
	        localeLanguage = 'mandarian';
	        s.eVar18=s.prop18='taiwan';
	        s.currencyCode=s.eVar19='TWD';  
	      }
	      else if(s_account.indexOf('beatsbydre-prod-th')>-1){
	        s.eVar17=s.prop17='thai';
	        localeLanguage = 'thai';
	        s.eVar18=s.prop18='thailand';
	        s.currencyCode=s.eVar19='THB';  
	      }
	      else if(s_account.indexOf('beatsbydre-prod-vn')>-1){
	        s.eVar17=s.prop17='vietnamese';
	        localeLanguage = 'vietnamese';
	        s.eVar18=s.prop18='vietnam';
	        s.currencyCode=s.eVar19='VND';  
	      }
	      else{
	        if(!s.eVar17)s.eVar17=s.prop17='not set';
	        if(!s.eVar18)s.eVar18=s.prop18='not set';
	        if(!s.currencyCode)s.eVar19=s.prop19='not set';
	      }

	      if(document.URL.indexOf('ca.beatsbydre.com/fr/')>-1) {
	        s.eVar17=s.prop17='french';
	        localeLanguage = 'french';
	        s.eVar18=s.prop18='canada';
	        s.currencyCode=s.eVar19=s.prop19='CAD';
	      }
	      if(document.URL.indexOf('be.beatsbydre.com/be-fr/')>-1) {
	        s.eVar17=s.prop17='french';
	        localeLanguage = 'french';
	        s.eVar18=s.prop18='Belgium';
	        s.currencyCode=s.eVar19=s.prop19='EUR';
	      } 
	      if(document.URL.indexOf('ch.beatsbydre.com/fr/')>-1) {
	        s.eVar17=s.prop17='french';
	        localeLanguage = 'french';
	        s.eVar18=s.prop18='switzerland';
	        s.currencyCode=s.eVar19=s.prop19='CHF';
	      } 
	      if(document.URL.indexOf('hk.beatsbydre.com/zh-hk/')>-1) {
	        s.eVar17=s.prop17='chinese';
	        localeLanguage = 'chinese';
	        s.eVar18=s.prop18='hong kong';
	        s.currencyCode=s.eVar19=s.prop19='HKD';
	      } */
    		
    		//Americas
	      if(s_account.indexOf('beats-cms-us-prod')>-1 || s_account.indexOf('beats-cms-us-stage')>-1){
	        s.eVar17=s.prop17='english';
	        localeLanguage = 'english';
	            s.eVar18=s.prop18='united states';
	        s.currencyCode=s.eVar19=s.prop19='USD';
	      }
	      else if(s_account.indexOf('beats-cms-ca-prod')>-1 || s_account.indexOf('beats-cms-ca-stage')>-1){
	        s.eVar17=s.prop17='english';
	        localeLanguage = 'english'; 
	        s.eVar18=s.prop18='canada';
	        s.currencyCode=s.eVar19=s.prop19='CAD';
	      }
    		else if(s_account.indexOf('beats-cms-mx-prod')>-1 || s_account.indexOf('beats-cms-mx-stage')>-1){
	        s.eVar17=s.prop17='spanish';
	        localeLanguage = 'spanish'; 
	        s.eVar18=s.prop18='mexico';
	        s.currencyCode=s.eVar19=s.prop19='MXN';
	      }
	      else if(s_account.indexOf('beats-cms-br-prod')>-1 || s_account.indexOf('beats-cms-br-stage')>-1){
	        s.eVar17=s.prop17='portuguese';
	        localeLanguage = 'portuguese';
	        s.eVar18=s.prop18='brazil';
	        s.currencyCode=s.eVar19=s.prop19='BRL';
	      }
	      //Europe & Middle East
	      else if(s_account.indexOf('beats-cms-be-prod')>-1 || s_account.indexOf('beats-cms-be-stage')>-1){
	        s.eVar17=s.prop17='dutch';
	        localeLanguage = 'dutch';
	        s.eVar18=s.prop18='belgium';
	        s.currencyCode=s.eVar19=s.prop19='EUR';
	      }
	      else if(s_account.indexOf('beats-cms-dk-prod')>-1 || s_account.indexOf('beats-cms-dk-stage')>-1){
	        s.eVar17=s.prop17='danish';
	        localeLanguage = 'danish';
	        s.eVar18=s.prop18='denmark';
	        s.currencyCode=s.eVar19=s.prop19='DKK';
	      }
	      else if(s_account.indexOf('beats-cms-de-prod')>-1 || s_account.indexOf('beats-cms-de-stage')>-1){
	        s.eVar17=s.prop17='german';
	        localeLanguage = 'german';
	        s.eVar18=s.prop18='germany';
	        s.currencyCode=s.eVar19=s.prop19=s.prop19='EUR';
	      }
	      else if(s_account.indexOf('beats-cms-es-prod')>-1 || s_account.indexOf('beats-cms-es-stage')>-1){
	        s.eVar17=s.prop17='spanish';
	        localeLanguage = 'spanish';
	        s.eVar18=s.prop18='spain';
	        s.currencyCode=s.eVar19=s.prop19='EUR';
	      }
	      else if(s_account.indexOf('beats-cms-fr-prod')>-1 || s_account.indexOf('beats-cms-fr-stage')>-1){
	        s.eVar17=s.prop17='french';
	        localeLanguage = 'french';
	        s.eVar18=s.prop18='france';
	        s.currencyCode=s.eVar19=s.prop19='EUR';
	      }
	      else if(s_account.indexOf('beats-cms-ie-prod')>-1 || s_account.indexOf('beats-cms-ie-stage')>-1){
	        s.eVar17=s.prop17='english';
	        localeLanguage = 'english';
	        s.eVar18=s.prop18='ireland';
	        s.currencyCode=s.eVar19=s.prop19='EUR';
	      }
	      else if(s_account.indexOf('beats-cms-it-prod')>-1 || s_account.indexOf('beats-cms-it-stage')>-1){
	        s.eVar17=s.prop17='italian';
	        localeLanguage = 'italian';
	        s.eVar18=s.prop18='italy';
	        s.currencyCode=s.eVar19=s.prop19='EUR';
	      }
	      else if(s_account.indexOf('beats-cms-lu-prod')>-1 || s_account.indexOf('beats-cms-lu-stage')>-1){
	        s.eVar17=s.prop17='french';
	        localeLanguage = 'french';    
	        s.eVar18=s.prop18='luxembourg';
	        s.currencyCode=s.eVar19=s.prop19='EUR';
	      }
	      else if(s_account.indexOf('beats-cms-nl-prod')>-1 || s_account.indexOf('beats-cms-nl-stage')>-1){
	        s.eVar17=s.prop17='dutch';
	        localeLanguage = 'dutch';
	        s.eVar18=s.prop18='netherlands';
	        s.currencyCode=s.eVar19=s.prop19='EUR';
	      }
	      else if(s_account.indexOf('beats-cms-no-prod')>-1 || s_account.indexOf('beats-cms-no-stage')>-1){
	        s.eVar17=s.prop17='norwegian';
	        localeLanguage = 'norwegian';
	        s.eVar18=s.prop18='norway';
	        s.currencyCode=s.eVar19=s.prop19='NOK';
	      }
	      else if(s_account.indexOf('beats-cms-at-prod')>-1 || s_account.indexOf('beats-cms-at-stage')>-1){
	        s.eVar17=s.prop17='german';
	        localeLanguage = 'german';
	        s.eVar18=s.prop18='austria';
	        s.currencyCode=s.eVar19=s.prop19='EUR';
	      }
	      else if(s_account.indexOf('beats-cms-pt-prod')>-1 || s_account.indexOf('beats-cms-pt-stage')>-1){
	        s.eVar17=s.prop17='portuguese';
	        localeLanguage = 'portuguese';
	        s.eVar18=s.prop18='portugal';
	        s.currencyCode=s.eVar19=s.prop19='EUR';
	      }
	      else if(s_account.indexOf('beats-cms-ru-prod')>-1 || s_account.indexOf('beats-cms-ru-stage')>-1){
	        s.eVar17=s.prop17='russian';
	        localeLanguage = 'russian';
	        s.eVar18=s.prop18='russia';
	        s.currencyCode=s.eVar19=s.prop19='RUB';
	      }
	      else if(s_account.indexOf('beats-cms-fi-prod')>-1 || s_account.indexOf('beats-cms-fi-stage')>-1){
	        s.eVar17=s.prop17='finnish';
	        localeLanguage = 'finnish';
	        s.eVar18=s.prop18='finland';
	        s.currencyCode=s.eVar19=s.prop19='EUR';
	      }
	      else if(s_account.indexOf('beats-cms-se-prod')>-1 || s_account.indexOf('beats-cms-se-stage')>-1){
	        s.eVar17=s.prop17='swedish';
	        localeLanguage = 'swedish';
	        s.eVar18=s.prop18='sweden';
	        s.currencyCode=s.eVar19=s.prop19='SEK';
	      }
	      else if(s_account.indexOf('beats-cms-ch-prod')>-1 || s_account.indexOf('beats-cms-ch-stage')>-1){
	        s.eVar17=s.prop17='german';
	        localeLanguage = 'german';
	        s.eVar18=s.prop18='switzerland';
	        s.currencyCode=s.eVar19=s.prop19='CHF';
	      }
	      else if(s_account.indexOf('beats-cms-ae-prod')>-1 || s_account.indexOf('beats-cms-ae-stage')>-1){
	        s.eVar17=s.prop17='arabic';
	        localeLanguage = 'arabic';
	        s.eVar18=s.prop18='united arab emirates';
	        s.currencyCode=s.eVar19='AED';  
	      }
	      else if(s_account.indexOf('beats-cms-uk-prod')>-1 || s_account.indexOf('beats-cms-uk-stage')>-1){
	        s.eVar17=s.prop17='english';
	        localeLanguage = 'english';
	        s.eVar18=s.prop18='united kingdom';
	        s.currencyCode=s.eVar19=s.prop19='GBP'; 
	      }
	      //Asia Pacific
	      else if(s_account.indexOf('beats-cms-au-prod')>-1 || s_account.indexOf('beats-cms-au-stage')>-1){
	        s.eVar17=s.prop17='english';
	        localeLanguage = 'english';
	        s.eVar18=s.prop18='australia';
	        s.currencyCode=s.eVar19=s.prop19='AUD'; 
	      }
	      else if(s_account.indexOf('beats-cms-cn-prod')>-1 || s_account.indexOf('beats-cms-cn-stage')>-1){
	        s.eVar17=s.prop17='chinese';
	        localeLanguage = 'chinese'; 
	        s.eVar18=s.prop18='china';
	        s.currencyCode=s.eVar19=s.prop19='CNY';
	        s.charSet='GB2312';
	      }
	      else if(s_account.indexOf('beats-cms-hk-prod')>-1 || s_account.indexOf('beats-cms-hk-stage')>-1){
	        s.eVar17=s.prop17='english';
	        localeLanguage = 'english';  
	        s.eVar18=s.prop18='hong kong';
	        s.currencyCode=s.eVar19=s.prop19='HKD';
	      }
	      else if(s_account.indexOf('beats-cms-id-prod')>-1 || s_account.indexOf('beats-cms-id-stage')>-1){
	        s.eVar17=s.prop17='indonesian';
	        localeLanguage = 'indonesian';  
	        s.eVar18=s.prop18='indonesia';
	        s.currencyCode=s.eVar19=s.prop19='IDR';
	      }
	      else if(s_account.indexOf('beats-cms-jp-prod')>-1 || s_account.indexOf('beats-cms-jp-stage')>-1){
	        s.eVar17=s.prop17='japanese';
	        localeLanguage = 'japanese';  
	        s.eVar18=s.prop18='japan';
	        s.currencyCode=s.eVar19=s.prop19='JPY';
	      }
	      else if(s_account.indexOf('beats-cms-my-prod')>-1 || s_account.indexOf('beats-cms-my-stage')>-1){
	        s.eVar17=s.prop17='malaysian';
	        localeLanguage = 'malaysian';
	        s.eVar18=s.prop18='malaysia';
	        s.currencyCode=s.eVar19=s.prop19='MYR';
	      }
	      else if(s_account.indexOf('beats-cms-nz-prod')>-1 || s_account.indexOf('beats-cms-nz-stage')>-1){
	        s.eVar17=s.prop17='english';
	        localeLanguage = 'english';
	        s.eVar18=s.prop18='new zealand';
	        s.currencyCode=s.eVar19=s.prop19='NZD';
	      }
	      else if(s_account.indexOf('beats-cms-ph-prod')>-1 || s_account.indexOf('beats-cms-ph-stage')>-1){
	        s.eVar17=s.prop17='filipino';
	        localeLanguage = 'filipino';
	        s.eVar18=s.prop18='philippines';
	        s.currencyCode=s.eVar19=s.prop19='PHP';
	      }
	      else if(s_account.indexOf('beats-cms-sg-prod')>-1 || s_account.indexOf('beats-cms-sg-stage')>-1){
	        s.eVar17=s.prop17='english';
	        localeLanguage = 'english';
	        s.eVar18=s.prop18='singapore';
	        s.currencyCode=s.eVar19=s.prop19='SGD';
	      }
	      else if(s_account.indexOf('beats-cms-kr-prod')>-1 || s_account.indexOf('beats-cms-kr-stage')>-1){
	        s.eVar17=s.prop17='korean';
	        localeLanguage = 'korean';
	        s.eVar18=s.prop18='korea';
	        s.currencyCode=s.eVar19='KRW';  
	      }
	      else if(s_account.indexOf('beats-cms-tw-prod')>-1 || s_account.indexOf('beats-cms-tw-stage')>-1){
	        s.eVar17=s.prop17='mandarian';
	        localeLanguage = 'mandarian';
	        s.eVar18=s.prop18='taiwan';
	        s.currencyCode=s.eVar19='TWD';  
	      }
	      else if(s_account.indexOf('beats-cms-th-prod')>-1 || s_account.indexOf('beats-cms-th-stage')>-1){
	        s.eVar17=s.prop17='thai';
	        localeLanguage = 'thai';
	        s.eVar18=s.prop18='thailand';
	        s.currencyCode=s.eVar19='THB';  
	      }
	      else if(s_account.indexOf('beats-cms-vn-prod')>-1 || s_account.indexOf('beats-cms-vn-stage')>-1){
	        s.eVar17=s.prop17='vietnamese';
	        localeLanguage = 'vietnamese';
	        s.eVar18=s.prop18='vietnam';
	        s.currencyCode=s.eVar19='VND';  
	      }
	      else{
	        if(!s.eVar17)s.eVar17=s.prop17='not set';
	        if(!s.eVar18)s.eVar18=s.prop18='not set';
	        if(!s.currencyCode)s.eVar19=s.prop19='not set';
	      }

	      if(document.URL.indexOf('beatsbydre.com/ca-fr')>-1) {
	        s.eVar17=s.prop17='french';
	        localeLanguage = 'french';
	        s.eVar18=s.prop18='canada';
	        s.currencyCode=s.eVar19=s.prop19='CAD';
	      }
	      if(document.URL.indexOf('beatsbydre.com/be-fr/')>-1) {
	        s.eVar17=s.prop17='french';
	        localeLanguage = 'french';
	        s.eVar18=s.prop18='Belgium';
	        s.currencyCode=s.eVar19=s.prop19='EUR';
	      } 
	      if(document.URL.indexOf('beatsbydre.com/ch-fr/')>-1) {
	        s.eVar17=s.prop17='french';
	        localeLanguage = 'french';
	        s.eVar18=s.prop18='switzerland';
	        s.currencyCode=s.eVar19=s.prop19='CHF';
	      } 
	      if(document.URL.indexOf('beatsbydre.com/hk-zh')>-1) {
	        s.eVar17=s.prop17='chinese';
	        localeLanguage = 'chinese';
	        s.eVar18=s.prop18='hong kong';
	        s.currencyCode=s.eVar19=s.prop19='HKD';
	      }
    
		//Format Products
		s.formatProducts()
	}
	s.doPlugins=s_doPlugins;

	/************************** PLUGINS SECTION *************************/
	/* You may insert any plugins you wish to use here.                 */

function set_cookie( name, value, domain, expires ){
	
	var today = new Date();
	today.setTime( today.getTime() );

	/*
	if the expires variable is set, the current script below will set
	it for x number of days
	*/
	if ( expires )
	{
	expires = expires * 1000 * 60 * 60 * 24;
	}
	var expires_date = new Date( today.getTime() + (expires) );

	document.cookie = name + "=" +escape( value ) +
	( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) +
	( ( domain ) ? ";domain=" + domain : "" )

}

function get_cookie(name) {
	var dc = document.cookie;
	var prefix = name + "=";
	var begin = dc.indexOf("; " + prefix);
	if (begin === -1) {
	        begin = dc.indexOf(prefix);
	        if (begin != 0) return null;
	}
	else
	{
	    begin += 2;
	    var end = document.cookie.indexOf(";", begin);
	    if (end === -1) {
	    end = dc.length;
	    }
	}
	return unescape(dc.substring(begin + prefix.length, end));
}


// Chip Cookie Object	
naf.cookieIngredients=function(){
  //Constants
  this.chip_cookie_name = "BIGNUMERIC";
  this.name_value_delim = "~";
  this.cookie_delim = "|";
  // this.length = -1;
  // Example: this.chips = { "cookiename1":cookievalue1, "cookiename2": cookievalue2 };
  this.chips = {};
  // Adds a name/value pair to the cookie's value array params: n = name, v = value
	this.add = function(n,val){
		this.chips[n]=val;
	};
	// Remove the cookie named cname and its value from the chips.
	this.eat = function(cname){
		for(var key in this.chips){ 
			if(key.indexOf(cname) >= 0){
				delete this.chips[key];
			 	break;
			}
		} 
	};
	// Return the value of the cookie requested (cname). Loop through the hash and if the cookie name is one of the hash keys return it's value.
	this.read = function(cname){
		var tmp = "";
		for(var key in this.chips){ 
			if(key.indexOf(cname) >= 0){
			 	tmp = this.chips[key];
			 	return tmp;
			 	break;
			} 
		}
		return null;
	};
	// Takes the values of an existing chip cookie and populates the chipCookie object
	this.fill = function(str){
		var strArray = str.split(this.cookie_delim);
		for ( var i=0; i<strArray.length; ++i ){
			var namevalpair = strArray[i].split(this.name_value_delim);
			this.add(namevalpair[0],namevalpair[1]);
		}
		
	};
	// Returns name value pairs separated by the defined delimiters
	this.bake = function(){
		var tmpArray = new Array();
		 for(var key in this.chips){ 
		 		tmpArray.push(key + this.name_value_delim + this.chips[key]);
		 } 
		tmp = tmpArray.join(this.cookie_delim);
		return tmp;
	};
	// Returns how many chips are there?
		this.size = function(){
		var len =  0;
			    for (var k in this.chips)
			      len++;
		return len;
		};
};

// 	setChip(cookiename, cookievalue) : adds a name/value to the MEGA cookie. If the name already exists in the MEGA cookie it will overwrite its value.
naf.setChip=function(cname, cval){ 
    var theChips = new naf.cookieIngredients();
	var tmp = "";
	//The cookie already exists. Add a new value to it.
	if (naf.getCookie(theChips.chip_cookie_name)){
			//Get the contents of the chip cookie
			tmp = naf.getCookie(theChips.chip_cookie_name);
			theChips.fill(tmp);
			// add a new chip
			theChips.add(cname,cval);
			//Write the new cookie
 			naf.setCookie(theChips.chip_cookie_name, theChips.bake());
		}else{
			// add the first chip
			theChips.add(cname,cval);
			//Write the new cookie
 			naf.setCookie(theChips.chip_cookie_name, theChips.bake());
		}		
};

// getChip(cookiename) : returns the value of a chip
naf.getChip=function(cname){
	var theChips = new naf.cookieIngredients();
	var tmp = "";
		//The cookie already exists. Add a new value to it.
			if (naf.getCookie(theChips.chip_cookie_name)){
				//Get the contents of the chip cookie
				tmp = naf.getCookie(theChips.chip_cookie_name);
				theChips.fill(tmp);
				// add a new chip
				return theChips.read(cname);
			}else{
				return null;
			}		
};

// deleteChip(cookiename) : deletes a chip from the MEGA cookie. It does not delete the MEGA cookie
naf.deleteChip=function(cname) {
	var theChips = new naf.cookieIngredients();
	var tmp = "";
	// The big cookie exists
	if (naf.getCookie(theChips.chip_cookie_name)){
		//Get the contents of the chip cookie
		tmp = naf.getCookie(theChips.chip_cookie_name);
		theChips.fill(tmp);
		//Remove the chip from the cookie
		theChips.eat(cname);
		//Write the new cookie
	 	naf.setCookie(theChips.chip_cookie_name, theChips.bake());
	}
};

naf.setCookie=function(name, value, expires){
	var path = "/";
	
	domain = document.domain;
	dparts = domain.split(".");
	if (dparts.length == 3) {
	   rootDomain = dparts[1]+"."+dparts[2];
	} else if (dparts.length == 4) {
		rootDomain = dparts[2]+"."+dparts[3];
	   
	} else {
		
	   rootDomain = domain;
	}
	
	var secure = false;
	var cookie = name + "=" + unescape(value) +
	((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + ((path == null) ? "" : ("; path=" + path)) +
	((rootDomain == null) ? "" : ("; domain=." + rootDomain)) +
	((secure == true) ? "; secure" : "");
	
	document.cookie = cookie;
};

naf.getCookie = function(name){
	try{
	    var cookieValue = null;
	    if (document.cookie && document.cookie != '') {
	        var cookies = document.cookie.split(';');
	        for (var i = 0; i < cookies.length; i++) {
	            var cookie = cookies[i].replace(/^\s\s*/, '').replace(/\s\s*$/, '');
	            // Does this cookie string begin with the name we want?
	            if (cookie.substring(0, name.length + 1) == (name + '=')) {
	                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
	                break;
	            }
	        }
	    }
	    return naf.utils.sanitizeUntrusted(cookieValue);
	}catch(e){}
};
	naf.navTrackProcSpecial = function(navSourceURL, navTargetURL, navRegion, navSourcePageName, navTargetPageName, navLabel) {	    

	};

	naf.navTrackProc = function(navTrackType) {
	    if (typeof(naf.trackclick.sourceurl) != 'undefined') {
	        s[naf.trackclicksettings.sourceurl] = naf.trackclick.sourceurl.toLowerCase();
	    }
	    
	    if (typeof(naf.trackclick.targeturl) != 'undefined') {
	        s[naf.trackclicksettings.targeturl] = naf.trackclick.targeturl.toLowerCase();
	    }
	    
	    if (typeof(naf.trackclick.region) != 'undefined') {
	        s[naf.trackclicksettings.region] = naf.trackclick.region.toLowerCase();
	    }
	    
	    if (typeof(naf.trackclick.sourcepagename) != 'undefined') {
	        s[naf.trackclicksettings.sourcepagename] = naf.trackclick.sourcepagename.toLowerCase();
	    }
	    
	    if (typeof(naf.trackclick.targetpagename) != 'undefined') {
	        s[naf.trackclicksettings.targetpagename] = naf.trackclick.targetpagename.toLowerCase();
	    }
	    
	    if (typeof(naf.trackclick.region) != 'undefined' && typeof(naf.trackclick.label) != 'undefined' ) {
	        naf.trackclick.label = naf.trackclick.region.toLowerCase() + " : " + naf.trackclick.label.toLowerCase();
	        s[naf.trackclicksettings.label] = naf.trackclick.label;
	    }
	    
	    // to-do naf.wa.omni.setCustomEvent('event2');
	    
	    naf.navTrackProcSpecial(
	            naf.trackclick.sourceurl,
	            naf.trackclick.targeturl,
	            naf.trackclick.region,
	            naf.trackclick.sourcepagename,
	            naf.trackclick.targetpagename,
	            naf.trackclick.label
	            );
	    
	    if (navTrackType == "postback") {
	        s.linkTrackVars = "events," + naf.trackclicksettings.sourceurl + "," + naf.trackclicksettings.targeturl + "," + naf.trackclicksettings.region + "," + naf.trackclicksettings.sourcepagename + "," + naf.trackclicksettings.targetpagename + "," + naf.trackclicksettings.label;
	        s.linkTrackEvents = "event49";
	        s.tl(this,'o','navTrack Click');    
	    } else if (navTrackType == "pageload") {
	        
	    }
	};

	naf.navTrack = function(navTrackType) {
	    try {
	    
	        if (navTrackType == "postback") {
	            
	            naf.navTrackProc(navTrackType);
	            
	        } else if (navTrackType == "pageload") {
	            
	            var c_name = "nt_sourcepageurl";
	            var c_value = naf.trackclick.sourceurl;
	            naf.setChip(c_name,c_value);
	            
	            c_name = "nt_targeturl";
	            c_value = naf.trackclick.targeturl;
	            naf.setChip(c_name,c_value);
	            
	            c_name = "nt_region";
	            c_value = naf.trackclick.region;
	            naf.setChip(c_name,c_value);
	            
	            c_name = "nt_sourcepagename";
	            c_value = naf.trackclick.sourcepagename;
	            naf.setChip(c_name,c_value);

	            c_name = "nt_targetpagename";
	            c_value = naf.trackclick.targetpagename;
	            naf.setChip(c_name,c_value);
	            
	            var c_name = "nt_label";
	            var c_value = naf.trackclick.label;
	            naf.setChip(c_name,c_value);
	            
	        }
	    
	  } catch(e) {
	        // to-do this.dbg('navtrack : '+e);
	  }
	    
	};

	// Attach a delegated event for click tracking on megamenu
	naf.trackclicksettings = {};
	naf.trackclicksettings.sourceurl = "eVar36";
	naf.trackclicksettings.targeturl = "eVar37";
	naf.trackclicksettings.region = "eVar33";
	naf.trackclicksettings.sourcepagename = "eVar34";
	naf.trackclicksettings.targetpagename = "eVar35";
	naf.trackclicksettings.label = "eVar32";

	if ($( "[data-linkcontainer=lt_region]" ).length > 0) {
	    $( "[data-linktrack='true']" ).on( "click", function() {
	        naf.trackclick = naf.trackclick || {};
	        naf.trackclick.label = $(this).attr('data-tracklinktext');
	        naf.trackclick.targeturl = $(this).attr("href");
	        naf.trackclick.sourceurl = window.location.pathname.toLowerCase();
	        naf.trackclick.sourcepagename = s.pageName;
	        naf.trackclick.region = $(this).parents('[data-linkcontainer=lt_region]').attr('data-tracklinktext');
	        naf.trackclick.section = $(this).parents('[data-linkcontainer=lt_section]').attr('data-tracklinktext');
	        naf.trackclick.subsection = $(this).parents('[data-linkcontainer=lt_subsection]').attr('data-tracklinktext');
	        naf.trackclick.targettab = $(this).attr("target");
	        naf.trackclick.searchRank = $(this).attr('data-searchrank');
	        
	        if (typeof(naf.trackclick.subsection) != 'undefined') {
	            naf.trackclick.label = naf.trackclick.subsection + " : " + naf.trackclick.label;
	        }
	        
	        if (typeof(naf.trackclick.section) != 'undefined') {
	            naf.trackclick.label = naf.trackclick.section + " : " + naf.trackclick.label;
	        }
	        
	        if (typeof(naf.trackclick.targettab) !='undefined') {
	            if (naf.trackclick.targettab == '_new' || naf.trackclick.targettab == '_blank') {
	                naf.navTrack('postback');
	            } 
	        } else {
	            naf.navTrack('pageload');
	        }
	     
	    });
	}

	function s_crossSell(){ 
		s.linkTrackVars='eVar7,eVar8,events,products';
		s.eVar7=s.pageName;
		s.tl(this,'o','cross-sell');
	}

	function s_createAccount(){	
		s.linkTrackVars="events";
		s.linkTrackEvents=s.events="event68";
		s.tl(this, "o", "Create Account");
		s.events="";
	}
		
	function s_guestCheckout(){	
		s.linkTrackVars="events";
		s.linkTrackEvents=s.events="event45";
		s.tl(this, "o", "Guest Checkout");
		s.events="";
	}
		
	function s_outOfStock() {	
		s.linkTrackVars="events";
		s.linkTrackEvents=s.events="event37";
	}

	function s_returnToCart() {	
		s.linkTrackVars="events";
		s.linkTrackEvents=s.events="event46";
		s.tl(this, "o", "Return to Cart");
		s.events=""; 
	}

	function s_saveMyInfo() {	
		s.linkTrackVars="events";
		s.linkTrackEvents=s.events="event47";
		s.tl(this, "o", "Save My Info");
		s.events=""; 
	}

	function s_cartIconClick(){	
		s.linkTrackVars="events";
		s.linkTrackEvents=s.events="event42";
		s.tl(this, "o", "Cart Icon Clicked");
		s.events="";
	}

	function s_checkoutStart(){	
			s.linkTrackVars="events";
			s.linkTrackEvents=s.events="event43";
			s.tl(this, "o", "Checkout Clicked"); 
			s.events="";
	}

	function s_secureCheckoutStart(){	
			s.linkTrackVars="events";
			s.linkTrackEvents=s.events="event44";
			s.tl(this, "o", "Secure Checkout Clicked");
			s.events=""; 
	}

	function s_errorMessages(error){	
			s.linkTrackVars="list1,prop10";
			s.prop10=s.list1=error.replace(/\./g,'|');
			s.tl(this, "o", "Error Check"); 
			s.events="";
	}

	/* Google Plus One */
	function analyticsTag(e){
		if(typeof e!= 'undefined'){
			if(e.state=='on'){
				s_smShare('event15')
			}
		}
	}

	function s_menuClick(c){ 
		s.linkTrackVars='eVar7';
		s.eVar7=c;
		s.tl(this,'o','Top Menu Product Click');
		s.events="";
	}

	function s_smShare(t){ 
		if(t === 'event13'){
			s.eVar31=s.prop31='facebook';
		}else if (t === 'event14'){
			s.eVar31=s.prop31='twitter';
		}else if (t === 'event15'){
			s.eVar31=s.prop31='google plus';
		}
		s.linkTrackVars='products,events,prop31,eVar31';
		s.linkTrackEvents=s.events=t;
		s.tl(this,'o','social media share');
		s.events="";
	}

	/*Begin Customer Functions Support scannon*/
	function s_supportItemClick(bclick,atitle){
	    s.tl(this,'o','Support Click');
	};

	function s_supportPrintClick(atitle){
	    s.linkTrackVars='eVar32,events';
	    s.eVar32=atitle;
	    s.linkTrackEvents=s.events='event48';
	    s.tl(this,'o','Support Print Click');
	};

	function s_supportDidHelpYes(atitle){
	    s.linkTrackVars='eVar32,events';
	    s.eVar32=atitle;
	    s.linkTrackEvents=s.events='event49';
	    s.tl(this,'o','Support - Did this help yes');
	};

	function s_supportDidHelpNo(atitle){
	    s.linkTrackVars='eVar32,events';
	    s.eVar32=atitle;
	    s.linkTrackEvents=s.events='event50';
	    s.tl(this,'o','Support - Did this help no');
	};

	/*End Begin Customer Functions Support scannon*/

	s.formatProducts=function(){var o=this;try{var m=o.products?o.products:"",l=false,n=[];if(m){var a=m.split(",");for(var g=0;g<a.length;g++){var b=a[g].split(";");if(b.length===0||!b){n.push(g);l=true}else{if(b.length===1){if(!b[0]||b[0]===""){n.push(g);l=true}if(b[0].length>0){a[g]=";"+a[g];l=true}}}}if(l){if(n.length>0){for(var f=n.length;f--;){for(var d=a.length;d--;){if(d===n[f]){a.splice(d,1)}}}}o.products=a.join(",")}}}catch(h){}};

/*
 * Utility: AppMeasurement Compatibility v1.1
 * Define deprecated H-code s properties and methods used by legacy plugins
 */
s.wd=window;
s.fl=new Function("x","l",""
+"return x?(''+x).substring(0,l):x");
s.pt=new Function("x","d","f","a",""
+"var s=this,t=x,z=0,y,r,l='length';while(t){y=t.indexOf(d);y=y<0?t[l"
+"]:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d[l];t=x.subs"
+"tring(z,x[l]);t=z<x[l]?t:''}return''");
s.rep=new Function("x","o","n",""
+"var a=new Array,i=0,j;if(x){if(x.split)a=x.split(o);else if(!o)for("
+"i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){"
+"j=x.indexOf(o,i);a[a.length]=x.substring(i,j<0?x.length:j);i=j;if(i"
+">=0)i+=o.length}}x='';j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.joi"
+"n)x=a.join(n);else for(i=1;i<j;i++)x+=n+a[i]}}return x");
s.ape=new Function("x",""
+"var s=this,h='0123456789ABCDEF',f='+~!*()\\'',i,c=s.charSet,n,l,e,y"
+"='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComp"
+"onent(x);for(i=0;i<f.length;i++){n=f.substring(i,i+1);if(x.indexOf("
+"n)>=0)x=s.rep(x,n,'%'+n.charCodeAt(0).toString(16).toUpperCase())}}"
+"else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.sub"
+"string(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e="
+"h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='"
+"+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+','%2"
+"B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0)"
+"{i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.subst"
+"ring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.subst"
+"ring(i);i=x.indexOf('%',i)}}}return x");
s.epa=new Function("x",""
+"var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Fu"
+"nction('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unescape"
+"(x)}return y');return tcf(x)}else return unescape(x)}return y");
s.parseUri=new Function("u",""
+"if(u){u=u+'';u=u.indexOf(':')<0&&u.indexOf('//')!=0?(u.indexOf('/')"
+"==0?'/':'//')+u:u}u=u?u+'':window.location.href;var e,a=document.cr"
+"eateElement('a'),l=['href','protocol','host','hostname','port','pat"
+"hname','search','hash'],p,r={href:u,toString:function(){return this"
+".href}};a.setAttribute('href',u);for(e=1;e<l.length;e++){p=l[e];r[p"
+"]=a[p]||''}delete a;p=r.pathname||'';if(p.indexOf('/')!=0)r.pathnam"
+"e='/'+p;return r");
s.gtfs=new Function(""
+"var w=window,l=w.location,d=document,u;if(!l.origin)l.origin=l.prot"
+"ocol+'//'+l.hostname+(l.port?':'+l.port:'');u=l!=w.parent.location?"
+"d.referrer:d.location;return{location:s.parseUri(u)}");


	/*                                                                                        
	 * Plugin: channelExtract : 1.0 - returns site section based on delimiter 
	 */
	s.channelExtract=new Function("d","p","u","pv",""
	+"var s=this,v='';u=u?u:(s.pageURL?s.pageURL:s.wd.location);if(u=='f'"
	+")u=s.gtfs().location;u=u+'';li=u.lastIndexOf(d);if(li>0){u=u.substr"
	+"ing(0,li);var i,n,a=s.split(u,d),al=a.length;if(al<p){if(pv==1) p=a"
	+"l;else return '';}for(i=0;i<p;i++){n=a[i];v=v+n+d;}return v}return "
	+"'';");

/*
 * Plugin channelManager v3.01 - Tracking External Traffic
 */
s.channelManager=new Function("a","b","c","d","e","f","g",""
+"var s=this,h=new Date,i=0,j,k,l,m,n,o,p,q,r,t,u,v,w,x,y,z,A,B,C,D,E"
+",F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V;U=s.getQueryParam?1:0;V=s.repl?1"
+":0;h.setTime(h.getTime()+1800000);if(e){i=1;if(s.c_r(e))i=0;if(!s.c"
+"_w(e,1,h))s.c_w(e,1,0);if(!s.c_r(e))i=0;if(f&&s.c_r('s_tbm'+f))i=0;"
+"}j=s.referrer?s.referrer:document.referrer;j=decodeURIComponent(j.t"
+"oLowerCase());if(!j)k=1;else {l=j.indexOf('?')>-1?j.indexOf('?'):j."
+"length;m=j.substring(0,l);n=j.split('/');n=n[2].split('?');o=n[0].t"
+"oLowerCase();p=s.linkInternalFilters.toLowerCase();p=p.split(',');f"
+"or(q=0;q<p.length;q++){r=o.indexOf(p[q])==-1?'':j;if(r)break;}}if(!"
+"r&&!k){t=j;u=o;w='Other Natural Referrers';v=w+' '+o;x=s.seList+'>'"
+"+s._extraSearchEngines;if(d==1){m=V?s.repl(m,'oogle','%'):s.replace"
+"(m,'oogle','%');m=V?s.repl(m,'ahoo','^'):s.replace(m,'ahoo','^');j="
+"V?s.repl(j,'as_q','*'):s.replace(j,'as_q','*');}y=x.split('>');for("
+"z=0;z<y.length;z++){A=y[z];A=A.split('|');B=A[0].split(',');for(C=0"
+";C<B.length;C++){D=m.indexOf(B[C]);if(D>-1){if(A[2])E=v=A[2];else E"
+"=o;if(d==1){E=V?s.repl(E,'#',' - '):s.replace(E,'#',' - ');j=V?s.re"
+"pl(j,'*','as_q'):s.replace(j,'*','as_q');E=V?s.repl(E,'^','ahoo'):s"
+".replace(E,'^','ahoo');E=V?s.repl(E,'%','oogle'):s.replace(E,'%','o"
+"ogle');}F=A[1].split(',');for(G=0;G<F.length;G++){if(j.indexOf(F[G]"
+"+'=')>-1||j.indexOf('https://www.google.')==0||j.indexOf('http://r."
+"search.yahoo.com')==0)H=1;I=U?s.getQueryParam(F[G],'',j).toLowerCas"
+"e():s.Util.getQueryParam(F[G],j).toLowerCase();if(H||I)break;}}if(H"
+"||I)break;}if(H||I)break;}}if(!r||g!='1'){J=a.split(',');for(var q "
+"in J){if(J.hasOwnProperty(q)){if(U?s.getQueryParam(J[q]):s.Util.get"
+"QueryParam(J[q])){T=T?T+b+(U?s.getQueryParam(J[q]):s.Util.getQueryP"
+"aram(J[q])):(U?s.getQueryParam(J[q]):s.Util.getQueryParam(J[q]));}}"
+"}if(T){v=T;if(E)w='Paid Search';else w='Unknown Paid Channel';}if(!"
+"T&&E&&H){w='Natural Search';v=w+' '+E;}}if(i&&k&&!T)t=u=v=w='Typed/"
+"Bookmarked';J=s._channelDomain;if(J&&o&&!r){K=J.split('>');for(L=0;"
+"L<K.length;L++){M=K[L]?K[L].split('|'):'';N=M[1]?M[1].split(','):''"
+";O=N.length;for(P=0;P<O;P++){Q=N[P].toLowerCase();R=('/'+o).indexOf"
+"(Q);if(R>-1){w=M[0];break;}}if(R>-1)break;}}J=s._channelParameter;i"
+"f(J){K=J.split('>');for(L=0;L<K.length;L++){M=K[L]?K[L].split('|'):"
+"'';N=M[1]?M[1].split(','):'';O=N.length;for(P=0;P<O;P++){R=U?s.getQ"
+"ueryParam(N[P]):s.Util.getQueryParam(N[P]);if(R){w=M[0];break;}}if("
+"R)break;}}J=s._channelPattern;if(J){K=J.split('>');for(L=0;L<K.leng"
+"th;L++){M=K[L]?K[L].split('|'):'';N=M[1]?M[1].split(','):'';O=N.len"
+"gth;for(P=0;P<O;P++){Q=N[P].toLowerCase();R=T?T.toLowerCase():'';S="
+"R.indexOf(Q);if(S==0){w=M[0];break;}}if(S==0)break;}}S=w?T+u+w+I:''"
+";c=c?c:'c_m';if(c!='0')S=s.getValOnce(S,c,0);if(S){s._campaignID=T?"
+"T:'n/a';s._referrer=t?t:'n/a';s._referringDomain=u?u:'n/a';s._campa"
+"ign=v?v:'n/a';s._channel=w?w:'n/a';s._partner=E?E:'n/a';s._keywords"
+"=H?I?I:'Keyword Unavailable':'n/a';if(f&&w!='Typed/Bookmarked'){h.s"
+"etTime(h.getTime()+f*86400000);s.c_w('s_tbm'+f,1,h);}}else s._campa"
+"ignID=s._referrer=s._referringDomain=s._campaign=s._channel=s._part"
+"ner=s._keywords='';");
/* Top 130 - Grouped */
s.seList="google.,googlesyndication.com,.googleadservices.com|q,as_q|"
+"Google>bing.com|q|Bing>yahoo.com,yahoo.co.jp|p,va|Yahoo!>ask.jp,ask"
+".co|q,ask|Ask>search.aol.,suche.aolsvc.de|q,query|AOL>altavista.co,"
+"altavista.de|q,r|AltaVista>.mywebsearch.com|searchfor|MyWebSearch>w"
+"ebcrawler.com|q|WebCrawler>wow.com|q|Wow>infospace.com|q|InfoSpace>"
+"blekko.com|q|Blekko>dogpile.com|q|DogPile>alhea.com|q|Alhea>goduckg"
+"o.com|q|GoDuckGo>info.com|qkw|Info.com>contenko.com|q|Contenko>baid"
+"u.com|word,wd|Baidu>daum.net,search.daum.net|q|Daum>icqit.com|q|icq"
+">myway.com|searchfor|MyWay.com>naver.com,search.naver.com|query|Nav"
+"er>netscape.com|query,search|Netscape Search>reference.com|q|Refere"
+"nce.com>seznam|w|Seznam.cz>abcsok.no|q|Startsiden>tiscali.it,www.ti"
+"scali.co.uk|key,query|Tiscali>virgilio.it|qs|Virgilio>yandex|text|Y"
+"andex.ru>optimum.net|q|Optimum Search>search.earthlink.net|q|Earthl"
+"ink>search.comcast.net|q|Comcast>libero.it|query|libero.it>excite.c"
+"o|search|Excite>mail.ru|q|Mail.ru>isearch.avg.com|q|AVG>msn.com|q|M"
+"SN>seznam.cz|q|seznam.cz>so.com|q|so.com>ixquick.com|query|ixquick."
+"com>sogou.com|query|sogou.com>360.cn|q|360.cn";

	/*                                                                  
	* Plugin: clickPast - version 1.0
	*/
	s.clickPast=new Function("scp","ct_ev","cp_ev","cpc",""
	+"var s=this,scp,ct_ev,cp_ev,cpc,ev,tct;if(s.p_fo(ct_ev)==1){if(!cpc)"
	+"{cpc='s_cpc';}ev=s.events?s.events+',':'';if(scp){s.events=ev+ct_ev"
	+";s.c_w(cpc,1,0);}else{if(s.c_r(cpc)>=1){s.events=ev+cp_ev;s.c_w(cpc"
	+",0,0);}}}");

	/*
	 *	Plug-in: crossVisitParticipation v1.7 - stacks values from
	 *	specified variable in cookie and returns value
	 */
	s.crossVisitParticipation=new Function("v","cn","ex","ct","dl","ev","dv",""
	+"var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var"
	+" ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.l"
	+"ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i"
	+"f(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape("
	+"v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array()"
	+";if(c&&c!=''){arry=s.split(c,'],[');for(q=0;q<arry.length; q++){z=a"
	+"rry[q];z=s.repl(z,'[','');z=s.repl(z,']','');z=s.repl(z,\"'\", '');"
	+"arry[q] = s.split(z, ',');}}var e=new Date();e.setFullYear(e.getFul"
	+"lYear()+5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry["
	+"arry.length-1]=[v,new Date().getTime()];else arry[arry.length]=[v,n"
	+"ew Date().getTime()];var start=arry.length-ct<0?0:arry.length-ct;va"
	+"r td=new Date();for(var x=start;x<arry.length;x++){var diff=Math.ro"
	+"und((td.getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(a"
	+"rry[x][0]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{de"
	+"lim:',',front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.jo"
	+"in(h,{delim:dl});if(ce)s.c_w(cn,'');return r;");

	/*
	 * Plugin: exitLinkHandler 0.8 - identify and report exit links
	 */
	s.exitLinkHandler=new Function("p","e",""
	+"var s=this,o=s.p_gh(),h=o.href,n='linkInternalFilters',i,t;if(!h||("
	+"s.linkType&&(h||s.linkName)))return'';i=h.indexOf('?');t=s[n];s[n]="
	+"p?p:t;h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);if(s.lt(h)=="
	+"'e')s.linkType='e';else h='';s[n]=t;return e?o:h;");
	s.p_gh=new Function("",""
	+"var s=this;if(!s.eo&&!s.lnk)return'';var o=s.eo?s.eo:s.lnk,y=s.ot(o"
	+"),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){o"
	+"=o.parentElement?o.parentElement:o.parentNode;if(!o)return'';y=s.ot"
	+"(o);n=s.oid(o);x=o.s_oidt;}}return o?o:'';");

	/*
	 * Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat
	 */
	s.getNewRepeat=new Function("d","cn",""
	+"var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"
	+"'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length="
	+"=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct"
	+"-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N"
	+"ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");

	/*
 * Plugin: getPercentPageViewed v1.74
 */
s.getPercentPageViewed=new Function("n",""
+"var s=this,W=window,EL=W.addEventListener,AE=W.attachEvent,E=['load"
+"','unload','scroll','resize','zoom','keyup','mouseup','touchend','o"
+"rientationchange','pan'],K='s_ppv',P=K+'l',I=n||s.pageName||documen"
+"t.location.href;W.s_Obj=s;if(!W.s_PPVevent){s.s_PPVg=function(n,o){"
+"var c=s.c_r(o?P:K)||'',a=c.indexOf(',')>-1?c.split(',',10):[''],i;a"
+"[0]=o?unescape(a[0]||''):I;for(i=1;i<9&&(i<a.length||!o);i++)a[i]=a"
+"[i]?parseInt(a[i])||0:0;if(a.length>9||!o)a[9]=a[9]&&a[9]!='L'&&a[9"
+"]!='LP'&&a[9]!='PL'?'P':a[9];return a};s.c_w(P,s.c_r(K)||'');s.c_w("
+"K,escape(I)+',0,0,0,0,0,0,0,0');W.s_PPVevent=function(e){var W=wind"
+"ow,D=document||{},B=D.body,E=D.documentElement||{},S=window.screen|"
+"|{},Ho='offsetHeight',Hs='scrollHeight',Ts='scrollTop',Wc='clientWi"
+"dth',Hc='clientHeight',M=Math,C=100,J='object',N='number',Z=',',s=W"
+".s_Obj||W.s||0;e=e&&typeof e==J?e.type||'':'';if(!e.indexOf('on'))e"
+"=e.substring(2);if(W.s_PPVt&&!e){clearTimeout(s_PPVt);s_PPVt=0}if(s"
+"&&typeof s==J&&B&&typeof B==J){var h=M.max(B[Hs]||E[Hs],B[Ho]||E[Ho"
+"],B[Hc]||E[Hc]||1),X=W.innerWidth||E[Wc]||B[Wc]||1,Y=W.innerHeight|"
+"|E[Hc]||B[Hc]||1,x=S.width||1,y=S.height||1,r=M.round(C*(W.devicePi"
+"xelRatio||1))/C,b=(D.pageYOffset||E[Ts]||B[Ts]||0)+Y,p=h>0&&b>0?M.r"
+"ound(C*b/h):1,O=W.orientation,o=!isNaN(O)?M.abs(O)%180:Y>X?0:90,a=s"
+".s_PPVg(n),L=(e=='load')||(a[1]<1),t,V=function(u,v,f,n){v=typeof v"
+"!=N?u:v;v=f||(u>v)?u:v;return n?v:v>C?C:v<0?0:v};if(new RegExp('(iP"
+"od|iPad|iPhone)').exec((window.navigator&&navigator.userAgent)||'')"
+"&&o){t=x;x=y;y=t}o=o?'L':'P';a[9]=L||!a[9]?o:a[9].substring(0,1);if"
+"(a[9]!='L'&&a[9]!='P')a[9]=o;s.c_w(K,escape(a[0])+Z+V(a[1],p,!L)+Z+"
+"V(a[2],p,L)+Z+V(a[3],b,L,1)+Z+X+Z+Y+Z+x+Z+y+Z+r+Z+a[9]+(a[9]==o?'':"
+"o))}if(!W.s_PPVt&&e!='unload')W.s_PPVt=setTimeout(W.s_PPVevent,333)"
+"};for(var f=W.s_PPVevent,i=0;i<E.length;i++)if(EL)EL(E[i],f,false);"
+"else if(AE)AE('on'+E[i],f);f()};var a=s.s_PPVg(n,1);return!argument"
+"s.length||n=='-'?a[1]:a");
	/*
	 * Plugin: getPreviousValue_v1.0 - return previous value of designated
	 *   variable (requires split utility)
	 */
	s.getPreviousValue=new Function("v","c","el",""
	+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
	+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
	+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
	+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
	+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

	/*
	 * Plugin: getQueryParam 2.4
	 */
	s.getQueryParam=new Function("p","d","u","h",""
	+"var s=this,v='',i,j,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.loca"
	+"tion);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0"
	+"?p.length:i;t=s.p_gpv(p.substring(0,i),u+'',h);if(t){t=t.indexOf('#"
	+"')>-1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substrin"
	+"g(i==p.length?i:i+1)}return v");
	s.p_gpv=new Function("k","u","h",""
	+"var s=this,v='',q;j=h==1?'#':'?';i=u.indexOf(j);if(k&&i>-1){q=u.sub"
	+"string(i+1);v=s.pt(q,'&','p_gvf',k)}return v");
	s.p_gvf=new Function("t","k",""
	+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
	+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
	+"epa(v)}return''");

	/*
 * Plugin: getTimeParting 3.4
 */
/* 
s.getTimeParting=new Function("h","z",""
+"var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMont"
+"h()!=0){return'Data Not Available';}else{var H,M,D,U,ds,de,tm,da=['"
+"Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturda"
+"y'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tp"
+"DST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d.getFullYea"
+"r());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d>ds&&d<de)"
+"{z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getT"
+"imezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d"
+".getMinutes();M=(M<10)?'0'+M:M;D=d.getDay();U=' AM';if(H>=12){U=' P"
+"M';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+':'+M+U;return(tm+'|'+D);}");
*/
/*
 * Plugin: getTimeParting 2.1. Old one picked from Beats prod.
 */
s.getTimeParting=new Function("t","z","y","l","j",""
	+"var s=this,d,A,U,X,Z,W,B,C,D,Y;d=new Date();A=d.getFullYear();Y=U=S"
	+"tring(A);if(s.dstStart&&s.dstEnd){B=s.dstStart;C=s.dstEnd}else{;U=U"
	+".substring(2,4);X='090801|101407|111306|121104|131003|140902|150801"
	+"|161306|171205|181104|191003';X=s.split(X,'|');for(W=0;W<=10;W++){Z"
	+"=X[W].substring(0,2);if(U==Z){B=X[W].substring(2,4);C=X[W].substrin"
	+"g(4,6)}}if(!B||!C){B='08';C='01'}B='03/'+B+'/'+A;C='11/'+C+'/'+A;}D"
	+"=new Date('1/1/2000');if(D.getDay()!=6||D.getMonth()!=0){return'Dat"
	+"a Not Available'}else{z=z?z:'0';z=parseFloat(z);B=new Date(B);C=new"
	+" Date(C);W=new Date();if(W>B&&W<C&&l!='0'){z=z+1}W=W.getTime()+(W.g"
	+"etTimezoneOffset()*60000);W=new Date(W+(3600000*z));X=['Sunday','Mo"
	+"nday','Tuesday','Wednesday','Thursday','Friday','Saturday'];B=W.get"
	+"Hours();C=W.getMinutes();D=W.getDay();Z=X[D];U='AM';A='Weekday';X='"
	+"00';if(C>30){X='30'}if(j=='1'){if(C>15){X='15'}if(C>30){X='30'}if(C"
	+">45){X='45'}}if(B>=12){U='PM';B=B-12};if(B==0){B=12};if(D==6||D==0)"
	+"{A='Weekend'}W=B+':'+X+U;if(y&&y!=Y){return'Data Not Available'}els"
	+"e{if(t){if(t=='h'){return W}if(t=='d'){return Z}if(t=='w'){return A"
	+"}}else{return Z+', '+W}}}");


	/*
	 * Plugin: Days since last Visit 1.1 - capture time from last visit
	 */
	s.getDaysSinceLastVisit=new Function("c",""
	+"var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getT"
	+"ime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.s"
	+"etTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f"
	+"2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f"
	+"5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);"
	+"s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*da"
	+"y){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day"
	+"){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s."
	+"c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c"
	+"_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c"
	+"+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) retur"
	+"n f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s"
	+"!=f5) return '';else return cval_s;");

	/*
	 * Plugin: getValOnce v1.1
	 */
	s.getValOnce=new Function("v","c","e","t",""
	+"var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?6000"
	+"0:86400000;k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e"
	+"==0?0:a);}return v==k?'':v");

	/*
	 * Plugin: getVisitStart v2.0 - returns 1 on first page of visit
	 * otherwise 0
	 */
	s.getVisitStart=new Function("c",""
	+"var s=this,v=1,t=new Date;t.setTime(t.getTime()+1800000);if(s.c_r(c"
	+")){v=0}if(!s.c_w(c,1,t)){s.c_w(c,1,0)}if(!s.c_r(c)){v=0}return v;"); 

	/*                                                                 
	* Plugin: getVisitNum - version 3.0
	*/
	s.getVisitNum=new Function("tp","c","c2",""
	+"var s=this,e=new Date,cval,cvisit,ct=e.getTime(),d;if(!tp){tp='m';}"
	+"if(tp=='m'||tp=='w'||tp=='d'){eo=s.endof(tp),y=eo.getTime();e.setTi"
	+"me(y);}else {d=tp*86400000;e.setTime(ct+d);}if(!c){c='s_vnum';}if(!"
	+"c2){c2='s_invisit';}cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn="
	+"'),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisi"
	+"t){if(str){e.setTime(ct+1800000);s.c_w(c2,'true',e);return str;}els"
	+"e {return 'unknown visit number';}}else {if(str){str++;k=cval.substri"
	+"ng(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+1800000);"
	+"s.c_w(c2,'true',e);return str;}else {s.c_w(c,e.getTime()+'&vn=1',e)"
	+";e.setTime(ct+1800000);s.c_w(c2,'true',e);return 1;}}");
	s.dimo=new Function("m","y",""
	+"var d=new Date(y,m+1,0);return d.getDate();");
	s.endof=new Function("x",""
	+"var t=new Date;t.setHours(0);t.setMinutes(0);t.setSeconds(0);if(x=="
	+"'m'){d=s.dimo(t.getMonth(),t.getFullYear())-t.getDate()+1;}else if("
	+"x=='w'){d=7-t.getDay();}else {d=1;}t.setDate(t.getDate()+d);return "
	+"t;");

	/*
	 * Plugin: manageVars v1.4 - clear variable values (requires split 1.5)
	 */
	s.manageVars=new Function("c","l","f",""
	+"var s=this,vl,la,vla;l=l?l:'';f=f?f:1 ;if(!s[c])return false;vl='pa"
	+"geName,purchaseID,channel,server,pageType,campaign,state,zip,events"
	+",products,transactionID';for(var n=1;n<76;n++){vl+=',prop'+n+',eVar"
	+"'+n+',hier'+n;}if(l&&(f==1||f==2)){if(f==1){vl=l;}if(f==2){la=s.spl"
	+"it(l,',');vla=s.split(vl,',');vl='';for(x in la){for(y in vla){if(l"
	+"a[x]==vla[y]){vla[y]='';}}}for(y in vla){vl+=vla[y]?','+vla[y]:'';}"
	+"}s.pt(vl,',',c,0);return true;}else if(l==''&&f==1){s.pt(vl,',',c,0"
	+");return true;}else{return false;}");
	s.clearVars=new Function("t","var s=this;s[t]='';");
	s.lowercaseVars=new Function("t",""
	+"var s=this;if(s[t]&&t!='events'){s[t]=s[t].toString();if(s[t].index"
	+"Of('D=')!=0){s[t]=s[t].toLowerCase();}}");

	/*
	 * Plugin: setupDynamicObjectIDs v1.5: Setup s_objectID values for Clickmap 
	 */
	s.setupDynamicObjectIDs=new Function(""
	+"var s=this;if(!s.doi){s.doi=1;if(s.apv>3&&(!s.isie||!s.ismac||s.apv"
	+">=5)){if(s.wd.attachEvent)s.wd.attachEvent('onload',s.setOIDs);else"
	+" if(s.wd.addEventListener)s.wd.addEventListener('load',s.setOIDs,fa"
	+"lse);else{s.doiol=s.wd.onload;s.wd.onload=s.setOIDs}}s.wd.s_semapho"
	+"re=1}");
	s.setOIDs=new Function("e",""
	+"var s=s_c_il["+s._in+"],b=s.eh(s.wd,'onload'),o='onclick',x,l,u,c,i"
	+",a=new Array;if(s.doiol){if(b)s[b]=s.wd[b];s.doiol(e)}if(s.d.links)"
	+"{for(i=0;i<s.d.links.length;i++){l=s.d.links[i];c=l[o]?''+l[o]:'';b"
	+"=s.eh(l,o);z=l[b]?''+l[b]:'';u=s.getObjectID(l);if(u&&c.indexOf('s_"
	+"objectID')<0&&z.indexOf('s_objectID')<0){u=s.repl(u,'\"','');u=s.re"
	+"pl(u,'\\n','').substring(0,97);l.s_oc=l[o];a[u]=a[u]?a[u]+1:1;x='';"
	+"if(c.indexOf('.t(')>=0||c.indexOf('.tl(')>=0||c.indexOf('s_gs(')>=0"
	+")x='var x=\".tl(\";';x+='s_objectID=\"'+u+'_'+a[u]+'\";return this."
	+"s_oc?this.s_oc(e):true';if(s.isns&&s.apv>=5)l.setAttribute(o,x);l[o"
	+"]=new Function('e',x)}}}s.wd.s_semaphore=0;return true");

	/*
	 * Plugin Utility: Append to List v1.1
	 */
	s.apl=new Function("l","v","d","u",""
	+"var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a."
	+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
	+"e()));}}if(!m)l=l?l+d+v:v;return l");

	/*
	 * Plugin Utility: Join v1.0 
	 */
	s.join = new Function("v","p",""
	+"var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back"
	+":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0"
	+";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el"
	+"se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");

	/*
	 * Plugin Utility: Page First Only
	 */
	s.p_fo=new Function("n",""
	+"var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]="
	+"new Object;return 1;}else {return 0;}");

	/*
	 * Plugin Utility: Replace v1.0
	 */
	s.repl=new Function("x","o","n",""
	+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
	+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");

	/*
	* Utility Function: split v1.5 (JS 1.0 compatible)
	*/
	s.split=new Function("l","d",""
	+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
	+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

	/*
	 * Cookie Combining Utility - read combined cookies v 0.35
	 */
	if(!s.__ccucr)
	{
		s.c_rr=s.c_r;
		s.__ccucr = true;
		function c_r(k)
		{
			var s=this,d=new Date,v=s.c_rr(k),c=s.c_rr('s_pers'),i,m,e;
			if(v)return v;k=s.ape(k);i=c.indexOf(' '+k+'=');c=i<0?s.c_rr('s_sess'):c;
			i=c.indexOf(' '+k+'=');m=i<0?i:c.indexOf('|',i);e=i<0?i:c.indexOf(';',i);
			m=m>0?m:e;v=i<0?'':s.epa(c.substring(i+2+k.length,m<0?c.length:m));
			if(m>0&&m!=e)if(parseInt(c.substring(m+1,e<0?c.length:e))<d.getTime())
			{d.setTime(d.getTime()-60000);s.c_w(s.epa(k),'',d);v='';}return v;
		}
		s.c_r=c_r;
	}

	/*
	 * Cookie Combining Utility - write combined cookies v 0.36
	 */
	if(!s.__ccucw)
	{
		s.c_wr=s.c_w;
		s.__ccucw = true;
		function c_w(k,v,e)
		{
			var s=this,d=new Date,ht=0,pn='s_pers',sn='s_sess',pc=0,sc=0,pv,sv,c,i,t;
			d.setTime(d.getTime()-60000);if(s.c_rr(k)) s.c_wr(k,'',d);k=s.ape(k);
			pv=s.c_rr(pn);i=pv.indexOf(' '+k+'=');if(i>-1)
			{pv=pv.substring(0,i)+pv.substring(pv.indexOf(';',i)+1);pc=1;}sv=s.c_rr(sn);
			i=sv.indexOf(' '+k+'=');if(i>-1){sv=sv.substring(0,i)+sv.substring(sv.indexOf(';',i)+1);
			sc=1;}d=new Date;if(e){if(e.getTime()>d.getTime()){pv+=' '+k+'='+s.ape(v)+'|'+e.getTime()+';';
			pc=1;}}else{sv+=' '+k+'='+s.ape(v)+';';sc=1;}sv=sv.replace(/%00/g,'');	
			pv=pv.replace(/%00/g,'');if(sc) s.c_wr(sn,sv,0);if(pc){t=pv;while(t&&t.indexOf(';')!=-1){
			var t1=parseInt(t.substring(t.indexOf('|')+1,t.indexOf(';')));
			t=t.substring(t.indexOf(';')+1);ht=ht<t1?t1:ht;}d.setTime(ht);s.c_wr(pn,pv,d);}
			return v==s.c_r(s.epa(k));
		}
		s.c_w=c_w;
	}

	//Begin Customer Support scannon//
	//Support Pages Click
	if($("ul.productHelpList li.toggle-container div.toggle-sub-list ul li a").length != null){
	    $("ul.productHelpList li.toggle-container div.toggle-sub-list ul li a", "click", function() {
	        var aclick=$(this).closest(".toggle-container").find('img').attr('src');
	        var atitle=$(this).text().toLowerCase();
	        var bclick=aclick.split("/").pop();
	        bclick=bclick.substring(0, bclick.indexOf('.'));
	        s_supportItemClick(bclick,atitle);
	    })
	}

	/*
	 * Plugin: getActionDepth v1.0 - Returns the current
	 * page number of the visit
	 */
	s.getActionDepth=new Function("c",""
	+ "var s=this,v=1,t=new Date;t.setTime(t.getTime()+1800000);"
	+ "if(!s.c_r(c)){v=1}if(s.c_r(c)){v=s.c_r(c);v++}"
	+ "if(!s.c_w(c,v,t)){s.c_w(c,v,0)}return v;");

	/*
	 * Plugin: YouTube plugin v1.54
	
	window.s_YTO={s_name:'s'}
	window.onYouTubePlayerReady=function(id){if(id&&document.getElementById(id)&&!s_YTO.v[id])s_YTO.v[id]=new s_YTv(id,1)}
	window.s_YTp=function(){try{var D=document,f=D.getElementsByTagName('iframe'),k,id,t,i,j,I=function(n){var i=0;try{eval('var '+n)}catch(e){i=1};return i};if(s_YTisa())s_YTO.ya=2;for(i=0;i<f.length;i++){k=s_YTgk(f[i].src);id=f[i].id;if(k){if(!id||I(id)){id='YouTubeV';for(j=1;j<99;j++)if(!D.getElementById(id+j))break;id=j<99?id+j:'';f[i].id=id}if(id)if(!s_YTO.ya){s_YTO.ya=1;t=D.createElement('script'),f;t.src='//www.youtube.com/player_api';f=D.getElementsByTagName('script')[0];f.parentNode.insertBefore(t,f)}else if(s_YTO.ya==2&&!s_YTO.v[id])s_YTO.v[id]=new s_YTv(id)}}}catch(e){};s_YTO.ut=setTimeout('s_YTp()',1000)}
	window.s_YTisa=function(){return typeof window.YT=='object'&&YT.Player}
	window.s_YTism=function(){var s=s_YTO.s=window[s_YTO.s_name||'s']||0;return typeof s=='object'&&typeof s.Media=='object'&&s.Media.open?s:0}
	window.s_YTgk=function(u){var r='',a,f='',v=u.toLowerCase();if(v.indexOf('//www.youtube.com')>-1){if(v.indexOf('/watch')>-1)f='v';if(!f&&v.indexOf('/apiplayer')>-1)f='video_id';if(!f&&v.indexOf('/v/')>-1)f='/v/';if(!f&&v.indexOf('/embed/')>-1)f='/embed/';if(f>'A'){a=v.indexOf('?'+f+'=');if(a<0)a=v.indexOf('&'+f+'=');if(a>-1)r=u.substring(a+f.length+2)}else if(f){a=v.indexOf(f);r=u.substring(a+f.length)}if(r){a=r.indexOf('?');if(a<0)a=r.indexOf('&');if(a<0)a=r.indexOf('#');if(a>-1)r=r.substring(0,a)}}return r}
	window.onYouTubePlayerAPIReady=function(){try{s_YTO.ya=2;if(s_YTO.ut)clearTimeout(s_YTO.ut);s_YTp()}catch(e){}}
	window.s_YTdi=function(){var s=s_YTism();if(s){if(typeof s.Media.trackWhilePlaying!='undefined'){s_YTO.twp=s.Media.trackWhilePlaying;s.Media.trackWhilePlaying=false}if(typeof s.Media.trackSeconds!='undefined'){s_YTO.ts=s.Media.trackSeconds;delete s.Media.trackSeconds}}}
	window.s_YTei=function(){var s=s_YTism();if(s){if(typeof s_YTO.twp!='undefined'){s.Media.trackWhilePlaying=s_YTO.twp;delete s_YTO.twp}if(typeof s_YTO.ts!='undefined'){s.Media.trackSeconds=s_YTO.ts;delete s_YTO.ts}}}
	window.s_YTut=function(){s_YTO.uf=0;s_YTei()}
	window.s_YTdv=function(id){try{if(!id)return;var v=s_YTO.v[id]||0;if(v){if(v.ss){if(s_YTism())s_YTO.s.Media.close(v.sv);v.ss=0}}v.vc()}catch(e){}}
	window.s_YTv=function(id){var t=this;t.vc=function(){var t=this;t.id=t.sn=t.sl=t.yt=t.yk=t.kl='';t.yd=t.yp=t.ys=t.pt=t.ss=t.ts=t.qs=t.ql=0};t.vg=function(yp){var t=this,D=document,N='number',u='',a,b,c,i,x=0,y;if(yp){if(yp.getVideoUrl)u=yp.getVideoUrl();if(!u)u=yp.a.src||'';if(yp.getVideoData)x=yp.getVideoData();if(x&&x.title)t.yt=x.title;y=x&&x.video_id?x.video_id:s_YTgk(u);if(y&&y!=t.yk){t.kl=t.yk;t.yk=y;t.ts=t.qs=t.ys=0;if(t.yd){delete t.yd;t.yd=0}t.yt='';a='s_YTdata_'+t.id+'_'+t.yk;b=D.getElementById(a);if(b)b.parentNode.removeChild(b);b=D.createElement('script');b.id=a;b.src='//gdata.youtube.com/feeds/api/videos/'+t.yk+'?v=2&alt=json-in-script&callback=window.s_YTO.v.'+t.id+'.fc';a=D.getElementsByTagName('script')[0];a.parentNode.insertBefore(b,a)}if(yp.getDuration){x=yp.getDuration();t.ts=typeof x==N?Math.round(x):0}t.qs=0;if(yp.getCurrentTime){x=yp.getCurrentTime();t.qs=typeof x==N?Math.round(x):0}if(yp.getPlayerState){x=yp.getPlayerState();t.ys=x||0}}};t.ve=function(){var s=s_YTism();if(s){var t=this,d,O=function(){t.sl=t.sn;t.sn='youtube|'+(t.yt||'');s.Media.open(t.sn,t.ts,s_YTO.vp);t.ss=1},P=function(){s.Media.play(t.sn,t.qs);t.ql=t.qs;t.ss=2},S=function(n,q){s.Media.stop(n||t.sn,q||t.qs);t.ss=1;t.ql=t.qs},C=function(n){s.Media.close(n||t.sn);t.ss=t.qs=t.ql=0};t.vg(t.yp);if(t.sk&&t.sk!=t.kl){if(t.ss){if(t.ss==2)S(t.sl,t.ql);C(t.sl)}}switch(t.ys){case 1:if(t.ss==2){d=Math.abs(t.qs-t.ql);if(d>1)S(t.sn,t.ql)}if(!t.ss){O();t.qs=t.ql=0}P();break;case 0:if(t.ss){if(t.ss!=1){if(Math.abs(t.qs-t.ts)<=1)t.qs=t.ts;S()}C()}break;case 2:if(!t.ss)O();if(t.ss!=1)S();break;case 3:if(s_YTO.uf)clearTimeout(s_YTO.uf);else s_YTdi();s_YTO.uf=setTimeout('s_YTut()',3000);break;case-1:case 5:default:break}}};t.fsc=function(ye){try{t.ys=ye;t.vg(t.yp);setTimeout('s_YTO.v["'+t.id+'"].ve()',10)}catch(e){}};t.isc=function(ye){try{t.ys=ye.data;t.vg(ye.target);setTimeout('s_YTO.v["'+t.id+'"].ve()',10)}catch(e){}};t.fc=function(d){try{t.yd=d;var T=d.entry&&d.entry.title?t.sn=d.entry.title.$t:'';if(T)t.yt=T}catch(e){}};try{var o=id&&typeof id=='string'?document.getElementById(id):'';if(!o)return null;t.vc();t.id=id;var W=window,ar=arguments;if(ar.length>1&&ar[1]==1){t.pt=1;t.yp=o;if(W.addEventListener)t.yp.addEventListener('onStateChange','s_YTO.v.'+id+'.fsc',false);else if(W.attachEvent)W.attachEvent('onStateChange','s_YTO.v.'+id+'.fsc')}else{t.pt=2;var a=new Object();if(ar.length>1)a.videoId=ar[1];if(ar.length>3){a.width=w;a.height=h}a.events=new Object();a.events.onStateChange=t.isc;t.yp=new YT.Player(id,a);t.vg(t.yp)}}catch(e){}return t}
	window.s_aE=function(o,e,f){if(arguments.length<3){f=e;e=o;o=window}if(o.attachEvent){o['e'+e+f]=f;o[e+f]=function(){o['e'+e+f](window.event)};o.attachEvent('on'+e,o[e+f])}else o.addEventListener(e,f,false)}
	window.s_YTi=function(){if(typeof s_YTO.v!='object')s_YTO.v={};s_YTO.ya=s_YTisa()?2:0;s_YTO.ut=s_YTO.uf=0;s_YTO.vp='YouTube Player';s_YTp()}
	window.s_aE('load',s_YTi);
 */
	/************************** MODULES SECTION ************************

	s.m_Media_c="var m=s.m_i('Media');if(m.completeByCloseOffset==undefined)m.completeByCloseOffset=1;if(m.completeCloseOffsetThreshold==undefined)m.completeCloseOffsetThreshold=1;m.cn=function(n){var m="
	+"this;return m.s.rep(m.s.rep(m.s.rep(n,\"\\n\",''),\"\\r\",''),'--**--','')};m.open=function(n,l,p,b){var m=this,i=new Object,tm=new Date,a='',x;n=m.cn(n);if(!l)l=-1;if(n&&p){if(!m.l)m.l=new Object;"
	+"if(m.l[n])m.close(n);if(b&&b.id)a=b.id;if(a)for (x in m.l)if(m.l[x]&&m.l[x].a==a)m.close(m.l[x].n);i.n=n;i.l=l;i.o=0;i.x=0;i.p=m.cn(m.playerName?m.playerName:p);i.a=a;i.t=0;i.ts=0;i.s=Math.floor(tm"
	+".getTime()/1000);i.lx=0;i.lt=i.s;i.lo=0;i.e='';i.to=-1;i.tc=0;i.fel=new Object;i.vt=0;i.sn=0;i.sx=\"\";i.sl=0;i.sg=0;i.sc=0;i.us=0;i.ad=0;i.adpn;i.adpp;i.adppp;i.clk;i.CPM;i.co=0;i.cot=0;i.lm=0;i.l"
	+"om=0;m.l[n]=i}};m.openAd=function(n,l,p,pn,pp,ppp,CPM,b){var m=this,i=new Object;n=m.cn(n);m.open(n,l,p,b);i=m.l[n];if(i){i.ad=1;i.adpn=m.cn(pn);i.adpp=pp;i.adppp=ppp;i.CPM=CPM}};m._delete=function"
	+"(n){var m=this,i;n=m.cn(n);i=m.l[n];m.l[n]=0;if(i&&i.m)clearTimeout(i.m.i)};m.close=function(n){this.e(n,0,-1)};m.play=function(n,o,sn,sx,sl){var m=this,i;i=m.e(n,1,o,sn,sx,sl);if(i&&!i.m){i.m=new "
	+"Object;i.m.m=new Function('var m=s_c_il['+m._in+'],i;if(m.l){i=m.l[\"'+m.s.rep(i.n,'\"','\\\\\"')+'\"];if(i){if(i.lx==1)m.e(i.n,3,-1);i.m.i=setTimeout(i.m.m,1000)}}');i.m.m()}};m.click=function(n,o"
	+"){this.e(n,7,o)};m.complete=function(n,o){this.e(n,5,o)};m.stop=function(n,o){this.e(n,2,o)};m.track=function(n){this.e(n,4,-1)};m.bcd=function(vo,i){var m=this,ns='a.media.',v=vo.linkTrackVars,e=v"
	+"o.linkTrackEvents,pe='m_i',pev3,c=vo.contextData,x;if(i.ad){ns+='ad.';if(i.adpn){c['a.media.name']=i.adpn;c[ns+'pod']=i.adpp;c[ns+'podPosition']=i.adppp;}if(!i.vt)c[ns+'CPM']=i.CPM;}if (i.clk) {c[n"
	+"s+'clicked']=true;i.clk=0}c['a.contentType']='video'+(i.ad?'Ad':'');c['a.media.channel']=m.channel;c[ns+'name']=i.n;c[ns+'playerName']=i.p;if(i.l>0)c[ns+'length']=i.l;if(Math.floor(i.ts)>0)c[ns+'ti"
	+"mePlayed']=Math.floor(i.ts);if(!i.vt){c[ns+'view']=true;pe='m_s';i.vt=1}if(i.sx){c[ns+'segmentNum']=i.sn;c[ns+'segment']=i.sx;if(i.sl>0)c[ns+'segmentLength']=i.sl;if(i.sc&&i.ts>0)c[ns+'segmentView'"
	+"]=true}if(!i.cot&&i.co){c[ns+\"complete\"]=true;i.cot=1}if(i.lm>0)c[ns+'milestone']=i.lm;if(i.lom>0)c[ns+'offsetMilestone']=i.lom;if(v)for(x in c)v+=',contextData.'+x;pev3=c['a.contentType'];vo.pe="
	+"pe;vo.pev3=pev3;var d=m.contextDataMapping,y,a,l,n;if(d){vo.events2='';if(v)v+=',events';for(x in d){if(x.substring(0,ns.length)==ns)y=x.substring(ns.length);else y=\"\";a=d[x];if(typeof(a)=='strin"
	+"g'){l=m.s.sp(a,',');for(n=0;n<l.length;n++){a=l[n];if(x==\"a.contentType\"){if(v)v+=','+a;vo[a]=c[x]}else if(y=='view'||y=='segmentView'||y=='clicked'||y=='complete'||y=='timePlayed'||y=='CPM'){if("
	+"e)e+=','+a;if(y=='timePlayed'||y=='CPM'){if(c[x])vo.events2+=(vo.events2?',':'')+a+'='+c[x];}else if(c[x])vo.events2+=(vo.events2?',':'')+a}else if(y=='segment'&&c[x+'Num']){if(v)v+=','+a;vo[a]=c[x"
	+"+'Num']+':'+c[x]}else{if(v)v+=','+a;vo[a]=c[x]}}}else if(y=='milestones'||y=='offsetMilestones'){x=x.substring(0,x.length-1);if(c[x]&&d[x+'s'][c[x]]){if(e)e+=','+d[x+'s'][c[x]];vo.events2+=(vo.even"
	+"ts2?',':'')+d[x+'s'][c[x]]}}if(c[x])c[x]=undefined;if(y=='segment'&&c[x+'Num'])c[x+\"Num\"]=undefined}}vo.linkTrackVars=v;vo.linkTrackEvents=e};m.bpe=function(vo,i,x,o){var m=this,pe='m_o',pev3,d='"
	+"--**--';pe='m_o';if(!i.vt){pe='m_s';i.vt=1}else if(x==4)pe='m_i';pev3=m.s.ape(i.n)+d+Math.floor(i.l>0?i.l:1)+d+m.s.ape(i.p)+d+Math.floor(i.t)+d+i.s+d+(i.to>=0?'L'+Math.floor(i.to):'')+i.e+(x!=0&&x!"
	+"=2?'L'+Math.floor(o):'');vo.pe=pe;vo.pev3=pev3};m.e=function(n,x,o,sn,sx,sl,pd){var m=this,i,tm=new Date,ts=Math.floor(tm.getTime()/1000),c,l,v=m.trackVars,e=m.trackEvents,ti=m.trackSeconds,tp=m.tr"
	+"ackMilestones,to=m.trackOffsetMilestones,sm=m.segmentByMilestones,so=m.segmentByOffsetMilestones,z=new Array,j,t=1,w=new Object,x,ek,tc,vo=new Object;if(!m.channel)m.channel=m.s.wd.location.hostnam"
	+"e;n=m.cn(n);i=n&&m.l&&m.l[n]?m.l[n]:0;if(i){if(i.ad){ti=m.adTrackSeconds;tp=m.adTrackMilestones;to=m.adTrackOffsetMilestones;sm=m.adSegmentByMilestones;so=m.adSegmentByOffsetMilestones}if(o<0){if(i"
	+".lx==1&&i.lt>0)o=(ts-i.lt)+i.lo;else o=i.lo}if(i.l>0)o=o<i.l?o:i.l;if(o<0)o=0;i.o=o;if(i.l>0){i.x=(i.o/i.l)*100;i.x=i.x>100?100:i.x}if(i.lo<0)i.lo=o;tc=i.tc;w.name=n;w.ad=i.ad;w.length=i.l;w.openTi"
	+"me=new Date;w.openTime.setTime(i.s*1000);w.offset=i.o;w.percent=i.x;w.playerName=i.p;if(i.to<0)w.mediaEvent=w.event='OPEN';else w.mediaEvent=w.event=(x==1?'PLAY':(x==2?'STOP':(x==3?'MONITOR':(x==4?"
	+"'TRACK':(x==5?'COMPLETE':(x==7?'CLICK':('CLOSE')))))));if(!pd){if(i.pd)pd=i.pd}else i.pd=pd;w.player=pd;if(x>2||(x!=i.lx&&(x!=2||i.lx==1))) {if(!sx){sn=i.sn;sx=i.sx;sl=i.sl}if(x){if(x==1)i.lo=o;if("
	+"(x<=3||x>=5)&&i.to>=0){t=0;v=e=\"None\";if(i.to!=o){l=i.to;if(l>o){l=i.lo;if(l>o)l=o}z=tp?m.s.sp(tp,','):0;if(i.l>0&&z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&(l/i.l)*100<c"
	+"&&i.x>=c){t=1;j=z.length;w.mediaEvent=w.event='MILESTONE';i.lm=w.milestone=c}}z=to?m.s.sp(to,','):0;if(z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&l<c&&o>=c){t=1;j=z.length;w"
	+".mediaEvent=w.event='OFFSET_MILESTONE';i.lom=w.offsetMilestone=c}}}}if(i.sg||!sx){if(sm&&tp&&i.l>0){z=m.s.sp(tp,',');if(z){z[z.length]='100';l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0"
	+";if(c){if(i.x<c){sn=j+1;sx='M:'+l+'-'+c;j=z.length}l=c}}}}else if(so&&to){z=m.s.sp(to,',');if(z){z[z.length]=''+(i.l>0?i.l:'E');l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c||z[j]=="
	+"'E'){if(o<c||z[j]=='E'){sn=j+1;sx='O:'+l+'-'+c;j=z.length}l=c}}}}if(sx)i.sg=1}if((sx||i.sx)&&sx!=i.sx){i.us=1;if(!i.sx){i.sn=sn;i.sx=sx}if(i.to>=0)t=1}if((x>=2||i.x>=100)&&i.lo<o){i.t+=o-i.lo;i.ts+"
	+"=o-i.lo}if(x<=2||(x==3&&!i.lx)){i.e+=(x==1||x==3?'S':'E')+Math.floor(o);i.lx=(x==3?1:x)}if(!t&&i.to>=0&&x<=3){ti=ti?ti:0;if(ti&&i.ts>=ti){t=1;w.mediaEvent=w.event='SECONDS'}}i.lt=ts;i.lo=o}if(!x||("
	+"x<=3&&i.x>=100)){if(i.lx!=2)i.e+='E'+Math.floor(o);x=0;v=e=\"None\";w.mediaEvent=w.event=\"CLOSE\"}if(x==7){w.clicked=i.clk=1;t=1}if(x==5||(m.completeByCloseOffset&&(!x||i.x>=100)&&i.l>0&&o>=i.l-m."
	+"completeCloseOffsetThreshold)){w.complete=i.co=1;t=1}ek=w.mediaEvent;if(ek=='MILESTONE')ek+='_'+w.milestone;else if(ek=='OFFSET_MILESTONE')ek+='_'+w.offsetMilestone;if(!i.fel[ek]) {w.eventFirstTime"
	+"=true;i.fel[ek]=1}else w.eventFirstTime=false;w.timePlayed=i.t;w.segmentNum=i.sn;w.segment=i.sx;w.segmentLength=i.sl;if(m.monitor&&x!=4)m.monitor(m.s,w);if(x==0)m._delete(n);if(t&&i.tc==tc){vo=new "
	+"Object;vo.contextData=new Object;vo.linkTrackVars=v;vo.linkTrackEvents=e;if(!vo.linkTrackVars)vo.linkTrackVars='';if(!vo.linkTrackEvents)vo.linkTrackEvents='';if(m.trackUsingContextData)m.bcd(vo,i)"
	+";else m.bpe(vo,i,x,o);m.s.t(vo);if(i.us){i.sn=sn;i.sx=sx;i.sc=1;i.us=0}else if(i.ts>0)i.sc=0;i.e=\"\";i.lm=i.lom=0;i.ts-=Math.floor(i.ts);i.to=o;i.tc++}}}return i};m.ae=function(n,l,p,x,o,sn,sx,sl,"
	+"pd,b){var m=this,r=0;if(n&&(!m.autoTrackMediaLengthRequired||(length&&length>0)) &&p){if(!m.l||!m.l[n]){if(x==1||x==3){m.open(n,l,p,b);r=1}}else r=1;if(r)m.e(n,x,o,sn,sx,sl,pd)}};m.a=function(o,t){"
	+"var m=this,i=o.id?o.id:o.name,n=o.name,p=0,v,c,c1,c2,xc=m.s.h,x,e,f1,f2='s_media_'+m._in+'_oc',f3='s_media_'+m._in+'_t',f4='s_media_'+m._in+'_s',f5='s_media_'+m._in+'_l',f6='s_media_'+m._in+'_m',f7"
	+"='s_media_'+m._in+'_c',tcf,w;if(!i){if(!m.c)m.c=0;i='s_media_'+m._in+'_'+m.c;m.c++}if(!o.id)o.id=i;if(!o.name)o.name=n=i;if(!m.ol)m.ol=new Object;if(m.ol[i])return;m.ol[i]=o;if(!xc)xc=m.s.b;tcf=new"
	+" Function('o','var e,p=0;try{if(o.versionInfo&&o.currentMedia&&o.controls)p=1}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetQuickTimeVersion();if(t)p=2}catch("
	+"e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetVersionInfo();if(t)p=3}catch(e){p=0}return p');p=tcf(o)}}v=\"var m=s_c_il[\"+m._in+\"],o=m.ol['\"+i+\"']\";if(p==1){p="
	+"'Windows Media Player '+o.versionInfo;c1=v+',n,p,l,x=-1,cm,c,mn;if(o){cm=o.currentMedia;c=o.controls;if(cm&&c){mn=cm.name?cm.name:c.URL;l=cm.duration;p=c.currentPosition;n=o.playState;if(n){if(n==8"
	+")x=0;if(n==3)x=1;if(n==1||n==2||n==4||n==5||n==6)x=2;}';c2='if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}}';c=c1+c2;if(m.s.isie&&xc){x=m.s.d.createElement('script');x.language='jscript';x."
	+"type='text/javascript';x.htmlFor=i;x.event='PlayStateChange(NewState)';x.defer=true;x.text=c;xc.appendChild(x);o[f6]=new Function(c1+'if(n==3){x=3;'+c2+'}setTimeout(o.'+f6+',5000)');o[f6]()}}if(p=="
	+"2){p='QuickTime Player '+(o.GetIsQuickTimeRegistered()?'Pro ':'')+o.GetQuickTimeVersion();f1=f2;c=v+',n,x,t,l,p,p2,mn;if(o){mn=o.GetMovieName()?o.GetMovieName():o.GetURL();n=o.GetRate();t=o.GetTime"
	+"Scale();l=o.GetDuration()/t;p=o.GetTime()/t;p2=o.'+f5+';if(n!=o.'+f4+'||p<p2||p-p2>5){x=2;if(n!=0)x=1;else if(p>=l)x=0;if(p<p2||p-p2>5)m.ae(mn,l,\"'+p+'\",2,p2,0,\"\",0,0,o);m.ae(mn,l,\"'+p+'\",x,x"
	+"!=2?p:-1,0,\"\",0,0,o)}if(n>0&&o.'+f7+'>=10){m.ae(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;o.'+f5+'=p;setTimeout(\"'+v+';o.'+f2+'(0,0)\",500)}';o[f1]=new Function('a','b',c"
	+");o[f4]=-1;o[f7]=0;o[f1](0,0)}if(p==3){p='RealPlayer '+o.GetVersionInfo();f1=n+'_OnPlayStateChange';c1=v+',n,x=-1,l,p,mn;if(o){mn=o.GetTitle()?o.GetTitle():o.GetSource();n=o.GetPlayState();l=o.GetL"
	+"ength()/1000;p=o.GetPosition()/1000;if(n!=o.'+f4+'){if(n==3)x=1;if(n==0||n==2||n==4||n==5)x=2;if(n==0&&(p>=l||p==0))x=0;if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}if(n==3&&(o.'+f7+'>=10|"
	+"|!o.'+f3+')){m.ae(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;';c2='if(o.'+f2+')o.'+f2+'(o,n)}';if(m.s.wd[f1])o[f2]=m.s.wd[f1];m.s.wd[f1]=new Function('a','b',c1+c2);o[f1]=new"
	+" Function('a','b',c1+'setTimeout(\"'+v+';o.'+f1+'(0,0)\",o.'+f3+'?500:5000);'+c2);o[f4]=-1;if(m.s.isie)o[f3]=1;o[f7]=0;o[f1](0,0)}};m.as=new Function('e','var m=s_c_il['+m._in+'],l,n;if(m.autoTrack"
	+"&&m.s.d.getElementsByTagName){l=m.s.d.getElementsByTagName(m.s.isie?\"OBJECT\":\"EMBED\");if(l)for(n=0;n<l.length;n++)m.a(l[n]);}');if(s.wd.attachEvent)s.wd.attachEvent('onload',m.as);else if(s.wd."
	+"addEventListener)s.wd.addEventListener('load',m.as,false);if(m.onLoad)m.onLoad(s,m)";s.m_i("Media");
*/

function AppMeasurement_Module_ActivityMap(f){function g(a,d){var b,c,n;if(a&&d&&(b=e.c[d]||(e.c[d]=d.split(","))))for(n=0;n<b.length&&(c=b[n++]);)if(-1<a.indexOf(c))return null;p=1;return a}function q(a,d,b,c,e){var g,h;if(a.dataset&&(h=a.dataset[d]))g=h;else if(a.getAttribute)if(h=a.getAttribute("data-"+b))g=h;else if(h=a.getAttribute(b))g=h;if(!g&&f.useForcedLinkTracking&&e&&(g="",d=a.onclick?""+a.onclick:"")){b=d.indexOf(c);var l,k;if(0<=b){for(b+=10;b<d.length&&0<="= \t\r\n".indexOf(d.charAt(b));)b++;
if(b<d.length){h=b;for(l=k=0;h<d.length&&(";"!=d.charAt(h)||l);)l?d.charAt(h)!=l||k?k="\\"==d.charAt(h)?!k:0:l=0:(l=d.charAt(h),'"'!=l&&"'"!=l&&(l=0)),h++;if(d=d.substring(b,h))a.e=new Function("s","var e;try{s.w."+c+"="+d+"}catch(e){}"),a.e(f)}}}return g||e&&f.w[c]}function r(a,d,b){var c;return(c=e[d](a,b))&&(p?(p=0,c):g(k(c),e[d+"Exclusions"]))}function s(a,d,b){var c;if(a&&!(1===(c=a.nodeType)&&(c=a.nodeName)&&(c=c.toUpperCase())&&t[c])&&(1===a.nodeType&&(c=a.nodeValue)&&(d[d.length]=c),b.a||
b.t||b.s||!a.getAttribute||((c=a.getAttribute("alt"))?b.a=c:(c=a.getAttribute("title"))?b.t=c:"IMG"==(""+a.nodeName).toUpperCase()&&(c=a.getAttribute("src")||a.src)&&(b.s=c)),(c=a.childNodes)&&c.length))for(a=0;a<c.length;a++)s(c[a],d,b)}function k(a){if(null==a||void 0==a)return a;try{return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$",
"mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}","mg")," ").substring(0,254)}catch(d){}}var e=this;e.s=f;var m=window;m.s_c_in||(m.s_c_il=[],m.s_c_in=0);e._il=m.s_c_il;e._in=m.s_c_in;e._il[e._in]=e;m.s_c_in++;e._c="s_m";e.c={};var p=0,t={SCRIPT:1,STYLE:1,LINK:1,CANVAS:1};e._g=function(){var a,d,b,c=f.contextData,e=f.linkObject;(a=f.pageName||f.pageURL)&&(d=r(e,"link",f.linkName))&&(b=r(e,"region"))&&(c["a.activitymap.page"]=a.substring(0,
255),c["a.activitymap.link"]=128<d.length?d.substring(0,128):d,c["a.activitymap.region"]=127<b.length?b.substring(0,127):b,c["a.activitymap.pageIDType"]=f.pageName?1:0)};e.link=function(a,d){var b;if(d)b=g(k(d),e.linkExclusions);else if((b=a)&&!(b=q(a,"sObjectId","s-object-id","s_objectID",1))){var c,f;(f=g(k(a.innerText||a.textContent),e.linkExclusions))||(s(a,c=[],b={a:void 0,t:void 0,s:void 0}),(f=g(k(c.join(""))))||(f=g(k(b.a?b.a:b.t?b.t:b.s?b.s:void 0)))||!(c=(c=a.tagName)&&c.toUpperCase?c.toUpperCase():
"")||("INPUT"==c||"SUBMIT"==c&&a.value?f=g(k(a.value)):"IMAGE"==c&&a.src&&(f=g(k(a.src)))));b=f}return b};e.region=function(a){for(var d,b=e.regionIDAttribute||"id";a&&(a=a.parentNode);){if(d=q(a,b,b,b))return d;if("BODY"==a.nodeName)return"BODY"}}}
/* End ActivityMap Module */
/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

AppMeasurement for JavaScript version: 1.6.3
Copyright 1996-2016 Adobe, Inc. All Rights Reserved
More info available at http://www.adobe.com/marketing-cloud.html
*/
function AppMeasurement(){var a=this;a.version="1.6.3";var k=window;k.s_c_in||(k.s_c_il=[],k.s_c_in=0);a._il=k.s_c_il;a._in=k.s_c_in;a._il[a._in]=a;k.s_c_in++;a._c="s_c";var q=k.AppMeasurement.Jb;q||(q=null);var r=k,n,t;try{for(n=r.parent,t=r.location;n&&n.location&&t&&""+n.location!=""+t&&r.location&&""+n.location!=""+r.location&&n.location.host==t.host;)r=n,n=r.parent}catch(u){}a.yb=function(a){try{console.log(a)}catch(b){}};a.Ha=function(a){return""+parseInt(a)==""+a};a.replace=function(a,b,d){return!a||
0>a.indexOf(b)?a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.pb=function(){var c=k.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);if(c&&!a.cookieDomain&&
!/^[0-9.]+$/.test(c)&&(b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.cookieDomain=0<d?c.substring(d):c}return a.cookieDomain};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return"[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.pb(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=
e&&"NONE"!=e&&((g=""!=b?parseInt(e?e:0):-60)?(d=new Date,d.setTime(d.getTime()+1E3*g)):1==d&&(d=new Date,g=d.getYear(),d.setYear(g+5+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=c+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toGMTString()+";":"")+(f?" domain="+f+";":""),a.cookieRead(c)==b):0};a.K=[];a.ha=function(c,b,d){if(a.Aa)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,m=["webkitvisibilitychange","visibilitychange"];
g||(g=a.d.webkitVisibilityState);if(g&&"prerender"==g){if(!a.ia)for(a.ia=1,d=0;d<m.length;d++)a.d.addEventListener(m[d],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&(a.ia=0,a.delayReady())});f=1;e=0}else d||a.p("_d")&&(f=1);f&&(a.K.push({m:c,a:b,t:e}),a.ia||setTimeout(a.delayReady,a.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.p("_d")?b=1:a.va();0<a.K.length;){d=a.K.shift();if(b&&!d.t&&d.t>c){a.K.unshift(d);setTimeout(a.delayReady,
parseInt(a.maxDelay/2));break}a.Aa=1;a[d.m].apply(a,d.a);a.Aa=0}};a.setAccount=a.sa=function(c){var b,d;if(!a.ha("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=c.split(",")};a.foreachVar=function(c,b){var d,f,e,g,m="";e=f="";if(a.lightProfileID)d=a.O,(m=a.lightTrackVars)&&(m=","+m+","+a.ma.join(",")+",");else{d=a.g;if(a.pe||a.linkType)m=a.linkTrackVars,
f=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(m=a[e].Hb,f=a[e].Gb));m&&(m=","+m+","+a.G.join(",")+",");f&&m&&(m+=",events,")}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!m||0<=m.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g)};a.r=function(c,b,d,f,e){var g="",m,p,k,w,n=0;"contextData"==c&&(c="c");if(b){for(m in b)if(!(Object.prototype[m]||e&&m.substring(0,e.length)!=e)&&b[m]&&(!d||0<=d.indexOf(","+(f?f+".":"")+m+","))){k=!1;if(n)for(p=
0;p<n.length;p++)m.substring(0,n[p].length)==n[p]&&(k=!0);if(!k&&(""==g&&(g+="&"+c+"."),p=b[m],e&&(m=m.substring(e.length)),0<m.length))if(k=m.indexOf("."),0<k)p=m.substring(0,k),k=(e?e:"")+p+".",n||(n=[]),n.push(k),g+=a.r(p,b,d,f,k);else if("boolean"==typeof p&&(p=p?"true":"false"),p){if("retrieveLightData"==f&&0>e.indexOf(".contextData."))switch(k=m.substring(0,4),w=m.substring(4),m){case "transactionID":m="xact";break;case "channel":m="ch";break;case "campaign":m="v0";break;default:a.Ha(w)&&("prop"==
k?m="c"+w:"eVar"==k?m="v"+w:"list"==k?m="l"+w:"hier"==k&&(m="h"+w,p=p.substring(0,255)))}g+="&"+a.escape(m)+"="+a.escape(p)}}""!=g&&(g+="&."+c)}return g};a.usePostbacks=0;a.sb=function(){var c="",b,d,f,e,g,m,p,k,n="",r="",s=e="";if(a.lightProfileID)b=a.O,(n=a.lightTrackVars)&&(n=","+n+","+a.ma.join(",")+",");else{b=a.g;if(a.pe||a.linkType)n=a.linkTrackVars,r=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(n=a[e].Hb,r=a[e].Gb));n&&(n=","+n+","+a.G.join(",")+",");
r&&(r=","+r+",",n&&(n+=",events,"));a.events2&&(s+=(""!=s?",":"")+a.events2)}if(a.visitor&&1.5<=parseFloat(a.visitor.version)&&a.visitor.getCustomerIDs){e=q;if(g=a.visitor.getCustomerIDs())for(d in g)Object.prototype[d]||(f=g[d],e||(e={}),f.id&&(e[d+".id"]=f.id),f.authState&&(e[d+".as"]=f.authState));e&&(c+=a.r("cid",e))}a.AudienceManagement&&a.AudienceManagement.isReady()&&(c+=a.r("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];g=a[e];f=e.substring(0,4);m=e.substring(4);
!g&&"events"==e&&s&&(g=s,s="");if(g&&(!n||0<=n.indexOf(","+e+","))){switch(e){case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e="D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e="aid";break;case "audienceManagerLocationHint":e="aamlh";break;case "audienceManagerBlob":e="aamb";break;case "authState":e="as";break;case "pageURL":e="g";255<g.length&&(a.pageURLRest=g.substring(255),g=g.substring(0,
255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&a.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&(g="");break;case "charSet":e="ce";break;case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e="cdp";break;case "cookieLifetime":e="cl";break;case "variableProvider":e="vvp";break;case "currencyCode":e=
"cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;case "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";break;case "cookiesEnabled":e="k";break;case "browserWidth":e="bw";break;case "browserHeight":e="bh";break;case "connectionType":e="ct";break;case "homepage":e="hp";break;case "events":s&&(g+=(""!=g?",":"")+s);if(r)for(m=
g.split(","),g="",f=0;f<m.length;f++)p=m[f],k=p.indexOf("="),0<=k&&(p=p.substring(0,k)),k=p.indexOf(":"),0<=k&&(p=p.substring(0,k)),0<=r.indexOf(","+p+",")&&(g+=(g?",":"")+m[f]);break;case "events2":g="";break;case "contextData":c+=a.r("c",a[e],n,e);g="";break;case "lightProfileID":e="mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||(g="");break;case "lightIncrementBy":e="mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e="mtsr";break;case "deleteLightProfiles":e=
"mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.r("mts",a[e],n,e));g="";break;default:a.Ha(m)&&("prop"==f?e="c"+m:"eVar"==f?e="v"+m:"list"==f?e="l"+m:"hier"==f&&(e="h"+m,g=g.substring(0,255)))}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g))}"pev3"==e&&a.e&&(c+=a.e)}return c};a.D=function(a){var b=a.tagName;if("undefined"!=""+a.Mb||"undefined"!=""+a.Cb&&"HTML"!=(""+a.Cb).toUpperCase())return"";b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==b&&(b="");b&&(("INPUT"==b||
"BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.Da=function(a){var b=a.href?a.href:"",d,f,e;d=b.indexOf(":");f=b.indexOf("?");e=b.indexOf("/");b&&(0>d||0<=f&&d>f||0<=e&&d>e)&&(f=a.protocol&&1<a.protocol.length?a.protocol:l.protocol?l.protocol:"",d=l.pathname.lastIndexOf("/"),b=(f?f+"//":"")+(a.host?a.host:l.host?l.host:"")+("/"!=h.substring(0,1)?l.pathname.substring(0,0>d?0:d)+"/":"")+b);return b};a.L=function(c){var b=a.D(c),d,f,e="",g=0;return b&&
(d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+f,"\r",""),"\n",""),"\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),g=3):"IMAGE"==b&&c.src&&(e=c.src):e=a.Da(c),e)?{id:e.substring(0,100),type:g}:0};a.Kb=function(c){for(var b=a.D(c),d=a.L(c);c&&!d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=a.D(c),d=a.L(c);
d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.Bb=function(){var c,b,d=a.linkObject,f=a.linkType,e=a.linkURL,g,m;a.na=1;d||(a.na=0,d=a.clickObject);if(d){c=a.D(d);for(b=a.L(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:d.parentNode)c=a.D(d),b=a.L(d);b&&"BODY"!=c||(d=0);if(d&&!a.linkObject){var p=d.onclick?""+d.onclick:"";if(0<=p.indexOf(".tl(")||0<=p.indexOf(".trackLink("))d=0}}else a.na=1;!e&&d&&(e=a.Da(d));e&&
!a.linkLeaveQueryString&&(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var n=0,r=0,q;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(p=e.toLowerCase(),g=p.indexOf("?"),m=p.indexOf("#"),0<=g?0<=m&&m<g&&(g=m):g=m,0<=g&&(p=p.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),m=0;m<g.length;m++)(q=g[m])&&p.substring(p.length-(q.length+1))=="."+q&&(f="d");if(a.trackExternalLinks&&!f&&(p=e.toLowerCase(),a.Ga(p)&&(a.linkInternalFilters||(a.linkInternalFilters=k.location.hostname),
g=0,a.linkExternalFilters?(g=a.linkExternalFilters.toLowerCase().split(","),n=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(m=0;m<g.length;m++)q=g[m],0<=p.indexOf(q)&&(r=1);r?n&&(f="e"):n||(f="e")}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.e="",d&&(f=a.pageName,e=1,d=d.sourceIndex,f||(f=a.pageURL,e=0),k.s_objectID&&(b.id=k.s_objectID,d=b.type=1),f&&b&&b.id&&c&&(a.e="&pid="+a.escape(f.substring(0,255))+(e?"&pidt="+e:"")+
"&oid="+a.escape(b.id.substring(0,100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")))};a.tb=function(){var c=a.na,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||f)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats||a.ActivityMap){var b={},d=0,e=a.cookieRead("s_sq"),g=e?e.split("&"):0,m,p,k,e=0;if(g)for(m=0;m<g.length;m++)p=g[m].split("="),f=a.unescape(p[0]).split(","),p=a.unescape(p[1]),
b[p]=f;f=a.account.split(",");m={};for(k in a.contextData)k&&!Object.prototype[k]&&"a.activitymap."==k.substring(0,14)&&(m[k]=a.contextData[k],a.contextData[k]="");a.e=a.r("c",m)+(a.e?a.e:"");if(c||a.e){c&&!a.e&&(e=1);for(p in b)if(!Object.prototype[p])for(k=0;k<f.length;k++)for(e&&(g=b[p].join(","),g==a.account&&(a.e+=("&"!=p.charAt(0)?"&":"")+p,b[p]=[],d=1)),m=0;m<b[p].length;m++)g=b[p][m],g==f[k]&&(e&&(a.e+="&u="+a.escape(g)+("&"!=p.charAt(0)?"&":"")+p+"&u=0"),b[p].splice(m,1),d=1);c||(d=1);if(d){e=
"";m=2;!c&&a.e&&(e=a.escape(f.join(","))+"="+a.escape(a.e),m=1);for(p in b)!Object.prototype[p]&&0<m&&0<b[p].length&&(e+=(e?"&":"")+a.escape(b[p].join(","))+"="+a.escape(p),m--);a.cookieWrite("s_sq",e)}}}return c};a.ub=function(){if(!a.Fb){var c=new Date,b=r.location,d,f,e=f=d="",g="",m="",k="1.2",n=a.cookieWrite("s_cc","true",0)?"Y":"N",q="",s="";if(c.setUTCDate&&(k="1.3",(0).toPrecision&&(k="1.5",c=[],c.forEach))){k="1.6";f=0;d={};try{f=new Iterator(d),f.next&&(k="1.7",c.reduce&&(k="1.8",k.trim&&
(k="1.8.1",Date.parse&&(k="1.8.2",Object.create&&(k="1.8.5")))))}catch(t){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;g=a.w.innerWidth?a.w.innerWidth:a.d.documentElement.offsetWidth;m=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),q=a.b.Lb(b)?"Y":"N"}catch(u){}try{a.b.addBehavior("#default#clientCaps"),s=a.b.connectionType}catch(x){}a.resolution=d;a.colorDepth=
f;a.javascriptVersion=k;a.javaEnabled=e;a.cookiesEnabled=n;a.browserWidth=g;a.browserHeight=m;a.connectionType=s;a.homepage=q;a.Fb=1}};a.P={};a.loadModule=function(c,b){var d=a.P[c];if(!d){d=k["AppMeasurement_Module_"+c]?new k["AppMeasurement_Module_"+c](a):{};a.P[c]=a[c]=d;d.Xa=function(){return d.ab};d.bb=function(b){if(d.ab=b)a[c+"_onLoad"]=b,a.ha(c+"_onLoad",[a,d],1)||b(a,d)};try{Object.defineProperty?Object.defineProperty(d,"onLoad",{get:d.Xa,set:d.bb}):d._olc=1}catch(f){d._olc=1}}b&&(a[c+"_onLoad"]=
b,a.ha(c+"_onLoad",[a,d],1)||b(a,d))};a.p=function(c){var b,d;for(b in a.P)if(!Object.prototype[b]&&(d=a.P[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&d[c]()))return 1;return 0};a.wb=function(){var c=Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=a.cookieRead(d);if(b){f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,c))return 0;f=c}if(f%1E4>v)return 0}return 1};a.Q=function(c,b){var d,
f,e,g,m,k;for(d=0;2>d;d++)for(f=0<d?a.wa:a.g,e=0;e<f.length;e++)if(g=f[e],(m=c[g])||c["!"+g]){if(!b&&("contextData"==g||"retrieveLightData"==g)&&a[g])for(k in a[g])m[k]||(m[k]=a[g][k]);a[g]=m}};a.Qa=function(c,b){var d,f,e,g;for(d=0;2>d;d++)for(f=0<d?a.wa:a.g,e=0;e<f.length;e++)g=f[e],c[g]=a[g],b||c[g]||(c["!"+g]=1)};a.ob=function(a){var b,d,f,e,g,k=0,p,n="",q="";if(a&&255<a.length&&(b=""+a,d=b.indexOf("?"),0<d&&(p=b.substring(d+1),b=b.substring(0,d),e=b.toLowerCase(),f=0,"http://"==e.substring(0,
7)?f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,d),g=b.substring(d),b=b.substring(0,d),0<=e.indexOf("google")?k=",q,ie,start,search_key,word,kw,cd,":0<=e.indexOf("yahoo.co")&&(k=",p,ei,"),k&&p)))){if((a=p.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=k.indexOf(","+e.substring(0,d)+",")?n+=(n?"&":"")+e:q+=(q?"&":"")+e;n&&q?p=n+"&"+q:q=""}d=253-(p.length-q.length)-b.length;a=b+(0<d?g.substring(0,d):"")+"?"+p}return a};a.Wa=function(c){var b=
a.d.visibilityState,d=["webkitvisibilitychange","visibilitychange"];b||(b=a.d.webkitVisibilityState);if(b&&"prerender"==b){if(c)for(b=0;b<d.length;b++)a.d.addEventListener(d[b],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&c()});return!1}return!0};a.da=!1;a.I=!1;a.eb=function(){a.I=!0;a.j()};a.ba=!1;a.U=!1;a.$a=function(c){a.marketingCloudVisitorID=c;a.U=!0;a.j()};a.ea=!1;a.V=!1;a.fb=function(c){a.visitorOptedOut=c;a.V=!0;a.j()};a.Y=!1;a.R=!1;a.Sa=function(c){a.analyticsVisitorID=
c;a.R=!0;a.j()};a.aa=!1;a.T=!1;a.Ua=function(c){a.audienceManagerLocationHint=c;a.T=!0;a.j()};a.Z=!1;a.S=!1;a.Ta=function(c){a.audienceManagerBlob=c;a.S=!0;a.j()};a.Va=function(c){a.maxDelay||(a.maxDelay=250);return a.p("_d")?(c&&setTimeout(function(){c()},a.maxDelay),!1):!0};a.ca=!1;a.H=!1;a.va=function(){a.H=!0;a.j()};a.isReadyToTrack=function(){var c=!0,b=a.visitor,d,f,e;a.da||a.I||(a.Wa(a.eb)?a.I=!0:a.da=!0);if(a.da&&!a.I)return!1;b&&b.isAllowed()&&(a.ba||a.marketingCloudVisitorID||!b.getMarketingCloudVisitorID||
(a.ba=!0,a.marketingCloudVisitorID=b.getMarketingCloudVisitorID([a,a.$a]),a.marketingCloudVisitorID&&(a.U=!0)),a.ea||a.visitorOptedOut||!b.isOptedOut||(a.ea=!0,a.visitorOptedOut=b.isOptedOut([a,a.fb]),a.visitorOptedOut!=q&&(a.V=!0)),a.Y||a.analyticsVisitorID||!b.getAnalyticsVisitorID||(a.Y=!0,a.analyticsVisitorID=b.getAnalyticsVisitorID([a,a.Sa]),a.analyticsVisitorID&&(a.R=!0)),a.aa||a.audienceManagerLocationHint||!b.getAudienceManagerLocationHint||(a.aa=!0,a.audienceManagerLocationHint=b.getAudienceManagerLocationHint([a,
a.Ua]),a.audienceManagerLocationHint&&(a.T=!0)),a.Z||a.audienceManagerBlob||!b.getAudienceManagerBlob||(a.Z=!0,a.audienceManagerBlob=b.getAudienceManagerBlob([a,a.Ta]),a.audienceManagerBlob&&(a.S=!0)),c=a.ba&&!a.U&&!a.marketingCloudVisitorID,b=a.Y&&!a.R&&!a.analyticsVisitorID,d=a.aa&&!a.T&&!a.audienceManagerLocationHint,f=a.Z&&!a.S&&!a.audienceManagerBlob,e=a.ea&&!a.V,c=c||b||d||f||e?!1:!0);a.ca||a.H||(a.Va(a.va)?a.H=!0:a.ca=!0);a.ca&&!a.H&&(c=!1);return c};a.o=q;a.u=0;a.callbackWhenReadyToTrack=
function(c,b,d){var f;f={};f.jb=c;f.ib=b;f.gb=d;a.o==q&&(a.o=[]);a.o.push(f);0==a.u&&(a.u=setInterval(a.j,100))};a.j=function(){var c;if(a.isReadyToTrack()&&(a.cb(),a.o!=q))for(;0<a.o.length;)c=a.o.shift(),c.ib.apply(c.jb,c.gb)};a.cb=function(){a.u&&(clearInterval(a.u),a.u=0)};a.Ya=function(c){var b,d,f=q,e=q;if(!a.isReadyToTrack()){b=[];if(c!=q)for(d in f={},c)f[d]=c[d];e={};a.Qa(e,!0);b.push(f);b.push(e);a.callbackWhenReadyToTrack(a,a.track,b);return!0}return!1};a.qb=function(){var c=a.cookieRead("s_fid"),
b="",d="",f;f=8;var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,f+1),f=Math.floor(Math.random()*e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+d}a.cookieWrite("s_fid",c,1)||(c=0);return c};a.t=a.track=function(c,b){var d,f=new Date,e="s"+Math.floor(f.getTime()/108E5)%10+Math.floor(1E13*Math.random()),g=f.getYear(),g="t="+a.escape(f.getDate()+"/"+f.getMonth()+"/"+(1900>g?g+1900:g)+" "+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds()+
" "+f.getDay()+" "+f.getTimezoneOffset());a.visitor&&(a.visitor.getAuthState&&(a.authState=a.visitor.getAuthState()),!a.supplementalDataID&&a.visitor.getSupplementalDataID&&(a.supplementalDataID=a.visitor.getSupplementalDataID("AppMeasurement:"+a._in,a.expectSupplementalData?!1:!0)));a.p("_s");a.Ya(c)||(b&&a.Q(b),c&&(d={},a.Qa(d,0),a.Q(c)),a.wb()&&!a.visitorOptedOut&&(a.analyticsVisitorID||a.marketingCloudVisitorID||(a.fid=a.qb()),a.Bb(),a.usePlugins&&a.doPlugins&&a.doPlugins(a),a.account&&(a.abort||
(a.trackOffline&&!a.timestamp&&(a.timestamp=Math.floor(f.getTime()/1E3)),f=k.location,a.pageURL||(a.pageURL=f.href?f.href:f),a.referrer||a.Ra||(a.referrer=r.document.referrer),a.Ra=1,a.referrer=a.ob(a.referrer),a.p("_g")),a.tb()&&!a.abort&&(a.ub(),g+=a.sb(),a.Ab(e,g),a.p("_t"),a.referrer=""))),c&&a.Q(d,1));a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=k.s_objectID=a.pe=a.pev1=a.pev2=a.pev3=a.e=a.lightProfileID=0};a.tl=a.trackLink=
function(c,b,d,f,e){a.linkObject=c;a.linkType=b;a.linkName=d;e&&(a.l=c,a.A=e);return a.track(f)};a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=d;return a.track(f)};a.clearVars=function(){var c,b;for(c=0;c<a.g.length;c++)if(b=a.g[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,4)||"hier"==b.substring(0,4)||"list"==b.substring(0,4)||"channel"==b||"events"==b||"eventList"==b||"products"==b||"productList"==b||"purchaseID"==b||"transactionID"==b||"state"==
b||"zip"==b||"campaign"==b)a[b]=void 0};a.tagContainerMarker="";a.Ab=function(c,b){var d,f=a.trackingServer;d="";var e=a.dc,g="sc.",k=a.visitorNamespace;f?a.trackingServerSecure&&a.ssl&&(f=a.trackingServerSecure):(k||(k=a.account,f=k.indexOf(","),0<=f&&(k=k.substring(0,f)),k=k.replace(/[^A-Za-z0-9]/g,"")),d||(d="2o7.net"),e=e?(""+e).toLowerCase():"d1","2o7.net"==d&&("d1"==e?e="112":"d2"==e&&(e="122"),g=""),f=k+"."+e+"."+g+d);d=a.ssl?"https://":"http://";e=a.AudienceManagement&&a.AudienceManagement.isReady()||
0!=a.usePostbacks;d+=f+"/b/ss/"+a.account+"/"+(a.mobile?"5.":"")+(e?"10":"1")+"/JS-"+a.version+(a.Eb?"T":"")+(a.tagContainerMarker?"-"+a.tagContainerMarker:"")+"/"+c+"?AQB=1&ndh=1&pf=1&"+(e?"callback=s_c_il["+a._in+"].doPostbacks&et=1&":"")+b+"&AQE=1";a.mb(d);a.ja()};a.Pa=/{(%?)(.*?)(%?)}/;a.Ib=RegExp(a.Pa.source,"g");a.nb=function(c){if("object"==typeof c.dests)for(var b=0;b<c.dests.length;++b)if(o=c.dests[b],"string"==typeof o.c&&"aa."==o.id.substr(0,3))for(var d=o.c.match(a.Ib),b=0;b<d.length;++b){match=
d[b];var f=match.match(a.Pa),e="";"%"==f[1]&&"timezone_offset"==f[2]?e=(new Date).getTimezoneOffset():"%"==f[1]&&"timestampz"==f[2]&&(e=a.rb());o.c=o.c.replace(match,a.escape(e))}};a.rb=function(){var c=new Date,b=new Date(6E4*Math.abs(c.getTimezoneOffset()));return a.k(4,c.getFullYear())+"-"+a.k(2,c.getMonth()+1)+"-"+a.k(2,c.getDate())+"T"+a.k(2,c.getHours())+":"+a.k(2,c.getMinutes())+":"+a.k(2,c.getSeconds())+(0<c.getTimezoneOffset()?"-":"+")+a.k(2,b.getUTCHours())+":"+a.k(2,b.getUTCMinutes())};
a.k=function(a,b){return(Array(a+1).join(0)+b).slice(-a)};a.ra={};a.doPostbacks=function(c){if("object"==typeof c)if(a.nb(c),"object"==typeof a.AudienceManagement&&"function"==typeof a.AudienceManagement.isReady&&a.AudienceManagement.isReady()&&"function"==typeof a.AudienceManagement.passData)a.AudienceManagement.passData(c);else if("object"==typeof c&&"object"==typeof c.dests)for(var b=0;b<c.dests.length;++b)dest=c.dests[b],"object"==typeof dest&&"string"==typeof dest.c&&"string"==typeof dest.id&&
"aa."==dest.id.substr(0,3)&&(a.ra[dest.id]=new Image,a.ra[dest.id].alt="",a.ra[dest.id].src=dest.c)};a.mb=function(c){a.i||a.vb();a.i.push(c);a.la=a.C();a.Na()};a.vb=function(){a.i=a.xb();a.i||(a.i=[])};a.xb=function(){var c,b;if(a.qa()){try{(b=k.localStorage.getItem(a.oa()))&&(c=k.JSON.parse(b))}catch(d){}return c}};a.qa=function(){var c=!0;a.trackOffline&&a.offlineFilename&&k.localStorage&&k.JSON||(c=!1);return c};a.Ea=function(){var c=0;a.i&&(c=a.i.length);a.q&&c++;return c};a.ja=function(){if(a.q&&
(a.B&&a.B.complete&&a.B.F&&a.B.ua(),a.q))return;a.Fa=q;if(a.pa)a.la>a.N&&a.La(a.i),a.ta(500);else{var c=a.hb();if(0<c)a.ta(c);else if(c=a.Ba())a.q=1,a.zb(c),a.Db(c)}};a.ta=function(c){a.Fa||(c||(c=0),a.Fa=setTimeout(a.ja,c))};a.hb=function(){var c;if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.C()-a.Ka;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-c};a.Ba=function(){if(0<a.i.length)return a.i.shift()};a.zb=function(c){if(a.debugTracking){var b="AppMeasurement Debug: "+c;c=c.split("&");
var d;for(d=0;d<c.length;d++)b+="\n\t"+a.unescape(c[d]);a.yb(b)}};a.Za=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.X=!1;var s;try{s=JSON.parse('{"x":"y"}')}catch(x){s=null}s&&"y"==s.x?(a.X=!0,a.W=function(a){return JSON.parse(a)}):k.$&&k.$.parseJSON?(a.W=function(a){return k.$.parseJSON(a)},a.X=!0):a.W=function(){return null};a.Db=function(c){var b,d,f;a.Za()&&2047<c.length&&("undefined"!=typeof XMLHttpRequest&&(b=new XMLHttpRequest,"withCredentials"in b?d=1:b=0),b||"undefined"==
typeof XDomainRequest||(b=new XDomainRequest,d=2),b&&(a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks)&&(a.X?b.xa=!0:b=0));!b&&a.Oa&&(c=c.substring(0,2047));!b&&a.d.createElement&&(0!=a.usePostbacks||a.AudienceManagement&&a.AudienceManagement.isReady())&&(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?f[0]:a.d.body)?(b.type="text/javascript",b.setAttribute("async","async"),d=3):b=0);b||(b=new Image,b.alt="",b.abort||"undefined"===
typeof k.InstallTrigger||(b.abort=function(){b.src=q}));b.za=function(){try{b.F&&(clearTimeout(b.F),b.F=0)}catch(a){}};b.onload=b.ua=function(){b.za();a.lb();a.fa();a.q=0;a.ja();if(b.xa){b.xa=!1;try{a.doPostbacks(a.W(b.responseText))}catch(c){}}};b.onabort=b.onerror=b.Ca=function(){b.za();(a.trackOffline||a.pa)&&a.q&&a.i.unshift(a.kb);a.q=0;a.la>a.N&&a.La(a.i);a.fa();a.ta(500)};b.onreadystatechange=function(){4==b.readyState&&(200==b.status?b.ua():b.Ca())};a.Ka=a.C();if(1==d||2==d){var e=c.indexOf("?");
f=c.substring(0,e);e=c.substring(e+1);e=e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,"");1==d?(b.open("POST",f,!0),b.send(e)):2==d&&(b.open("POST",f),b.send(e))}else if(b.src=c,3==d){if(a.Ia)try{f.removeChild(a.Ia)}catch(g){}f.firstChild?f.insertBefore(b,f.firstChild):f.appendChild(b);a.Ia=a.B}b.F=setTimeout(function(){b.F&&(b.complete?b.ua():(a.trackOffline&&b.abort&&b.abort(),b.Ca()))},5E3);a.kb=c;a.B=k["s_i_"+a.replace(a.account,",","_")]=b;if(a.useForcedLinkTracking&&a.J||a.A)a.forcedLinkTrackingTimeout||
(a.forcedLinkTrackingTimeout=250),a.ga=setTimeout(a.fa,a.forcedLinkTrackingTimeout)};a.lb=function(){if(a.qa()&&!(a.Ja>a.N))try{k.localStorage.removeItem(a.oa()),a.Ja=a.C()}catch(c){}};a.La=function(c){if(a.qa()){a.Na();try{k.localStorage.setItem(a.oa(),k.JSON.stringify(c)),a.N=a.C()}catch(b){}}};a.Na=function(){if(a.trackOffline){if(!a.offlineLimit||0>=a.offlineLimit)a.offlineLimit=10;for(;a.i.length>a.offlineLimit;)a.Ba()}};a.forceOffline=function(){a.pa=!0};a.forceOnline=function(){a.pa=!1};a.oa=
function(){return a.offlineFilename+"-"+a.visitorNamespace+a.account};a.C=function(){return(new Date).getTime()};a.Ga=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&0!=a.indexOf("about:")&&0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:!1};a.setTagContainer=function(c){var b,d,f;a.Eb=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==d._c&&d.tagContainerName==c){a.Q(d);if(d.lmq)for(b=0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=a[f],
f=d.ml[f],f)!Object.prototype[b]&&("function"!=typeof f[b]||0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&"function"==typeof c[f.f]&&(f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=0;b<d.tq.length;b++)a.track(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,getQueryParam:function(c,b,d){var f;b||(b=a.pageURL?a.pageURL:k.location);d||(d="&");return c&&
b&&(b=""+b,f=b.indexOf("?"),0<=f&&(b=d+b.substring(f+1)+d,f=b.indexOf(d+c+"="),0<=f&&(b=b.substring(f+d.length+c.length+1),f=b.indexOf(d),0<=f&&(b=b.substring(0,f)),0<b.length)))?a.unescape(b):""}};a.G="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
a.g=a.G.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));a.ma="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.O=a.ma.slice(0);a.wa="account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks AudienceManagement".split(" ");
for(n=0;250>=n;n++)76>n&&(a.g.push("prop"+n),a.O.push("prop"+n)),a.g.push("eVar"+n),a.O.push("eVar"+n),6>n&&a.g.push("hier"+n),4>n&&a.g.push("list"+n);n="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest".split(" ");a.g=a.g.concat(n);a.G=a.G.concat(n);a.ssl=0<=k.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.offlineThrottleDelay=0;a.offlineFilename=
"AppMeasurement.offline";a.Ka=0;a.la=0;a.N=0;a.Ja=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=k;a.d=k.document;try{if(a.Oa=!1,navigator){var y=navigator.userAgent;if("Microsoft Internet Explorer"==navigator.appName||0<=y.indexOf("MSIE ")||0<=y.indexOf("Trident/")&&0<=y.indexOf("Windows NT 6"))a.Oa=!0}}catch(z){}a.fa=function(){a.ga&&(k.clearTimeout(a.ga),a.ga=q);a.l&&a.J&&a.l.dispatchEvent(a.J);a.A&&("function"==typeof a.A?a.A():a.l&&a.l.href&&(a.d.location=
a.l.href));a.l=a.J=a.A=0};a.Ma=function(){a.b=a.d.body;a.b?(a.v=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.ya)if(a.useForcedLinkTracking)a.b.removeEventListener("click",a.v,!1);else{a.b.removeEventListener("click",a.v,!0);a.ya=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.M&&a.M==a.clickObject||!(a.clickObject.tagName||a.clickObject.parentElement||a.clickObject.parentNode))a.clickObject=
0;else{var m=a.M=a.clickObject;a.ka&&(clearTimeout(a.ka),a.ka=0);a.ka=setTimeout(function(){a.M==m&&(a.M=0)},1E4);f=a.Ea();a.track();if(f<a.Ea()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.Ga(g)||(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||k.name&&d==k.name))){try{b=a.d.createEvent("MouseEvents")}catch(n){b=new k.MouseEvent}if(b){try{b.initMouseEvent("click",
c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget)}catch(q){b=0}b&&(b["s_fe_"+a._in]=b.s_fe=1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.l=c.target,a.J=b)}}}}}catch(r){a.clickObject=0}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.v):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&a.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&
k.MouseEvent)&&(a.ya=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.v,!0)),a.b.addEventListener("click",a.v,!1))):setTimeout(a.Ma,30)};a.Ma();a.loadModule("ActivityMap")}
function s_gi(a){var k,q=window.s_c_il,r,n,t=a.split(","),u,s,x=0;if(q)for(r=0;!x&&r<q.length;){k=q[r];if("s_c"==k._c&&(k.account||k.oun))if(k.account&&k.account==a)x=1;else for(n=k.account?k.account:k.oun,n=k.allAccounts?k.allAccounts:n.split(","),u=0;u<t.length;u++)for(s=0;s<n.length;s++)t[u]==n[s]&&(x=1);r++}x||(k=new AppMeasurement);k.setAccount?k.setAccount(a):k.sa&&k.sa(a);return k}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var a=window,k=a.s_giq,q,r,n;if(k)for(q=0;q<k.length;q++)r=k[q],n=s_gi(r.oun),n.setAccount(r.un),n.setTagContainer(r.tagContainerName);a.s_giq=0}s_pgicq();
