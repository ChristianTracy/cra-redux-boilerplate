import React from "react";
import { useTranslation } from 'react-i18next';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import logo from "../../assets/cra-redux-boilerplate-logo.svg";
import { todaySelector, valuesSelector } from "./HomeSelectors";
import * as homeActions from "./HomeActions";

const styles = {
  header: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center"
  },
  titleContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#764ABB",
    color: "#ffffff",
    padding: "10px"
  },
  title: {
    margin: 0
  },
  buttonContainer: {
    borderBottom: "2px solid #000000",
    marginBottom: "20px"
  },
  button: {
    border: "none",
    backgroundColor: "#000000",
    color: "#ffffff",
    width: "150px",
    height: "50px",
    borderRadius: "10px",
    outline: "none",
    cursor: "pointer"
  },
  content: {
    padding: "40px"
  },
  container: {
    marginBottom: "20px"
  },
  dateText: {
    fontSize: "20px"
  }
};

const Home = ({ exampleAction, values, today, redirectExample }) => {
  const { t } = useTranslation();
  return (
    <div>
      <div style={styles.header}>
        <img src={logo} alt="logo" />
        <div style={styles.titleContainer}>
          <h2 style={styles.title}>{t("home.title")}</h2>
        </div>
      </div>
      <div style={styles.content}>
        <div style={styles.container}>
          <button onClick={redirectExample} style={styles.button}>
            {t("home.redirect")}
          </button>
        </div>
        <div style={styles.container}>
          <span style={styles.dateText}>
            {t("home.today")} => {today}
          </span>
        </div>
        <div style={styles.container}>
          <button
            onClick={() => exampleAction("--example value--")}
            style={styles.button}
          >
            {t("home.button")}
          </button>
          <h2>{t("home.values")}</h2>
          <ul>
            {values.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
};

Home.propTypes = {
  today: PropTypes.number.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  redirectExample: PropTypes.func.isRequired,
  exampleAction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  values: valuesSelector(state),
  today: todaySelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...homeActions }, dispatch);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Home);
