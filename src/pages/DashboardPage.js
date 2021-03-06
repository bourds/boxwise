import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppFrame from "../components/AppFrame";
import AddBoxDialog from "../containers/components/AddBoxDialog";
import Page from "../components/Page";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import {
  intlShape,
  injectIntl,
  FormattedMessage,
  defineMessages
} from "react-intl";

const styles = theme => ({
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: theme.spacing.unit * 3
  })
});

const messages = defineMessages({
  headline: {
    id: "dashboard.headline",
    defaultMessage: "Things to do"
  },
  create_box: {
    id: "dashboard.create_box",
    defaultMessage: "Make a box"
  },
  find_box: {
    id: "dashboard.find_box",
    defaultMessage: "Find boxes"
  }
});

class DashboardPage extends React.Component {
  state = {
    addBoxDialogOpen: false
  };

  render() {
    const { classes } = this.props;

    return (
      <AppFrame title="Dashboard">
        <Page>
          <AddBoxDialog
            open={this.state.addBoxDialogOpen}
            onClose={() => this.setState({ addBoxDialogOpen: false })}
          />
          <Paper className={classes.paper}>
            <Typography variant="headline" paragraph={true}>
              <FormattedMessage {...messages.headline} />
            </Typography>
            <Button
              variant="raised"
              color="secondary"
              onClick={() => this.setState({ addBoxDialogOpen: true })}
            >
              <FormattedMessage {...messages.create_box} />
            </Button>
            <br />
            <br />
            <Button
              variant="raised"
              color="secondary"
              component={Link}
              to="/boxes"
            >
              <FormattedMessage {...messages.find_box} />
            </Button>
          </Paper>
        </Page>
      </AppFrame>
    );
  }
}

DashboardPage.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(DashboardPage));
