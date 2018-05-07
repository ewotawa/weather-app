/* weather App JS */

var latData = "";
var longData = "";

var endpoint = "https://fcc-weather-api.glitch.me/";
var route = "";
var requestURL = "";
var request = new XMLHttpRequest();

/* API detail */
var coord = [];
var lat = "";
var long = "";
var weather = [];
var weatherId = "";
var weatherMain = ""
var weatherDesc = "";
var weatherIcon = "";
var base = "";
var main = [];
var mainTemp = "";
var mainPressure = "";
var mainHumidity = "";
var mainTempMin = "";
var mainTempMax = "";
var visibility = "";
var windSpeed = "";
var cloudsAll = "";
var dt = "";
var sysCountry = "";
var sysSunrise = "";
var sysSunset = "";
var name = "";
var windIcon = "";

var streetAddress = "";
var city = "";
var state = "";
var zip = "";

var streetAddressRoute = "";
var cityRoute = "";
var stateRoute = "";
var zipRoute = "";

var geoEndpoint = "https://geocoding.geo.census.gov/geocoder/locations/";
var geoRoute = "";
var geoRequestURL = "";
var geoRequest = new XMLHttpRequest();

/* css */
var divOpenShadow = "<div class=" + "\"" + "boxShadow" + "\"" + ">";
var divClose = "</div>"
var divOpenDisplayNone = "<div style=" + "\"" + "display:none" + "\"" + ">";
var divOpen = "<div>";

/* div details */
var getLocation = "";
var getDateTime = "";
var getWeatherIcon = "";
var getTempC = "";
var getTempF = "";
var getMain = "";
var getDesc = "";
var getSunrise = "";
var getSunset = "";
var getTempMinC = "";
var getTempMinF = "";
var getTempMaxC = "";
var getTempMaxF = "";
var getPressureHpa = "";
var getPressureInHg = "";
var getHumidity = "";
var getWindKph = "";
var getWindMph = "";
var getWindIcon = "";
var getWindDirection = "";
var weatherHeader = "";

