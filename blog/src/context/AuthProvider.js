import React, {useState} from "react";
import AuthContext from "./AuthContext";

// 인증상태 관리 컨텍스트 제공(인증 관련 데이터 변경 가능)
const AuthProvider = ({ children }) => {
    const [LogginedIn, setLogginedIn] = useState(false);

    return (
        <AuthContext.Provider value = {{LogginedIn, setLogginedIn}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;