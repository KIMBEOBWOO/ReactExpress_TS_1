<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<title>아프리카TV 로그인</title>
<link rel="stylesheet" type="text/css" href="https://www.afreecatv.com/css/default1.css" />
<link rel="stylesheet" type="text/css" href="https://www.afreecatv.com/css/global/common.css" />
<link rel="stylesheet" type="text/css" href="https://www.afreecatv.com/css/global/login.css" />
<script type="text/javascript" src="https://www.afreecatv.com/script/new_main/_config.js"></script>
<script type="text/javascript" src="https://www.afreecatv.com/script/new_main/afreecacook.js"></script>
<script type="text/javascript" src="https://www.afreecatv.com/script/new_main/common.js" charset="euc-kr"></script>
<script type="text/javascript" src="https://www.afreecatv.com/script/new_main/browsercheck.js" charset="euc-kr"></script>
<script type="text/javascript" src="https://www.afreecatv.com/script/common/jquery.js"></script>
<script type="text/javascript" src="https://login.afreecatv.com/login_script.php"></script>
<script type="text/javascript" src="//static.afreecatv.com/asset/service/footer/footer.js"></script>
<script type="text/javascript">
document.domain = "afreecatv.com";

$(document).ready(function(){
    if (document.msCapsLockWarningOff == false) { // IE 내부 CAPS ON 메세지 off
      document.msCapsLockWarningOff = true;
    }
    $afid = $('#uid'); //아이디 입력창
    $afpw = $('#password'); //패스워드 입력창
    $afid_label = $('#uid_label'); //아이디 레이블
    $afpw_label = $('#pass_label'); //패스워드 레이블
    $afid_error = $('#iderror');
    $afpw_error = $('#pwerror');

    $afid.focus(function() { //아이디 입력창 포커스
        $afid_label.css('display','none');
    });
    $afpw.focus(function() { //패스워드 입력창 포커스
        $afpw_label.css('display','none');
    });
    $afid.blur(function() { //아이디 입력창 포커스 해제
        if(this.value.length==0) $afid_label.css('display','block');
    });
    $afpw.blur(function() { //패스워드 입력창 포커스 해제
        if(this.value.length==0) $afpw_label.css('display','block');
    });
    $afid.keyup(function(event) { //호환성보기로 인해 추가

      $afid_error.html('');
      var keycode = (event.keyCode ? event.keyCode : event.which);

      if (keycode  == 13 )
      { 
        login();
      }
    });

    $afpw.keypress(function(event) { //호환성보기로 인해 추가

      $afpw_error.html('');

      var s = String.fromCharCode( event.which );  
      if ( s.toUpperCase() === s && s.toLowerCase() !== s && !event.shiftKey ) {
        $(".caps_Lock").show();
      }
      else { 
        $(".caps_Lock").hide();
      }
    }).keyup(function(event) { //호환성보기로 인해 추가

      $afpw_error.html('');
      if (event.which  == '13' || event.keyCode == 13 )
      {
        login();
      }
    });

    if ( $afpw.val() != '') { //자동완성시 라벨 해제
      $afpw_label.css('display','none');
    }
    var request_uri = encodeURIComponent("https://openapi.afreecatv.com/auth/code?client_id=e515195dfe0c6cf7eb2e7bfe05ab582e");
    $('#oAuthJoin').attr('href', 'https://member.afreecatv.com/app/join.php?nExternalType=2&szLoginForm=oAuth&szRedirectUrl='+request_uri);
});

function login()
{
        var uid = document.getElementById("uid");
        var password = document.getElementById("password");
        var action = document.getElementById("action");

        if( uid.value == "" )
        {
                $("#iderror").html("아이디를 입력해주세요");
                uid.focus();
                return;
        }

        if( password.value == "" )
        {
                $("#pwerror").html("비밀번호를 입력해주세요");
                password.focus();
                return;
        }

        GoLogin( uid.value, password.value, location.href, action.value );
}

// 아이디저장 체크
function change_saveid(obj)
{
  SetSaveId(obj.checked);
}


