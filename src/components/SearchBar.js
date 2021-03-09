
import React from 'react'
import { Paper, TextField,} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


        class SearchBar extends React.Component {
            state = {
                searchTerm: '',
        
            } 
            handleChange =(event) => 
                //console.log(event.target.value
                 this.setState({ searchTerm: event.target.value })
            
        
            handleSubmit = (event) => {
                const { searchTerm } = this.state;
                const { onFormSubmit } = this.props;
        
                onFormSubmit(searchTerm);
                event.preventDefault();
        
            }  
        
            render(){  
                return(

                    <Paper elevation={20} style={{padding: '2px 4px',
                    display: 'flex',
                    margin: '10px auto',
                    alignItems: 'center',
                    width: 350}}>
                        <form
                             onSubmit={this.handleSubmit}>
                         <TextField
                            style={{margin: '5px',
                                flex: 1,}}
                            placeholder="Search Youtube Video"
                            inputProps={{ 'aria-label': 'search youtube video' }}
                         />
                        <IconButton type="submit" style={{padding: 10, marginLeft:'3px', alignItems: 'center',}} aria-label="search">
                            <SearchIcon style={{marginLeft: '80px'}} />
                        </IconButton>
                     </form>   
                    </Paper>  
                )
            }
        }
        
        
         export default SearchBar; 



        