import LoginView from './LoginView';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        imageSource: state.imageSource,
    };
}

export default connect(mapStateToProps)(LoginView);
