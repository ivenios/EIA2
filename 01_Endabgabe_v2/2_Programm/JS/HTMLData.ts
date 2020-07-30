
    /*
Aufgabe: Endabgabe
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 04.08.2020
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.  
*/
namespace endabgabe2 {


export let htmlData: {[key: string]: string }
        = {
            "welcomeMSG": `<section class="endabgabe">
                                <main class="end-bg borderInset" style="width: 25%;">
                                <header class="end-bg header">
                                    <section class="headerTop">
                                    <div class="headerTitle">
                                        <span>Welcome to Rude MS Paint</span>
                                    </div>
                                    <div>
                                        <button class="end-bg borderInset headerIcon"><img src="../../3_IMG/1.png" width="10px" alt="" ></button>
                                        <button class="end-bg borderInset headerIcon"><img src="../../3_IMG/2.png" width="10px" alt="" ></button>
                                        <button class="end-bg borderInset headerIcon"><img src="../../3_IMG/3.png" width="10px" alt="" ></button>
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
                                        <button id="startMSPaint" class="norm-button"  >Lets fucking go!</button>
                                    </section>
                                    <br>
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
                            </section>`,
            "loginPanel": `<section class="endabgabe">
                                <main class="end-bg borderInset" style="width: 25%;">
                                <header class="end-bg header">
                                    <section class="headerTop">
                                    <div class="headerTitle">
                                        <span>Welcome to Rude MS Paint</span>
                                    </div>
                                    <div>
                                        <button class="end-bg borderInset headerIcon"><img src="../../3_IMG/1.png" width="10px" alt="" ></button>
                                        <button class="end-bg borderInset headerIcon"><img src="../../3_IMG/2.png" width="10px" alt=""></button>
                                        <button class="end-bg borderInset headerIcon"><img src="../../3_IMG/3.png" width="10px" alt=""></button>
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
                                            <input type="text" id="username" name="Username" value="John"><br>
                                            <label for="password">Password</label><br>
                                            <input type="text" id="password" name="Password" value="..."><br><br>
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
                                    </section>
                                    </section>
                                </section>
                                </main>
                            </section>`,
            "registerPanel": `<section class="endabgabe">
                                        <main class="end-bg borderInset" style="width: 25%;">
                                        <header class="end-bg header">
                                            <section class="headerTop">
                                            <div class="headerTitle">
                                                <span>Create New User</span>
                                            </div>
                                            <div>
                                                <button class="end-bg borderInset headerIcon"><img src="../../3_IMG/1.png" width="10px" alt=""></button>
                                                <button class="end-bg borderInset headerIcon"><img src="../../3_IMG/2.png" width="10px" alt=""></button>
                                                <button class="end-bg borderInset headerIcon"><img src="../../3_IMG/3.png" width="10px" alt=""></button>
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
                                                    <input type="text" id="fname" name="fname" value="JohnxxXX"><br>
                                                    <label for="password">Password</label><br>
                                                    <input type="text" id="lname" name="lname" value="Doe"><br><br>
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
                                                    <button class="end-bg borderInset headerIcon"><img src="../../3_IMG/1.png" width="10px" alt=""></button>
                                                    <button class="end-bg borderInset headerIcon"><img src="../../3_IMG/2.png" width="10px" alt=""></button>
                                                    <button class="end-bg borderInset headerIcon"><img src="../../3_IMG/3.png" width="10px" alt=""></button>
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
            "newPicturePanel": "XX",
            "mainCanvasPanel": "XX",
            "dynamicErrorMSGPanel": "XX" 

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