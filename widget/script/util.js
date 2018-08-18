/**
 * @fileOverview
 * @author zhanghong
 */

var util = (function () {
  const isAndroid = /Android/i.test(navigator.userAgent);
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
<<<<<<< HEAD:src/lib/util.js
  /*   var mystorage = (function mystorage() {
      var ms = "mystorage";
      var storage = window.localStorage;
      if (!window.localStorage) {
        //alert("浏览器支持localstorage"); 
        console.log("浏览器支持localstorage")
=======
  var mystorage = (function mystorage() {
    var ms = "mystorage";
    var storage = window.localStorage;
    if (!window.localStorage) {
      //alert("浏览器支持localstorage");
      return false;
    }

    var set = function (key, value) {
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

    var get = function (key) {
      //读取
      var mydata = storage.getItem(ms);
      if (!mydata) {
>>>>>>> acb183021c6ab4e74aaa2988b1dc15421e3271db:script/util.js
        return false;
      }

      var set = function (key, value) {
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

<<<<<<< HEAD:src/lib/util.js
      var get = function (key) {
        //读取
        var mydata = storage.getItem(ms);
        if (!mydata) {
          return false;
        }
        mydata = JSON.parse(mydata);

        return mydata.data[key];
      };

      var remove = function (key) {
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

      var clear = function () {
        //清除对象
        storage.removeItem(ms);
      };

      var init = function () {
        storage.setItem(ms, '{"data":{}}');
      };
      return {
        set: set,
        get: get,
        remove: remove,
        init: init,
        clear: clear
      };
    })(); */

  /*     header = {
              Authorization: "Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJ1c2VybmFtZSI6IjE1MjExODg3NzMzIiwiZXhwIjoxNTM1NzE2NDgwLCJlbWFpbCI6IiJ9.N4pUB7nBCKklniLaZYVwgTlAZ9cEvWIGO1wAZb34sxY"
            }; */

  return {
    /*     mystorage: mystorage,
     */
    ajax: function (url, data, bc, method, isFalseToken) {
      var header = {}
      if (!isFalseToken) {
        var token = window.mystorage.get("token");
=======
    var remove = function (key) {
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

    var clear = function () {
      //清除对象
      storage.removeItem(ms);
    };

    var init = function () {
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
    ajax: function (url, data, bc, method, isFalseToken) {
      var header = {}
      if (!isFalseToken) {
        var token = this.mystorage.get("token");
>>>>>>> acb183021c6ab4e74aaa2988b1dc15421e3271db:script/util.js
        if (token) {
          header = {
            Authorization: "Token " + token
          };
<<<<<<< HEAD:src/lib/util.js
=======
        }
      }
>>>>>>> acb183021c6ab4e74aaa2988b1dc15421e3271db:script/util.js

        }
      }
      if (isAndroid || isIOS) {
        this.apiPost(url, data, bc, header, method);
      } else {
        this.fetchPost(url, data, bc, header, method);
      }
    },
    fetchPost: function (url, data, bc, header, method) {
      header = header || {};
      method = method || "POST";
      //Authorization
      var headers = {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      };
<<<<<<< HEAD:src/lib/util.js
=======
      //Object.assign(headers, header);
>>>>>>> acb183021c6ab4e74aaa2988b1dc15421e3271db:script/util.js
      headers = this.extend(header, headers)

      this._fetch(
        url,
        data,
        method, {
          dataType: "json",
          cookie: true,
          headers: headers
        },
        bc
      );
    },

    o2s: function (obj, arr = [], idx = 0) {
      for (let item in obj) {
        arr[idx++] = [item, obj[item]];
      }
      return new URLSearchParams(arr).toString();
    },
    _fetch: function (url, data, method = "GET", options = {}, bc) {
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
        /*  console.log(options.headers);
         console.log(params.headers); */
      } else {
        params.headers = new Headers({
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        });
      }
      fetch(url, params)
        .then(r => (options.dataType == "text" ? r.text() : r.json()))
        .then(function (r) {
          bc(r);
        });
    },

    extend: function (options, target) {
      var target = target || this;
      for (var key in options) {
        target[key] = options[key];
      }
      return target;
    },
    apiPost: function (url, data, bc, header, method) {
<<<<<<< HEAD:src/lib/util.js
      var self = this;
=======
>>>>>>> acb183021c6ab4e74aaa2988b1dc15421e3271db:script/util.js
      data = data || {};
      header = header || {};
      method = method || "POST";
      var headers = {
        "Content-Type": "application/json"
      };
      //Object.assign(headers, header);
      headers = this.extend(header, headers)

      api.ajax({
          url: url,
          method: method,
          headers: headers,
          data: {
            body: data
          }
        },
        function (ret, err) {
          if (ret) {
            bc(ret);
            console.log(JSON.stringify(ret));
            /*    api.alert({
                 msg: JSON.stringify(ret)
               }); */


          } else {
            console.log(JSON.stringify(err));
            /*    api.alert({
                 msg: JSON.stringify(err)
               }); */
          }
        }
      );
    },
    login: function (data) {
<<<<<<< HEAD:src/lib/util.js

      if (data.code != -1) {
        window.mystorage.clear();
        window.mystorage.set('token', data.token);
        window.mystorage.set('mobile', data.mobile);
        api.sendEvent({
          name: 'myrefresh',
        });
        setTimeout(function () {
          api.closeToWin({
            name: 'root',
            reload: true
          });
        }, 10)
      } else {
        this.alert(data.msg)
      }

    },

    loginout: function (data) {
      window.mystorage.clear();
      //api.closeWin();

      api.sendEvent({
        name: 'myclear',
      });
      setTimeout(function () {
        api.closeToWin({
          name: 'root',
          reload: true
        });
      }, 10)



    },
    getQueryString: function () {
      var qs = location.search.substr(1), // 获取url中"?"符后的字串  
        args = {}, // 保存参数数据的对象
        items = qs.length ? qs.split("&") : [], // 取得每一个参数项,
        item = null,
        len = items.length;

      for (var i = 0; i < len; i++) {
        item = items[i].split("=");
        var name = decodeURIComponent(item[0]),
          value = decodeURIComponent(item[1]);
        if (name) {
          args[name] = value;
        }
      }
      return args;
    },


    getUserInfo: function (bc) {
      var token = window.mystorage.get("token");
      console.log("getUserInfo token")
      console.log(token)
=======
      this.mystorage.clear();
      this.mystorage.set('token', data.token);
      this.mystorage.set('mobile', data.mobile);
      api.setFrameGroupIndex({
        name: 'group',
        index: 2,
        reload: true
      });

    },
    getUserInfo: function (bc) {
      var token = this.mystorage.get("token");
      console.log("token");
      console.log(token);
>>>>>>> acb183021c6ab4e74aaa2988b1dc15421e3271db:script/util.js
      if (token) {
        util.ajax(
          "https://restful.yatou.com/user", {},
          function (res) {
            var usreData = res[0];
            bc(usreData);
            //console.log(usreData);
          },
          "GET"
        );
      } else {
        bc(null);
      }
    },
<<<<<<< HEAD:src/lib/util.js
    addEvent: function (even, bc) {
      if (isAndroid || isIOS) {
        api.addEventListener({
            name: even
          },
          function (ret) {
            bc();
          }
        );
      }

    },
=======
>>>>>>> acb183021c6ab4e74aaa2988b1dc15421e3271db:script/util.js
    goPage: function (url, name) {
      if (isAndroid || isIOS) {
        console.log(new Date().getTime() + "");
        name = name || new Date().getTime() + "";

        /*       api.closeFrameGroup({
                name: 'group'
              }); */
        api.openWin({
          name: name,
          scrollEnabled: true,
          url: url
        });
        //console.log(url);
      } else {
        location.href = url;
      }
    },
    alert: function (msg) {
      if (isAndroid || isIOS) {
        api.alert({
            title: "消息",
            msg: msg
          },
          function (ret, err) {}
        );
      } else {
        alert(msg);
      }
    }
  };
})();
export default util;