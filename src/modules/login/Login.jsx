import React from "react";
import { useTranslation } from 'react-i18next';

const Login = () => {
    const { t } = useTranslation();
    return <span>{t("login.title")}</span>
};

export default Login;
