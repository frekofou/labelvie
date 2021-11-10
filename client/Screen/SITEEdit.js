import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Header,
  Title,
  Container,
  Content,
  Body,
  Button,
  Text,
  Icon,
  Right,
  Left,
  Form,
  ListItem,
  Item,
  Label,
  Input,
} from "native-base";
import SecurityService from "../security/SecurityService";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Custom Actions


// START IMPORT ACTIONS
import SITEActions from "../redux/actions/SITEActions";

// END IMPORT ACTIONS

/** APIs

* actionsSITE.create
*	@description CRUD ACTION create
*
* actionsSITE.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsSITE.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/


class SITEEdit extends Component {
  
  // Init site
  constructor(props) {
    super(props);
    this.state = {
      site: {},
      authorized: false
    };
  }

  // Load data on start
  componentWillMount() {

    this.props.navigation.addListener("willFocus", async () => { 
      // Check security
      if (await SecurityService.isAuth([  ])) {
        this.setState({ authorized: true });
      } else {
        this.props.navigation.navigate("Login", {
          showError: "Not authorized"
        });
        return;
      }


      // Load data
      const itemId = this.props.navigation.getParam("id", "new");
      if (itemId !== "new") {
        this.props.actionsSITE.loadSITE(itemId);
      } else {
        this.setState({
          site: {}
        });
      }
      
    });
  }

  // Clear reducer
  componentWillUnmount() {
    this.setState({
      site: {}
    });
    this.props.actionsSITE.reset();
  }

  // Insert props site in state
  componentWillReceiveProps(props) {
    this.setState({
      site: props.site
    });
  }

  // Save data
  save() {
    // Validation
    let errors = {};
    
    if (!this.state.site.NAME || this.state.site.NAME.trim() === "") {
      errors.NAME = true;
    }
    

    this.setState({ errors: errors });
    if (Object.keys(errors).length > 0) {
      return;
    }

    // Save
    if (this.state.site._id) {
      // Edit
      this.props.actionsSITE.saveSITE(this.state.site).then(data => {
        this.props.navigation.navigate("SITEList");
      });
    } else {
      // Create
      this.props.actionsSITE.createSITE(this.state.site).then(data => {
        this.props.navigation.navigate("SITEList");
      });
    }
  }

  // Show content
  render() { 

    // Check security
    if (!this.state.authorized) {
      return null;
    }

    return (
      <Container>
        <Header>
          <Left>
            <Button
            transparent
            onPress={() => this.props.navigation.goBack()}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Detail SITE</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.save()}>
              <Text>Save</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Form>
            
            <Item floatingLabel {...(this.state.errors && this.state.errors.NAME === true ? { style: styles.validatorItem } : {})}>
              <Label
                {...(this.state.errors && this.state.errors.NAME === true ? { style: styles.validatorLabel } : {})}>
                NAME *
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.site, { NAME: value }))
                }
                value={this.state.site.NAME && this.state.site.NAME.toString()}
              />
            </Item>
            {this.state.errors && this.state.errors.NAME === true && (
              <Text style={styles.validatorMessage}>Value is required</Text>
            )}
          



          </Form>
        </Content>
      </Container>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsSITE: bindActionCreators(SITEActions, dispatch),
  };
};

// Validate types
SITEEdit.propTypes = { 
  actionsSITE: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    site: state.SITEEditReducer.site
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SITEEdit);

const styles = StyleSheet.create({
  validatorItem: { borderColor: "red" },
  validatorLabel: { color: "red" },
  validatorMessage: { color: "red", marginLeft: 15, marginTop: 5 }
});
