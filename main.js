
	
		
			var timer = "";
			function showTyping(){
				document.getElementById('lblTyping').innerHTML = "typing...";
				document.getElementById('lblTyping').style.color = "black";
			}
			function hideTyping(){
				clearTimeout(timer);
				timer = setTimeout(function(){
					document.getElementById('lblTyping').innerHTML = "";
				},1000);
			}
			function sent(){
                alert("Message has been sent successfully");
            }
		
	