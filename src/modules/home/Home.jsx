import React from "react";
import { translate } from "react-i18next";
import PropTypes from "prop-types";
import { compose } from "recompose";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { todaySelector, valuesSelector } from "./HomeSelectors";
import * as homeActions from "./HomeActions";

const Home = ({ t, exampleAction, values, today, redirectExample }) => (
  <div>
    <h1>{t("home.title")}</h1>
    <div>
        <button onClick={redirectExample}>{t('home.redirect')}</button>
    </div>
    <div>
        <span>{t('home.today')}:{today}</span>
    </div>
    <div>
      <button onClick={() => exampleAction("--example value--")}>{t('home.button')}</button>
      <h2>{t('home.values')}</h2>
      {values.map((value, index) => (
        <div key={index}>{value}</div>
      ))}
    </div>
  </div>
);

Home.propTypes = {
  t: PropTypes.func.isRequired,
  today: PropTypes.number.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  redirectExample: PropTypes.func.isRequired,
  exampleAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  values: valuesSelector(state),
  today: todaySelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...homeActions }, dispatch);

export default compose(
  translate(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Home);
