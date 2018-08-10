/**
 * @fileOverview
 * @author zhanghong
 */

var util = (function() {
  const isAndroid = /Android/i.test(navigator.userAgent);
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  var mystorage = (function mystorage() {
    var ms = "mystorage";
    var storage = window.localStorage;
    if (!window.localStorage) {
      //alert("浏览器支持localstorage");
      return false;
    }

    var set = function(key, value) {
      //存储
      var mydata = storage.getItem(ms);
      if (!mydata) {
        this.init();
        mydata = storage.getItem(ms);
      }
      mydata = JSON.parse(mydata);
      mydata.data[key] = value;
      storage.setItem(ms, JSON.stringify(mydata));
      return mydata.data;
    };

    var get = function(key) {
      //读取
      var mydata = storage.getItem(ms);
      if (!mydata) {
        return false;
      }
      mydata = JSON.parse(mydata);

      return mydata.data[key];
    };

    var remove = function(key) {
      //读取
      var mydata = storage.getItem(ms);
      if (!mydata) {
        return false;
      }

      mydata = JSON.parse(mydata);
      delete mydata.data[key];
      storage.setItem(ms, JSON.stringify(mydata));
      return mydata.data;
    };

    var clear = function() {
      //清除对象
      storage.removeItem(ms);
    };

    var init = function() {
      storage.setItem(ms, '{"data":{}}');
    };
    return {
      set: set,
      get: get,
      remove: remove,
      init: init,
      clear: clear
    };
  })();

  return {
    mystorage: mystorage,
    ajax: function(url, data, bc, method) {
      var token = this.mystorage.get("token");
      if (token) {
        var header = { Authorization: "Token " + token };
      }

      if (isAndroid || isIOS) {
        this.apiPost(url, data, bc, header, method);
      } else {
        this.fetchPost(url, data, bc, header, method);
      }
    },
    fetchPost: function(url, data, bc, header, method) {
      header = header || {};
      method = method || "POST";
      //Authorization
      var headers = {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      };
      Object.assign(headers, header);
      this._fetch(
        url,
        data,
        method,
        {
          dataType: "json",
          cookie: true,
          headers: headers
        },
        bc
      );
    },

    o2s: function(obj, arr = [], idx = 0) {
      for (let item in obj) {
        arr[idx++] = [item, obj[item]];
      }
      return new URLSearchParams(arr).toString();
    },
    _fetch: function(url, data, method = "GET", options = {}, bc) {
      const body = this.o2s(data);
      let params = {
        method: method
      };
      if (method === "GET") {
        // 如果是GET请求，拼接url
        url += "?" + body;
      } else {
        params.body = body;
      }
      /*  if (options.cookie != undefined) {
        params.credentials = "include";
      } */
      if (options.headers != undefined && typeof options.headers == "object") {
        params.headers = new Headers(options.headers);
        console.log(options.headers);
        console.log(params.headers);
      } else {
        params.headers = new Headers({
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        });
      }
      fetch(url, params)
        .then(r => (options.dataType == "text" ? r.text() : r.json()))
        .then(function(r) {
          bc(r);
        });
    },
    apiPost: function(url, data, bc, header, method) {
      data = data || {};
      header = header || {};
      method = method || "POST";
      var headers = {
        "Content-Type": "application/json"
      };
      Object.assign(headers, header);
      api.ajax(
        {
          url: url,
          method: method,
          headers: headers,
          data: {
            body: data
          }
        },
        function(ret, err) {
          if (ret) {
            bc(ret);
            console.log(JSON.stringify(ret));
            //api.alert({ msg: JSON.stringify(ret) });
          } else {
            console.log(JSON.stringify(err));
            //api.alert({ msg: JSON.stringify(err) });
          }
        }
      );
    },
    getUserInfo: function(bc) {
      var token = this.mystorage.get("token");
      console.log("token");
      console.log(token);
      if (token) {
        util.ajax(
          "https://restful.yatou.com/user",
          {},
          function(res) {
            var usreData = res[0];
            bc(usreData);
            console.log(usreData);
          },
          "GET"
        );
      } else {
        bc(null);
      }
    },
    goPage: function(url, name) {
      if (isAndroid || isIOS) {
        console.log(new Date().getTime() + "");
        name = name || new Date().getTime() + "";
        api.openWin({
          name: name,
          url: url
        });
        //console.log(url);
      } else {
        location.href = url;
      }
    },
    alert: function(msg) {
      if (isAndroid || isIOS) {
        api.alert(
          {
            title: "消息",
            msg: msg
          },
          function(ret, err) {}
        );
      } else {
        alert(msg);
      }
    }
  };
})();
export default util;
