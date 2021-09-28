import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { FormControlLabel, Checkbox, ButtonGroup, Button, TextField, } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@material-ui/styles';
import { createTheme } from '@mui/material/styles';
import { orange, green } from '@mui/material/colors';
import '@fontsource/roboto';
import { Typography, Container, Paper, Grid, AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles({
	root: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		border: 0,
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white',
		height: 48,
		padding: '0 30px',
	},
});

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 16,
    }
  },
  // palette: {
	// 	primary: {
	// 		main: orange[500],
	// 	},
	// 	secondary: {
	// 		main: green[500],
	// 	},
	// },
});

function ButtonStyled() {
  const classes = useStyles()
  return (<Button className={classes.root}>Test styles</Button>)
}
function CheckBoxExample() {
  const [checked, setChecked] = useState(true)
  return (
		<div>
			<FormControlLabel
				control={
					<Checkbox
						checked={checked}
						onChange={(e) => setChecked(e.target.checked)}
						color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
            icon={<DeleteIcon />}
            checkedIcon={<SaveIcon />}
					/>
				}
        label='Testing checkbox'
			/>
		</div>
	);
}
function App() {
  return (
		<ThemeProvider theme={theme}>
			<Container maxWidth="xs">
				<div className="App">
					<header className="App-header">
						<AppBar color='secondary'>
							<Toolbar>
								<IconButton>
									<MenuIcon />
								</IconButton>
								<Typography variant="h6">MUI Theming</Typography>
								<Button color="primary">Login</Button>
							</Toolbar>
						</AppBar>
						<Typography variant="h2" component="div">
							Welcome to MUI
						</Typography>
						<Typography variant="subtitle1">
							Learn how to use Material UI
						</Typography>
						<ButtonStyled />
						<Grid container spacing={2} justifyContent="center">
							<Grid item xs={3} sm={6}>
								<Paper style={{ height: 75, width: '100%' }} />
							</Grid>
							<Grid item xs={3} sm={6}>
								<Paper style={{ height: 75, width: '100%' }} />
							</Grid>
							<Grid item xs={3} sm={6}>
								<Paper style={{ height: 75, width: '100%' }} />
							</Grid>
						</Grid>
						<TextField
							variant="filled"
							color="secondary"
							type="email"
							label="Time"
							placeholder="placeholder"
						/>
						<CheckBoxExample />
						<ButtonGroup
							size="large"
							style={{
								fontSize: 22,
							}}
							color="primary"
							variant="contained"
						>
							<Button
								endIcon={<SaveIcon />}
								onClick={() => alert('hello')}
								href="#"
							>
								Save
							</Button>
							<Button
								endIcon={<DeleteIcon />}
								onClick={() => alert('hello')}
								href="#"
								color="secondary"
							>
								Discard
							</Button>
						</ButtonGroup>
						<img src={logo} className="App-logo" alt="logo" />
					</header>
				</div>
			</Container>
		</ThemeProvider>
	);
}

export default App;
