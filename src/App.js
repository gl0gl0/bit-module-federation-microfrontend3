import React from 'react';

const ExploreHotel = React.lazy(() => import('app1/App'));
const BookRoom = React.lazy(() => import('app2/App'));

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 1};
    this.bookTheRoom = this.bookTheRoom.bind(this);
  }

  bookTheRoom() {
    this.setState({view: 2});
  }

  render() {
    const {view} = this.state;
    let component = (
      <React.Suspense fallback='Loading app1'>
        <ExploreHotel onClick={this.bookTheRoom} />
      </React.Suspense>
    );
    if (view === 2) {
      component = (
        <React.Suspense fallback='Loading app2'>
          <BookRoom />
        </React.Suspense>
      );
    }
    return (
      <>
      <h1>This is app3</h1>
        {component}
      </>
    );
  }
}
