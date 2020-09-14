function myFunction() {
    var x = document.getElementById("count");
    
    updateVisitCount();
   
  function updateVisitCount() {
      fetch('https://api.countapi.xyz/update/mvskr/lak/?amount=1')
      .then(res => res.json())
      .then(res => {
          x.innerHTML = res.value;
      })
  };
  
  }

 
