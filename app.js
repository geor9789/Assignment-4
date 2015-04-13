Titanium.UI.setBackgroundColor('black');

var win1 = Titanium.UI.createWindow({  //Windows
    text: 'Landing Page',
    backgroundColor:'white'
});

//
var fb = require('facebook');
fb.appid = (343639659159084);
fb.permissions = ['publish_stream'];
fb.addEventListener('login', function(e) {
    if (e.success) {
        alert('Logged in');
    }
});
fb.addEventListener('logout', function(e) {
    alert('Logged out');
});
    
// Add the button.  Note that it doesn't need a click event listener.
win1.add(fb.createLoginButton({
    bottom : 35,
    style : fb.BUTTON_STYLE_WIDE
}));
win1.open();

var scheduleWindow = Ti.UI.createWindow({
	text:'Child Page',
	backgroundColor:'#fff'
});

var titleView = Ti.UI.createView({		//Titles
	height: '20%',
	width: '100%',
	top:'0%',
});
var titleLabel = Ti.UI.createLabel({
	text:'Tyler Gestrin',
	left: '20%',
	height: Ti.UI.FILL,
	font:{
			fontSize:'35sp',
			fontWeight:'bold',
			fontColor:'#FFFFFF'
	}									
});
var scheduleTitleView = Ti.UI.createView({
	top: 0,
	backgroundColor: 'black',
	height:'20%',
	width: '100%',
});
var scheduleTitleLabel = Ti.UI.createLabel({
	text:'Professional Bio',
	textAlign: 'center',
	color: '#d2b45b',
	height:Ti.UI.FILL,
	font:{
		fontSize:'30sp',
		fontWeight:'bold',
	}
});

var ContactList = Ti.UI.createView({				//HOME SCREEN
	height:'13%',
	width:'45%',
	left:'35%',
	top: '40%',				
});
var contactInfo = Ti.UI.createLabel({
	text: 'Tyler Gestrin \nBusiness Marketing with Entrepreneurship Emphasis \n208 869-9639 \nStudent Email (gest0499@vandals.uidaho.edu) \nAlt. Email (tylergestrin@gmail.com)',
	textAlign:'center',
	height:Ti.UI.FILL,
	font:{
		fontColor:'black',
		fontSize:'10sp'
	}
});

var HomeScrnPic = Ti.UI.createView({
	height:'25%',
	width:'60%',
	left:'20%',
	bottom: 0,
	borderRadius: 20,
	backgroundImage:'/Images/Tyler.jpg'
});
var returnView = Ti.UI.createView({		//ButtonViews
	bottom: '0',
	left: 0,
	height:'10%',
	width:'100%',
	backgroundColor:'black'
});
var scheduleView = Ti.UI.createView({		
	height: '20%',
	width: '20%',
	left: 0,
	top: '20%'
});

var blablaView = Ti.UI.createView({
	top: '22%',
	left: '20%',
	height: '15%',
	width: '80%',
});	

var secondpageprofileview = Ti.UI.createView({
	height:'25%',
	width:'60%',
	left:'20%',
	bottom: 0,
	borderRadius: 20,
	backgroundImage:'/Images/Nike.jpg'
});		

var PersonalBio = Ti.UI.createLabel({
	text: 'Tyler Gestrin is a Senior at the University of Idaho.\nHe is graduating in May of 2015 with a business bachelors degree.\nAfter graduation, he is moving to Beaverton, OR to fulfill his career opportunity at Nike Inc.',
	textAlign:'center',
	height:Ti.UI.FILL,
	font:{
		fontSize:'15sp'
	}
});


var blablaLabel = Ti.UI.createLabel({		
	textAlign: 'center',
	top: '5%',
	text: 'Marketing Analyst/Specialist at Nike Inc.',
	font:{
		fontSize:'20sp',
		fontWeight:'bold',
	}	
});

var scheduleButton = Ti.UI.createButton({			//Buttons
	title: 'Bio',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'100%',
		height: '100%',
		borderColor: '#d2b45b',							
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold'
		},
		backgroundColor:'black'
});

var returnButton = Ti.UI.createButton({
	title:'Return',
	color:'black',
	borderRadius: 10,
	height:Ti.UI.FILL,
	width:'15%',
	height:'100%',
	left: 0,
	bordercolor:'black',
	backgroundColor: '#d2b45b',
	textAlign:'center',
	font:{
		fontSize:'35sp',
		fontWeight:'bold',
	},
	backgroundcolor:'#333333'
});



scheduleButton.addEventListener('click', function(e){

	scheduleWindow.open();
});

returnButton.addEventListener('click', function(e){

	win1.open();
});

win1.open();

win1.add(titleView);

titleView.add(titleLabel);

win1.add(scheduleView);

win1.add(blablaView);

win1.add(HomeScrnPic);

win1.add(ContactList);

win1.add(contactInfo);

scheduleWindow.add(returnView);

scheduleWindow.add(scheduleTitleView);

scheduleWindow.add(secondpageprofileview);

scheduleWindow.add(PersonalBio);

//returnview.add(returnButton);

blablaView.add(blablaLabel);

scheduleView.add(scheduleButton);

scheduleTitleView.add(scheduleTitleLabel);
