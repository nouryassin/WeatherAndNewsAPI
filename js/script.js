$(document).ready(function(){
    
    var city2="cairo";
    var unit2='c';
    weather(city2,unit2);
    
    // function changeUnit(C){
    //     $("#C").toggleClass("active");
    //     $("#F").toggleClass("active");
    //     weather(location,C);
    // }
    $("#C").click(function(){
            $("#C").addClass("active");
             $("#F").removeClass("active");
             weather(city2,'c');
    });
    $("#F").click(function(){
        $("#F").addClass("active");
         $("#C").removeClass("active");
         weather(city2,'f');
});
    $(".city-input").change(function(){
        if($(this).val()!=""){
        var newCity=$(this).val();
        weather(newCity,unit2);
        }
    });
    function weather(city,unit){
        city2=city;
        unit2=unit;
        var distance_unit,speed_unit,pressure_unit;
        if(unit=='f'){
            distance_unit="mi";
            speed_unit="mi/h";
            pressure_unit="in";
        }
        else if(unit=='c'){
            distance_unit="km";
            speed_unit="km/h";
            pressure_unit="mb";
        }
        $.getJSON('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'+city+'%2C%20ak%22)and%20u=%27'+unit+'%27&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function(data) {    
            //alert("dcx");
        var text = ` ${data.query.results.channel.location.city}`
        
        var location={city:`${data.query.results.channel.location.city}`,country:`${data.query.results.channel.location.country}`,region:`${data.query.results.channel.location.region}`};//done
        var wind = {chill:`${data.query.results.channel.wind.chill}`, direction:`${data.query.results.channel.wind.direction}`, speed:`${data.query.results.channel.wind.speed}`};//done
        var astronomy={sunrise:`${data.query.results.channel.astronomy.sunrise}`,sunset:`${data.query.results.channel.astronomy.sunset}`};
        var atmosphere={humidity:`${data.query.results.channel.atmosphere.humidity}`,pressure:`${data.query.results.channel.atmosphere.pressure}`,rising:`${data.query.results.channel.atmosphere.rising}`,visibility:`${data.query.results.channel.atmosphere.visibility}`};//done
        var condition={temp:`${data.query.results.channel.item.condition.temp}`,text:`${data.query.results.channel.item.condition.text}`}; //done
        var forecast=new Array(); //done
        var count=1;
        
        $.each(data.query.results.channel.item.forecast, function(key,value){       
            var obj={date:value.date,day:value.day,high:value.high,low:value.low,text:value.text};
            forecast.push(obj);
            if(count==9){
                return;   
            }

            count++;
        });
        $("#country").html(location.country);
        $("#location").html(location.city+":");
       
        $("#current-temp").html(condition.temp+"&#176;");
       
       
        for(var i=0;i<=9;i++){
            $("#date"+i).html(forecast[i].date);
            $("#day"+i).html(forecast[i].day);
            $("#high"+i).html(forecast[i].high+"&#176;");
            $("#low"+i).html(forecast[i].low+"&#176;");
            $("#text"+i).html(forecast[i].text);
        }
        
        $("#humidity").html(atmosphere.humidity+"%");
        $("#pressure").html(atmosphere.pressure+pressure_unit);
        $("#visibility").html(atmosphere.visibility+distance_unit);


        $("#wind-speed").html(wind.speed+speed_unit);

        $("#sunrise").html(astronomy.sunrise);
        $("#sunset").html(astronomy.sunset);
        var city_desc = ` ${data.query.results.channel.title}`
        var city_code= city_desc.substring(city_desc.length-2, city_desc.length);
        city_code=city_code.toLowerCase();
        //alert("'"+city_code+"'");
        var category="business";
        //alert("efcdx");
       // alert('https://newsapi.org/v2/top-headlines?country='+city_code+'&category='+category+'&apiKey=9ff5f2c524714f8a97f11ba1149bc626');
        $.getJSON('https://newsapi.org/v2/top-headlines?country='+city_code+'&category='+category+'&apiKey=9ff5f2c524714f8a97f11ba1149bc626', function(news) {
        
            var totalresults=`${news.totalResults}`
            //alert(`${news.totalResults}`);
            var articles=new Array();
            count=0
            $.each(news.articles, function(key,value){       
                var obj={name:value.source.name,title:value.title,description:value.description,url:value.url,urlToImage:value.urlToImage,publishedAt:value.publishedAt};
                articles.push(obj);
                if(count==totalresults){
                    return;   
                }
    
                count++;
            });
            for(var i=0;i<totalresults;i++){
                $("#url"+i).attr("href",articles[i].url);
                $("#img"+i).attr("src",articles[i].urlToImage);
                $("#source"+i).html(articles[i].name);
                
                $("#title"+i).html(articles[i].title);
                $("#description"+i).html(articles[i].description);
               
            }
            //alert(articles[0].name);
           
            // alert(articles[3].title);
    
        

        });
    });

    
   
    

}
});
