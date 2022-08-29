function initMap(){
	var options ={
		center:{lat:23.7778, lng:90.4057},
		zoom:15
	}
	map = new google.maps.Map(document.getElementById("map"), options);

    var riders = [
        {
          name: 'Abdus sattar Bhuiyan',
          image: 'images/sattar.png',
          activity_log: [
             {message:'Assign Abdus sattar to pickup - DM45454', time: ' 24 hours ago'},
             {message:'Pickup Done by Abdus sattar - DM45454', time: ' 12 hours ago'},
             {message:'delivered by Abdus sattar to pickup DM45454', time: ' 2 hours ago'}
             ]
        },
        { name: 'সজিব আলি',
          image: 'images/sajib.jpg',
          activity_log: [
             {message:'Assign Abdus sattar to pickup - DM45454', time: ' 1 month ago'},
             {message:'Pickup Done by Abdus sattar - DM45454', time: ' 1 month ago'},
             {message:'delivered by Abdus sattar to pickup DM45454', time: ' 1 month ago'}
             ]
        },
    ];

for(var i=0; i< riders.length; i++ ){
	alert(riders[i].name)
}
    
    var rider_activity_info = '<h2> Abdus Sattar Bhuiyan</h2>';

     rider_activity_info += '<ul>';
     rider_activity_info +='<li><strong>DM45454</strong> Assign to pickup <span>24 hours ago</span></li>';
     rider_activity_info +='<li><strong>DM45454</strong> Pickup done <span>12 hours ago</span></li>';
     rider_activity_info +='<li><strong>DM45454</strong> delivered <span>20 minutes ago</span></li>';
     rider_activity_info +='</ul>';

	
    
    addMarker({location: {lat:23.7812, lng:90.4039}, icon:'images/sattar.png', activity_info: rider_activity_info});

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

