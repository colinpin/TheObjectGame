# TheObjectGame

slack channel: aslapgame
---------
Colin: (801) 641-6251
Dave: (208) 859-2203
Scott: (208) 899-7582
---------

TO-DO:
The Slap Object Game - Part 1

Objective:

Students will use javascript in order to interact with the DOM to create a dynamic webpage. Since students will work in groups they will practice using a shared repository or may use pull requests.

##[x] Step 1 - GIT - Project Initialization

[x] Everyone should break into groups of 2 or 3.
[x] A member of the group should create a git repository named TheObjectGame
[x] Create the file index.html and a script file called game.js and a css file name game.css.
[x] Commit changes and push them back to GitHub.
[x] Each team member should then clone the repository via GIT.

##[x] Step 2 - HTML - Create page layout and Slap button

[x] link bootstrap game.js and game.css to index.html.
[x] Start by adding a bootstrap panel with a header, body and footer. http://getbootstrap.com/components/#panels
[x] Add an image to the body of a stick figure with a width of 200px
[x] Add a button to the footer with the text "Slap"

##[x] Step 3 - JS - Declare variables and write the Slap function

[x] create a global variable: var health=100;
[x] create a function: slap()
[x] have the function reduce the health variable by 1.
[x] for now, have the function alert(health).
[x] test the function by calling slap() at the end of the game.js file.
[x] you should see an alert of 99 show on the screen.
[x] if this is working, remove the test to prevent popups on every page load.

##[x] Step 4 - HTML - Link the Slap button to the Slap function

[x] On the slap button element, add the attribute onClick="slap()"
[x] if things are working properly you should be able to hit the slap button and see the alert window with a decrease in health.
[x] To prevent having to show the players health in popup, let's link the player's health directly to the user interface.
[x] Add a span element to the header for the players health: example - Health:--
[x] the id is important so we can call the element from JS easily.

##[] Step 5 - JS - Update the user interface

[x] We are now going to add a function to manipulate the user interface by using the DOM API.
[x] To do this, javascript is required.
[x] You should know by now that selectors are required in order to select specific elements inside the DOM.
[x] In this case, we will use the infamous "document.getElementById("WHATEVER-ID")";
[x] Add a function called update(). This will be responsible for updating the user interface whenever a value changes.
[x] have the function set the "innerText" of the element with the id "health"
[x] see if you and the group can figure this out on your own, if not ask a mentor.
[x] Add a call to the update() function at the bottom of your js file. If it is working, you should see the player health on the screen.
[x] There is no need to delete the call you just added, it is recommended so you always start off with populated values.
[x] If it is working, make sure you add a call to update at the end of the punch function. This way the screen is updated after ever punch.

##[] Step 6 - HTML - Add the other buttons and stuff...

[x] Add 2 more buttons Punch, and Kick to the UI, as well as their respective functions in javascript.
[x] Have the punch function decrease the player health by 5, and kick by 10.
[x] Don't forget to call update inside each function.
[] Declare 2 more variables 'name', and 'hits' where you initialized the health variable. -name your player whatever you want, what datatype would a name be? -set the variable hits with a value of 0, every time the player is hit by a Slap, Punch, or Kick this variable should be increased by 1.
[] Add a placeholder for player name, and hits inside the header next to health.
[] Wire everything up like you did for "Slap".


##[] Step 7 - Testing Time

[] You should now have a functioning application. Test the following
[] In the panel header you should see an indicator for Health, Name, and Hits; their respective values should be 100, "Whatever Name You Chose", and 0.
[] Click the slap button, you should see the player health drop to 99 and hit count to 1.
[] Click the punch button, you should see the player health drop to 94 and hit count to 2.
[] Finally click the Kick button, you should see the player health drop to 84 and hit count to 3.
[] Keep pressing buttons... What happens when the player has been hit for over 100 hit points? Why does this happen?
[] Discuss with the group some ideas on improvements, write these ideas down and be prepared to share.
