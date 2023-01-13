export const CookiesHelper = {
  getItem: function (sKey) {
    return (
      decodeURIComponent(
        document.cookie.replace(
          new RegExp(
            "(?:(?:^|.*;)\\s*" +
            encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") +
            "\\s*\\=\\s*([^;]*).*$)|^.*$"
          ),
          "$1"
        )
      ) || null
    );
  },
  setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
      return false;
    }
    var sExpires = "";
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires =
            vEnd === Infinity
              ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT"
              : "; max-age=" + vEnd;
          break;
        case String:
          sExpires = "; expires=" + vEnd;
          break;
        case Date:
          sExpires = "; expires=" + vEnd.toUTCString();
          break;
      }
    }
    document.cookie =
      encodeURIComponent(sKey) +
      "=" +
      encodeURIComponent(sValue) +
      sExpires +
      (sDomain ? "; domain=" + sDomain : "") +
      (sPath ? "; path=" + sPath : "") +
      (bSecure ? "; secure" : "");
    return true;
  },
  removeItem: function (sKey, sPath, sDomain) {
    if (!sKey || !this.hasItem(sKey)) {
      return false;
    }
    document.cookie =
      encodeURIComponent(sKey) +
      "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" +
      (sDomain ? "; domain=" + sDomain : "") +
      (sPath ? "; path=" + sPath : "");
    return true;
  },
  hasItem: function (sKey) {
    return new RegExp(
      "(?:^|;\\s*)" +
      encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") +
      "\\s*\\="
    ).test(document.cookie);
  },
  keys: /* optional method: you can safely remove it! */ function () {
    var aKeys = document.cookie
      .replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "")
      .split(/\s*(?:\=[^;]*)?;\s*/);
    for (var nIdx = 0; nIdx < aKeys.length; nIdx++) {
      aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
    }
    return aKeys;
  },
};

export function updateLanguageInCookies(lang) { 
  CookiesHelper.setItem(
    "defaultLanguage",
    lang,
    604800,
    window.location.href
  );
}

export function getParameterByName(name, url, skipLowercaseValues) {
  if (!url) url = window.location.href;
  if (!skipLowercaseValues) {
    url = url.toLowerCase(); // This is just to avoid case sensitiveness
  }
  name = name.replace(/[\[\]]/g, "\\$&")// This is just to avoid case sensitiveness for query parameter name
  if (!skipLowercaseValues) {
    name = name.toLowerCase();
  }
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

function validatePhnNumber(phn) {
  const letterNumber = /^[0-9a-zA-Z]+$/;
  if (letterNumber.test(phn) && phn.length >= 6) {
    return true;
  }

  return false;
}

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (emailPattern.test(email)) {
    return true;
  }

  return false;
}

export function validateRegisterForm(registerData) {
  const {
    email,
    password,
    name,
    phone,
    comp_name,
    address,
    plz,
    city,
    country,
  } = registerData;

  const errors = [];

  if (!password.length || password.length < 8) {
    errors.push("password");
  }

  if (!name.length) {
    errors.push("name");
  }

  if (!validatePhnNumber(phone)) {
    errors.push("phone");
  }

  if (!validateEmail(email)) {
    errors.push("email");
  }

  if (!comp_name.length) {
    errors.push("comp_name");
  }

  if (!address.length) {
    errors.push("address");
  }


  if (!plz) {
    errors.push("plz");
  }

  if (!city.length) {
    errors.push("city");
  }

  return errors;
}

export function validateLoginForm(loginData) {
  const {
    email,
    password
  } = loginData;

  const errors = [];

  if (!password.length) {
    errors.push("password");
  }

  if (!validateEmail(email)) {
    errors.push("email");
  }

  return errors;
}

export function validateForgetPwdForm(loginData) {
  const {
    email,
  } = loginData;

  const errors = [];
  if (!validateEmail(email)) {
    errors.push("email");
  }

  return errors;
}

export function validateResetPwdForm(loginData) {
  const {
    password,
    confirm_password
  } = loginData;

  const errors = [];

  if (!password.length || password.length < 8) {
    errors.push("password");
  }

  if (!confirm_password.length || confirm_password.length < 8) {
    errors.push("confirm_password");
  }

  if (password != confirm_password) {
    errors.push("confirm_password");
  }

  return errors;
}

export function pushUrlToState(url, title) {
  window.history && window.history.pushState({}, title || "", url);
}

export function createUUID() {
  let dt = new Date().getTime();
  let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}

// export function getQueryStringParams(queryString = location.search.substring(1)) {
//   var params = {},
//     decodeText = function (s) {
//       return decodeURIComponent(s.replace(/\+/g, " "));
//     },
//     keyValues = [],
//     urlSplits = [];
//   if (queryString) {
//     keyValues = queryString.split('&');
//     for (var i in keyValues) {
//       var key = keyValues[i].split('=');
//       if (key.length > 1) {
//         params[decodeText(key[0])] = decodeText(key[1]);
//       }
//     }
//   }
//   return params;
// }



export function replaceUrlInState(url, title) {
  window.history && window.history.replaceState({}, title || "", url);
}

export function isOnMobile() {
  return window.innerWidth < 768;
}

export function scrollToElement(el, scrollBuffer, scrollElement = null) {
  if (el && document.querySelector(el)) {
    let element = document.querySelector(el);
    let elementHeight = (element.offsetTop - element.scrollTop + element.clientTop);
    elementHeight += scrollBuffer;
    if (scrollElement && document.querySelector(scrollElement)) {
      document.querySelector(scrollElement).scrollTo(0, elementHeight)
    } else {
      window.scrollTo(0, elementHeight);
    }
  }
}

export function getValueFromSS(key) {
  let value = JSON.parse(sessionStorage.getItem(key));
  return value;
}

export function setValueToSS(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

// export function openCalendlyView() {
//   Calendly.initPopupWidget({ url: 'https://calendly.com/go-parts/30min' })
// }

export function getPanelHeaders() {
  const loginToken          = localStorage.getItem( "loginAppToken");
  let headers = {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  };
  if(loginToken) {
    headers['X-CUSTOMER-TOKEN'] = loginToken;
  }
  return headers;
}

export function getPanelHeadersForPartsChecker() {
  const loginToken          = localStorage.getItem("client_key") && JSON.parse(localStorage.getItem("client_key"));

  let headers = {
    'Accept': 'application/json, text/plain, */*',
    'CLIENT-NAME': loginToken && loginToken.client_name,
    'CLIENT-SECRET': loginToken && loginToken.client_secret
  };

  return headers;
}


export function postMessageToParentWindow(data) {
  const message = {
    channel: 'GO_PARTS',
    data: data
  };
  window.parent.postMessage(message, '*');
}

export function randomIntFromInterval(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function getHeaderName(pathname){
    if(pathname.includes('workshop')){
      return 'Werkstatt';
    }
    if(pathname.includes('insurance')){
      return 'Versicherung';
    }
    else{
      return 'Werkstatt';     
    }
}
