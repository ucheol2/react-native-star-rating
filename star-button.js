// React and react native imports
import React, {
  Component,
  PropTypes,
} from 'react';
import { View, TouchableOpacity } from 'react-native';

// Third party imports
//import Button from 'react-native-button';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import EvilIconsIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import FoundationIcons from 'react-native-vector-icons/Foundation';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import MaterialIconsIcons from 'react-native-vector-icons/MaterialIcons';
import OcticonsIcons from 'react-native-vector-icons/Octicons';
import ZocialIcons from 'react-native-vector-icons/Zocial';

const iconSets = {
  Entypo: EntypoIcons,
  EvilIcons: EvilIconsIcons,
  FontAwesome: FontAwesomeIcons,
  Foundation: FoundationIcons,
  Ionicons: IoniconsIcons,
  MaterialIcons: MaterialIconsIcons,
  Octicons: OcticonsIcons,
  Zocial: ZocialIcons,
};

class StarButton extends Component {

  constructor(props) {
    super(props);

    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress(half) {
    const { rating } = this.props;
    this.props.onStarButtonPress(half ? rating-0.5 : rating);
  }

  render() {
    const Icon = iconSets[this.props.iconSet];
		const buttonStyle = {
			position: 'absolute',
			top: 0,
		}

		return (
			<View>
				<Icon
					name={this.props.starIconName}
					size={this.props.starSize}
					color={this.props.starColor}
					style={this.props.starStyle}
				/>
				<TouchableOpacity
					activeOpacity={0.20}
					disabled={this.props.disabled}
					onPress={() => this.onButtonPress(true)}
					containerStyle={this.props.buttonStyle}
					style={[buttonStyle, {
						left: 0,
						height: this.props.starSize,
						width: this.props.starSize/2,
					}]}
				/>
				<TouchableOpacity
					activeOpacity={0.20}
					disabled={this.props.disabled}
					onPress={() => this.onButtonPress(false)}
					containerStyle={this.props.buttonStyle}
					style={[buttonStyle, {
						right: 0,
						height: this.props.starSize,
						width: this.props.starSize/2,
					}]}
				/>
			</View>
		);

  }
}

StarButton.propTypes = {
  disabled: PropTypes.bool,
  rating: PropTypes.number,
  onStarButtonPress: PropTypes.func,
  iconSet: PropTypes.string,
  starSize: PropTypes.number,
  starIconName: PropTypes.string,
  starColor: PropTypes.string,
  starStyle: View.propTypes.style,
  buttonStyle: View.propTypes.style,
};

export default StarButton;
