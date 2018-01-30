$(document).ready(function(){
	
	/* Announcements*/
	var anmt1 = "Announcement:  School in top 5% of schools in the country for achievement Read More";
	var anmt2 = "Announcement: This is another announcement";
	
	/* Building Annnouncement Array */
	var initialArray = new Array(anmt1,anmt2);
	var arrayAnmtLoops = 5;
	var anmtArray = [];
	for(i=0; i<arrayAnmtLoops; i++){
		for(k=0; k<=initialArray.length;k++){
			anmtArray.push(initialArray[k])
		}
	}
	
	/*Checking if Array is populated*/
	if(!anmtArray.length){
		$('#ancmtSpan').text("More Announcements coming soor");
	}
	else{
		/*Function for Looping the Array*/
		for (var i = 0; i <=anmtArray.length; i++) {
			function anmtLoopArray(i, t) {
				setTimeout(function() {
					$('#ancmtSpan').html(anmtArray[i]);
				}, t * i);
			};
			
			var messageDuration = 10; /*in seconds*/
			/*Execute function*/
			anmtLoopArray(i, (messageDuration * 1000));
		}
	}
	
	// Clicking the button Read More/view All hides the button
	$(".viewAll").click(function(){
	try{
	var x = $(this).parent().attr('id');
	if(x=="welcomeText"){
	// Adds text to main text under Welcome
	$("#threedots").html(". Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");
		$(this).toggle();
	} else if(x=="news"){
	$(this).toggle();
	}
		return false;
	}
	catch(e){
		alert("Button Error" + e.ain + e.message)
		}
	});
	


	
	
	
	//Carousel JQuery
	
	
	$('.owl-carousel').owlCarousel({
		margin: 10,
		nav: true,
		loop: true,
		autoplay:true,
		autoplayTimeout:1000,
		autoplayHoverPause:true,
		autoplayTimeout:3000,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})
	
	// Google Maps
	
	function initMap() {
		try{
			var location = {lat: 51.109, lng: -3.100};
			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 8,
				center: location
			});
			var marker = new google.maps.Marker({
				position: location,
				map: map
			});
			marker.set(map);
		}
		catch(e){
			$('#map').html("A Map Error has occured <br>" + e.name + "<br>" + e.message);
		}
	}
	$(initMap);
	
	
	//Calender Carousel 
	
	function events(id , d, t1, ev1, t2, ev2){
		
		$(id).html("<h3>" + d + "</h3><h5> April </h5><br><div id='calImp'></div><br><em>"+ t1 +"</em2><br>" + ev1 + "<em><br>"+ t2 +"</em2><br>" + ev2);
		
	}
	
	//Arrays
	var days= [23,11,04,03];
	
	//Content Arrays
	var day1 = [[/*Event Time*/"9:30-15:00",/*Event Name*/"ExamPreperation and Revision for IT"], 
	[/*Event Time*/"10:00-11:00",/*Event Name*/"Prepare for working life"]];
	var day2 = [[/*Event Time*/"",/*Event Name*/"Parents Evening"], 
	[/*Event Time*/"",/*Event Name*/"Year 9 Options  Evening"]];
	var day3 = [[/*Event Time*/"",/*Event Name*/"Year 8 EAL Parents Evening"], 
	[/*Event Time*/"",/*Event Name*/""]];
	var day4 = [[/*Event Time*/"9",/*Event Name*/"Year 9 Options Evening"], 
	[/*Event Time*/"",/*Event Name*/""]];
	
	//Executing events 
	try{
		events(".active #cal1", days[2],day2[0][0], day2[0][1], day2[1][0],day2[1][1]);
		events(".active #cal3", days[0],day2[0][0], day2[0][1], day2[1][0],day2[1][1]);
		events(".active #cal2", days[1],day3[0][0], day3[0][1], day3[1][0],day3[1][1]);
		events(".cloned #cal4", days[3],day1[0][0], day1[0][1], day1[1][0],day1[1][1]);
		
		
		
		
	}
	catch(e){
		alert("Calender Carousel Error: " + e.main + " " +e.message)
	};
	
	
/*Twitter Carousel - Not currently Working */
/*$('.tweet').twittie({

list: null,
hashtag: null,
<a href="https://www.jqueryscript.net/time-clock/">date</a>Format: '%b. %d, %Y', // date format
template: '{{tweet}} <div class="date">{{date}}</div>', // Format how you want to show your tweets. 
count: 4, // Number of tweets you want to display.
hideReplies: true, // Hide replies and only show your own tweets
username: Evosite, // Option to load tweets from another account.
apiPath : '../api/tweet.php'


}); */



});

