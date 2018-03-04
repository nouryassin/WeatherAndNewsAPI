<!DOCTYPE HTML>
<html>
    <head>
        <title>Home|weather</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"> </script>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.6/css/all.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
        <script src="./js/script.js? <?php echo date("l jS \of F Y h:i:s A"); ?>"></script>
        <link rel="stylesheet" href="./css/style.css? <?php echo date("l jS \of F Y h:i:s A"); ?>">
        <meta http-equiv="Cache-control" content="no-cache">
        
        
    
    </head>
    <body>
    <div id="body">
        <div class="great-weather-div">
            <div class="weather-div">
                <div id="current-conditions">
                    <input class="form-control city-input" placeholder="City">
                    <div id="country"></div>
                    <h3 id="location"></h3>
                    <h1 id="current-temp"></h1>
                    <h4 id="C" class="unit active" >C</h4>
                    <h4 id="F" class="unit " >F</h4>
                    
                </div>

            </div>
        </div>
        <div id="week-temp">
            <div id="week-temp-cont">
                <ul class="list-group">
                    <?php 
                        for($i=0;$i<=9;$i++){
                            echo'<li class="list-group-item action">
                                <div class="date" id="date'.$i.'"></div>
                                <div class="day" id="day'.$i.'"></div>
                                <div class="high" id="high'.$i.'"></div>
                                <div class="low" id="low'.$i.'"></div>
                                <div class="text" id="text'.$i.'"></div>
                            </li>';
                        }
                    
                    
                    ?>
                
                </ul>
            </div>
        </div>

        <div id="atmosphere">
                    <div class="atmosphere-item" id="humidity"></div>
                    <div class="atmosphere-item" id="pressure"></div>
                    <div class="atmosphere-item" id="visibility"></div>
                                
        </div>
        <div id="wind">
               <h3 style="margin-top:20px">Wind Speed</h3>
               <div id="wind-speed"></div>         
        </div>
        
        <div id="astronomy">
               <div class="sun" id="sunrise"></div>
               <div class="sun" id="sunset"></div>         
        </div>

        <div id="news">
            <h3>Latest News</h3>
            <div id="news-cont">
                <ul class="list-group">
                    <?php 

                        for($i=0;$i<=19;$i++){
                            echo'<a class="url" id="url'.$i.'" href="" target="_blink">
                            <li class="list-group-item action">
                                <img class="img" src="" id="img'.$i.'">
                                <div class="source bg-inverse" id="source'.$i.'" style="color:white;"></div>
                                <div class="title" id="title'.$i.'"></div>
                                <div class="description" id="description'.$i.'"></div>
                            
                            </li></a>';
                        }
                    ?>
                
                </ul>
            </div>
        </div>
    </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>

    </body>


</html>