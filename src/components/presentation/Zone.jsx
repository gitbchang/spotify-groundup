import React, {Component} from 'react';
import styles from './styles';

class Zone extends Component {

  onSelectTitle = (event) => {
    event.preventDefault();
    // this function goes back to the container
    console.log("testing z index", this.props.zoneIndex);
    this.props.select(this.props.zoneIndex);
  }

  render() {
    const style = styles.zone;
    const currentZone = this.props.currentZone;
    const title = (this.props.isSelected) ? <a style={style.zoneLink} href="#">{this.props.currentZone.name}</a> : <a href="#">{this.props.currentZone.name}</a>;

    let zipString = '';
    if (currentZone.zipCodes) {
      if (currentZone.zipCodes.length > 1) {
        zipString = currentZone
          .zipCodes
          .join(', ');
      } else {
        zipString = currentZone
          .zipCodes
          .join('');
      }
    }

    return (
      <div style={style.container}>
        <h2 onClick={this.onSelectTitle} style={style.header2}>
          {title}
        </h2>
        <span className='detail'>Zip: {zipString}</span><br/>
        <span className='detail'>Comments: {this.props.currentZone.numComments}</span>
      </div>
    );
  }
}

export default Zone;