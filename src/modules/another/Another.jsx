import React from "react";
import { useTranslation } from 'react-i18next';

const Another = () => {
  const { t } = useTranslation();
  return <span>{t("another.title")}</span>
};

export default Another;
