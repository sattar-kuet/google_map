function initMap(){
	var options ={
		center:{lat:23.7778, lng:90.4057},
		zoom:15
	}
	map = new google.maps.Map(document.getElementById("map"), options);

   var riders = [
        {
          name: 'Abdus sattar Bhuiyan',
          lat: 23.7812,
          lng: 90.4039,
          image: 'images/sattar.png',
          activity_log: [
             {message:'Assign Abdus sattar to pickup - DM45454', time: ' 24 hours ago'},
             {message:'Pickup Done by Abdus sattar - DM45454', time: ' 12 hours ago'},
             {message:'delivered by Abdus sattar to pickup DM45454', time: ' 2 hours ago'}
             ]
        },
        { name: 'সজিব আলি',
          lat: 23.7882,
          lng: 90.4009,
          image: 'images/sajib.jpg',
          activity_log: [
             {message:'Assign সজিব আলি to pickup - DM45454', time: ' 1 month ago'},
             {message:'Pickup Done by সজিব আলি - DM45454', time: ' 1 month ago'},
             {message:'delivered by সজিব আলি to pickup DM45454', time: ' 1 month ago'}
             ]
        },
        { name: 'Kamruzzaman',
          lat: 23.7821,
          lng: 90.4161,
          image: 'images/avatar.png',
          activity_log: [
             
             ]
        },
    ];

for(var i=0; i< riders.length; i++ ){
	 var rider_activity_info = '<h2>'+riders[i].name+'</h2>';

     rider_activity_info += '<ul>';
     for(var j=0; j<riders[i].activity_log.length; j++){
         rider_activity_info +='<li>'+riders[i].activity_log[j].message+'<span>'+riders[i].activity_log[j].time+'</span></li>';
     }
     rider_activity_info +='</ul>';
     if(riders[i].activity_log.length == 0){
           rider_activity_info ='<p>No activity found yet now.</p>';
     }
     addMarker({location: {lat:riders[i].lat, lng:riders[i].lng}, icon:riders[i].image, activity_info: rider_activity_info});
}
    
	function addMarker(property){
		const marker = new google.maps.Marker({
		position:property.location,
		map:map,
		icon: property.icon
	});
    
    const detailWindow = new google.maps.InfoWindow({

		content: property.activity_info
	});

	marker.addListener("mouseover", () =>{
        detailWindow.open(map, marker);
	});

	}
}

