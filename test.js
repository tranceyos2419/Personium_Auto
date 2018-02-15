var appCellUrl = "https://demo.personium.io/u-aizu-100",
  engineEndPoint = "https://demo.personium.io/app-aizu-health-store/__/html/Engine/getAppAuthToken",
  github = "https://api.github.com/repos/request/request";

getAppAuthToken = function(appCellUrl) {
    return $.ajax({
        type: "POST",
        url: engineEndPoint,
        data: {
                p_target: appCellUrl
        },
        headers: {
          'Accept':'application/json',
          'x-personium-cors':'true'
      }

    });
};
console.log(getAppAuthToken());