/* weather icon array */
var idArray = [
    ['200','thunderstorm with light rain','wi-day-thunderstorm','wi-night-alt-thunderstorm'],
    ['201','thunderstorm with rain','wi-day-thunderstorm','wi-night-alt-thunderstorm'],
    ['202','thunderstorm with heavy rain','wi-day-thunderstorm','wi-night-alt-thunderstorm'],
    ['210','light thunderstorm','wi-day-thunderstorm','wi-night-alt-thunderstorm'],
    ['211','thunderstorm','wi-day-thunderstorm','wi-night-alt-thunderstorm'],
    ['212','heavy thunderstorm','wi-day-thunderstorm','wi-night-alt-thunderstorm'],
    ['221','ragged thunderstorm','wi-day-thunderstorm','wi-night-alt-thunderstorm'],
    ['230','thunderstorm with light drizzle','wi-day-thunderstorm','wi-night-alt-thunderstorm'],
    ['231','thunderstorm with drizzle','wi-day-thunderstorm','wi-night-alt-thunderstorm'],
    ['232','thunderstorm with heavy drizzle','wi-day-thunderstorm','wi-night-alt-thunderstorm'],
    ['300','light intensity drizzle','wi-day-sprinkle','wi-night-sprinkle'],
    ['301','drizzle','wi-day-sprinkle','wi-night-sprinkle'],
    ['302','heavy intensity drizzle','wi-day-sprinkle','wi-night-sprinkle'],
    ['310','light intensity drizzle rain','wi-day-rain','wi-night-rain'],
    ['311','drizzle rain','wi-day-rain','wi-night-rain'],
    ['312','heavy intensity drizzle rain','wi-day-rain','wi-night-rain'],
    ['313','shower rain and drizzle','wi-day-rain','wi-night-rain'],
    ['314','heavy shower rain and drizzle','wi-day-rain','wi-night-rain'],
    ['321','shower drizzle','wi-day-showers','wi-night-alt-showers'],
    ['500','light rain','wi-day-rain','wi-night-alt-rain'],
    ['501','moderate rain','wi-day-rain','wi-night-alt-rain'],
    ['502','heavy intensity rain','wi-day-rain','wi-night-alt-rain'],
    ['503','very heavy rain','wi-day-rain','wi-night-alt-rain'],
    ['504','extreme rain','wi-day-rain','wi-night-alt-rain'],
    ['511','freezing rain','wi-day-sleet','wi-night-alt-sleet'],
    ['520','light intensity shower rain','wi-day-rain','wi-night-rain'],
    ['521','shower rain','wi-day-rain','wi-night-rain'],
    ['522','heavy intensity shower rain','wi-day-rain','wi-night-rain'],
    ['531','ragged shower rain','wi-day-rain','wi-night-rain'],
    ['600','light snow','wi-day-snow','wi-night-alt-snow'],
    ['601','snow','wi-day-snow','wi-night-alt-snow'],
    ['602','heavy snow','wi-day-snow','wi-night-alt-snow'],
    ['611','sleet','wi-day-sleet','wi-night-alt-sleet'],
    ['612','shower sleet','wi-day-sleet','wi-night-alt-sleet'],
    ['615','light rain and snow','wi-day-rain-mix','wi-night-alt-rain-mix'],
    ['616','rain and snow','wi-day-rain-mix','wi-night-alt-rain-mix'],
    ['620','light shower snow','wi-day-snow','wi-night-alt-snow'],
    ['621','shower snow','wi-day-snow','wi-night-alt-snow'],
    ['622','heavy shower snow','wi-day-snow','wi-night-alt-snow'],
    ['701','mist','wi-day-haze','wi-day-haze'],
    ['711','smoke','wi-smoke','wi-smoke'],
    ['721','haze','wi-day-haze','wi-day-haze'],
    ['731','sand, dust whirls','wi-sandstorm','wi-sandstorm'],
    ['741','fog','wi-day-fog','wi-night-fog'],
    ['751','sand','wi-sandstorm','wi-sandstorm'],
    ['761','dust','wi-dust','wi-dust'],
    ['762','volcanic ash','wi-dust','wi-dust'],
    ['771','squalls','wi-day-thunderstorm','wi-night-alt-thunderstorm'],
    ['781','tornado','wi-tornado','wi-tornado'],
    ['800','clear sky','wi-day-sunny','wi-night-clear'],
    ['801','few clouds','wi-day-cloudy','wi-night-alt-cloudy'],
    ['802','scattered clouds','wi-day-cloudy','wi-night-alt-cloudy'],
    ['803','broken clouds','wi-day-cloudy','wi-night-alt-cloudy'],
    ['804','overcast clouds','wi-day-sunny-overcast','wi-night-alt-partly-cloudy'],
    ['900','tornado','wi-tornado','wi-tornado'],
    ['901','tropical storm','wi-hurricane','wi-hurricane'],
    ['902','hurricane','wi-hurricane','wi-hurricane'],
    ['903','cold','wi-snowflake-cold','wi-snowflake-cold'],
    ['904','hot','wi-hot','wi-hot'],
    ['905','windy','wi-day-windy','wi-windy'],
    ['906','hail','wi-day-hail','wi-night-alt-hail'],
    ['951','calm','wi-day-sunny','wi-night-clear'],
    ['952','light breeze','wi-day-light-wind','wi-night-alt-cloudy-windy'],
    ['953','gentle breeze','wi-day-light-wind','wi-night-alt-cloudy-windy'],
    ['954','moderate breeze','wi-day-light-wind','wi-night-alt-cloudy-windy'],
    ['955','fresh breeze','wi-day-light-wind','wi-night-alt-cloudy-windy'],
    ['956','strong breeze','wi-day-light-wind','wi-night-alt-cloudy-windy'],
    ['957','high wind, near gale','wi-strong-wind','wi-strong-wind'],
    ['958','gale','wi-gale-warning','wi-gale-warning'],
    ['959','severe gale','wi-gale-warning','wi-gale-warning'],
    ['960','storm','wi-storm-warning','wi-storm-warning'],
    ['961','violent storm','wi-storm-warning','wi-storm-warning'],
    ['962','hurricane','wi-hurricane','wi-hurricane']
];

