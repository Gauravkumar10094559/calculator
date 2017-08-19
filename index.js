  $(document).ready(function(){
  	var first,second,operator,result,lastOne,lastSign;

 	function setValues()
 	{
		first=undefined;
		second=undefined;
		operator=undefined;
	}
	function both(){
		  		first=Number(first);
  				second=Number(second);
  				 
  				 if(operator=="*")
	 	  		{
	 	  			result=first*second;
	 	  			
	 	  		}
	 	  		else if(operator=="-")
	 	  		{
	 	  			result=first-second;
	 	  			
	 	  		}
	 	  		else if(operator=="+")
	 	  		{
	 	  			result=first+second;
	 	  			
	 	  		}
	 	  		else if(operator=="/")
	 	  		{
	 	  			result=first/second;
	 	  			
	 	  		}
	}
  	$("button").on("click",function(){
  		var curr=$(this).html();
  		if(lastOne===undefined)
  		{
  			$("span").html(curr);
  		}
  		else
  		{
  			$("span").html(lastOne);
  		}
  		if(curr=="1" || curr=="2" || curr=="3" || curr=="4" || curr=="5" || curr=="6" || curr=="7" || curr=="8" || curr=="9" || curr=="0" || curr==".")
	  		{
	  			if(operator===undefined)
	  			{
	  				if(first===undefined)
	  				{
	  					first=curr;
	  				}
	  				else
	  				{
	  					first+=curr; 
	  				}
	  				lastOne=first;
	  				$("span").html(first);
	  			}
	  			else{

	  				if(second===undefined)
	  				{
	  					second=curr;
	  				}
	  				else{
	  					second+=curr;
	  				}
	  				lastOne=second;
	  				$("span").html(second);
	  			}		
	  		}
  		if(curr=="*" || curr=="-" || curr=="+" || curr=="/")
  		{	
  			operator=curr;
  			if(first && second)
	  			{
		 	  		both();
		 	  		first=result;
		 	  		second=undefined;
		 	  		result=undefined;
		 		}
			if(result!==undefined)
	  			{
	  				first=result;
	  				$("span").html(first);
	  			}
  			if(first===undefined)
	  			{
	  				alert("input value first");
	  				operator=undefined;
	  				$("span").html("0");
	  			}
  		 	 lastSign=operator;
  		}
  		if(curr=="CE")
	 	{
	 		if(result!=undefined)
	 		{
	 			$("span").html("0");
	 			result=undefined;
	 			setValues();
	 			lastOne=undefined;
	 		}
	 		if(lastOne!==undefined && lastOne.length>=1)
		 		{
		 			var temp;
		 		if(lastOne===first)
			 		{
			 			temp=lastOne.substr(0,lastOne.length-1);
			 			first=temp;
			 			lastOne=first;
			 			$("span").html(first);
			 		}
		 		else
			 		{
			 			temp=lastOne.substr(0,lastOne.length-1);
			 			second=temp;
			 			lastOne=second;
			 			$("span").html(second);
			 		}
			 		if(lastOne.length<1)
			 		{
			 			$("span").html("0");
			 		}
		 		}
	 		else
		 		{
		 			$("span").html("0");
		 		}	
	 	}
	 	if(curr=="AC")
	 	{
	 		result=undefined;
			setValues();
	 		lastOne=undefined;
	 		$("span").html("0");
	 	}
	 	if(curr=="=")
	 	{
	 		if(first===undefined)
	 		{
	 			$("span").html("0");
	 			 
	 		}
	 		if(second===undefined)
	 		{
	 			$("span").html(first);
	 			 
	 		}
	 		if(first && second || first===0 || second===0)
  			{
  				both();
	 		}
	 		$("span").html(result);
			setValues();
	 	}
  	});
  });
