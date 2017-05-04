import React, {Component} from 'react';
import styles from './styles';

class Zone extends Component {
  render() {
    const style = styles.zone;
    return (
      <div style={style.container} >
        <h2 style={style.header2} >
          <a style={style.zoneLink} href="#">{this.props.currentZone.name}</a>
        </h2>
        <span className='detail' >Zip: {this.props.currentZone.zipCodes[0]}</span><br/>
        <span className='detail' >Comments: {this.props.currentZone.numComments}</span>
      </div>
    );
  }
}

export default Zone;