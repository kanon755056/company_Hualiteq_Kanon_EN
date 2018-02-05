post = function (params) {
  var data = JSON.stringify(params.json, undefined, 2);
  var request = {
    url: util.createUri(params.uri),
    type: 'POST',
    data: data,
    headers: {
      'Content-Type': 'application/json'
    },
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    },
    success: function (result) {
      console.log(result);
      if (params.callback) {
        params.callback(result);
      }
    },
    error: function (result) {
      console.log(result);
      if (params.error) {
        params.error(result);
      }
    }
  };
  if (config.username && config.password) {
    request.beforeSend = function (xhr) {
      xhr.setRequestHeader('Authorization', util.encodeCredentials());
    };
  } else if (config.contactCenterId) {
    request.beforeSend = function (xhr) {
      xhr.setRequestHeader('ContactCenterId', config.contactCenterId);
    };
  }
  console.log('Sending POST ' + params.uri + ' ' + data);
  $.ajax(request);
};
