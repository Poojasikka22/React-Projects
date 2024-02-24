import React from 'react';
class Entry extends React.Component{
render(){
return(
<div className = "ui main">
<br/>
<br/>
<br/>
<br/>

<h2> Upload Details </h2>
<form className="ui form">
<div className = "field">
<label> First Name </label>
<input type = "text 30" name = "Fname" placeholder = "Fname"/>
</div>
<div className = "field">
<label> Last Name </label>
<input type = "text 30" name = "Lname" placeholder = "Lname"/>
</div>
<div className = "field">
<label> D.O.B </label>
<input type = "DOB" name = "DOB" placeholder = "DOB"/>
</div>

<button className = "ui button blue"> Submit </button>

</form>
</div>
);
}
}

export default Entry;
