function printBios() {

    var gender = getInputValue("gender");
    var country = getInputValue("country");
    var attributes = getAttributeString();
    var names = createNameStrings(attributes);

    var bios = createBio(names, attributes);

    for (i = 0; i < 3; i++) {
        document.getElementById("container" + (i + 1).toString()).className = document.getElementById("container" + (i + 1).toString()).className.replace
      ( /(?:^|\s)transparent(?!\S)/g , '' )
    	document.getElementById("message" + (i + 1).toString()).innerHTML = bios[i];
    }

}

function createNameStrings(attributes) {
    var names = getNames(attributes)
    var name_strings = [];

    for (var i = 0; i < names.length; i++) {
        var name = names[i]["name"].toLowerCase().capitalize();
        if (names[i]["nick_name"] != "NONE") {
            name += " ";
            name += names[i]["nick_name"].toLowerCase().capitalize();
        }
        name_strings.push(name);
    }
    return name_strings;
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function getNames(attributes) {

    attributes = attributes.toLowerCase();

    var names_json = {"names": [{"name":"ALEXANDER","nick_name":"ALEX","attributes":"abh"},{"name":"ALFRED","nick_name":"AL","attributes":"acd"},{"name":"ALLEN","nick_name":"NONE","attributes":"ace"},{"name":"ALVIN","nick_name":"NONE","attributes":"acf"},{"name":"ANDREW","nick_name":"NONE","attributes":"acg"},{"name":"ANTHONY","nick_name":"NONE","attributes":"ach"},{"name":"ANTONIO","nick_name":"NONE","attributes":"ade"},{"name":"ARTHUR","nick_name":"NONE","attributes":"adf"},{"name":"BARRY","nick_name":"NONE","attributes":"adg"},{"name":"BENJAMIN","nick_name":"BEN","attributes":"adh"},{"name":"BERNARD","nick_name":"NONE","attributes":"aef"},{"name":"BILLY","nick_name":"BILL","attributes":"aeg"},{"name":"BOBBY","nick_name":"BOB","attributes":"aeh"},{"name":"BRADLEY","nick_name":"NONE","attributes":"afg"},{"name":"BRANDON","nick_name":"NONE","attributes":"afh"},{"name":"BRIAN","nick_name":"NONE","attributes":"agh"},{"name":"BRUCE","nick_name":"NONE","attributes":"bcd"},{"name":"BRYAN","nick_name":"NONE","attributes":"bce"},{"name":"CALVIN","nick_name":"NONE","attributes":"bcf"},{"name":"CARL","nick_name":"NONE","attributes":"bcg"},{"name":"CARLOS","nick_name":"NONE","attributes":"bch"},{"name":"CHAD","nick_name":"NONE","attributes":"bde"},{"name":"CHARLES","nick_name":"NONE","attributes":"bdf"},{"name":"CHRIS","nick_name":"NONE","attributes":"bdg"},{"name":"CHRISTOPHER","nick_name":"NONE","attributes":"bdh"},{"name":"CLARENCE","nick_name":"NONE","attributes":"bef"},{"name":"CLIFFORD","nick_name":"NONE","attributes":"beg"},{"name":"CRAIG","nick_name":"NONE","attributes":"beh"},{"name":"CURTIS","nick_name":"NONE","attributes":"bfg"},{"name":"DALE","nick_name":"NONE","attributes":"bfh"},{"name":"DAN","nick_name":"NONE","attributes":"bgh"},{"name":"DANIEL","nick_name":"NONE","attributes":"cde"},{"name":"DANNY","nick_name":"NONE","attributes":"cdf"},{"name":"DARRELL","nick_name":"NONE","attributes":"cdg"},{"name":"DAVID","nick_name":"NONE","attributes":"cdh"},{"name":"DEAN","nick_name":"NONE","attributes":"cef"},{"name":"DENNIS","nick_name":"NONE","attributes":"ceg"},{"name":"DEREK","nick_name":"NONE","attributes":"ceh"},{"name":"DERRICK","nick_name":"NONE","attributes":"cfg"},{"name":"DON","nick_name":"NONE","attributes":"cfh"},{"name":"DONALD","nick_name":"NONE","attributes":"cgh"},{"name":"DOUGLAS","nick_name":"NONE","attributes":"def"},{"name":"DUSTIN","nick_name":"NONE","attributes":"deg"},{"name":"EARL","nick_name":"NONE","attributes":"deh"},{"name":"EDDIE","nick_name":"NONE","attributes":"dfg"},{"name":"EDWARD","nick_name":"NONE","attributes":"dfh"},{"name":"EDWIN","nick_name":"NONE","attributes":"dgh"},{"name":"ERIC","nick_name":"NONE","attributes":"efg"},{"name":"ERNEST","nick_name":"NONE","attributes":"efh"},{"name":"EUGENE","nick_name":"NONE","attributes":"egh"},{"name":"FLOYD","nick_name":"NONE","attributes":"fgh"},{"name":"FRANCIS","nick_name":"NONE","attributes":"abc"},{"name":"FRANCISCO","nick_name":"NONE","attributes":"abd"},{"name":"FRANK","nick_name":"NONE","attributes":"abe"},{"name":"FRED","nick_name":"NONE","attributes":"abf"},{"name":"FREDERICK","nick_name":"NONE","attributes":"abg"},{"name":"GARY","nick_name":"NONE","attributes":"abh"},{"name":"GEORGE","nick_name":"NONE","attributes":"acd"},{"name":"GERALD","nick_name":"NONE","attributes":"ace"},{"name":"GLENN","nick_name":"NONE","attributes":"acf"},{"name":"GORDON","nick_name":"NONE","attributes":"acg"},{"name":"GREG","nick_name":"NONE","attributes":"ach"},{"name":"GREGORY","nick_name":"NONE","attributes":"ade"},{"name":"HAROLD","nick_name":"NONE","attributes":"adf"},{"name":"HARRY","nick_name":"NONE","attributes":"adg"},{"name":"HENRY","nick_name":"NONE","attributes":"adh"},{"name":"HERBERT","nick_name":"NONE","attributes":"aef"},{"name":"HOWARD","nick_name":"NONE","attributes":"aeg"},{"name":"JACK","nick_name":"NONE","attributes":"aeh"},{"name":"JACOB","nick_name":"NONE","attributes":"afg"},{"name":"JASON","nick_name":"NONE","attributes":"afh"},{"name":"JAY","nick_name":"NONE","attributes":"agh"},{"name":"JEFf","nick_name":"NONE","attributes":"bcd"},{"name":"JEFFERY","nick_name":"NONE","attributes":"bce"},{"name":"JEFFREY","nick_name":"NONE","attributes":"bcf"},{"name":"JEREMY","nick_name":"NONE","attributes":"bcg"},{"name":"JEROME","nick_name":"NONE","attributes":"bch"},{"name":"JERRY","nick_name":"NONE","attributes":"bde"},{"name":"JESSE","nick_name":"NONE","attributes":"bdf"},{"name":"JESUS","nick_name":"NONE","attributes":"bdg"},{"name":"JIM","nick_name":"NONE","attributes":"bdh"},{"name":"JIMMY","nick_name":"NONE","attributes":"bef"},{"name":"JOE","nick_name":"NONE","attributes":"beg"},{"name":"JOEL","nick_name":"NONE","attributes":"beh"},{"name":"JOHN","nick_name":"NONE","attributes":"bfg"},{"name":"JOHNNY","nick_name":"NONE","attributes":"bfh"},{"name":"JON","nick_name":"NONE","attributes":"bgh"},{"name":"JONATHAN","nick_name":"NONE","attributes":"cde"},{"name":"JORGE","nick_name":"NONE","attributes":"cdf"},{"name":"JOSE","nick_name":"NONE","attributes":"cdg"},{"name":"JOSEPH","nick_name":"NONE","attributes":"cdh"},{"name":"JOSHUA","nick_name":"NONE","attributes":"cef"},{"name":"JUAN","nick_name":"NONE","attributes":"ceg"},{"name":"JUSTIN","nick_name":"NONE","attributes":"ceh"},{"name":"KEITH","nick_name":"NONE","attributes":"cfg"},{"name":"KENNETH","nick_name":"NONE","attributes":"cfh"},{"name":"KEVIN","nick_name":"NONE","attributes":"cgh"},{"name":"KYLE","nick_name":"NONE","attributes":"def"},{"name":"LARRY","nick_name":"NONE","attributes":"deg"},{"name":"LAWRENCE","nick_name":"NONE","attributes":"deh"},{"name":"LEE","nick_name":"NONE","attributes":"dfg"},{"name":"LEO","nick_name":"NONE","attributes":"dfh"},{"name":"LEON","nick_name":"NONE","attributes":"dgh"},{"name":"LEONARD","nick_name":"NONE","attributes":"efg"},{"name":"LEROY","nick_name":"NONE","attributes":"efh"},{"name":"LLOYD","nick_name":"NONE","attributes":"egh"},{"name":"LOUIS","nick_name":"NONE","attributes":"fgh"},{"name":"LUISE","nick_name":"NONE","attributes":"abc"},{"name":"MANUEL","nick_name":"NONE","attributes":"abd"},{"name":"MARCUS","nick_name":"NONE","attributes":"abe"},{"name":"MARIO","nick_name":"NONE","attributes":"abf"},{"name":"MARK","nick_name":"NONE","attributes":"abg"},{"name":"MARTIN","nick_name":"NONE","attributes":"abh"},{"name":"MARVIN","nick_name":"NONE","attributes":"acd"},{"name":"MATTHEW","nick_name":"NONE","attributes":"ace"},{"name":"MELVIN","nick_name":"NONE","attributes":"acf"},{"name":"MICHAEL","nick_name":"NONE","attributes":"acg"},{"name":"MICHEAL","nick_name":"NONE","attributes":"ach"},{"name":"MIGUEL","nick_name":"NONE","attributes":"ade"},{"name":"MIKE","nick_name":"NONE","attributes":"adf"},{"name":"NATHAN","nick_name":"NONE","attributes":"adg"},{"name":"NICHOLAS","nick_name":"NONE","attributes":"adh"},{"name":"NORMAN","nick_name":"NONE","attributes":"aef"},{"name":"OSCAR","nick_name":"NONE","attributes":"aeg"},{"name":"PATRICK","nick_name":"NONE","attributes":"aeh"},{"name":"PAUL","nick_name":"NONE","attributes":"afg"},{"name":"PEDRO","nick_name":"NONE","attributes":"afh"},{"name":"PETER","nick_name":"NONE","attributes":"agh"},{"name":"PHILIP","nick_name":"NONE","attributes":"bcd"},{"name":"PHILLIP","nick_name":"NONE","attributes":"bce"},{"name":"RALPH","nick_name":"NONE","attributes":"bcf"},{"name":"RANDAL","nick_name":"NONE","attributes":"bcg"},{"name":"RANDY","nick_name":"NONE","attributes":"bch"},{"name":"RAY","nick_name":"NONE","attributes":"bde"},{"name":"RAYMOND","nick_name":"NONE","attributes":"bdf"},{"name":"RICHARD","nick_name":"NONE","attributes":"bdg"},{"name":"RICKY","nick_name":"NONE","attributes":"bdh"},{"name":"ROBERT","nick_name":"NONE","attributes":"bef"},{"name":"RODNEY","nick_name":"NONE","attributes":"beg"},{"name":"ROGER","nick_name":"NONE","attributes":"beh"},{"name":"RONALD","nick_name":"NONE","attributes":"bfg"},{"name":"RONNIE","nick_name":"NONE","attributes":"bfh"},{"name":"ROY","nick_name":"NONE","attributes":"bgh"},{"name":"RUSSELL","nick_name":"NONE","attributes":"cde"},{"name":"RYAN","nick_name":"NONE","attributes":"cdf"},{"name":"SAMUEL","nick_name":"NONE","attributes":"cdg"},{"name":"SCOTT","nick_name":"NONE","attributes":"cdh"},{"name":"SEAN","nick_name":"NONE","attributes":"cef"},{"name":"SHAWN","nick_name":"NONE","attributes":"ceg"},{"name":"STANLEY","nick_name":"NONE","attributes":"ceh"},{"name":"STEPHEN","nick_name":"NONE","attributes":"cfg"},{"name":"STEVE","nick_name":"NONE","attributes":"cfh"},{"name":"STEVEN","nick_name":"NONE","attributes":"cgh"},{"name":"TERRY","nick_name":"NONE","attributes":"def"},{"name":"THEODORE","nick_name":"NONE","attributes":"deg"},{"name":"THOMAS","nick_name":"NONE","attributes":"deh"},{"name":"TIM","nick_name":"NONE","attributes":"dfg"},{"name":"TIMOTHY","nick_name":"NONE","attributes":"dfh"},{"name":"TODD","nick_name":"NONE","attributes":"dgh"},{"name":"TOM","nick_name":"NONE","attributes":"efg"},{"name":"TOMMY","nick_name":"NONE","attributes":"efh"},{"name":"TONY","nick_name":"NONE","attributes":"egh"},{"name":"TRAVIS","nick_name":"NONE","attributes":"fgh"},{"name":"TROY","nick_name":"NONE","attributes":"abc"},{"name":"VICTOR","nick_name":"NONE","attributes":"abd"},{"name":"VINCENT","nick_name":"NONE","attributes":"abe"},{"name":"WALTER","nick_name":"NONE","attributes":"abf"},{"name":"WARREN","nick_name":"NONE","attributes":"abg"},{"name":"WAYNE","nick_name":"NONE","attributes":"abh"},{"name":"WESLEY","nick_name":"NONE","attributes":"acd"},{"name":"WILLIAM","nick_name":"NONE","attributes":"ace"},{"name":"WILLIE","nick_name":"NONE","attributes":"acf"}]};
    var names = names_json["names"];

    return names.filter(
        function(names){ return names.attributes == attributes }
    );
}


// function AJAX_JSON_Req( url )
// {
//     var AJAX_req = new XMLHttpRequest();
//     var names;

//     AJAX_req.open( "GET", url, true );
//     AJAX_req.setRequestHeader("Content-type", "application/json");

//     AJAX_req.onreadystatechange = function()
//     {
//         if( AJAX_req.readyState == 4 && AJAX_req.status == 200 )
//         {
//             var response = JSON.parse( AJAX_req.responseText );
//             console.log(response);
//         }
//     }
//     AJAX_req.send();
// }

function getCheckedAttributes() {

    var checkedValues = [];
    var inputElements = document.getElementsByClassName('messageCheckbox');
    for (var i = 0; i < inputElements.length; i++) {
        if (inputElements[i].checked) {
            checkedValues.push(inputElements[i].value);
        }
    }

    return checkedValues;
}

function getAttributeString() {

    var attributes = getCheckedAttributes();
    var randNums = [];

    if (attributes.length > 2) {
        while (randNums.length < 3) {
            var randNum = Math.floor(Math.random() * attributes.length);
            if (!randNums.includes(randNum)) {
                randNums.push(randNum)
            }
        }
    } else {
        window.alert("You must pick at least three attributes!");
    }
    randNums.sort();

    attributesString = attributes[randNums[0]] + attributes[randNums[1]] + attributes[randNums[2]];

    console.log(attributesString);

    return attributesString;
}

function getInputValue(inputType) {

    var inputValue = document.forms["attributeForm"].elements[inputType].value;

    return inputValue;
}

function createBio(names, attributes) {
    var names = split_names(names)
    var attributeNames = {
        'A': 'rebellious',
        'B': 'low-key',
        'C': 'simple',
        'D': 'clever',
        'E': 'introverted',
        'F': 'extroverted',
        'G': 'bold',
        'H': 'funny'
    };
    var nicknameSentence = '{0} is usually shorted to {1} by friends and family.\n';
    var bioFormat = '{0} is a name usually associated with people who {1} and {2}. {0}\'s usually {3}. ';
    var attributeSentences = {
        'A': ['are very good at expressing themselves',
            'are typically not interested in being normal',
            'have very determined personalities',
            'are more willing to do something different'
        ],
        'B': ['do not actively seek attention from others',
            'are capable of leaving things unsaid',
            'tend to enjoy quality time with few people rather than with a large groups'
        ],
        'C': ['are extremely easy to get along with',
            'find great joy in small things',
            'are able to bring peace into other peoples lives'
        ],
        'D': ['are quick thinkers',
            'have a very logical response to the world around them',
            'are able to communicate very well with the people around them, which usually brings them success in their career'
        ],
        'E': ['are very busy thinkers',
            'do not reveal their best qualities when they first meet new people',
            'make great partners and long lasting friends'
        ],
        'F': ['gain energy when they are around other people',
            'are a very social person',
            'socialize very well with other people which makes them enjoyable people to be around'
        ],
        'G': ['are the first person to try something others are scared to try',
            'love to try new things',
            'are great entrepreneuers which bring great change to the people around them'
        ],
        'H': ['enjoys to make people laugh',
            'are always in a good mood',
            'make friends very easily thanks to their happy personality'
        ]
    };

    set_string_format()
    set_string_strip()

    var bios = [];
    var attributesList = attributes.split("");

    for (i = 0; i < 3; i++) {

        // var randomNumber = Math.floor(Math.random() * attributeSentences[attributesList[1]].length);

        firstPick = attributeSentences[attributesList[0]][i]
        secondPick = attributeSentences[attributesList[1]][i]
        thirdPick = attributeSentences[attributesList[2]][i]

        bio = bioFormat.format(names[i][0], firstPick, secondPick, thirdPick)

        if (names[i].length == 2) {
            bio.strip()
            nickName = nicknameSentence.format(names[i][0], names[i][1])
            bio += nickName
        }

        bios.push(bio)
    }

    return bios
}

function split_names(names) {
    var splitNames = [];

    for (i = 0; i < names.length; i++) {
        splitNames.push(names[i].split(" "));
    }

    return splitNames;
}

function set_string_format() {
    if (!String.prototype.format) {
        String.prototype.format = function() {
            var args = arguments;
            return this.replace(/{(\d+)}/g, function(match, number) {
                return typeof args[number] != 'undefined' ?
                    args[number] :
                    match;
            });
        };
    }
}

function set_string_strip() {
    if (typeof(String.prototype.strip) === "undefined") {
        String.prototype.strip = function() {
            return String(this).replace(/^\s+|\s+$/g, '');
        };
    }
}