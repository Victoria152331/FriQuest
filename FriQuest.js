addEventListener("load", function() {
	db = openDatabase("friQuest", "0.1", "FriQuest", 2000);
	if(!db)
	{
		alert("Failed to connect to database.");
	
	}

	set_name()
})
function set_name(){
	let name1 = document.getElementById('name1');
	let name2 = document.getElementById('name2');
	let db_name1 = "qwe"
	let db_name2 = "qwe"
	name1.textContent = db_name1;
	name2.textContent = db_name2;
}
