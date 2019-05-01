function goPage(index){
    let p = document.querySelector('.consection');
    switch(index){
        case 2:
          p.innerHTML = '<iframe width="90%" height="700px" src="p1/div_404632431.html" frameborder=0></iframe>';
          break;
        case 3:
          p.innerHTML = '<iframe width="90%" height="700px" src="p2/tku60_404632431.html" frameborder=0></iframe>';
          break;
        case 4:
          p.innerHTML = '<iframe width="90%" height="700px" src="p3/myclass.html" frameborder=0></iframe>'

    }

}