function onLoad_Action()
{
  var tmp_uid = "";

  // 이용제재
  var szBlockMsg = "";
  if( szBlockMsg != "" )
  {
    $("#pwerror").html( szBlockMsg );
  }

  // 아이디 세팅
  if( tmp_uid != "" )
  {
    document.getElementById("uid").value = tmp_uid;
  }

  $("#uid").focus();
  pidFocus = setTimeout(function(){
    if(!document.hasFocus()) $("#uid").focus();
  }, 100);

  // 아이디 저장 세팅
  var save_uid = GetSaveTicket();
  if( save_uid )
  {
    document.getElementById("uid").value = save_uid;
    document.getElementById("uid_label").style.display = 'none';
    document.getElementById("saveid").checked = true;
    $("#password").focus();
    if(pidFocus) clearTimeout(pidFocus);
    pidFocus = setTimeout(function(){
        if(!document.hasFocus()) $("#password").focus();
    }, 100);
  }
}


</script>
<style type="text/css">
body {background: #fff;}
</style>
</head>
<body onload="onLoad_Action();">
<div class="popup_login">
  <form name="full_login_form" onsubmit="return login();">
  <input type="hidden" id="action" value=""/>
  <div class="main_login">
    <h2><a><img src="https://www.afreecatv.com/img/login_logo.gif" alt="afreecaTV" /></a></h2>
    <p class="info"><span class="zh" data-translate="로그인후에이용하실수있습니다">로그인 후 이용하실 수 있습니다.</span></p>
    <fieldset>
      <legend>로그인 입력 폼</legend>
      <p class="id_field">
      <label for="uid" id="uid_label"><span class="zh" data-translate="아이디">아이디</span></label>
      <input id="uid" name="uid" type="text" title="아이디입력" maxlength="50" tabindex="1"/>
    </p>
      <p id='iderror' class="error"></p>
      <p class="pw_field">
      <label for="password" id="pass_label"><span class="zh" data-translate="비밀번호">비밀번호</span></label>
      <input id="password" name="password" type="password" title="비밀번호입력" maxlength="15" tabindex="2"/>
      <span class="caps_Lock" style="display:none;">
          <em></em>
          <strong>Caps Lock</strong>이 켜져 있습니다.
        </span>
      </p>
      <p id='pwerror' class="error"></p>
      <p class="login_btn">
        <button type="button" onclick="login();"><span class="zh" data-translate="로그인">로그인</span></button>
      </p>
      <!-- 2019-0604  -->
      <div class="account_area">
          <!--200316-->
          <a href="https://member.afreecatv.com/app/find_id_pw.php?nExternalType=2" class="find_id">아이디 찾기</a><span class="bar">|</span><a href="https://member.afreecatv.com/app/find_id_pw.php?nExternalType=2&szWork=FIND_PWD" class="account_find">비밀번호 찾기</a>
          <!--//200316-->
      </div>

      <!--200316-->
      <div class="signup_area">
        <p class="desc"><span>아프리카TV 회원이 아니시라면?</span></p>
        <a id="oAuthJoin" href=""  class="btn_signup">회원가입</a>
      </div>
      <!--//200316-->
    </fieldset>
  </div>
  </form>
</div>
<script type="text/javascript" src="https://www.afreecatv.com/script/common/jquery.js"></script>
<script type="text/javascript" src="https://www.afreecatv.com/script/new_main/afreecacook.js"></script>
<script type="text/javascript">
document.domain = "afreecatv.com";
function onAfterLogin(data, isApp){
  var szOnAfterLoginMsg ="";
  nRet =  Number(data.RESULT);

  //휴면 계정 안내 팝업
  if (data.LOGIN_SLEEP == 1)
  {
        var szPopUrl = "https://member.afreecatv.com/app/pop_sleep_info.php";
        if(nRet == -11)
        {
            szPopUrl = szPopUrl+"?second_login=Y";
        }
        window.open(szPopUrl, "login_sleep", "width=404, height=372, toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no");
    }

  switch(nRet)
  {
    case 1:
      var szRequestUri = (szAfterLoginPage.indexOf("hidden_app") > 0) ? "" : GetCookie("request_uri");

      if(szAfterLoginPage =="" && szRequestUri)
      {
        szAfterLoginPage = szRequestUri;
      }

      if( szRequestUri )
      {
        var expireDate = new Date(); // 새로운 expireDate 객체를 생성하고
        expireDate.setDate(expireDate.getDate()-1); // 유효기간의 날짜값을 오늘보다 하루적게(어제) 설정합니다
        document.cookie = "request_uri=; path=/; domain=afreecatv.com;expires=" + expireDate.toGMTString()+";";
      }
      isLogin =true;

      if(data && data.notChangePwd )
      {
        var url = "https://member.afreecatv.com/app/campaign_pw.php"
          ,request_uri = getURLParameter(szAfterLoginPage, "request_uri")
          ,isFromPop = 0 > location.href.indexOf('szFrom=pop') ? false : true
          ;
        if( isApp )
        {
          szAfterLoginPage += '&isChangePwd=1';
        }
        else // 설치형 플레이어 비밀번호 변경창 팝업 안함 (자체에서 처리)
        {
          if( !isFromPop )
          {
            url += "?request_uri=" + (request_uri ? request_uri : "http://www.afreecatv.com");
          }
          if(parent != window)
          {
            if( typeof(data.item) != 'undefined' && typeof(data.comment) != 'undefined' )
            {
              alert( data.comment );
            }
            parent.location.href= url;
            return;
          }
          else
          {
            if(location.href.indexOf("szFrom=full") >= 0)
            {
              if( typeof(data.item) != 'undefined' && typeof(data.comment) != 'undefined' )
              {
                alert( data.comment );
              }
              location.href= url;
              return;
            }
            else window.open(url);
          }
        }
      }
      try
      {
        if( typeof(parent.layerPopup) == 'function' && typeof(data.item) != 'undefined' )
        {
          parent.layerPopup( data.item );
        }
        else if( typeof(data.item) != 'undefined' && typeof(data.comment) != 'undefined' )
        {
          alert( data.comment );
        }
      }
      catch(e)
      {
      }

      // if(data.showSecondPwd == 1 && data.notChangePwd == undefined && szAfterLoginPage.indexOf("hidden_app") == -1)
      // {
      //   var szPopUrl = "https://member.afreecatv.com/app/campaign_second_pw.php";
      //   window.open(szPopUrl, "secondPwd", "width=420, height=550, toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no");
      // }
      onAfterLoginLogOut();
      break;
    case -4:
      szOnAfterLoginMsg = '아프리카TV 운영원칙 위반으로 서비스 이용이 정지 되었습니다.<br>정지기간 중 주민등록번호 도용 등을 통한 허위아이디 생성으로 동일한 위반행위를<br>하실경우, 제재조치와는 별도로 관련법에 의거 법적인 처벌을 받을 수 있습니다.';
      $("#pwerror").html(szOnAfterLoginMsg);
      break;
    case -5:
      var uid = data.UID;
      //탈퇴중인 아이디 입니다.
      szOnAfterLoginMsg = '탈퇴 중인 아이디 입니다. 고객센터로 문의해주세요.';
      $("#pwerror").html(szOnAfterLoginMsg);
      break;
    case -6:
      szOnAfterLoginMsg = '전환이 필요한 아이디 입니다.';
      $("#pwerror").html(szOnAfterLoginMsg);
      
      // var szLoginID = encodeURI($("#uid").val());
      // var szPopUrl = "https://login.afreecatv.com/membership/changeMember.php?szWork=realName&id=" + szLoginID;
      // window.open(szPopUrl, "convert", "width=435, height=455, toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no").focus();
       break;
    case -8 :
      szOnAfterLoginMsg = '안녕하세요. 아프리카TV 입니다.<br>접속하신 아이디는 만 14세 미만 법정대리인 동의가<br>필요한 아이디로써 법정대리인 동의를 받지 않는 경우<br>서비스 이용이 불가능합니다. 서비스 이용에 불편함이<br>없도록 인증 후 서비스 이용 부탁 드립니다.';
      $("#pwerror").html(szOnAfterLoginMsg);
      //alert("부모 동의가 필요합니다.");
      // if( confirm("안녕하세요. 아프리카TV 입니다.<br>접속하신 아이디는 만 14세 미만 법정대리인 동의가<br>필요한 아이디로써 법정대리인 동의를 받지 않는 경우<br>서비스 이용이 불가능합니다. 서비스 이용에 불편함이<br>없도록 인증 후 서비스 이용 부탁 드립니다.") )
      // {
      //   var szPopUrl = (/(android|iphone|ipad|ipod)/gi).test(navigator.userAgent) ? 'http://m.afreecatv.com/realname/a/parent/id/' + $('#uid').val() : 'https://member.afreecatv.com/app/pop_verify_self_minor_none_login.php';
      //   window.open(szPopUrl, "convert", "width=435, height=455, toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no");
      // }
      // else
      // {
      //   alert("동의를 받지 않는 경우 서비스 이용이<br>불가능하며 회원탈퇴 또는 인증방법에<br>대해 궁금하신 사항 있으시면<br>고객센터 1688-7022 (전화상담)<br>youth@afreecatv.com (메일문의)<br>로 문의 부탁 드립니다.");
      // }
      break;
    case -9:
      szOnAfterLoginMsg = '서비스 이용에 불편을 드려 죄송합니다.<br>회원님 아이디의 비정상적인 로그인(대량 접속 등)이 확인되어 접속이 차단되었습니다.<br>정상 서비스 이용을 원하실 경우 고객센터로 문의하시면 신속하게 처리해 드리겠습니다.';
      $("#pwerror").html(szOnAfterLoginMsg);
      // var szPopUrl = "https://member.afreecatv.com/app/pop_login_block.php";
      // window.open(szPopUrl, "loginblock", "width=525, height=555, toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no");
      break;
    case -11:
      var szRequestUri = (szAfterLoginPage.indexOf("hidden_app") > 0) ? "" : GetCookie("request_uri");
      if(szAfterLoginPage =="" && szRequestUri)
      {
        szAfterLoginPage = szRequestUri;
      }
      var request_uri = getURLParameter(szAfterLoginPage, "request_uri");
      request_uri = request_uri ? request_uri : "http://www.afreecatv.com";
      var secondLoginKey = data.SECOND_LOGIN_KEY;

      if(szAfterLoginPage.indexOf("hidden_app") > 0)
      {
        var szReturnUrl = "https://login.afreecatv.com/afreeca/second_login.php?secondLoginKey="+secondLoginKey+"&szFrom=hidden_app"
        var szSecondLoginUrl = "https://login.afreecatv.com/afreeca/login.php?szFrom=hidden_app_second&request_uri="+encodeURIComponent(szReturnUrl)+"&secondLoginKey="+secondLoginKey;
        location.replace(szSecondLoginUrl);
      }
      else
      {
        location.href = "https://login.afreecatv.com/afreeca/second_login.php?secondLoginKey="+secondLoginKey+"&szFrom="+szFrom+"&isSaveId="+isSaveId+"&isApp="+szApp+"&action="+szAction+"&request_uri=" + encodeURIComponent(request_uri);
      }
      break;
    case -12:
      var secondLoginKey = data.SECOND_LOGIN_KEY;

      if(secondLoginKey == undefined) //설정 권유 화면
      {
        top.location.href = "https://member.afreecatv.com/app/user_security.php";
      }
      else  //2차 비밀번호 찾기
      {
        location.href = "https://member.afreecatv.com/app/find_security.php?szFrom=full&secondLoginKey="+secondLoginKey;
      }
      break;
    case 0:
      szOnAfterLoginMsg = '등록되지 않은 아이디이거나, 아이디 또는 비밀번호를 잘못 입력하셨습니다.';
      $("#pwerror").html(szOnAfterLoginMsg);
      break;
    case -1:
      szOnAfterLoginMsg = '등록되지 않은 아이디이거나, 아이디 또는 비밀번호를 잘못 입력하셨습니다.';
      $("#pwerror").html(szOnAfterLoginMsg);
      break;
    case -3 :
      szOnAfterLoginMsg = '아이디/패스워드 입력이 잘못되었습니다';
      $("#pwerror").html(szOnAfterLoginMsg);
      break;
    case -7 :
      szOnAfterLoginMsg = '영문 아프리카TV에서 가입한 계정으로는 한국 아프리카TV 이용이 불가합니다.';
      $("#pwerror").html(szOnAfterLoginMsg);
      break;
    case -10:
      szOnAfterLoginMsg = '서비스 이용에 불편을 드려 죄송합니다.<br>회원님 아이디의 비정상적인 로그인(대량 접속 등)이 확인되어 접속이 차단되었습니다.<br>정상 서비스 이용을 원하실 경우 고객센터로 문의하시면 신속하게 처리해 드리겠습니다.';
      $("#pwerror").html(szOnAfterLoginMsg);
      break;
    case -32008:
      szOnAfterLoginMsg = '로그인에 실패했습니다. 고객센터로 문의해주세요.';
      $("#pwerror").html(szOnAfterLoginMsg);
      break;
    default:
      szOnAfterLoginMsg = '로그인에 실패하였습니다';
      $("#pwerror").html(szOnAfterLoginMsg + "(" + nRet + ")");
      break;
  }

  //유저함수
  try{
    onLogin( nRet ,szOnAfterLoginMsg);  // 초콜릿팩토리에서 사용함
  }catch(e){}
}

</script>
</script>
</body>
</html>