import React from "react";
import { translate } from "react-i18next";
import PropTypes from "prop-types";

const Another = ({ t }) => <span>{t("another.title")}</span>;

Another.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate()(Another);
