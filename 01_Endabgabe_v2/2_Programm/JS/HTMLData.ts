
/*
Aufgabe: Endabgabe
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 04.08.2020
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.  
*/
namespace endabgabe2 {


    export let htmlData: { [key: string]: string }
        = {
        "welcomeMSG": `<section class="endabgabe">
            <main class="end-bg borderInset" style="width: 25%;">
              <header class="end-bg header">
                <section class="headerTop">
                  <div class="headerTitle">
                    <span>Welcome To Rude MS Paint</span>
                  </div>
                  <div>
                    <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/7ec82923df5004a8fbcd8a45e18614fa88071c4f/01_Endabgabe_v2/3_IMG/1.png?raw=true" width="10px" alt=""></button>
                    <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/7ec82923df5004a8fbcd8a45e18614fa88071c4f/01_Endabgabe_v2/3_IMG/2.png?raw=true" width="10px" alt=""></button>
                    <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/7ec82923df5004a8fbcd8a45e18614fa88071c4f/01_Endabgabe_v2/3_IMG/3.png?raw=true" width="10px" alt=""></button>
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
                    <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/7ec82923df5004a8fbcd8a45e18614fa88071c4f/01_Endabgabe_v2/3_IMG/1.png?raw=true" width="10px" alt=""></button>
                    <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/7ec82923df5004a8fbcd8a45e18614fa88071c4f/01_Endabgabe_v2/3_IMG/2.png?raw=true" width="10px" alt=""></button>
                    <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/7ec82923df5004a8fbcd8a45e18614fa88071c4f/01_Endabgabe_v2/3_IMG/3.png?raw=true" width="10px" alt=""></button>
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
                        <input type="text" id="username" name="username" value="John"><br>
                        <label for="pass">Password</label><br>
                        <input type="password" id="pass" name="pass" value="Doe"><br><br>
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
                    <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/7ec82923df5004a8fbcd8a45e18614fa88071c4f/01_Endabgabe_v2/3_IMG/1.png?raw=true" width="10px" alt=""></button>
                    <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/7ec82923df5004a8fbcd8a45e18614fa88071c4f/01_Endabgabe_v2/3_IMG/2.png?raw=true" width="10px" alt=""></button>
                    <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/7ec82923df5004a8fbcd8a45e18614fa88071c4f/01_Endabgabe_v2/3_IMG/3.png?raw=true" width="10px" alt=""></button>
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
                        <input type="text" id="name" name="name" value="John"><br>
                        <label for="username">Username</label><br>
                        <input type="text" id="username" name="username" value="JohnxxXX"><br>
                        <label for="pass">Password</label><br>
                        <input type="password" id="pass" name="pass" value=""><br><br>
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
                    <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/7ec82923df5004a8fbcd8a45e18614fa88071c4f/01_Endabgabe_v2/3_IMG/1.png?raw=true" width="10px" alt=""></button>
                    <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/7ec82923df5004a8fbcd8a45e18614fa88071c4f/01_Endabgabe_v2/3_IMG/2.png?raw=true" width="10px" alt=""></button>
                    <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/7ec82923df5004a8fbcd8a45e18614fa88071c4f/01_Endabgabe_v2/3_IMG/3.png?raw=true" width="10px" alt=""></button>
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
                      <section>
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
          </section>`,
        "newPicturePanel": `<section class="endabgabe">
            <main class="end-bg borderInset" style="width: 25%;">
              <header class="end-bg header">
                <section class="headerTop">
                  <div class="headerTitle">
                    <span>Create New Canvas</span>
                  </div>
                  <div>
                    <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/7ec82923df5004a8fbcd8a45e18614fa88071c4f/01_Endabgabe_v2/3_IMG/1.png?raw=true" width="10px" alt=""></button>
                    <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/7ec82923df5004a8fbcd8a45e18614fa88071c4f/01_Endabgabe_v2/3_IMG/2.png?raw=true" width="10px" alt=""></button>
                    <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/7ec82923df5004a8fbcd8a45e18614fa88071c4f/01_Endabgabe_v2/3_IMG/3.png?raw=true" width="10px" alt=""></button>
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
                        <label for="name">X-size in Pixels (100-1500)</label><br>
                        <input type="text" id="name" name="name" value="John"><br>
                        <label for="username">Y-size in Pixels (100-1500)</label><br>
                        <input type="text" id="username" name="username" value="JohnxxXX"><br>
                        <label for="colorhex">Choose your canvas color</label><br>
                        <input type="color" id="colorhex" name="colorhex" value="#ffffff"><br><br>
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
        "mainCanvasPanel": `<section class="endabgabe">
            <main class="end-bg borderInset" style="width: auto; height: auto;">
              <header class="end-bg header">
                <section class="headerTop">
                  <div class="headerTitle">
                    <span>MS Paint</span>
                  </div>
                  <div>
                    <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/7ec82923df5004a8fbcd8a45e18614fa88071c4f/01_Endabgabe_v2/3_IMG/1.png?raw=true" width="10px" alt=""></button>
                    <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/7ec82923df5004a8fbcd8a45e18614fa88071c4f/01_Endabgabe_v2/3_IMG/2.png?raw=true" width="10px" alt=""></button>
                    <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/7ec82923df5004a8fbcd8a45e18614fa88071c4f/01_Endabgabe_v2/3_IMG/3.png?raw=trueg" width="10px" alt=""></button>
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
                        <button class="end-bg borderInset toolsStyle" id=""></button>
                        <button class="end-bg borderInset toolsStyle" id=""></button>
                        <button class="end-bg borderInset toolsStyle" id=""></button>
                        <button class="end-bg borderInset toolsStyle" id=""></button>
                        <button class="end-bg borderInset toolsStyle" id="" ></button>
                        <button class="end-bg borderInset toolsStyle" id=""></button>
                        <button class="end-bg borderInset toolsStyle" id=""></button>
                        <button class="end-bg borderInset toolsStyle" id=""></button>
                        <button class="end-bg borderInset toolsStyle" id=""></button>
                        <button class="end-bg borderInset toolsStyle" id=""></button>
                        <button class="end-bg borderInset toolsStyle" id=""></button>
                        <button class="end-bg borderInset toolsStyle" id=""></button>
                        <button class="end-bg borderInset toolsStyle" id=""></button>
                        <button class="end-bg borderInset toolsStyle" id=""></button>
                        <button class="end-bg borderInset toolsStyle" id="" ></button>
                      </section>
                    </aside>
                    <canvas width="1000" height="340"></canvas>
                </div>
                <section class="end-bg footer">
                  <section class="footerInner">
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
                    <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/7ec82923df5004a8fbcd8a45e18614fa88071c4f/01_Endabgabe_v2/3_IMG/1.png?raw=true" width="10px" alt=""></button>
                    <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/7ec82923df5004a8fbcd8a45e18614fa88071c4f/01_Endabgabe_v2/3_IMG/2.png?raw=true" width="10px" alt=""></button>
                    <button class="end-bg borderInset headerIcon"><img src="https://github.com/ivenios/EIA2/blob/7ec82923df5004a8fbcd8a45e18614fa88071c4f/01_Endabgabe_v2/3_IMG/3.png?raw=true" width="10px" alt=""></button>
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

}