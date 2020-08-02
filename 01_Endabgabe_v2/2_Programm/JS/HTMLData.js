/*
Aufgabe: Endabgabe
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 04.08.2020
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
*/
var endabgabe2;
(function (endabgabe2) {
    endabgabe2.htmlData = {
        "welcomeMSG": `<section class="endabgabe">
        <main class="end-bg borderInset" style="width: 25%;">
          <header class="end-bg header">
            <section class="headerTop">
              <div class="headerTitle">
                <span>Welcome To Rude MS Paint</span>
              </div>
              <div>
                <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/master/01_Endabgabe_v2/3_IMG/1.png?raw=true" width="10px" alt=""></button>
                <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/master/01_Endabgabe_v2/3_IMG/2.png?raw=true" width="10px" alt=""></button>
                <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/master/01_Endabgabe_v2/3_IMG/3.png?raw=true" width="10px" alt=""></button>
              </div>
            </section>
    
          </header>
          <section class="content">
            <div class="contentMiddle">
            </div>
            <section class="end-bg footer">
              <section class="footerInner">
                <h1>Welcome to rude MS Paint</h1>
                <p>Feel free to paint your heart out. But please no rude symbols and dont spam!</p>
                <button id="startMSPaint" class="norm-button">Lets fucking go!</button>
              </section>
              <hr>
              <section class="footerBottom">
                <div class="end-border-inset">
                  ...
                </div>
                <div class="end-border-inset"></div>
                <div class="end-border-inset"></div>
              </section>
            </section>
          </section>
        </main>
      </section>
        `,
        "loginPanel": `<section class="endabgabe">
        <main class="end-bg borderInset" style="width: 25%;">
          <header class="end-bg header">
            <section class="headerTop">
              <div class="headerTitle">
                <span>Log In</span>
              </div>
              <div>
                <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/master/01_Endabgabe_v2/3_IMG/1.png?raw=true" width="10px" alt=""></button>
                <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/master/01_Endabgabe_v2/3_IMG/2.png?raw=true" width="10px" alt=""></button>
                <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/master/01_Endabgabe_v2/3_IMG/3.png?raw=true" width="10px" alt=""></button>
              </div>
            </section>
    
          </header>
          <section class="content">
            <div class="contentMiddle">
            </div>
            <section class="end-bg footer">
              <section class="footerInner">
                <form>
                  <h1>Can i please see some fucking identification?</h1>
                  <form class="loginForm">
                    <label for="username">Username</label><br>
                    <input type="text" id="username" name="username"  required><br>
                    <label for="pass">Password</label><br>
                    <input type="password" id="pass" name="pass" required><br><br>
                  </form>
                  <button class="norm-button" id="userLogin">Login in</button>
    
                  <button class="norm-button" id="userIsNew">I'm new here</button>
    
                </form>
              </section>
              <br>
              <section class="footerBottom">
                <div class="end-border-inset">
                  ...
                </div>
                <div class="end-border-inset"></div>
                <div class="end-border-inset"></div>
                <hr>
              </section>
            </section>
          </section>
        </main>
      </section>
        `,
        "registerPanel": `<section class="endabgabe">
        <main class="end-bg borderInset" style="width: 25%;">
          <header class="end-bg header">
            <section class="headerTop">
              <div class="headerTitle">
                <span>Create New User</span>
              </div>
              <div>
                <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/master/01_Endabgabe_v2/3_IMG/1.png?raw=true" width="10px" alt=""></button>
                <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/master/01_Endabgabe_v2/3_IMG/2.png?raw=true" width="10px" alt=""></button>
                <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/master/01_Endabgabe_v2/3_IMG/3.png?raw=true" width="10px" alt=""></button>
              </div>
            </section>
    
          </header>
          <section class="content">
            <div class="contentMiddle">
            </div>
            <section class="end-bg footer">
              <section class="footerInner">
                <form>
                  <h1>Fill in the Form to create a new User</h1>
                  <form class="loginForm">
                    <label for="name">Name</label><br>
                    <input type="text" id="name" name="name" required ><br>
                    <label for="username">Username</label><br>
                    <input type="text" id="username" name="username" required ><br>
                    <label for="pass">Password</label><br>
                    <input type="password" id="pass" name="pass" value="" required ><br><br>
                  </form>
                  <button class="norm-button" id="createNewUser">Create New User</button>
    
                  <button class="norm-button" id="goBack">Cancel</button>
    
                </form>
              </section>
              <br>
              <section class="footerBottom">
                <div class="end-border-inset">
                  ...
                </div>
                <div class="end-border-inset"></div>
                <div class="end-border-inset"></div>
                <hr>
              </section>
            </section>
          </section>
        </main>
      </section>`,
        "userPictureOverview": `<section class="endabgabe">
        <main class="end-bg borderInset" style="width: 25%;">
          <header class="end-bg header">
            <section class="headerTop">
              <div class="headerTitle">
                <span>Picture Overview</span>
              </div>
              <div>
                <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/master/01_Endabgabe_v2/3_IMG/1.png?raw=true" width="10px" alt=""></button>
                <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/master/01_Endabgabe_v2/3_IMG/2.png?raw=true" width="10px" alt=""></button>
                <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/master/01_Endabgabe_v2/3_IMG/3.png?raw=true" width="10px" alt=""></button>
              </div>
            </section>
    
          </header>
          <section class="content">
            <div class="contentMiddle">
            </div>
            <section class="end-bg footer">
              <section class="footerInner">
                <form>
                  <h1>Look at all those Pictures:</h1>
                  <section id="pictureListhtml">
                    <div class="end-border-inset picList"> Eintrag 1</div>
                    <div class="end-border-inset picList"> Eintrag 2</div>
                  </section>
    
    
                  <hr>
                  <button class="norm-button" id="createNewPicture">New Picture</button>
                  <button class="norm-button" id="logOut">Log Out</button>
                  <hr>
    
                  <section class="footerBottom">
                    <div class="end-border-inset">
                      Select one of your pictures to continue Working on it or create a new one.
                    </div>
                    <div class="end-border-inset"></div>
                    <div class="end-border-inset"></div>
                  </section>
              </section>
            </section>
        </main>
      </section> `,
        "newPicturePanel": `  <section class="endabgabe">
        <main class="end-bg borderInset" style="width: 25%;">
          <header class="end-bg header">
            <section class="headerTop">
              <div class="headerTitle">
                <span>Create New Canvas</span>
              </div>
              <div>
                <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/master/01_Endabgabe_v2/3_IMG/1.png?raw=true" width="10px" alt=""></button>
                <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/master/01_Endabgabe_v2/3_IMG/2.png?raw=true" width="10px" alt=""></button>
                <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/master/01_Endabgabe_v2/3_IMG/3.png?raw=true" width="10px" alt=""></button>
              </div>
            </section>
    
          </header>
          <section class="content">
            <div class="contentMiddle">
            </div>
            <section class="end-bg footer">
              <section class="footerInner">
                <form>
                  <h1>Create A New Artwork:</h1>
                  <form class="loginForm">
                    <label for="canvasName">Name your Picture</label><br>
                    <input type="text" id="canvasName" name="canvasName" maxlength="30" required><br>
                    <label for="xsize">X-size in Pixels (100-1500)</label><br>
                    <input type="number" id="xsize" name="xsize"  min="100" max="1500" required><br>
                    <label for="ysize">Y-size in Pixels (100-1500)</label><br>
                    <input type="number" id="ysize" name="ysize" min="100" max="1500" required><br>
                    <label for="colorhex">Choose your canvas color</label><br>
                    <input type="color" id="colorhex" name="colorhex"  required><br><br>
                  </form>
                  <button class="norm-button" id="renderNewCanvas">Create New Canvas</button>
    
                  <button class="norm-button" id="goBackToOverview">Cancel</button>
    
                </form>
              </section>
              <br>
              <section class="footerBottom">
                <div class="end-border-inset">
                  ...
                </div>
                <div class="end-border-inset"></div>
                <div class="end-border-inset"></div>
                <hr>
              </section>
            </section>
          </section>
        </main>
      </section>
    
        `,
        "mainCanvasPanel": `
        <section class="endabgabe">
    <main class="end-bg borderInset" style="width: auto; height: auto;">
      <header class="end-bg header">
        <section class="headerTop">
          <div class="headerTitle">
            <span>MS Paint - <span id="canvasTitle"></span></span>
          </div>
          <div>
            <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/master/01_Endabgabe_v2/3_IMG/1.png?raw=true" width="10px" alt=""></button>
            <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/master/01_Endabgabe_v2/3_IMG/2.png?raw=true" width="10px" alt=""></button>
            <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/master/01_Endabgabe_v2/3_IMG/3.png?raw=true" width="10px" alt=""></button>
          </div>
        </section>
        <section class="headerTabs">
          <button class="headerTab">File</button>
          <button class="headerTab">Edit</button>
          <button class="headerTab">View</button>
          <button class="headerTab">Image</button>
          <button class="headerTab">Colors</button>
          <button class="headerTab">Help</button>
        </section>
      </header>
      <section class="content">
        <div class="contentMiddle">
            <aside class="end-bg tools">
              <section class="toolsBox">
                <button class="end-bg borderInset toolsStyle" id="squareButt"><img src="https://github.com/ivenios/EIA2/blob/master/01_Endabgabe_v2/3_IMG/square.png?raw=true" width="20px" alt=""></button>
                <button class="end-bg borderInset toolsStyle" id="circleButt"><img src="https://github.com/ivenios/EIA2/blob/master/01_Endabgabe_v2/3_IMG/circle.png?raw=true" width="20px" alt=""></button>
                <button class="end-bg borderInset toolsStyle" id="triangleButt"><img src="https://github.com/ivenios/EIA2/blob/master/01_Endabgabe_v2/3_IMG/triangle.png?raw=true" width="20px" alt=""></button>
                <button class="end-bg borderInset toolsStyle" id="moverButt"><img src="https://github.com/ivenios/EIA2/blob/master/01_Endabgabe_v2/3_IMG/Mover.png?raw=true" width="20px" alt=""></button>
                <button class="end-bg borderInset toolsStyle" id="deleteObjectButt" ><img src="https://github.com/ivenios/EIA2/blob/master/01_Endabgabe_v2/3_IMG/rubber.png?raw=true" width="20px" alt=""></button>
                <button class="end-bg borderInset toolsStyle" id=""><img src="https://github.com/ivenios/EIA2/blob/master/01_Endabgabe_v2/3_IMG/text.png?raw=true" width="20px" alt=""></button>
                <button class="end-bg borderInset toolsStyle" id=""><img src="https://github.com/ivenios/EIA2/blob/master/01_Endabgabe_v2/3_IMG/pencil.png?raw=true" width="20px" alt=""></button>
                <button class="end-bg borderInset toolsStyle" id=""><img src="https://github.com/ivenios/EIA2/blob/master/01_Endabgabe_v2/3_IMG/misc1.png?raw=true" width="20px" alt=""></button>
                <button class="end-bg borderInset toolsStyle" id=""><img src="https://github.com/ivenios/EIA2/blob/master/01_Endabgabe_v2/3_IMG/line2.png?raw=true" width="20px" alt=""></button>
                <button class="end-bg borderInset toolsStyle" id=""><img src="https://github.com/ivenios/EIA2/blob/master/01_Endabgabe_v2/3_IMG/line1.png?raw=true" width="20px" alt=""></button>
                
              </section>
            </aside>
            <canvas> </canvas>
        </div>
        <section class="end-bg footer">
          <section class="footerInner">
            <button class="norm-button" id="savePicture">Save Picture</button>
            <button class="norm-button" id="deletePicture">Delete Picture</button>
            <button class="norm-button" id="startAnim">Start Animation</button>
            <button class="norm-button" id="stopAnim">Stop Animation</button>
            <button class="norm-button" id="goBackToOverview">Quit</button>
            <button class="norm-button" id="test">test</button>
            <form oninput="x.value=parseInt(objectScale.value)" oninput="y.value=parseInt(animSpeed.value)" > 
              <label for="objectColor">Object Color</label>
              <input type="color" id="objectColor" name="canvobjectColoras" value="#000000" required><br>
              <label for="objectScale">Object Scale</label>
              <input type="range" min="1" max="7"  id="objectScale" name="objectScale" value="2" required><output name="x" for="objectScale">2</output> <br>
              <label for="cars">Choose a Animation Style:</label>
              <select id="animStyle" name="animStyle">
                <option value="slow">Captain Slow</option>
                <option value="stig">The Stig</option>
                <option value="bendy">Random Bendy bit</option>
                <option value="mayham">Mayham</option>
              </select>
            </form>
          </section>
          <hr>
          <section class="footerBottom">
            <div class="end-border-inset">
              If you need help, just use the real MS Paint you idiot.
            </div>
            <div class="end-border-inset"></div>
            <div class="end-border-inset"></div>
          </section>
        </section>
      </section>
    </main>
  </section>
        `,
        "dynamicErrorMSGPanel": `<section class="endabgabe">
        <main class="end-bg borderInset" style="width: 25%;">
          <header class="end-bg header">
            <section class="headerTop">
              <div class="headerTitle">
                <span>Error - Something Went Wrong</span>
              </div>
              <div>
                <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/master/01_Endabgabe_v2/3_IMG/1.png?raw=true" width="10px" alt=""></button>
                <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/master/01_Endabgabe_v2/3_IMG/2.png?raw=true" width="10px" alt=""></button>
                <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/master/01_Endabgabe_v2/3_IMG/3.png?raw=true" width="10px" alt=""></button>
              </div>
            </section>
           
          </header>
    
          </header>
          <section class="content">
            <div class="contentMiddle">
            </div>
            <section class="end-bg footer">
              <section class="footerInner">
                <h1>Warning / Error </h1>
                <p id="errorHTMLMsg"></p>
                <button id="errorClose" class="norm-button">Okay.</button>
              </section>
              <hr>
              <section class="footerBottom">
                <div class="end-border-inset">
                  ...
                </div>
                <div class="end-border-inset"></div>
                <div class="end-border-inset"></div>
              </section>
            </section>
          </section>
        </main>
      </section>
    
    
        `
    };
    /*
    1- Willkommens Message mit Erklärung
    2- Login in Panel
    3- User Register Panel
    4- Bilder Übersicht Panel
    5- Neues Bild erstellen
    6- Bild Canvas
    7- Dynamische Error message, in die die passenden Nachrichten eingebaut werden.
    */
})(endabgabe2 || (endabgabe2 = {}));
//# sourceMappingURL=HTMLData.js.map