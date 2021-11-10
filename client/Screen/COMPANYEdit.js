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
  Picker,
} from "native-base";
import SecurityService from "../security/SecurityService";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Custom Actions


// START IMPORT ACTIONS
import COMPANYActions from "../redux/actions/COMPANYActions";

// END IMPORT ACTIONS

/** APIs

* actionsCOMPANY.create
*	@description CRUD ACTION create
*
* actionsCOMPANY.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsCOMPANY.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsUser.list
*	@description CRUD ACTION list
*

**/


class COMPANYEdit extends Component {
  
  // Init company
  constructor(props) {
    super(props);
    this.state = {
      company: {},
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
        this.props.actionsCOMPANY.loadCOMPANY(itemId);
      } else {
        this.setState({
          company: {}
        });
      }
      
      this.props.actionsUser.loadUserList();
    });
  }

  // Clear reducer
  componentWillUnmount() {
    this.setState({
      company: {}
    });
    this.props.actionsCOMPANY.reset();
  }

  // Insert props company in state
  componentWillReceiveProps(props) {
    this.setState({
      company: props.company
    });
  }

  // Save data
  save() {
    // Validation
    let errors = {};
    
    if (!this.state.company.ADMIN || this.state.company.ADMIN.trim() === "") {
      errors.ADMIN = true;
    }
    
    if (!this.state.company.NAME || this.state.company.NAME.trim() === "") {
      errors.NAME = true;
    }
    

    this.setState({ errors: errors });
    if (Object.keys(errors).length > 0) {
      return;
    }

    // Save
    if (this.state.company._id) {
      // Edit
      this.props.actionsCOMPANY.saveCOMPANY(this.state.company).then(data => {
        this.props.navigation.navigate("COMPANYList");
      });
    } else {
      // Create
      this.props.actionsCOMPANY.createCOMPANY(this.state.company).then(data => {
        this.props.navigation.navigate("COMPANYList");
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
            <Title>Detail COMPANY</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.save()}>
              <Text>Save</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Form>
            
            <Item floatingLabel {...(this.state.errors && this.state.errors.ADMIN === true ? { style: styles.validatorItem } : {})}>
              <Label
                {...(this.state.errors && this.state.errors.ADMIN === true ? { style: styles.validatorLabel } : {})}>
                ADMIN *
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.company, { ADMIN: value }))
                }
                value={this.state.company.ADMIN && this.state.company.ADMIN.toString()}
              />
            </Item>
            {this.state.errors && this.state.errors.ADMIN === true && (
              <Text style={styles.validatorMessage}>Value is required</Text>
            )}
          
            
            <Item floatingLabel {...(this.state.errors && this.state.errors.NAME === true ? { style: styles.validatorItem } : {})}>
              <Label
                {...(this.state.errors && this.state.errors.NAME === true ? { style: styles.validatorLabel } : {})}>
                NAME *
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.company, { NAME: value }))
                }
                value={this.state.company.NAME && this.state.company.NAME.toString()}
              />
            </Item>
            {this.state.errors && this.state.errors.NAME === true && (
              <Text style={styles.validatorMessage}>Value is required</Text>
            )}
          

          {/* RELATIONS */}
          
          {/* Relation 1:m COMPANY_OWNER with User */}
          
          <Item stackedLabel>
            <Label >
              COMPANY_OWNER
            </Label>
            <Picker
              mode="dropdown"
              iosHeader="Select a value"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              selectedValue={this.state.company.COMPANY_OWNER }
              value={this.state.company.COMPANY_OWNER }
              onValueChange={value =>
                this.setState(Object.assign(this.state.company, { COMPANY_OWNER: value }))
              }
            >
              {this.props.listUser &&
                this.props.listUser.map(row => (
                  <Picker.Item label={row._id} value={row._id} key={row._id}>
                    {row._id}
                  </Picker.Item>
                ))}
            </Picker>
          </Item>
          
          

          </Form>
        </Content>
      </Container>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsCOMPANY: bindActionCreators(COMPANYActions, dispatch),
  };
};

// Validate types
COMPANYEdit.propTypes = { 
  actionsCOMPANY: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    company: state.COMPANYEditReducer.company,
    listUser: state.COMPANYEditReducer.listUser
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(COMPANYEdit);

const styles = StyleSheet.create({
  validatorItem: { borderColor: "red" },
  validatorLabel: { color: "red" },
  validatorMessage: { color: "red", marginLeft: 15, marginTop: 5 }
});
