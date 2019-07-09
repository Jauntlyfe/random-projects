//function weather() {
//
//  var location = document.getElementById("location");
//  var apiKey = 'e2d0f433cdc06d564d9814cf229ec123'; // PLEASE SIGN UP FOR YOUR OWN API KEY
//  var url = 'https://api.openweathermap.org/data/2.5/weather?';
//
//    
   
//  navigator.geolocation.getCurrentPosition(success, error);
//
//  function success(position) {
//    latitude = position.coords.latitude;
//    longitude = position.coords.longitude;
//    lat = coord.lat;
//    long = coord.long;
//
//    location.innerHTML = 'Latitude is ' + lat + '° <br> Longitude is ' + long + '°';
//
//      
//      
//     $.getJSON(url + "?" + lat , function(data) {
//      $('#temp').html(data.currently.temperature + '° F');
//      $('#minutely').html(data.minutely.summary);
//    });
//  }
//
//  function error() {
//    location.innerHTML = "Unable to retrieve your location";
//  }
//
//  location.innerHTML = "Locating...";
//}
//
//weather();


            $.getJSON("https://jauntlyfe.github.io/sample-json-data/artist.json", function(main){
                        console.log(main);
                        //$("#space").append(main);
    
                        
                            $.each(main.artists, function(index, value){
                               
                                $("#space").append(main.artists[index].artistname + "<br>")
                                
                            });
                           
                            for( var i in main.artists){
                                 $("#space").append("<img src=" + main.artists[i].url + " ' />");
                                
                                
                            //var snoop = "<img src=" + main.artists[2].url  + " ' />";
                            $("#space img").on('click', function(){
                                
                                
                                $("#space img").toggle(1);
                                
                            });   
                                

                            }
                          
                    });


$.ajax({
   
        method:"GET",
        //url:"https://raw.githubusercontent.com/RichmondDay/public/master/test_vehicle_inventory_data.json",
        //url: "https://picsum.photos/v2/list",
    
        //Calling images to find from splashbase
        url: "http://www.splashbase.co/api/v1/images/latest",
        dataType: "json",
        success: function(data){
                console.log(data);
            
                //$("#result").append(data.url);
                
                     
                $.each(data.images, function(i, val){
                        //Loops through the ids and image URL and returns the id number and pictures from server.
                        // Created a div to hold the text on top of image first.
                        // Created the inner div to hold each image. 
                        $("#result").append("<div id=m-text>" +  data.images[i].id + " " + " <div id=m-image><img src=" + data.images[i].url + " ' /> </div></div> <br>" );
                    
                  
                        //$("#result").append("<br>" + data.images[i].id + "<br>" + "<img src=" + data.images[i].url + " ' /> <br>");
                    
                    
                });
       
            
                
                        $("#i-holder").append("<img src=" + data.images[3].url + " ' /> <br>");
            
                // Show hide function of the results div
                $("#b-hide").on('click', function(){
                   $("#result").toggle(); 
                    
                    
                });    
            
            },
                error: function(data) {
                    console.log(data);


                }
        
    
             
    
}); 