var windArray = [
    [0,22,'towards-0-deg'],
    [23,44,'towards-23-deg'],
    [45,67,'towards-45-deg'],
    [68,89,'towards-68-deg'],
    [90,112,'towards-90-deg'],
    [113,134,'towards-113-deg'],
    [135,157,'towards-135-deg'],
    [158,179,'towards-158-deg'],
    [180,202,'towards-180-deg'],
    [203,224,'towards-203-deg'],
    [225,247,'towards-225-deg'],
    [248,269,'towards-248-deg'],
    [270,292,'towards-270-deg'],
    [293,312,'towards-293-deg'],
    [313,335,'towards-313-deg'],
    [336,359,'towards-336-deg'],
    [360,360,'towards-0-deg']
];

var weatherIcon = "";


        $(document).ready(function() {

            $("#getButton").click(function() {
                /* source: https://github.com/Rob--W/cors-anywhere/#documentation */
                (function() {
                    var cors_api_host = 'cors-anywhere.herokuapp.com';
                    var cors_api_url = 'https://' + cors_api_host + '/';
                    var slice = [].slice;
                    var origin = window.location.protocol + '//' + window.location.host;
                    var open = XMLHttpRequest.prototype.open;
                    XMLHttpRequest.prototype.open = function() {
                        var args = slice.call(arguments);
                        var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
                        if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
                            targetOrigin[1] !== cors_api_host) {
                            args[1] = cors_api_url + args[1];
                        }
                        return open.apply(this, args);
                    };
                })();

                var streetAddressString = $("#streetAddressInput").val();
                var cityString = $("#cityInput").val();
                var stateString = $("#stateInput").val();
                var zipString = $("#zipInput").val();

                if (streetAddressString == "" | cityString == "" | stateString == "" | zipString == "") {
                    alert("Please enter information for all address fields.");
                } else {

                    var streetAddressArray = streetAddressString.split(" ");
                    var cityArray = cityString.split(" ");
                    var stateArray = stateString.split(" ");
                    var zipArray = zipString.split(" ");
    
                    streetAddress = streetAddressArray.join("+");
                    city = cityArray.join("+");
                    state = stateArray.join("+");
                    zip = zipArray.join("+");
                    
                    streetAddressRoute = "address?street=" + streetAddress
                    
                    if(city != "") {
                        cityRoute = "&city=" + city;
                    } else {
                        cityRoute = "";
                    };
    
                    if(state != "") {
                        stateRoute = "&state=" + state;
                    } else {
                        stateRoute = "";
                    }
                    
                    if(zip != "") {
                        zipRoute = "&zip=" + zip;
                    } else {
                        zipRoute = "";
                    }
    
                    geoRoute =  streetAddressRoute + cityRoute + stateRoute + zipRoute + "&benchmark=Public_AR_Current&format=json"
    
                    geoRequestURL = geoEndpoint + geoRoute;
    
                    console.log(geoRequestURL);
                    
                    $.getJSON(geoRequestURL, function(json) {
                        latData = json.result.addressMatches[0].coordinates.y;
                        longData = json.result.addressMatches[0].coordinates.x;
                        console.log(JSON.stringify(json));
                        console.log(json.result.addressMatches[0].coordinates);
                        console.log("lat: " + latData + ", long: " + longData);
                        
                        route = "/api/current?lon=" + longData + "&lat=" + latData;
                        console.log(route);
    
                        requestURL = endpoint + route;
                        request.open('GET', requestURL);
                        request.responseType = 'text'; 
                        request.send();
    
                        console.log(latData + ", " + longData + ", " + route + ", " + requestURL);
    
                        $.getJSON(requestURL, function(result) {
                            sysCountry = result.sys.country;
                            sysSunrise = new Date(result.sys.sunrise * 1000);
                            sysSunset = new Date(result.sys.sunset * 1000);
                            dt = new Date(result.dt * 1000);
    
                            /* weather icon result */
                            for (i=0; i<idArray.length; i++) {
                                if (idArray[i][0] == result.weather["0"].id) {
                                    if (dt > sysSunrise && dt < sysSunset) {
                                        weatherIcon = idArray[i][2];
                                    } else {
                                        weatherIcon = idArray[i][3];
                                    };
                                };
                                console.log("sunrise: " + sysSunrise + ", date/time: " + dt + ", sunset: " + sysSunset);
                            };
    
                            /* wind direction icon result */
                            for (j=0; j<windArray.length; j++) {
                                if (parseInt(result.wind.deg) >= windArray[j][0] && parseInt(result.wind.deg) <= windArray[j][1]) {
                                    windIcon = windArray[j][2];
                                };
                                console.log(result.wind.deg + " " + parseInt(result.wind.deg) + " " + "windIcon: "+ windIcon);
                            };
    
                            /* weather pinpoint location */
                            getLocation = "<strong>Location</strong><br><i class=" +"\"" + "fa fa-map-marker aria=hidden=" + "\"" + "true" + "\"" + "></i><br>" + result.name + ", " + result.sys.country;
                            $("#getLocation").html(divOpenShadow + getLocation + divClose);

                            /* date and time */
                            getDateTime = "<strong>Date and Time</strong><br><i class=" +"\"" + "fa fa-clock-o aria=hidden=" + "\"" + "true" + "\"" + "></i><br>" + new Date(result.dt * 1000);
                            $("#getDateTime").html(divOpenShadow + getDateTime + divClose);

                            /* weather icon and temperature */
                            weatherHeader = "<strong>Weather</strong><br>"
                            getWeatherIcon = "<i class=" + "\"" + "wi " + weatherIcon +" aria-hidden=" + "\"" + "true" + "\""  + "></i>";
                            getTempC = Math.round(result.main.temp) + "<i class=" +"\"" + "wi wi-celsius aria=hidden=" + "\"" + "true" + "\"" + "></i>"
                            getTempF = Math.round(9/5 * result.main.temp + 32) + "<i class=" +"\"" + "wi wi-fahrenheit aria=hidden=" + "\"" + "true" + "\"" + "></i>";
                            getMain = result.weather["0"].main;
                            getDesc = result.weather["0"].description;
                            $("#getWeatherF").html(divOpenShadow + weatherHeader + divOpen + getWeatherIcon + divClose + divOpen + getTempF + divClose + divOpen + getMain + divClose + divOpen + getDesc + divClose + divClose);
                            $("#getWeatherC").html(divOpenShadow + weatherHeader + divOpen + getWeatherIcon + divClose + divOpen + getTempC + divClose + divOpen + getMain + divClose + divOpen + getDesc + divClose + divClose);
                            
                            /* sunrise */
                            getSunrise = "<strong>Sunrise</strong><br><i class=" +"\"" + "wi wi-sunrise aria=hidden=" + "\"" + "true" + "\"" + "></i><br>" + new Date(result.sys.sunrise * 1000);
                            $("#getSunrise").html(divOpenShadow + getSunrise + divClose);

                            /* sunset */
                            getSunset = "<strong>Sunset</strong><br><i class=" +"\"" + "wi wi-sunset aria=hidden=" + "\"" + "true" + "\"" + "></i><br>" + new Date(result.sys.sunset * 1000);
                            $("#getSunset").html(divOpenShadow + getSunset + divClose);

                            /* min temperature */
                            getTempMinC = "<strong>Daily Low</strong><br><i class=" +"\"" + "wi wi-thermometer-exterior aria=hidden=" + "\"" + "true" + "\"" + "></i><br>" + result.main.temp_min + "<i class=" +"\"" + "wi wi-celsius aria=hidden=" + "\"" + "true" + "\"" + "></i>";
                            getTempMinF = "<strong>Daily Low</strong><br><i class=" +"\"" + "wi wi-thermometer-exterior aria=hidden=" + "\"" + "true" + "\"" + "></i><br>" + Math.round(9/5 * result.main.temp_min + 32) + "<i class=" +"\"" + "wi wi-fahrenheit aria=hidden=" + "\"" + "true" + "\"" + "></i>";
                            $("#getTempMinC").html(divOpenShadow + getTempMinC + divClose);
                            $("#getTempMinF").html(divOpenShadow + getTempMinF + divClose);

                            /* max temperature */
                            getTempMaxC = "<strong>Daily High</strong><br><i class=" +"\"" + "wi wi-thermometer aria=hidden=" + "\"" + "true" + "\"" + "></i><br>" + result.main.temp_max + "<i class=" +"\"" + "wi wi-celsius aria=hidden=" + "\"" + "true" + "\"" + "></i>";
                            getTempMaxF = "<strong>Daily High</strong><br><i class=" +"\"" + "wi wi-thermometer aria=hidden=" + "\"" + "true" + "\"" + "></i><br>" + Math.round(9/5 * result.main.temp_max + 32) + "<i class=" +"\"" + "wi wi-fahrenheit aria=hidden=" + "\"" + "true" + "\"" + "></i>";
                            $("#getTempMaxC").html(divOpenShadow + getTempMaxC + divClose);
                            $("#getTempMaxF").html(divOpenShadow + getTempMaxF + divClose);

                            /* atmospheric pressure */
                            getPressureHpa = "<strong>Atmospheric Pressure</strong><br><i class=" +"\"" + "wi wi-barometer aria=hidden=" + "\"" + "true" + "\"" + "></i><br>" + result.main.pressure + " hpa";
                            getPressureInHg = "<strong>Atmospheric Pressure</strong><br><i class=" +"\"" + "wi wi-barometer aria=hidden=" + "\"" + "true" + "\"" + "></i><br>" + Math.round(result.main.pressure / 33.863886666667) + " in Hg";
                            $("#getPressureHPA").html(divOpenShadow + getPressureHpa + divClose);
                            $("#getPressureInHg").html(divOpenShadow + getPressureInHg + divClose);
    
                            /* humidity */
                            getHumidity = "<strong>Humidity</strong><br><i class=" +"\"" + "wi wi-humidity aria=hidden=" + "\"" + "true" + "\"" + "></i><br>" + result.main.humidity + "%";
                            $("#getHumidity").html(divOpenShadow + getHumidity + divClose);

                            /* wind speed */
                            getWindKph = "<strong>Wind Speed</strong><br><i class=" +"\"" + "wi wi-strong-wind aria=hidden=" + "\"" + "true" + "\"" + "></i><br>" + result.wind.speed + " kph";
                            getWindMph = "<strong>Wind Speed</strong><br><i class=" +"\"" + "wi wi-strong-wind aria=hidden=" + "\"" + "true" + "\"" + "></i><br>" + Math.round(result.wind.speed / 1.609344) + " mph";
                            $("#getWindKph").html(divOpenShadow + getWindKph + divClose);
                            $("#getWindMph").html(divOpenShadow + getWindMph + divClose);

                            /* wind direction */

                            getWindDirection = result.wind.deg + "<i class=" +"\"" + "wi wi-degrees aria=hidden=" + "\"" + "true" + "\"" + "></i>";
                            getWindIcon = "<strong>Wind Direction</strong><br><i class=" + "\"" + "wi wi-wind " + windIcon +" aria-hidden=" + "\"" + "true" + "\""  + "></i> ";
                            $("#getWindDir").html(divOpenShadow + getWindIcon + getWindDirection + divClose);

                            /* stringified message */
                            $("#message").html(JSON.stringify(result)); 
                                
                        });
    
                    });
    
                };
                
            });

            $("#toggleButton").click(function() {
                $("#getWeatherC").toggle("slow");
                $("#getWeatherF").toggle("slow");
                $("#getTempMinC").toggle("slow");
                $("#getTempMinF").toggle("slow");
                $("#getTempMaxC").toggle("slow");
                $("#getTempMaxF").toggle("slow");
                $("#getPressureHPA").toggle("slow");
                $("#getPressureInHg").toggle("slow");
                $("#getWindKph").toggle("slow");
                $("#getWindMph").toggle("slow");
            });

            $("#refreshPage").click(function() {
                location.reload();
            })

        });
