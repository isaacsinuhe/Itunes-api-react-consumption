import * as React from 'react';
import { Table, THead, TH, TRows, TData as TD, TFoot } from './components/TableComponent';
import { Search } from './components/SearchComponent';
import axios from 'axios';
import './App.css';

type AppProps = {};
type AppState = {
  data: {
    resultCount: number;
    results: ItunesMusic[];
  };
};
class App extends React.Component <AppProps, AppState> {
  state = {
    data: {
      resultCount: 0,
      results: []
    }
  };
  
  searchMusic = async (songName: string) => {
    const { data } = await axios.get(`https://itunes.apple.com/search?term=${songName}&entity=song`);
    console.log(data);
    this.setState({data});
  }
  
  render() {
    return (
      <div className="App">
        <div className="searchBox">
          <Search
            btnText="Go"
            inputPlaceholder="Type a Search criteria"
            search={this.searchMusic}
          />
        </div>
        <div className="musicTable">
          <Table>
            <THead>
              <TH title="Artist Name"/>
              <TH title="Collection Name"/>
              <TH title="Track Name"/>
              <TH title="Sample"/>
              <TH title="Country"/>
            </THead>
            <TRows data={this.state.data.results}>
              <TD forProp="artistName"/>
              <TD avatar="artworkUrl30" forProp="collectionName"/>
              <TD linkTo="trackViewUrl" forProp="trackName"/>
              <TD audio="previewUrl" forProp=""/>
              <TD forProp="country"/>
            </TRows>
            <TFoot legend="Data comes from ITunes"/>
          </Table>
        </div>
      </div>
    );
  }
}

export default App;

interface ItunesMusic {
  artistId: number;
  artistName: string;
  artistViewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionArtistId: number;
  collectionArtistName: string;
  collectionCensoredName: string;
  collectionExplicitness: string;
  collectionId: number;
  collectionName: string;
  collectionPrice: number;
  collectionViewUrl: string;
  country: string;
  currency: string;
  discCount: number;
  discNumber: number;
  isStreamable: boolean;
  kind: string;
  previewUrl: string;
  primaryGenreName: string;
  releaseDate: string;
  trackCensoredName: string;
  trackCount: number;
  trackExplicitness: string;
  trackId: number;
  trackName: string;
  trackNumber: number;
  trackPrice: number;
  trackTimeMillis: number;
  trackViewUrl: string;
  wrapperType: string;
}