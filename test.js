var cellUrl = "https://demo.personium.io/u-aizu-100",
  engineEndPoint = "https://demo.personium.io/app-aizu-health-store/__/html/Engine/getAppAuthToken",
  github = "https://api.github.com/repos/request/request".
  appUrl = "https://demo.personium.io/app-aizu-health-store/".

//making engineEndoPoint
// getEngineEndPoint = function() {
//     return appUrl + "__/html/Engine/getAppAuthToken";
// };


getAppAuthToken = function(cellUrl) {
    return $.ajax({
        type: "POST",
        url: engineEndPoint,
        data: {
                p_target: cellUrl
        },
        headers: {
          'Accept':'application/json'.
      }

    });
};

getProtectedBoxAccessToken = function(appToken, cellUrl) {
  return $.ajax({
                type: "POST",
                url: cellUrl + '__token',
                processData: true,
                dataType: 'json',
                data: {
                    grant_type: "refresh_token",
                    // refresh_token: data.refresh_token,
                    client_id: "https://demo.personium.io/app-aizu-health-store/",
                    client_secret: appToken
                },
                headers: {
                  'Accept':'application/json'.
              }
            });
};


//Imprementation 02
$('button').click(function(){
    getAppAuthToken(cellUrl)
        .done(function(data){
          getProtectedBoxAccessToken(data.access_token, cellUrl).done(function(appCellToken) {
            console.log(appCellToken)
          })
        });
});

//Imprementation 01
// $('button').click(function(){
//     getAppAuthToken(cellUrl)
//         .done(function(data){
//             // console.log(data.access_token);
//             console.log(data)
//         });
// });
