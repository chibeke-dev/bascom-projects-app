import React from "react";
import {
Button,
TextField,
Grid,
Paper,
AppBar,
Typography,
Toolbar,
Link,
} from "@material-ui/core";
import {withRouter} from 'react-router';


class Login extends React.Component {
constructor(props) {
super(props);
this.state = { email: "", password:""};
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(event) {
this.setState({ email: event.state.email, password: event.state.password });
}
handleSubmit(event) {
event.preventDefault();
if (this.state.email !== undefined && this.state.password  !== undefined) {
this.props.history.push("/home");
} else {
alert('Incorrect Credentials!');
}
}
render() {
return (
<div>
<AppBar position="static" alignitems="center" color="#0099ff">
<Toolbar>
<Grid container justify="center" wrap="wrap">
<Grid item>
{/* <Typography variant="h6">{BRAND_NAME}</Typography> */}
</Grid>
</Grid>
</Toolbar>
</AppBar>
<Grid container spacing={0} justify="center" direction="row">
<Grid item>
<Grid
container
direction="column"
justify="center"
spacing={2}
className="login-form"
>
<Paper
variant="elevation"
elevation={2}
className="login-background"
>
<Grid item>
<Typography component="h1" variant="h5">
BAS<span style={{color:"#0099ff"}}>COM</span>
</Typography>
</Grid>
<Grid item>
<form onSubmit={this.handleSubmit}>
<Grid container direction="column" spacing={2}>
<Grid item>
<TextField
type="email"
placeholder="Email"
fullWidth
name="email"
variant="outlined"
value={this.state.email}
onChange={(event) =>
this.setState({
[event.target.name]: event.target.value,
})
}
required
autoFocus
/>
</Grid>
<Grid item>
<TextField
type="password"
placeholder="Password"
fullWidth
name="password"
variant="outlined"
value={this.state.password}
onChange={(event) =>
this.setState({
[event.target.name]: event.target.value,
})
}
required
/>
</Grid>
<Grid item>
<Button
variant="contained"
type="submit"
className="button-block"
style={{backgroundColor:'#0099ff', color:'#fff'}}
>
Login
</Button>
</Grid>
</Grid>
</form>
</Grid>
<Grid item>
<Link href="#" variant="body2">
Forgot Password?
</Link>
</Grid>
</Paper>
</Grid>
</Grid>
</Grid>
</div>
);
}
}
export default withRouter (Login);