//Add event listeners for the buttons
$("#p-2, #p-3, #p-4, #p-5, #p-6, #p-7, #p-8, #p-9, #p-10, #p-11, #p-12, #p-13, #p-14, #p-15, #p-16, #button-2, #button-3, #button-4, #button-5-sciencegenerator, #button-5-5, #button-6, #button-6-5, #button-7, #button-7-5, #button-8, #button-9, #button-10, #button-11, #button-12, #button-13, #button-14, #button-14-5, #button-15, #button-16-mantragenerator, #techtalkz, #savebutton, #techtalk-count, #smart").hide();
$(document).ready(function () {
    $("#button-1").click(function () {
        $("#p-2, #button-2").fadeIn([3000]);
        //console.log("fadeIn"); 
        $("#button-2").click(function () {
            $("#p-3, #button-3").fadeIn([3000]);
            $("#button-3").click(function () {
                $("#p-4, #button-4").fadeIn([3000]);
                $("#button-4").click(function () {
                    $("#p-5, #button-5-sciencegenerator").fadeIn([]);
                    $("#button-5-5").click(function () {
                        $("#p-6, #button-6, #button-6-5").fadeIn()[3000];
                        $("#button-6, #button-6-5").click(function () {
                            $("#p-7, #button-7, #button-7-5").fadeIn([3000]);
                            $("#button-7, #button-7-5").click(function () {
                                $("#p-8, #button-8").fadeIn([3000]);
                                $("#button-8").click(function () {
                                    $("#p-9, #button-9").fadeIn([3000]);
                                    $("#button-9").click(function () {
                                        $("#p-10, #button-10").fadeIn([3000]);
                                        $("#button-10").click(function () {
                                            $("#p-11, #button-11").fadeIn([3000]);
                                            $("#button-11").click(function () {
                                                $("#p-12, #button-12").fadeIn([3000]);
                                                $("#button-12").click(function () {
                                                    $("#p-13, #button-13").fadeIn([3000]);
                                                    $("#button-13").click(function () {
                                                        $("#p-14, #button-14, #button-14-5").fadeIn([3000]);
                                                        $("#button-14, #button-14-5").click(function () {
                                                            $("#p-15, #button-15").fadeIn([3000]);
                                                            $("#button-15").click(function () {
                                                                $("#p-16, #button-16-mantragenerator").fadeIn([3000]);
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});


$(document).ready(function () {
    $("#button-5-sciencegenerator").click(function () {
        generateScience();
    });
});

async function generateScience() {
    try {
        const response = await fetch('https://techy-api.vercel.app/api/text');
        const phrase = await response.text();

        $("#techtalkz").html(phrase).fadeIn();
        $("#savebutton, #techtalk-count, #smart, #button-5-5").fadeIn();
        console.log(phrase);

    } catch (error) {
        console.log('Error:', error);
    }
};

$(document).ready(function () {
    $('#savebutton').click(function () {
        saveScience();
    });
});

function saveScience() {
    var phraseInput = document.getElementById("techtalkz");
    var savebutton = document.getElementById("savebutton");
    var phraseList = document.getElementById("phrase-list");
    var phraseCountSpan = document.getElementById("techtalk-count");

    var phrases = [];

    function renderphrases() {
        phraseList.innerHTML = "";
        phraseCountSpan.textContent = phrases.length;

        for (var i = 0; i < phrases.length; i++) {
            var phrase = phrases[i];

            var li = document.createElement("li");
            li.textContent = phrase;
            li.setAttribute("data-index", i);

            phraseList.appendChild(li);
        }
    }

    function init() {
        var storedphrases = JSON.parse(localStorage.getItem("phrases"));

        if (storedphrases !== null) {
            phrases = storedphrases;
        }

        renderphrases();
    }

    function storephrases() {
        localStorage.setItem("phrases", JSON.stringify(phrases));
    }

    savebutton.addEventListener("click", function (event) {
        event.preventDefault();

        if (phraseInput === "") {
            return;
        }

        phrases.push(phraseInput);
        phraseInput.value = "";

        storephrases();
        renderphrases();
    });

    phraseList.addEventListener("click", function (event) {
        var element = event.target;

        if (element.matches("button") === true) {
            var index = element.parentElement.getAttribute("data-index");
            phrases.splice(index, 1);

            storephrases();
            renderphrases();
        }
    });

    init();
};