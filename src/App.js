 
import React from 'react';
import { Grid } from '@material-ui/core';
import  { SearchBar, VideoDetail, VideoList }  from './components/index';
import youtube from './api/youtube';



 class App extends React.Component {
  constructor(props){ 
    super(props)
    this.state = {
        videos: [],
        selectedVideo: null,
    }
  }
    componentDidMount(){
        this.handleSubmit('this is javaScript course')
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

   

    handleSubmit = async (searchTerm) => {
     const response = await youtube.get('/search',{  
                params: {
                
                    q: searchTerm,
                  }
            }); 

        console.log(response.data.items); 

        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0]})

    } 

    
     render() {
        const { selectedVideo, videos } = this.state;
         return(
             <Grid justify='center' container spacing={5}>
                 <Grid item xs={12}>
                     <Grid container spacing={10}>
                        <Grid item xs={12}>
                           <SearchBar onFormSubmit={this.handleSubmit} /> 
                        </Grid>
                        <Grid item xs={8} style={{marginLeft:'80px'}}>
                           <VideoDetail video={selectedVideo} />
                           
                        </Grid>
                         <Grid item xs={3}>
                            { <VideoList videos={videos} onVideoSelect={this.onVideoSelect} /> }
                            
                         </Grid>

                     </Grid>
                 </Grid>

             </Grid>
         )
     }

 };


 export default App;