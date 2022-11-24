var rows = document.getElementsByTagName('tr');
for (var i=0;i<rows.length;i++){
	if(rows[i].className == 'datagrid-even' ){
		rows[i].onmouseover = function(){
   			this.className = 'datagrid-all';
		}
		rows[i].onmouseout = function(){
   			this.className = 'datagrid-even';
		}
	}
	if(rows[i].className == 'datagrid-odd' )
	{
		rows[i].onmouseover = function(){
   			this.className = 'datagrid-all';
		}
		rows[i].onmouseout = function(){
   			this.className = 'datagrid-odd';
		}
	}
}
